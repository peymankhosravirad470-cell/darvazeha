/**
 * Touch joystick — floating origin, returns a normalized vector through a
 * callback (zero allocation per move). Vanilla port of the React component.
 */

export function createJoystick(
  zone: HTMLElement,
  knob: HTMLElement,
  onVector: (x: number, y: number) => void,
): { destroy(): void } {
  let active = false;
  let originX = 0;
  let originY = 0;
  let hideTimer = 0;
  const MAX_R = 52;

  const setKnob = (dx: number, dy: number) => {
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  };

  const down = (e: PointerEvent) => {
    active = true;
    zone.classList.add("active");
    window.clearTimeout(hideTimer);
    originX = e.clientX;
    originY = e.clientY;
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
  };

  const move = (e: PointerEvent) => {
    if (!active) return;
    let dx = e.clientX - originX;
    let dy = e.clientY - originY;
    const d = Math.hypot(dx, dy);
    if (d > MAX_R) {
      dx = (dx / d) * MAX_R;
      dy = (dy / d) * MAX_R;
    }
    setKnob(dx, dy);
    onVector(dx / MAX_R, -dy / MAX_R); // screen up = forward
  };

  const up = () => {
    if (!active) return;
    active = false;
    setKnob(0, 0);
    onVector(0, 0);
    hideTimer = window.setTimeout(() => zone.classList.remove("active"), 600);
  };

  zone.addEventListener("pointerdown", down);
  zone.addEventListener("pointermove", move);
  zone.addEventListener("pointerup", up);
  zone.addEventListener("pointercancel", up);

  return {
    destroy() {
      window.clearTimeout(hideTimer);
      zone.removeEventListener("pointerdown", down);
      zone.removeEventListener("pointermove", move);
      zone.removeEventListener("pointerup", up);
      zone.removeEventListener("pointercancel", up);
    },
  };
}
