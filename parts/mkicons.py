#!/usr/bin/env python3
"""Generate the M1 Pro Form Guide icon set (barbell mark) as PNGs.

Mirrors the inline SVG favicon: dark rounded plate, two cyan collars,
two light uprights, one light bar. Drawn at 8x then downsampled so the
edges stay clean at 96px and at 512px alike.
"""
from PIL import Image, ImageDraw
import os

BG = (15, 18, 22, 255)        # --bg  #0f1216
ACCENT = (56, 199, 227, 255)  # --accent #38c7e3
LIGHT = (233, 237, 243, 255)  # --text #e9edf3
SS = 8                        # supersample factor

# geometry in a 64x64 design space (x, y, w, h, radius, fill)
PARTS = [
    (10, 24, 7, 16, 2.0, ACCENT),
    (47, 24, 7, 16, 2.0, ACCENT),
    (17, 20, 6, 24, 2.0, LIGHT),
    (41, 20, 6, 24, 2.0, LIGHT),
    (23, 29.5, 18, 5, 2.5, LIGHT),
]


def render(size, maskable=False, transparent=False):
    """maskable -> full-bleed background, mark shrunk into the 80% safe zone."""
    S = size * SS
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if not transparent:
        if maskable:
            d.rectangle([0, 0, S, S], fill=BG)
        else:
            d.rounded_rectangle([0, 0, S - 1, S - 1], radius=S * 14 / 64, fill=BG)

    # scale the mark: full size normally, 62% centred for maskable safe zone
    mark = 0.62 if maskable else 1.0
    unit = S / 64.0 * mark
    off = (S - 64 * unit) / 2.0

    for x, y, w, h, r, fill in PARTS:
        d.rounded_rectangle(
            [off + x * unit, off + y * unit,
             off + (x + w) * unit - 1, off + (y + h) * unit - 1],
            radius=max(1.0, r * unit), fill=fill)

    return img.resize((size, size), Image.LANCZOS)


def main():
    out = os.path.join(os.path.dirname(__file__), "..", "build", "pwa", "icons")
    os.makedirs(out, exist_ok=True)
    for s in (96, 128, 152, 167, 180, 192, 256, 384, 512, 1024):
        render(s).save(os.path.join(out, f"icon-{s}.png"), optimize=True)
    for s in (192, 512):
        render(s, maskable=True).save(os.path.join(out, f"maskable-{s}.png"), optimize=True)

    # iOS launch image for the iPhone 16 Pro Max (440x956 @3x = 1320x2868)
    for name, (w, h) in {"splash-1320x2868": (1320, 2868), "splash-2868x1320": (2868, 1320)}.items():
        sp = Image.new("RGBA", (w, h), BG)
        mark = render(min(w, h) // 3, transparent=True)
        sp.alpha_composite(mark, ((w - mark.width) // 2, (h - mark.height) // 2))
        sp.convert("RGB").save(os.path.join(out, name + ".png"), optimize=True)

    print("icons written to", os.path.normpath(out))
    print(sorted(os.listdir(out)))


if __name__ == "__main__":
    main()
