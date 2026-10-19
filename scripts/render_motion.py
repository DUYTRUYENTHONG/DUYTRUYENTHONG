"""Build looping GitHub profile GIFs from the original profile artwork.

The banner keeps the existing Earth and galaxy pixels. A rotating cylindrical
remap moves its luminous surface details while the original spherical shading,
rim, typography, and background remain in place. Requires Pillow and NumPy.
"""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
FONT_DIR = Path("C:/Windows/Fonts")
CYAN = (60, 209, 255)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    preferred = FONT_DIR / ("segoeuib.ttf" if bold else "segoeui.ttf")
    fallback = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(str(preferred) if preferred.exists() else fallback, size)


def save_loop(frames: list[Image.Image], path: Path, duration: int) -> None:
    # Share one palette across the loop so colors do not flicker between frames.
    palette = frames[0].quantize(colors=192, method=Image.Quantize.MEDIANCUT)
    indexed = [frame.quantize(palette=palette, dither=Image.Dither.NONE) for frame in frames]
    indexed[0].save(
        path,
        save_all=True,
        append_images=indexed[1:],
        duration=duration,
        loop=0,
        optimize=True,
        disposal=2,
    )


def banner() -> None:
    source = Image.open(ASSETS / "ali-nguyen-profile-banner.png").convert("RGB")
    base = source.resize((960, 322), Image.Resampling.LANCZOS)
    original = np.asarray(base, dtype=np.float32)
    shading = np.asarray(base.filter(ImageFilter.GaussianBlur(27)), dtype=np.float32)
    surface = original - shading
    cx, cy, radius = 777, 160, 136
    frames: list[Image.Image] = []

    for index in range(40):
        phase = index / 40
        pixels = original.copy()
        for y in range(cy - radius, cy + radius + 1):
            dy = y - cy
            half_width = math.sqrt(max(0, radius * radius - dy * dy))
            x0 = max(0, math.ceil(cx - half_width))
            x1 = min(pixels.shape[1], math.floor(cx + half_width) + 1)
            if x1 - x0 < 3:
                continue
            positions = np.arange(x0, x1)
            distance = np.sqrt((positions - cx) ** 2 + dy * dy)
            # Retain the exact original rim and orbit rings at the edge.
            blend = np.clip((radius - distance - 7) / 17, 0, 1) * 0.50
            row = surface[y, x0:x1]
            # Mirror the hidden hemisphere to make a seamless texture loop from
            # the one supplied globe view; the original artwork stays intact.
            wrapped = np.concatenate((row, row[::-1]), axis=0)
            shift = round(phase * len(wrapped))
            sample = (np.arange(x1 - x0) - shift) % len(wrapped)
            moved_details = wrapped[sample]
            rotating = np.clip(shading[y, x0:x1] + moved_details, 0, 255)
            pixels[y, x0:x1] = (
                original[y, x0:x1] * (1 - blend[:, None])
                + rotating * blend[:, None]
            )

        image = Image.fromarray(np.uint8(np.clip(pixels, 0, 255)), "RGB").convert("RGBA")
        orbit = Image.new("RGBA", image.size, (0, 0, 0, 0))
        draw = ImageDraw.Draw(orbit, "RGBA")
        for offset in (0, 2.1, 4.2):
            angle = 2 * math.pi * phase + offset
            x = cx + 161 * math.cos(angle)
            y = cy + 65 * math.sin(angle)
            draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=(*CYAN, 170))
        image.alpha_composite(orbit.filter(ImageFilter.GaussianBlur(5)))
        image.alpha_composite(orbit)

        # Extend the original hero's skill row while preserving its typography.
        chips = ("FastAPI", "Docker", "GA4", "LangChain", "LangGraph", "CI/CD")
        chip_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
        chip_draw = ImageDraw.Draw(chip_layer, "RGBA")
        label_font = font(14, True)
        chip_x = 61
        for chip_index, label in enumerate(chips):
            chip_width = math.ceil(chip_draw.textlength(label, font=label_font)) + 24
            active = max(0.0, 1 - abs(((index / 7) - chip_index + 3) % 6 - 3))
            outline = (54, int(160 + 60 * active), 245, int(155 + 75 * active))
            chip_draw.rounded_rectangle(
                (chip_x, 245, chip_x + chip_width, 276),
                radius=10,
                fill=(4, 27, 51, 217),
                outline=outline,
                width=2 if active > 0.4 else 1,
            )
            chip_draw.text((chip_x + 12, 252), label, font=label_font, fill=(235, 249, 255, 255))
            chip_x += chip_width + 8
        image.alpha_composite(chip_layer)
        frames.append(image.convert("RGB"))

    save_loop(frames, ASSETS / "ali-nguyen-galaxy-original.gif", 90)
    frames[0].save(ASSETS / "ali-nguyen-galaxy-original-still.png", optimize=True)


def skills() -> None:
    labels = [
        ("01", "Software & systems", "Python · FastAPI · Docker"),
        ("02", "GenAI integration", "LLM APIs · prompts · routing"),
        ("03", "Grounded data / RAG", "LangChain · search · citations"),
        ("04", "Agents & workflows", "LangGraph · tools · guardrails"),
        ("05", "Evaluation / LLMOps", "Tests · traces · reliability"),
    ]
    width, height = 960, 255
    frames: list[Image.Image] = []
    for index in range(40):
        image = Image.new("RGB", (width, height), "#071322")
        draw = ImageDraw.Draw(image)
        draw.text((28, 20), "APPLIED AI  /  ENGINEERING STACK", font=font(19, True), fill="#d2eaff")
        draw.text((28, 52), "Five connected layers, from systems to evidence", font=font(16), fill="#88a9bf")
        for card, (number, title, caption) in enumerate(labels):
            column, row = card % 3, card // 3
            x, y = 28 + column * 310, 94 + row * 75
            active = max(0.0, 1 - abs(((index / 8) - card + 2.5) % 5 - 2.5))
            border = (int(33 + 44 * active), int(95 + 106 * active), int(132 + 104 * active))
            fill = (int(10 + 7 * active), int(30 + 24 * active), int(49 + 32 * active))
            draw.rounded_rectangle((x, y, x + 290, y + 65), radius=13, fill=fill, outline=border, width=2)
            draw.text((x + 14, y + 10), number, font=font(16, True), fill="#50cefa")
            draw.text((x + 49, y + 7), title, font=font(17, True), fill="#f1fbff")
            draw.text((x + 49, y + 36), caption, font=font(13), fill="#acc7d8")
            if active > 0.1:
                draw.rounded_rectangle((x + 2, y + 61, x + 2 + int(286 * active), y + 63), radius=1, fill="#57d9ff")
        draw.text((648, 191), "Evidence first  →  iterate", font=font(19, True), fill="#d4efff")
        draw.text((649, 220), "Explore the skills and projects below", font=font(13), fill="#8bafc4")
        frames.append(image)
    save_loop(frames, ASSETS / "applied-ai-skill-map-v2.gif", 125)
    frames[0].save(ASSETS / "applied-ai-skill-map-v2-still.png", optimize=True)


if __name__ == "__main__":
    banner()
    skills()
