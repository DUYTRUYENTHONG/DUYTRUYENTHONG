# Technical skills map: design and QA

Date: 2026-10-22. Repository: `DUYTRUYENTHONG/DUYTRUYENTHONG`.

## Review and change

The selected animated map used small supporting text, a permanent dark surface in light mode, sequential emphasis, and one link for five different areas. Replaced only that map with an original static editorial index: clear typography, five consistent rows, neutral surfaces, one blue accent, and light/dark plus narrow/wide compositions. Added five native Markdown links to the existing detailed sections. Preserved the detailed skill text, evidence qualifiers, project statuses and destinations, stats workflow, and separate hero artwork.

The new SVG variants are 1,965–1,967 bytes each versus 798,195 bytes for the selected GIF. This compares source asset bytes, not overall profile load performance; the separate hero remains unchanged. Original GIF assets remain in the repository for history.

## Checks performed before push

- Fast-forwarded clean local main to `b6bd338` before editing, retaining the latest scheduled stats refresh.
- `python scripts/render_skill_map.py`: generated all four variants; rerun produced identical SHA-256 hashes.
- Python compilation and XML parsing passed. Checked five labels per asset and absence of scripts, animation elements, and external asset references.
- GitHub Markdown API (`POST /markdown`, GFM, profile repository context) retained all picture sources, alt text, and five native links.
- Chromium local preview using that API-rendered markup: widths 1440, 1280, 1024, 768, 390, 320 in both light and dark appearance. All 12 cases loaded the expected image, all five link targets existed, and the document fit the viewport. Existing wide tables scroll within their containers at narrow widths.
- Activated all five links using Enter; each reached its matching heading. Image loading is not required for the native links or detailed content.
- Reviewed desktop dark and mobile light screenshots, including 320px.
- `git diff --check`: passed. Reviewed the bounded diff; no credentials or application/dependency changes.

This repository has no app manifest, build, lint or typecheck commands. Those checks are not claimed. No physical iPhone/Safari, screen-reader or browser-zoom certification is claimed. The selected graphic is static for every motion preference; the separate existing hero GIF still has its existing behavior.

Local preview: `http://127.0.0.1:3034/.preview.html#technical-skills`.
Local screenshots and geometry: `.preview-qa/light-320.png`, `light-390.png`, `light-1280.png`, matching dark variants, `responsive.json`, and `anchors.json`. Preview artifacts are gitignored and are not published. Asset provenance and regeneration instructions are in `ASSET_NOTES.md`.

Publication target authorized in the request: the existing profile repository's `main` branch, visible at `https://github.com/DUYTRUYENTHONG#technical-skills`. Live rendering is checked after push; local preview checks do not substitute for it.
