/* گزارش فاصلهٔ محصول از طرح اصلی — فارسی RTL (docx-js)
 * قواعد: recipe R1 (کاور) + ۳ سکشن (کاور/فهرست Roman/بدنه Arabic) + TOC + جداول RTL
 */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  TableOfContents, SectionType, TableLayoutType,
} = require("docx");
const fs = require("fs");
const path = require("path");

const ROOT = "/home/z/my-project";
const A = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/report_assets.json"), "utf8"));
const OUT = path.join(ROOT, "download", "2026-11-04-gap-report-targon-fa.docx");

/* ── پالت DS-1 (Deep Sea) ── */
const PAL = {
  bg: "0B1C2C", accent: "529286",
  cover: { titleColor: "FFFFFF", subtitleColor: "B0B8C0", metaColor: "90989F", footerColor: "687078" },
  table: { headerBg: "529286", headerText: "FFFFFF", accentLine: "529286", innerLine: "BECFCC", surface: "E8ECEB" },
  h1: "0B1C2C", h2: "1C4A42", body: "000000", secondary: "687078",
};
const FONT = { ascii: "Tahoma", hAnsi: "Tahoma", cs: "Tahoma", eastAsia: "Tahoma" };

/* ── کمک‌سازها ── */
function run(text, o = {}) {
  const size = o.size || 24;
  return new TextRun({
    text, font: FONT, size, sizeComplexScript: size,
    bold: !!o.bold, boldComplexScript: !!o.bold,
    italics: !!o.italics, color: o.color || PAL.body, rightToLeft: true,
  });
}
function para(text, o = {}) {
  return new Paragraph({
    bidirectional: true,
    alignment: o.align || AlignmentType.JUSTIFIED,
    spacing: { line: 312, after: o.after != null ? o.after : 140, before: o.before || 0 },
    children: Array.isArray(text) ? text : [run(text, o)],
    heading: o.heading, keepNext: !!o.keepNext,
    border: o.border, indent: o.indent,
  });
}
function h1(text) {
  return new Paragraph({
    bidirectional: true, heading: HeadingLevel.HEADING_1, alignment: AlignmentType.START,
    spacing: { before: 380, after: 160, line: 312 },
    children: [run(text, { size: 30, bold: true, color: PAL.h1 })],
  });
}
function h2(text) {
  return new Paragraph({
    bidirectional: true, heading: HeadingLevel.HEADING_2, alignment: AlignmentType.START,
    spacing: { before: 280, after: 120, line: 312 },
    children: [run(text, { size: 26, bold: true, color: PAL.h2 })],
  });
}
let figNo = 0;
function figure(key, captionText, widthPx) {
  figNo += 1;
  const a = A[key];
  const w = widthPx, h = Math.round(w * a.h / a.w);
  const type = a.p.toLowerCase().endsWith(".jpg") ? "jpg" : "png";
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { before: 160, after: 60, line: 312 }, keepNext: true,
      children: [new ImageRun({ data: fs.readFileSync(path.join(ROOT, a.p)), transformation: { width: w, height: h }, type })],
    }),
    new Paragraph({
      bidirectional: true, alignment: AlignmentType.CENTER, spacing: { after: 200, line: 312 },
      children: [run(`شکل ${faNum(figNo)} — ${captionText}`, { size: 18, color: PAL.secondary })],
    }),
  ];
}
let tblNo = 0;
function tblCaption(text) {
  tblNo += 1;
  return new Paragraph({
    bidirectional: true, alignment: AlignmentType.START, keepNext: true, spacing: { before: 160, after: 80, line: 312 },
    children: [run(`جدول ${faNum(tblNo)} — ${text}`, { size: 20, bold: true, color: PAL.h2 })],
  });
}
/* جدول RTL: ستون اول = راست‌ترین */
function tbl(headers, rows, widths) {
  const mk = (t, isHead) => new TableCell({
    children: [new Paragraph({
      bidirectional: true, alignment: AlignmentType.START, spacing: { line: 312 },
      children: [run(t, { size: isHead ? 20 : 19, bold: isHead, color: isHead ? PAL.table.headerText : PAL.body })],
    })],
    shading: { type: ShadingType.CLEAR, fill: isHead ? PAL.table.headerBg : "FFFFFF" },
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    width: { size: widths[isHead ? headers.indexOf(t) : 0], type: WidthType.PERCENTAGE },
  });
  const widthsOf = (i) => widths[i];
  const headRow = new TableRow({
    tableHeader: true, cantSplit: true,
    children: headers.map((t, i) => new TableCell({
      children: [new Paragraph({
        bidirectional: true, alignment: AlignmentType.START, spacing: { line: 312 },
        children: [run(t, { size: 20, bold: true, color: PAL.table.headerText })],
      })],
      shading: { type: ShadingType.CLEAR, fill: PAL.table.headerBg },
      margins: { top: 70, bottom: 70, left: 110, right: 110 },
      width: { size: widthsOf(i), type: WidthType.PERCENTAGE },
    })),
  });
  const dataRows = rows.map((r, ri) => new TableRow({
    cantSplit: true,
    children: r.map((t, i) => new TableCell({
      children: [new Paragraph({
        bidirectional: true, alignment: AlignmentType.START, spacing: { line: 312 },
        children: [run(t, { size: 19 })],
      })],
      shading: { type: ShadingType.CLEAR, fill: ri % 2 === 1 ? PAL.table.surface : "FFFFFF" },
      margins: { top: 70, bottom: 70, left: 110, right: 110 },
      width: { size: widthsOf(i), type: WidthType.PERCENTAGE },
    })),
  }));
  return new Table({
    visuallyRightToLeft: true,
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: PAL.table.accentLine },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: PAL.table.accentLine },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: PAL.table.innerLine },
      insideVertical: { style: BorderStyle.NONE },
    },
    rows: [headRow, ...dataRows],
  });
}
function faNum(n) {
  const d = "۰۱۲۳۴۵۶۷۸۹";
  return String(n).split("").map(c => d[+c] != null && c >= "0" && c <= "9" ? d[+c] : c).join("");
}
const mobileRow = (keys, captions, w = 250) => {
  figNo += keys.length - 1 + 1; // تصاویر داخل ردیف؛ شماره‌ها پیوسته
  const cells = keys.map((k, i) => {
    const a = A[k];
    const h = Math.round(w * a.h / a.w);
    const type = a.p.toLowerCase().endsWith(".jpg") ? "jpg" : "png";
    return new TableCell({
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER, spacing: { after: 60 },
          children: [new ImageRun({ data: fs.readFileSync(path.join(ROOT, a.p)), transformation: { width: w, height: h }, type })],
        }),
        new Paragraph({
          bidirectional: true, alignment: AlignmentType.CENTER, spacing: { line: 312 },
          children: [run(`شکل ${faNum(figNo - keys.length + 1 + i)} — ${captions[i]}`, { size: 16, color: PAL.secondary })],
        }),
      ],
      margins: { left: 60, right: 60 },
      width: { size: Math.floor(100 / keys.length), type: WidthType.PERCENTAGE },
    });
  });
  return [new Table({
    visuallyRightToLeft: true, width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE },
    },
    rows: [new TableRow({ cantSplit: true, children: cells })],
  }), para("", { after: 60 })];
};

/* ── کاور R1 (سازگار RTL) ── */
const NB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: NB, bottom: NB, left: NB, right: NB };
const allNoBorders = { ...noBorders, insideHorizontal: NB, insideVertical: NB };
function calcTitleLayout(title, maxW, prefPt = 40, minPt = 24) {
  const cw = (pt) => pt * 14; // میانگین پهنای نویسهٔ فارسی
  let pt = prefPt, lines;
  const split = (t, cpl) => {
    if (t.length <= cpl) return [t];
    const out = []; let rem = t;
    while (rem.length > cpl) {
      let br = -1;
      for (let i = cpl; i >= Math.floor(cpl * 0.6); i--) if (rem[i - 1] === " ") { br = i; break; }
      if (br === -1) br = cpl;
      out.push(rem.slice(0, br).trim()); rem = rem.slice(br).trim();
    }
    if (rem) out.push(rem);
    if (out.length > 1 && out[out.length - 1].length <= 2) { const l = out.pop(); out[out.length - 1] += " " + l; }
    return out;
  };
  while (pt >= minPt) {
    const cpl = Math.floor(maxW / cw(pt));
    lines = split(title, cpl);
    if (lines.length <= 3) break;
    pt -= 2;
  }
  return { titlePt: pt, titleLines: lines };
}
function buildCoverR1(cfg) {
  const P = cfg.palette, pad = 900;
  const { titlePt, titleLines } = calcTitleLayout(cfg.title, 11906 - pad * 2 - 300, 40, 24);
  const titleSize = titlePt * 2;
  const SAFETY = 1200, usable = 16838 - SAFETY;
  const contentH = titleLines.length * (titlePt * 23 + 200) + (cfg.subtitle ? 12 * 23 + 600 : 0)
    + (cfg.englishLabel ? 9 * 23 + 600 : 0) + (cfg.metaLines || []).length * (10 * 23 + 100) + 400 + 900;
  const rem = Math.max(usable - contentH, 400);
  const bottomSpacing = Math.max(Math.floor(rem * 0.45), 800);
  const topSpacing = Math.max(Math.floor(rem * 0.45), 400);
  const ch = [];
  ch.push(new Paragraph({ spacing: { before: topSpacing } }));
  if (cfg.englishLabel) ch.push(new Paragraph({
    alignment: AlignmentType.RIGHT, indent: { left: pad, right: pad }, spacing: { after: 500 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: PAL.accent, space: 8 } },
    children: [new TextRun({ text: cfg.englishLabel.split("").join("  "), size: 18, color: PAL.accent, font: FONT, characterSpacing: 40 })],
  }));
  for (let i = 0; i < titleLines.length; i++) ch.push(new Paragraph({
    bidirectional: true, alignment: AlignmentType.RIGHT, indent: { left: pad, right: pad },
    spacing: { after: i < titleLines.length - 1 ? 100 : 300, line: Math.ceil(titlePt * 23), lineRule: "atLeast" },
    children: [run(titleLines[i], { size: titleSize, bold: true, color: P.cover.titleColor })],
  }));
  if (cfg.subtitle) ch.push(new Paragraph({
    bidirectional: true, alignment: AlignmentType.RIGHT, indent: { left: pad, right: pad }, spacing: { after: 800, line: 312, lineRule: "atLeast" },
    children: [run(cfg.subtitle, { size: 24, color: P.cover.subtitleColor })],
  }));
  for (const line of (cfg.metaLines || [])) ch.push(new Paragraph({
    bidirectional: true, alignment: AlignmentType.RIGHT, indent: { left: pad, right: pad + 200 }, spacing: { after: 80, line: 312, lineRule: "atLeast" },
    border: { right: { style: BorderStyle.SINGLE, size: 8, color: PAL.accent, space: 12 } },
    children: [run(line, { size: 24, color: P.cover.metaColor })],
  }));
  ch.push(new Paragraph({ spacing: { before: bottomSpacing } }));
  ch.push(new Paragraph({
    bidirectional: true, alignment: AlignmentType.RIGHT, indent: { left: pad, right: pad }, spacing: { before: 200 },
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: PAL.accent, space: 8 } },
    children: [
      run(cfg.footerRight || "", { size: 16, color: P.cover.footerColor }),
      new TextRun({ text: "                                   ", size: 16 }),
      run(cfg.footerLeft || "", { size: 16, color: P.cover.footerColor }),
    ],
  }));
  return [new Table({
    width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, borders: allNoBorders,
    rows: [new TableRow({
      height: { value: 16838, rule: "exact" },
      children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: P.bg }, borders: noBorders, verticalAlign: "top", children: ch })],
    })],
  })];
}

module.exports = { Document, Packer, Paragraph, TextRun, PageBreak, TableOfContents, Header, Footer, PageNumber, NumberFormat, SectionType, AlignmentType, HeadingLevel, run, para, h1, h2, figure, tblCaption, tbl, faNum, mobileRow, buildCoverR1, PAL, FONT, OUT, allNoBorders, noBorders, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, TableLayoutType, fs, figCount: () => figNo };
