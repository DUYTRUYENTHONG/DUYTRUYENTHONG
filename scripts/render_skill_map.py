"""Render static skill maps for GitHub light/dark and narrow/wide views.

Uses only the Python standard library. Text links in README remain the semantic
navigation; these SVGs introduce no claims or external fonts/runtime requests.
"""
from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
LABELS = ["Software & systems", "GenAI integration", "Grounded data / RAG", "Agents & workflows", "Evaluation / LLMOps"]


def render(dark: bool, narrow: bool) -> str:
    width, height = (400, 442) if narrow else (840, 386)
    background, ink, muted, line, accent = (
        ("#0d1117", "#f0f6fc", "#b1bac4", "#30363d", "#79c0ff") if dark
        else ("#f6f8fa", "#1f2328", "#59636e", "#d1d9e0", "#0969da")
    )
    left, top, step = (24, 132, 60) if narrow else (32, 112, 50)
    text = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">',
            '<title id="title">Applied AI: five areas of work and study</title>',
            '<desc id="desc">Software and systems; GenAI integration; grounded data and RAG; agents and workflows; evaluation and LLMOps. Evidence and current focus are distinguished in the linked text below.</desc>',
            f'<rect x="1" y="1" width="{width-2}" height="{height-2}" rx="16" fill="{background}" stroke="{line}"/>',
            '<g font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">',
            f'<text x="{left}" y="44" fill="{ink}" font-size="{25 if narrow else 30}" font-weight="650">Applied AI / engineering</text>',
            f'<text x="{left}" y="74" fill="{muted}" font-size="{16 if narrow else 18}">Five areas. Evidence and focus below.</text>']
    for index, label in enumerate(LABELS):
        y = top + index * step
        text.extend([f'<line x1="{left}" y1="{y-26}" x2="{width-left}" y2="{y-26}" stroke="{line}"/>',
                     f'<text x="{left}" y="{y}" fill="{accent}" font-size="16" font-weight="650">0{index+1}</text>',
                     f'<text x="{left+44}" y="{y}" fill="{ink}" font-size="{21 if narrow else 24}" font-weight="600">{escape(label)}</text>'])
    text.extend(['</g>', '</svg>'])
    return '\n'.join(text) + '\n'


if __name__ == "__main__":
    for dark in (False, True):
        for narrow in (False, True):
            suffix = f'{"dark" if dark else "light"}-{"narrow" if narrow else "wide"}'
            (ROOT / 'assets' / f'applied-ai-map-{suffix}.svg').write_text(render(dark, narrow), encoding='utf-8')
