"""Render a self-hosted GitHub profile card from GitHub's GraphQL API."""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from xml.sax.saxutils import escape


LOGIN = "DUYTRUYENTHONG"
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "github-stats.svg"
QUERY = """
query ProfileStats($login: String!) {
  user(login: $login) {
    repositories(privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount }
    pinnedItems(first: 6, types: REPOSITORY) { totalCount }
    contributionsCollection {
      startedAt
      endedAt
      restrictedContributionsCount
      contributionCalendar { totalContributions }
    }
  }
}
"""


def fetch_stats(token: str) -> dict[str, int]:
    payload = json.dumps({"query": QUERY, "variables": {"login": LOGIN}}).encode()
    request = Request(
        "https://api.github.com/graphql",
        data=payload,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "User-Agent": "DUYTRUYENTHONG-profile-stats",
        },
        method="POST",
    )
    with urlopen(request, timeout=20) as response:
        result = json.load(response)
    if result.get("errors"):
        raise RuntimeError(f"GitHub GraphQL returned errors: {result['errors']}")
    user = result.get("data", {}).get("user")
    if not user:
        raise RuntimeError(f"GitHub user {LOGIN} was not returned")

    collection = user["contributionsCollection"]
    stats = {
        "contributions": collection["contributionCalendar"]["totalContributions"]
        - collection["restrictedContributionsCount"],
        "public_repos": user["repositories"]["totalCount"],
        "pinned_projects": user["pinnedItems"]["totalCount"],
    }
    if any(not isinstance(value, int) or value < 0 for value in stats.values()):
        raise ValueError("GitHub returned an invalid stats count")
    return stats


def render_svg(stats: dict[str, int], updated: datetime) -> str:
    date_label = updated.astimezone(timezone.utc).strftime("%d %b %Y UTC")
    title = escape(f"GitHub activity for {LOGIN}")
    description = escape(
        f"{stats['contributions']} public contributions in the rolling year; "
        f"{stats['public_repos']} public repositories; "
        f"{stats['pinned_projects']} pinned projects. Updated {date_label}."
    )
    contributions = stats["contributions"]
    public_repos = stats["public_repos"]
    pinned_projects = stats["pinned_projects"]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="300" viewBox="0 0 1100 300" role="img" aria-labelledby="title desc">
  <title id="title">{title}</title>
  <desc id="desc">{description}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#071523"/>
      <stop offset="1" stop-color="#102c47"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#4cbbe8"/>
      <stop offset="1" stop-color="#86f0d1"/>
    </linearGradient>
  </defs>
  <rect width="1100" height="300" rx="26" fill="url(#bg)"/>
  <rect x="1" y="1" width="1098" height="298" rx="25" fill="none" stroke="#36546a" stroke-width="2"/>
  <circle cx="1020" cy="32" r="155" fill="none" stroke="#2d7896" stroke-width="2" opacity=".35"/>
  <circle cx="1020" cy="32" r="115" fill="none" stroke="#4cbbe8" stroke-width="1" opacity=".35"/>
  <path d="M70 78 H1030" stroke="url(#accent)" stroke-width="2" opacity=".8"/>
  <path d="M393 105 V227 M735 105 V227" stroke="#36546a" stroke-width="2"/>
  <g font-family="Segoe UI, Arial, sans-serif">
    <text x="70" y="54" fill="#e9f4ff" font-size="24" font-weight="700">GITHUB ACTIVITY</text>
    <text x="1030" y="53" fill="#9fb9cb" font-size="17" text-anchor="end">@{LOGIN}</text>
    <text x="70" y="173" fill="#ffffff" font-size="68" font-weight="700">{contributions}</text>
    <text x="70" y="210" fill="#aed1e3" font-size="19">PUBLIC CONTRIBUTIONS · 1Y</text>
    <text x="430" y="173" fill="#ffffff" font-size="68" font-weight="700">{public_repos}</text>
    <text x="430" y="210" fill="#aed1e3" font-size="19">PUBLIC REPOSITORIES</text>
    <text x="772" y="173" fill="#ffffff" font-size="68" font-weight="700">{pinned_projects}</text>
    <text x="772" y="210" fill="#aed1e3" font-size="19">PINNED PROJECTS</text>
    <text x="70" y="264" fill="#9fb9cb" font-size="16">Source: GitHub GraphQL · Updated {date_label}</text>
  </g>
</svg>
"""


def main() -> None:
    token = os.environ.get("GITHUB_TOKEN")
    if not token:
        raise SystemExit("GITHUB_TOKEN is required")
    stats = fetch_stats(token)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(render_svg(stats, datetime.now(timezone.utc)), encoding="utf-8")
    print(f"Rendered {OUTPUT.relative_to(OUTPUT.parents[1])}: {stats}")


if __name__ == "__main__":
    main()
