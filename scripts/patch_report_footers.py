#!/usr/bin/env python3
"""پچ پاورقی برای WPS/Word: فوتر سکشن فهرست = ROMAN، فوتر بدنه = arabic؛ حذف pgNumType خالی."""
import re, sys, zipfile, shutil, tempfile, os

DOCX = sys.argv[1]
tmp = tempfile.mkdtemp()
with zipfile.ZipFile(DOCX) as z:
    z.extractall(tmp)

doc_path = os.path.join(tmp, "word", "document.xml")
with open(doc_path, encoding="utf-8") as f:
    doc = f.read()

# ۱) حذف pgNumType خالی (سکشن کاور)
doc = re.sub(r"<w:pgNumType/>", "", doc)

# ۲) نقشهٔ سکشن‌ها به فوترها (به ترتیب وقوع sectPr)
sect_blocks = re.findall(r"<w:sectPr[^>]*>.*?</w:sectPr>|<w:sectPr[^>]*/>", doc, re.S)
rels_path = os.path.join(tmp, "word", "_rels", "document.xml.rels")
with open(rels_path, encoding="utf-8") as f:
    rels = f.read()
id2target = dict(re.findall(r'<Relationship Id="([^"]+)"[^>]*Target="([^"]+)"', rels))

footer_fmt = {}  # footerN.xml -> fmt
for i, blk in enumerate(sect_blocks):
    fmt = None
    m = re.search(r'<w:pgNumType[^>]*w:fmt="([^"]+)"', blk)
    if m:
        fmt = m.group(1)  # upperRoman / decimal
    for rid in re.findall(r'<w:footerReference[^>]*r:id="([^"]+)"', blk):
        tgt = id2target.get(rid, "")
        if tgt.startswith("footer") and fmt:
            footer_fmt[tgt] = "ROMAN" if "oman" in fmt else "arabic"

with open(doc_path, "w", encoding="utf-8") as f:
    f.write(doc)

for fname, fmt in footer_fmt.items():
    fp = os.path.join(tmp, "word", fname)
    if not os.path.exists(fp):
        continue
    with open(fp, encoding="utf-8") as f:
        xml = f.read()
    xml2 = re.sub(r"(<w:instrText[^>]*>)\s*PAGE\s*(</w:instrText>)",
                  rf"\1 PAGE \\* {fmt} \\* MERGEFORMAT \2", xml)
    if xml2 != xml:
        with open(fp, "w", encoding="utf-8") as f:
            f.write(xml2)
        print(f"patched {fname} -> {fmt}")

# ۳) بسته‌بندی مجدد
out_tmp = DOCX + ".new"
with zipfile.ZipFile(out_tmp, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(tmp):
        for name in files:
            p = os.path.join(root, name)
            z.write(p, os.path.relpath(p, tmp))
shutil.move(out_tmp, DOCX)
shutil.rmtree(tmp)
print("footer patch done:", footer_fmt or "NO FOOTERS FOUND")
