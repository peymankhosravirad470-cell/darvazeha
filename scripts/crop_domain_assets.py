#!/usr/bin/env python3
"""برش دارایی‌های رسمی هفت قلمرو از تصاویر مرجع — مرحله ۱ (منوی هفت قلمرو)

منابع:
  upload/file_...f6788243889ac7b51c1014ac.png  → پوستر اختصاصی تارگون (مرجع اصلی تارگون)
  upload/file_...dc10824684d5cd1cb6b0f7f3.png  → مجموعه ۲×۳ (هر کاشی پلاک نام خودش را دارد)

تطبیق قطعی بر اساس پلاک نام داخل هر کاشی (چپ→راست، بالا→پایین):
  ردیف ۱: دژمار DEZHMAAR · آرگاد ARGAD · تارگون TARGON
  ردیف ۲: مرداک MARDAK · زرداک ZARDAK · ورگاد VERGAD
تارماد TARMAD: تصویر مرجع ندارد — دارایی ساخته نمی‌شود (بدون جعل).
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
UP = ROOT / 'upload'
OUT = ROOT / 'src' / 'assets' / 'domains'
ORIG = OUT / 'orig'
FLAGS = OUT / 'flags'

POSTER = UP / 'file_00000000f6788243889ac7b51c1014ac.png'
GRID = UP / 'file_00000000dc10824684d5cd1cb6b0f7f3.png'

# (نام فایل انگلیسی، ستون، ردیف) — چپ→راست، بالا→پایین مطابق پلاک نام‌ها
TILES = [
    ('dezhmaar', 0, 0),
    ('argad',    1, 0),
    ('targon',   2, 0),
    ('mardak',   0, 1),
    ('zardak',   1, 1),
    ('vergad',   2, 1),
]
TILE = 512
# ناحیهٔ پرچم در هر کاشی (نسبت به مبدأ کاشی) — سومِ چپِ کاشی، خارج از پلاک نام
FLAG_BOX = (6, 8, 196, 470)
# ناحیهٔ پرچم در پوستر تارگون (لبهٔ پرچم سرخ با نشان سر اژدهای طلایی — بدون ناحیهٔ متن)
TARGON_FLAG_BOX = (48, 34, 548, 610)


def main():
    for d in (OUT, ORIG, FLAGS):
        d.mkdir(parents=True, exist_ok=True)

    grid = Image.open(GRID).convert('RGB')
    assert grid.size == (1536, 1024), f'unexpected grid size {grid.size}'

    for name, col, row in TILES:
        box = (col * TILE, row * TILE, (col + 1) * TILE, (row + 1) * TILE)
        tile = grid.crop(box)
        tile.save(ORIG / f'{name}.png', optimize=True)
        tile.save(OUT / f'{name}.jpg', quality=86, optimize=True)
        flag = tile.crop(FLAG_BOX)
        fb = flag.copy()
        fb.thumbnail((220, 460), Image.LANCZOS)
        fb.save(FLAGS / f'{name}.jpg', quality=85, optimize=True)

    poster = Image.open(POSTER).convert('RGB')
    poster.save(ORIG / 'targon_poster.png', optimize=True)
    web = poster.copy()
    web.thumbnail((1000, 1000), Image.LANCZOS)
    web.save(OUT / 'targon.jpg', quality=82, optimize=True)
    flag = poster.crop(TARGON_FLAG_BOX)
    fb = flag.copy()
    fb.thumbnail((220, 460), Image.LANCZOS)
    fb.save(FLAGS / 'targon.jpg', quality=85, optimize=True)

    # برگهٔ راستی‌آزمایی بصری: برچسب + کاشی + پرچم برای هر ۶ قلمرو
    from PIL import ImageDraw
    sheet = Image.new('RGB', (3 * 532 + 20, 2 * 572 + 20), (12, 14, 34))
    dr = ImageDraw.Draw(sheet)
    for i, (name, _, _) in enumerate(TILES):
        cx, cy = 10 + (i % 3) * 532, 10 + (i // 3) * 572
        tile = Image.open(ORIG / f'{name}.png').resize((512, 512))
        flag = Image.open(FLAGS / f'{name}.jpg')
        fw = 110
        fh = int(flag.height * fw / flag.width)
        sheet.paste(tile, (cx, cy + 40))
        sheet.paste(flag.resize((fw, fh)), (cx + 542 - fw, cy + 40 + 512 - fh))
        dr.rectangle([cx, cy, cx + 532, cy + 38], fill=(30, 34, 66))
        dr.text((cx + 10, cy + 8), f'{i+1}. {name.upper()}', fill=(255, 224, 130))
    sheet.save(ROOT / 'scripts' / '_domains_contact_sheet.jpg', quality=85)

    t = Image.open(ORIG / 'targon.png'); f = Image.open(FLAGS / 'targon.jpg')
    t.thumbnail((900, 900)); f.thumbnail((200, 400))
    chk = Image.new('RGB', (t.width + f.width + 30, max(t.height, f.height) + 60), (12, 14, 34))
    chk.paste(t, (10, 50)); chk.paste(f, (t.width + 20, 50))
    d2 = ImageDraw.Draw(chk)
    d2.text((10, 10), 'TARGON poster (dedicated) + flag', fill=(255, 224, 130))
    chk.save(ROOT / 'scripts' / '_targon_check.jpg', quality=85)

    for p in sorted(OUT.rglob('*')):
        if p.is_file():
            print(f'{p.relative_to(ROOT)}  {p.stat().st_size//1024}KB')


if __name__ == '__main__':
    main()
