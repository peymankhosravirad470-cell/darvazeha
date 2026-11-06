/* VIVA live — لایهٔ مشترک realtime کلاینت.
 *
 * احراز هویت: initData بله → /api/v1/auth/bale → توکن نشست (فقط در حافظه،
 * هرگز در localStorage نوشته نمی‌شود — سرور مرجع اصلی داده است).
 * WebSocket: بلیت یک‌مصرف ۶۰ ثانیه‌ای؛ اتصال مجدد خودکار با عقب‌نشینی
 * نمایی و fallback به polling وضعیت REST هنگام قطعی.
 */
(function () {
  "use strict";

  const state = {
    token: null,
    player: null,
    ws: null,
    roomId: null,
    handlers: { state: [], event: [], status: [] },
    wsAttempts: 0,
    pollTimer: null,
    pingTimer: null,
    closedByUs: false,
  };

  function apiBase() {
    return "/api/v1";
  }

  async function readInitData() {
    if (window.__VIVA_DEV_INITDATA__) return window.__VIVA_DEV_INITDATA__;
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg && typeof tg.initData === "string" && tg.initData.length > 0) return tg.initData;
    return null;
  }

  async function ensureLogin() {
    if (state.token) return state;
    const initData = await readInitData();
    if (!initData) {
      throw new Error("outside_bale");
    }
    const res = await fetch(apiBase() + "/auth/bale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ init_data: initData }),
    });
    if (!res.ok) throw new Error("auth_failed_" + res.status);
    const data = await res.json();
    state.token = data.access_token;
    state.player = data.player;
    return state;
  }

  async function api(path, opts) {
    opts = opts || {};
    await ensureLogin();
    const res = await fetch(apiBase() + path, {
      method: opts.method || "GET",
      headers: Object.assign(
        { "Content-Type": "application/json", Authorization: "Bearer " + state.token },
        opts.headers || {}
      ),
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
    if (res.status === 401) {
      state.token = null; // نشست منقضی — دوباره ورود
      return api(path, opts);
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error((data && data.detail) || "http_" + res.status);
      err.status = res.status;
      throw err;
    }
    return data;
  }

  function on(kind, fn) {
    state.handlers[kind].push(fn);
  }
  function emit(kind, payload) {
    state.handlers[kind].forEach((fn) => {
      try { fn(payload); } catch (e) { console.error("handler", kind, e); }
    });
  }

  // --- WebSocket ---------------------------------------------------------

  async function connectRoom(roomId) {
    state.roomId = roomId;
    state.closedByUs = false;
    state.wsAttempts = 0;
    stopPolling();
    await openSocket();
  }

  async function openSocket() {
    if (!state.roomId) return;
    setStatus("connecting");
    let ticket;
    try {
      const t = await api("/live/rooms/" + state.roomId + "/ticket", { method: "POST" });
      ticket = t.ticket;
    } catch (e) {
      scheduleReconnect();
      return;
    }
    const proto = location.protocol === "https:" ? "wss" : "ws";
    let ws;
    try {
      ws = new WebSocket(proto + "://" + location.host + "/ws/viva?ticket=" + encodeURIComponent(ticket));
    } catch (e) {
      scheduleReconnect();
      return;
    }
    state.ws = ws;

    ws.onmessage = (m) => {
      let msg;
      try { msg = JSON.parse(m.data); } catch (e) { return; }
      if (msg.t === "state") emit("state", msg.state);
      else if (msg.t === "event") emit("event", msg.event);
      else if (msg.t === "error") emit("event", { type: "server_error", msg: msg.msg });
    };
    ws.onopen = () => {
      state.wsAttempts = 0;
      setStatus("online");
      if (state.pingTimer) clearInterval(state.pingTimer);
      state.pingTimer = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ t: "ping" }));
      }, 20000);
    };
    ws.onclose = (ev) => {
      if (state.pingTimer) { clearInterval(state.pingTimer); state.pingTimer = null; }
      if (state.closedByUs) return;
      if (ev.code === 4412) return; // دستگاه دیگر جایگزین شد
      setStatus("offline");
      scheduleReconnect();
    };
  }

  function scheduleReconnect() {
    if (state.closedByUs || !state.roomId) return;
    state.wsAttempts += 1;
    startPolling(); // تا برقراری دوباره، وضعیت از REST می‌آید
    if (state.wsAttempts > 6) return; // پس از ۶ تلاش فقط polling
    const delay = Math.min(8000, 800 * Math.pow(2, state.wsAttempts - 1));
    setTimeout(() => { if (!state.closedByUs) openSocket(); }, delay);
  }

  async function pollOnce() {
    if (!state.roomId) return;
    try {
      const data = await api("/live/rooms/" + state.roomId);
      emit("state", data.room);
    } catch (e) { /* اتاق ممکن است بسته شده باشد */ }
  }

  function startPolling() {
    if (state.pollTimer) return;
    state.pollTimer = setInterval(pollOnce, 3000);
    pollOnce();
  }
  function stopPolling() {
    if (state.pollTimer) { clearInterval(state.pollTimer); state.pollTimer = null; }
  }

  function disconnect() {
    state.closedByUs = true;
    if (state.ws) { try { state.ws.close(); } catch (e) {} state.ws = null; }
    stopPolling();
    if (state.pingTimer) { clearInterval(state.pingTimer); state.pingTimer = null; }
  }

  function action(obj) {
    if (state.ws && state.ws.readyState === WebSocket.OPEN) {
      state.ws.send(JSON.stringify({ t: "action", action: obj }));
      return true;
    }
    return false;
  }

  function refresh() {
    // درخواست snapshot تازهٔ شخصی‌سازی‌شده از سرور (حرکت مجاز، نقش، فاز)
    if (state.ws && state.ws.readyState === WebSocket.OPEN) {
      state.ws.send(JSON.stringify({ t: "state" }));
    }
  }

  function setStatus(s) { emit("status", s); }

  // --- rooms REST ---------------------------------------------------------

  const roomsApi = {
    create: (game, capacity, config) => api("/live/rooms", { method: "POST", body: { game, capacity, config: config || {} } }),
    list: (game) => api("/live/rooms?game=" + encodeURIComponent(game)),
    join: (id) => api("/live/rooms/" + id + "/join", { method: "POST" }),
    leave: (id) => api("/live/rooms/" + id + "/leave", { method: "POST" }),
    start: (id) => api("/live/rooms/" + id + "/start", { method: "POST" }),
    state: (id) => api("/live/rooms/" + id),
  };

  window.Viva = {
    ensureLogin, api, on, connectRoom, disconnect, action, refresh, rooms: roomsApi,
    me: () => state.player,
  };
})();
