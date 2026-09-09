# DUYTRUYENTHONG Orchestration, CSS Architecture And Browser QA Root-Fix Prompt

Ban la Codex principal orchestration architect, design-system engineer, CSS platform architect, company-site CMS product owner, root-cause QA lead va release-safety engineer. Hay sua truc tiep he thong trong canonical repo. Khong chi viet report, khong dung o ke hoach, khong coi mot source correction PASS la release PASS.

## 1. Active master goal

- `MASTER_GOAL_ID=duytruyenthong-master-goal`
- Existing external goal/thread: `019e9a91-897e-7002-8337-238f73505fd2`
- `PRODUCT_SCOPE=company-site`
- Primary product namespace: `product:company-site`
- Shared style namespace: `platform:shared`
- Orchestration namespace: `docs:orchestration`
- Release namespace: `release:shared`
- `NO_DEPLOY=1`
- `DEPLOY_INTENT=0`
- Canonical repo: `C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os`
- Master outcome: company CMS/product development tiep tuc ACTIVE trong khi tung slice co state rieng; workspace control invariant >=44px duoc enforce o moi viewport; browser evidence day du; CSS monolith duoc tach an toan theo ownership va CSS layers; release verdict khong lam dung ca product backlog.

Khong deploy production trong task nay. Khong sua STOS/Cho Kenh business behavior. Shared CSS regression coverage cho STOS/Cho Kenh la safety evidence, khong phai quyen sua backlog cua hai product.

## 2. Current incident facts

Dung cac fact nay lam baseline, nhung fresh-audit truoc moi transition:

- Persisted master goal cu dang hien `blocked` do ownership conflict lich su.
- Source correction hien tai da PASS static/source QA.
- Frozen file: `src/app/globals.css`.
- Frozen SHA-256: `7AB8483869E4551C8166F194479FD6B04773CC7E6985B1137E2215259D6F24D5`.
- Current measured size tai baseline: khoang 1,377,716 bytes, 56,969 lines.
- Current correction: `html body .app-shell .btn { min-height: 44px !important; }`.
- Mobile va tablet evidence da tung PASS.
- Desktop 1280 tung phat hien 42px, chung minh bug la cross-viewport invariant, khong phai mobile breakpoint bug.
- Independent browser owner can rerun matrix truoc release review.
- Correct current state phai duoc bieu dien theo bon truc:
  - Product: `ACTIVE`.
  - Current slice: `SOURCE_FREEZE`.
  - QA: `AWAITING_BROWSER_RETEST`.
  - Release: `BLOCKED_PENDING_EVIDENCE`.

Khong ghi de frozen source truoc browser retest. Prompt nay duoc phep sua orchestration/QA harness ngoai frozen path neu ownership va exact path khong conflict.

## 3. Root-cause statement

Phai verify bang source va tests:

### 3.1 Requirements classification failure

Bug da bi mo ta qua hep la mobile touch-target bug. Contract that la:

> Moi workspace action control, trong moi viewport duoc support, o moi visible interactive state, phai co computed block size toi thieu 44 CSS pixels va khong bi clip/overlap.

Vi acceptance khong khai bao invariant, ba patch da chase viewport:

1. `max-width: 760px`: mobile pass, tablet fail.
2. `max-width: 768px`: tablet pass, desktop fail.
3. Global `.app-shell .btn`: pham vi gan dung invariant that.

Day la requirements taxonomy + QA coverage defect, khong chi la CSS bug.

### 3.2 Goal-state modeling defect

System dang collapse cac state khac nhau thanh `blocked`:

- persisted master goal lifecycle;
- source freeze;
- shared lease wait;
- browser QA wait;
- release evidence wait;
- hard blocker.

Master goal bi hieu nham la dung hoan toan du product backlog va safe work van con.

### 3.3 CSS architecture defect

`globals.css` qua lon va cross-product:

- cascade/order kho du doan;
- media query va selector override lap lai;
- specificity leo thang va `!important` pho bien;
- mot thay doi nho can lease ca file;
- hash drift khi product khac sua;
- ownership boundaries khong map vao physical stylesheets;
- browser regression blast radius bao gom Company Site, STOS, Cho Kenh va workspace shell.

### 3.4 Browser evidence defect

Workspace browser script co matrix 360/390/430/768/1280 nhung fail-fast khi mot viewport throw, nen khong thu duoc toan bo defect distribution trong cung run. Fix loop vi the chase viewport thay vi sua invariant.

## 4. Mandatory references

Doc truoc khi edit:

1. `AGENTS.md`
2. `QA_CHECK_BEFORE_DEPLOY.md`
3. `docs/PRODUCT_GOAL_OWNERSHIP_CONTRACT.md`
4. `docs/CODEX_GOAL_SYSTEM.md`
5. `docs/AI_ORCHESTRATION_MASTER_GOAL_KPI.md`
6. `docs/duytruyenthong/DUYTRUYENTHONG_MASTER_GOAL.md`
7. `docs/duytruyenthong/cms-world-class-prompt/MASTER_PROMPT.md`
8. `agent-system/product-ownership.json`
9. `agent-system/ownership/ownership-map.json`
10. `agent-system/ownership/product-ownership-lease-broker.mjs`
11. `agent-system/orchestration/templates/goal-state.json`
12. `scripts/automation-runtime-policy.mjs`
13. `scripts/automation-lane-lock.mjs`
14. `scripts/automation-command-gate.mjs`
15. `scripts/automation-runtime-runner.mjs`
16. `scripts/qa-product-goal-ownership.mjs`
17. `scripts/qa-workspace-saas-browser.cjs`
18. `scripts/qa-cms-saas-browser.cjs`
19. `scripts/qa-responsive-release.cjs`
20. `scripts/qa-visual-overlap-audit.cjs`
21. `src/app/globals.css` read-only cho den khi source freeze duoc giai phong dung protocol.

Su dung `qa-check-agent` neu runtime co skill nay.

## 5. Non-negotiable safety

- Khong xoa lock/lease cua owner khac.
- Khong kill, suspend hoac reuse foreign process/server.
- Khong bypass browser gate, ownership, auth, privacy, data hoac release contract.
- Khong goi `update_goal(active)` vi tool khong support action do.
- Khong dung `update_goal(blocked)` cho source freeze, lease wait, browser retest wait hoac release evidence wait.
- Khong revert/stash/reset unrelated user or agent changes.
- Khong sua frozen `globals.css` khi hash van la baseline va browser owner chua ket thuc retest.
- Khong deploy.
- Khong raw Vercel command.
- Khong dung screenshot duy nhat lam bang chung computed target size.
- Khong sua test assertion 44px thanh 42px de lam PASS.
- Khong them breakpoint override moi khi invariant khong phu thuoc breakpoint.
- Khong refactor 56k dong CSS trong mot patch khong co batch parity evidence.

## 6. Workstream ownership

Tach thanh cac slice co owner va lease rieng:

### Slice A - orchestration state model

- Namespace: `docs:orchestration` va cac runtime primitive duoc registry map vao `platform:shared`.
- Khong can source lease cua Company Site/Cho Kenh/STOS neu exact files khong overlap.
- Output: schema, reconciler, migration, tests, docs.

### Slice B - browser QA aggregator

- Namespace theo registry cua QA scripts; verify exact ownership truoc write.
- Output: full-matrix, non-fail-fast evidence collector va invariant contract test.
- Khong can sua frozen CSS.

### Slice C - current frozen correction retest

- Browser owner doc lap.
- Source hash phai van la `7AB848...F24D5` truoc va sau retest.
- Output: 360/390/430/768/1280 matrix report + screenshots + computed measurements.
- Khong source write.

### Slice D - shared design token

- Namespace: `platform:shared`.
- Chi bat dau sau Slice C ket thuc hoac source freeze duoc reopen minh bach neu C fail.
- Output: token contract, primitive consumption, cross-product regression.

### Slice E - CSS decomposition

- Shared bootstrap/token/primitives: `platform:shared`.
- Company Site stylesheet: `product:company-site` sau registry assignment.
- STOS stylesheet: `product:stos` owner.
- Cho Kenh stylesheet: `product:cho-kenh` owner.
- Release/build evidence: `release:shared` chi khi explicit release request sau nay.
- Mot orchestrator khong duoc ngam chiem ownership cua tat ca product styles.

## 7. Orthogonal state model

Nang local goal/run state de co cac truc rieng.

### 7.1 Master product goal

`product_goal_state`:

- `ACTIVE`
- `COMPLETED`
- `CANCELLED`
- `HARD_BLOCKED`

Rules:

- Master product goal la `ACTIVE` khi backlog/next safe slice con ton tai.
- Mot slice wait khong lam master goal blocked.
- `HARD_BLOCKED` chi cho missing secret/credential, destructive data risk, confirmed outage, security decision, unresolvable ownership conflict, hoac khong con meaningful safe work.
- External persisted blocked lich su chi la audit input; current effective state can fresh live blockers va explicit resume.

### 7.2 Slice state

`slice_state`:

- `READY`
- `ACTIVE`
- `SOURCE_FREEZE`
- `WAITING_FOR_SHARED_LEASE`
- `AWAITING_INDEPENDENT_QA`
- `FIX_REQUIRED`
- `VERIFIED`
- `DONE`
- `HARD_BLOCKED`

### 7.3 QA state

`qa_state`:

- `NOT_STARTED`
- `RUNNING`
- `AWAITING_BROWSER_RETEST`
- `PARTIAL_EVIDENCE`
- `FAIL`
- `PASS`
- `INVALIDATED_BY_SOURCE_DRIFT`

### 7.4 Release state

`release_state`:

- `NOT_REQUESTED`
- `BLOCKED_PENDING_EVIDENCE`
- `BLOCKED_BY_P0_P1`
- `READY_FOR_RELEASE_REVIEW`
- `IN_RELEASE_REVIEW`
- `APPROVED`
- `DEPLOYED`
- `ROLLED_BACK`

### 7.5 Source state

`source_state`:

- `EDITABLE`
- `SOURCE_FREEZE`
- `WAITING_EXACT_PATH`
- `WAITING_SHARED_LEASE`
- `DRIFTED`

Current state migration expected:

```json
{
  "product_goal_state": "ACTIVE",
  "current_slice": "workspace-control-44px-invariant",
  "slice_state": "SOURCE_FREEZE",
  "source_state": "SOURCE_FREEZE",
  "qa_state": "AWAITING_BROWSER_RETEST",
  "release_state": "BLOCKED_PENDING_EVIDENCE",
  "source_hash": "7AB8483869E4551C8166F194479FD6B04773CC7E6985B1137E2215259D6F24D5",
  "external_goal_sync": "STALE_EXTERNAL_STATUS",
  "next_event": "BROWSER_MATRIX_COMPLETED"
}
```

## 8. Derived-state rules

Implement mot pure function duy nhat de derive current summary.

- `Product=ACTIVE` neu bat ky ready/active/waiting slice nao con backlog va khong co master hard blocker.
- `Slice=SOURCE_FREEZE` neu exact source hash dang duoc independent QA kiem tra.
- `QA=AWAITING_BROWSER_RETEST` neu browser matrix chua co complete current-hash evidence.
- `Release=BLOCKED_PENDING_EVIDENCE` neu product source co the dung nhung release evidence chua du.
- `Release=READY_FOR_RELEASE_REVIEW` chi khi current source hash co full required QA PASS va P0/P1=0.
- `Product=HARD_BLOCKED` khong duoc derive tu release state.
- `Product=HARD_BLOCKED` khong duoc derive tu source freeze.
- `Product=HARD_BLOCKED` khong duoc derive tu browser owner dang chay.
- Historical blocked record khong veto current state neu blocker khong con live.

Output UI/report phai hien bon dong rieng, khong mot badge generic:

```text
Product: ACTIVE
Current slice: SOURCE_FREEZE
QA: AWAITING_BROWSER_RETEST
Release: BLOCKED_PENDING_EVIDENCE
```

## 9. Explicit resume and stale blocked repair

Message user hien tai la explicit resume event.

Implement:

- Append `GOAL_RESUME_REQUESTED` voi user/thread/time.
- Fresh-audit live blocker.
- Neu khong con master hard blocker, set local `product_goal_state=ACTIVE` va increment `resume_epoch`.
- Preserve old external blocked record trong audit history.
- Set `external_goal_sync=STALE_EXTERNAL_STATUS` neu provider khong co resume capability.
- Khong fake `update_goal(active)`.
- Khong tao goal moi de bypass old goal.
- Grant/release/browser-complete events trigger reconciler.
- `blocked` threshold ba goal turns chi ap dung cung mot live HARD blocker fingerprint, khong ap dung temporary state.

Migration test bat buoc cho goal `019e9a91-897e-7002-8337-238f73505fd2` bang sanitized fixture, khong mutate external platform database neu khong co supported API.

## 10. Source-freeze protocol

Source freeze la consistency primitive, khong phai failure.

Freeze record can:

```json
{
  "freeze_id": "workspace-control-44px-browser-retest",
  "scope": "exact_paths",
  "paths": ["src/app/globals.css"],
  "sha256": {
    "src/app/globals.css": "7AB8483869E4551C8166F194479FD6B04773CC7E6985B1137E2215259D6F24D5"
  },
  "source_owner": "shared-platform-owner",
  "qa_owner": "independent-browser-owner",
  "reason": "stable source snapshot for full viewport evidence",
  "started_at": null,
  "expires_at": null,
  "release_effect": "BLOCKED_PENDING_EVIDENCE",
  "product_effect": "NONE"
}
```

Rules:

- Freeze chi ap dung exact paths/hashes.
- Docs, orchestration tests va non-overlapping source tiep tuc.
- Browser owner read-only voi frozen source.
- Neu hash drift, stop current browser evidence, mark `INVALIDATED_BY_SOURCE_DRIFT`, report exact owner/path/hash; khong kill owner.
- Neu browser PASS, append `BROWSER_MATRIX_PASSED`, release freeze, slice -> VERIFIED, QA -> PASS, release -> READY_FOR_RELEASE_REVIEW.
- Neu browser FAIL, append all findings; slice -> FIX_REQUIRED; source owner explicitly reopens edit window; sau fix tao hash/freeze moi va rerun full matrix.
- Khong reuse partial viewport PASS across source hash moi.

## 11. Requirements invariant contract

Truoc moi UI fix, tao machine-readable acceptance record:

```json
{
  "requirement_id": "WS-A11Y-CONTROL-001",
  "surface": "workspace",
  "selector_contract": ".app-shell visible workspace action controls",
  "roles": ["button", "link-as-button", "submit", "menuitem-action"],
  "viewports": [360, 390, 430, 768, 1280],
  "states": ["default", "hover", "focus-visible", "active", "disabled-visible", "menu-open", "modal-open"],
  "measurement": "computed bounding-box height",
  "expected": ">=44 CSS px for every visible actionable control",
  "additional": ["not clipped", "not overlapped", "focus visible", "label readable"],
  "severity": "P1",
  "owner": "shared-platform-owner",
  "qa_owner": "independent-browser-owner"
}
```

Do not classify by device label only. Invariant must name:

- surface/root scope;
- semantic role;
- selector/DOM inclusion and exclusion rules;
- viewport matrix;
- interaction states;
- exact metric and threshold;
- severity;
- evidence format;
- source hash.

## 12. Design token root fix

After current frozen correction receives complete browser verdict, replace ad hoc numeric ownership with a shared token contract.

Required tokens:

```css
:root {
  --control-min-height: 44px;
  --control-min-width-icon: 44px;
  --control-hit-target: 44px;
}
```

Rules:

- Token names describe semantic contract, not current component.
- Workspace primitive consumes `var(--control-min-height)` at all viewports.
- Icon-only controls consume both min width and min height.
- Product styles may increase token-derived size but may not reduce below shared accessibility contract.
- No mobile-only token override below 44px.
- Prefer component/primitives declarations over terminal global override.
- Remove `!important` only after specificity/cascade parity is proven; do not remove it cosmetically and reintroduce regression.
- Add static contract test ensuring workspace action styles reference the token and no owned product override sets actionable height below 44px.
- Add computed browser test; static text search alone is insufficient.

## 13. CSS target architecture

Target structure, adjusted only if repo architecture proves a better canonical pattern:

```text
src/styles/
  shared/
    layer-order.css
    tokens.css
    reset.css
    primitives.css
    accessibility.css
  workspace/
    shell.css
    controls.css
    navigation.css
    cms.css
  products/
    company-site/
      public.css
      cms.css
      responsive.css
    stos/
      public.css
      workspace.css
      responsive.css
    cho-kenh/
      marketplace.css
      operations.css
      responsive.css
  utilities/
    layout.css
    motion.css
    visibility.css
  legacy/
    unmigrated.css
  ownership-manifest.json
src/app/globals.css
```

CSS layer order:

```css
@layer reset, tokens, primitives, accessibility, workspace, company-site, stos, cho-kenh, utilities, compatibility;
```

The exact bundling/import approach must be verified with current Next/PostCSS behavior. Do not assume layered `@import` syntax compiles; add a parser/build-contract test before migration.

## 14. CSS ownership model

Update ownership registry deliberately:

- `shared/**`: `platform:shared`.
- `workspace/**`: `platform:shared` unless a narrower workspace owner exists in canonical registry.
- `products/company-site/**`: `product:company-site`.
- `products/stos/**`: `product:stos`.
- `products/cho-kenh/**`: `product:cho-kenh`.
- `utilities/**`: `platform:shared` with strict no-product-selector rule.
- `legacy/unmigrated.css`: `platform:shared` temporarily, with migration ledger and deletion target.
- `globals.css`: shared entrypoint only after migration.

Each stylesheet begins with machine-readable metadata comment:

```css
/*
owner: product:company-site
scope-root: .public-company-route, .agency-home, .community-page
forbidden-roots: .stos-app, .ck-store-page
layer: company-site
*/
```

Add ownership validator:

- one file has one primary namespace;
- product stylesheet selectors must begin with approved product roots except documented keyframes/custom properties;
- shared primitives cannot contain product-specific root selectors;
- cross-product selector lists are rejected and split;
- no product appends emergency overrides to shared entrypoint;
- exact changed styles are checked against namespace before write/merge.

## 15. Safe decomposition strategy

Do not regex-split CSS. Use structured CSS parser/AST from existing dependency or add the smallest justified dev dependency with lockfile review.

### Phase 0 - baseline and inventory

- Freeze current source hash.
- Parse every rule, at-rule, layer, media query, keyframe and custom property.
- Build selector -> route/component/product usage map.
- Detect duplicate selectors, duplicate declaration blocks, conflicting declarations, repeated media conditions and `!important` count.
- Classify each rule: shared token, reset, primitive, workspace, company-site, STOS, Cho Kenh, utility, unknown.
- Unknown remains legacy; never guess ownership.
- Record source line/order and dependency on custom property/keyframe.
- Capture compiled CSS size and representative computed-style baseline.

### Phase 1 - bootstrap without behavior change

- Create layer order, token files, manifest and validation tooling.
- Keep current behavior byte/semantic equivalent where possible.
- Add imports/bundling in smallest patch.
- Run parser, typecheck and browser parity.
- If CSS layer semantics change computed style, rollback phase and revise order; do not patch symptoms.

### Phase 2 - shared tokens and primitives

- Move custom properties with known global use.
- Move resets/primitives only when selector scope is truly shared.
- Introduce `--control-min-height` contract.
- Validate Company Site, STOS, Cho Kenh and workspace representative routes.

### Phase 3 - workspace extraction

- Move `.app-shell`/workspace selectors into workspace layer preserving order and specificity.
- Consolidate repeated 44px declarations into controls primitive where semantically equivalent.
- Do not collapse controls whose design contract differs.
- Run complete workspace matrix after every batch.

### Phase 4 - product extraction

- Generate owner-specific migration packet for Company Site, STOS and Cho Kenh.
- Each product owner moves only its selector roots.
- Shared orchestrator validates manifest and cross-product boundaries.
- Product QA must PASS before removing migrated legacy rules.

### Phase 5 - utilities and deduplication

- Move generic utilities only when usage is cross-product and semantics stable.
- Deduplicate declarations by behavior, not string similarity alone.
- Remove dead rules only with route/component usage evidence plus browser regression.
- Reduce `!important` by fixing layer/specificity source, not global search-replace.

### Phase 6 - retire legacy

- Legacy file reaches zero classified live rules.
- Remove compatibility layer after full matrix and build CSS contract pass.
- `globals.css` becomes a small shared entrypoint/layer declaration.
- Update docs, ownership and rollback packet.

## 16. CSS migration budgets

Measure, do not invent PASS:

- Baseline: 56,969 lines and 1,377,716 bytes at frozen hash.
- `globals.css` final target: entrypoint only, <=300 lines and <=20 KB unless build tool requires generated declarations; any exception needs evidence.
- Total authored CSS after safe dedupe must not exceed baseline.
- Set staged reduction targets from measured duplicate/dead-rule audit; do not delete live CSS merely to hit a number.
- Track per-layer bytes, rules, selectors, media queries, `!important`, max specificity and duplicate declaration count.
- P1 if migration creates visual/interaction regression, missing route styles or cross-product leak.
- P2 if budget target misses but correctness and ownership pass; continue optimization slice without blocking product master goal.

## 17. Browser QA aggregator root fix

Modify browser QA so one viewport failure does not abort remaining matrix.

Current required matrix in one invocation:

- 360x800
- 390x844
- 430x932
- 768x1024
- 1280x800 or 1280x900

Also support optional 320 and 1440 coverage, but do not replace required matrix.

Implementation contract:

- Each viewport runs in isolated context.
- Each viewport catches its own failure and returns structured findings.
- Browser process closes in `finally`.
- All viewports execute even when earlier viewport fails.
- Final process exit is nonzero if any P0/P1 exists.
- Report contains pass/fail per viewport, every violating control, computed measurements, screenshot path, route, state, source hash and timestamp.
- No `throw` inside a viewport may bypass report persistence.
- Harness-level failure is reported separately from product finding.
- A browser crash may retry once with a fresh context; repeated crash is `HARNESS_FAIL`, not a 44px product finding.
- Output order is deterministic.

Suggested report schema:

```json
{
  "status": "PASS|FAIL|HARNESS_FAIL",
  "source_hash": "sha256",
  "requirement_id": "WS-A11Y-CONTROL-001",
  "viewports": [
    {
      "name": "desktop-1280",
      "status": "PASS|FAIL",
      "checks": 0,
      "violations": [],
      "screenshot": "path"
    }
  ],
  "summary": {
    "viewports_run": 5,
    "viewports_passed": 5,
    "controls_measured": 0,
    "p0": 0,
    "p1": 0
  }
}
```

## 18. Action-control measurement contract

Browser collector must:

1. Query visible actionable workspace controls by semantic role and approved classes.
2. Exclude `display:none`, `visibility:hidden`, inert, zero-area and intentionally non-interactive elements.
3. Include disabled controls if visible and still presented as action controls.
4. Measure `getBoundingClientRect()` after fonts/layout settle.
5. Record width, height, computed min-height, line-height, padding, display, selector signature and accessible name.
6. Fail if height <44px by more than small floating-point tolerance.
7. For icon-only controls, also fail if width <44px.
8. Detect clipping by overflow ancestors.
9. Detect overlap with sibling interactive controls.
10. Check focus-visible and keyboard reachability for enabled controls.
11. Repeat relevant measurement in menu/modal open states.
12. Use CSS pixels, not screenshot pixels/device scale pixels.

Do not hide violation by rounding 43.5 to 44. Report raw values.

## 19. Independent browser-owner protocol

Source owner and independent QA owner must be distinguishable.

- Source owner publishes exact freeze hash and affected requirement.
- QA owner verifies hash before launch.
- QA owner allocates isolated QA lane/port, never port 3000.
- QA owner does not edit source.
- QA owner runs all required viewports in one command.
- QA owner writes immutable report/screenshot paths.
- QA owner rechecks hash after run.
- If unchanged and all pass: issue `BROWSER_MATRIX_PASSED`.
- If unchanged and any fail: issue `BROWSER_MATRIX_FAILED` with complete matrix.
- If changed: issue `SOURCE_DRIFT_INVALIDATED_QA`, no product verdict.
- QA owner releases only its runtime resources.

## 20. Release and product independence

Implement/report four verdicts separately:

```text
PRODUCT_DEVELOPMENT=ACTIVE|HARD_BLOCKED|COMPLETE
CURRENT_SLICE=READY|ACTIVE|SOURCE_FREEZE|FIX_REQUIRED|VERIFIED|DONE
QA_EVIDENCE=NOT_STARTED|RUNNING|AWAITING_BROWSER_RETEST|PARTIAL|FAIL|PASS|INVALIDATED
RELEASE_READINESS=NOT_REQUESTED|BLOCKED_PENDING_EVIDENCE|BLOCKED_BY_P0_P1|READY_FOR_RELEASE_REVIEW|APPROVED
```

Rules:

- Release pending evidence never sets product development to blocked.
- Product backlog can continue in non-overlapping slices during release wait.
- Frozen exact path cannot be edited until QA event or explicit reopen.
- Broad build/deploy remains release-owned.
- Product QA PASS does not imply release approved.
- Release gate consumes current source-hash evidence only.
- If release evidence fails, root-cause repair loop reopens only affected slice.

## 21. Acceptance tests: state model

1. Master goal old status blocked + no live hard blocker + explicit resume -> product ACTIVE.
2. Current source frozen for browser QA -> slice SOURCE_FREEZE, product ACTIVE.
3. Browser evidence missing -> release BLOCKED_PENDING_EVIDENCE, product ACTIVE.
4. Browser PASS current hash -> slice VERIFIED, QA PASS, release READY_FOR_RELEASE_REVIEW.
5. Browser FAIL current hash -> slice FIX_REQUIRED, QA FAIL, product ACTIVE.
6. Hash drift during QA -> QA INVALIDATED, no product PASS/FAIL claim.
7. Missing credential for required production action + no safe work -> master HARD_BLOCKED/NEEDS_USER according canonical model.
8. Three temporary lease waits -> no `update_goal(blocked)` action.
9. Three goal turns with same live unrecoverable hard blocker -> block eligible only if no safe work.
10. Historical release ledger blocked does not override fresh product state.
11. Release approved does not mark product complete when backlog remains.
12. Slice done updates backlog/next slice without closing master goal.

## 22. Acceptance tests: requirements and CSS

13. Requirement record names selector, role, viewports, states and expected metric.
14. Static token contract exposes `--control-min-height: 44px`.
15. Workspace action primitive consumes token.
16. Product stylesheet cannot lower action target below token.
17. No new viewport-specific 44px patch when invariant is global.
18. CSS parser classifies every moved rule; unknown remains legacy.
19. Product selector in shared primitive fails ownership validation.
20. Cross-product selector list fails validation.
21. Import/layer order compiles under repo toolchain.
22. Each extraction batch preserves representative computed style or has reviewed intentional delta.
23. No product source outside its ownership is edited by the wrong slice.
24. `globals.css` entrypoint final budget is measured.
25. Total CSS does not grow without an accepted reason.
26. `!important` count does not increase in migration; any temporary increase is P2 debt with owner/deadline.

## 23. Acceptance tests: browser matrix

27. Required five viewports all execute after first viewport failure.
28. Report persists every viewport result.
29. Desktop 1280 42px fixture fails requirement.
30. Mobile 360 44px fixture passes.
31. Tablet 768 42px fixture fails without aborting desktop.
32. Icon-only 43px width fails.
33. Hidden control excluded.
34. Clipped 44px control fails clipping check.
35. Overlapping controls fail even when each is 44px.
36. Source hash before/after mismatch invalidates run.
37. Browser crash classified HARNESS_FAIL and does not rewrite product assertion.
38. Reduced-motion context does not change target measurement.
39. Keyboard focus evidence collected for enabled controls.
40. Final exit code reflects aggregate P0/P1 after all viewports.

## 24. Cross-product regression matrix for shared CSS

Because shared CSS changes can affect all products, run scoped safety evidence without editing unrelated products:

### Workspace/company CMS

- `/workspace` relevant views including `#cms_settings`.
- 360/390/430/768/1280.
- Controls, navigation, save semantics, overflow, overlap, text clipping.

### Company public routes

- `/`, `/services`, `/contact`, `/news` and localized equivalents affected by shared nav/styles.
- Mobile + desktop nav, CTA, locale, auth/admin controls.

### STOS safety sample

- `/stos`, one workspace route and one `/u/<slug>` public page.
- Check blank page, overflow, CTA, nav and obvious style loss.
- Report under STOS safety evidence; do not claim full STOS product QA.

### Cho Kenh safety sample

- `/cho-kenh`, `/cho-kenh/catalog`, one listing detail/trust route.
- Check search/nav/filter controls, overflow, CTA and style loss.
- Report under Cho Kenh safety evidence; do not claim full Cho Kenh product QA.

## 25. Implementation sequence

Execute in this order:

### Step 1 - fresh audit

- Verify current `globals.css` hash/size/lines.
- Inspect live source freeze, lease, browser owner, runtime and release state.
- Verify exact ownership for planned files.
- Capture current state artifact without rewriting frozen source.

### Step 2 - state model root fix

- Implement orthogonal product/slice/source/QA/release schema and reconciler.
- Migrate sanitized/current local orchestration state.
- Treat this user message as explicit resume.
- Persist four-state summary.
- Run state tests.

### Step 3 - browser aggregator root fix

- Modify QA harness to aggregate all viewports.
- Add invariant measurement and source-hash binding.
- Test with controlled fixtures/temp runtime.
- Do not touch frozen CSS.

### Step 4 - independent retest of frozen hash

- Acquire QA runtime lane only.
- Verify frozen hash.
- Run 360/390/430/768/1280 in one invocation.
- Persist full report and screenshots.
- Recheck hash.
- Emit PASS/FAIL/INVALIDATED event.

### Step 5 - transition current slice

- PASS: slice VERIFIED, QA PASS, release READY_FOR_RELEASE_REVIEW; release source freeze.
- FAIL: slice FIX_REQUIRED; source owner reopens exact path; fix root invariant once; new hash; full rerun.
- INVALIDATED: resolve source owner/hash drift; no UI patch based on invalid evidence.

### Step 6 - token and CSS architecture baseline

- Start a new shared-platform slice and lease.
- Build AST inventory, ownership manifest and layer compile probe.
- Introduce tokens/primitives in smallest behavior-preserving batch.
- Run shared regression matrix.

### Step 7 - incremental decomposition

- Workspace batch.
- Company Site batch.
- STOS owner handoff batch.
- Cho Kenh owner handoff batch.
- Utilities/dedupe batch.
- Legacy retirement batch.
- QA and rollback evidence after every batch.

### Step 8 - documentation and handoff

- Update only canonical docs/checklist.
- Record ownership, source hashes, moved selectors, tests and next batch.
- Do not deploy.

## 26. Required commands and repo-native gates

Inspect `package.json`; use actual scripts, not invented commands. Expected relevant gates include:

- `npm run qa:source`
- `npm run qa:product-ownership -- --namespace <namespace> --thread-id <thread-id> --file <exact-file>`
- `npm run qa:duy-responsive-uiux-hooks`
- `npm run qa:workspace-saas:browser`
- `npm run qa:cms-saas:browser`
- `npm run qa:responsive` when isolated/debug intent is valid.
- `npm run qa:visual-overlap` when isolated/debug intent is valid.
- `npm run qa:public-nav`
- `npm run typecheck`
- orchestration state/reconciler tests.
- lease broker tests.
- runtime isolation tests.
- goal/governance validation.

Do not run `qa:predeploy`, build, release train or deploy in this no-deploy root-fix task unless the user later explicitly requests release review.

## 27. Root-cause repair loop

For every failure:

1. Capture source hash, viewport, route, role, state, selector signature, measurement and error fingerprint.
2. Classify `REQUIREMENT`, `PRODUCT_CSS`, `SHARED_PRIMITIVE`, `CASCADE_LAYER`, `OWNERSHIP`, `SOURCE_DRIFT`, `BROWSER_HARNESS`, `RUNTIME`, `GOAL_STATE`, `RELEASE_EVIDENCE`.
3. Reproduce with smallest deterministic test.
4. Find canonical source/owner.
5. If frozen, do not edit until explicit reopen event.
6. Fix invariant/root cause at correct layer.
7. Rerun smallest test.
8. Rerun complete five-viewport matrix for current source hash.
9. Rerun cross-product safety gates for shared changes.
10. If same fingerprint repeats twice, meta-diagnose acceptance scope, source-of-truth, CSS order, stale server/artifact, wrong base URL, wrong viewport, font/layout readiness, product root leakage and test fail-fast behavior.

Do not mark master goal hard blocked while safe repair/test/doc/migration work remains.

## 28. Rollback

Every batch needs rollback:

- State schema: backup V1, idempotent migration, reader fallback.
- Browser harness: previous script + fixture comparison; no loss of existing checks.
- Token batch: restore previous declarations and import order.
- CSS extraction: manifest maps every moved rule to original line/order and target file; rollback can restore batch without affecting later unrelated batches.
- Ownership registry: revert exact path assignments with validation.
- Freeze transition: preserve old/new hashes and event sequence.

Rollback must not use `git reset --hard`, broad checkout or deletion of unrelated changes.

## 29. Observability

Record:

- product goal state;
- slice state;
- source state/hash/freeze owner;
- QA state/current matrix progress;
- release state;
- resume epoch;
- lease ID/path/owner;
- browser runtime lane/port/PID;
- requirement ID;
- viewport pass/fail totals;
- CSS per-layer metrics;
- migration batch ID;
- evidence paths;
- next safe action.

Dashboard must not show generic green/red only. It must surface independent states and stale-vs-current timestamps.

## 30. Completion criteria

Task is PASS only when:

- Master goal local effective state is ACTIVE unless a fresh hard blocker is proven.
- Current slice accurately shows SOURCE_FREEZE/AWAITING_BROWSER_RETEST or its later verified/fix-required transition.
- Release remains independently BLOCKED_PENDING_EVIDENCE until complete browser PASS.
- Browser harness runs all five required viewports and aggregates results.
- 44px requirement exists as invariant, not a mobile breakpoint rule.
- Current frozen hash receives complete PASS/FAIL/INVALIDATED evidence.
- Token architecture and CSS migration plan are implemented to the safe extent ownership/freeze allows.
- CSS decomposition proceeds in tested batches, not one blind rewrite.
- Ownership registry maps product styles separately.
- State, ownership, lease, runtime and browser regression tests pass.
- No deploy occurs.

If full CSS decomposition cannot safely finish in one run because product owners must take separate batches, do not label master goal blocked. Mark completed batches DONE, queued product batches READY/WAITING_FOR_OWNER as applicable, product ACTIVE, and provide exact resume packets.

## 31. Final output contract

Return exactly:

```md
# DUYTRUYENTHONG Root-Fix Result

Master goal: duytruyenthong-master-goal
Product: ACTIVE | HARD_BLOCKED | COMPLETE
Current slice: READY | ACTIVE | SOURCE_FREEZE | FIX_REQUIRED | VERIFIED | DONE
Source: EDITABLE | SOURCE_FREEZE | DRIFTED
QA: NOT_STARTED | RUNNING | AWAITING_BROWSER_RETEST | PARTIAL_EVIDENCE | FAIL | PASS | INVALIDATED_BY_SOURCE_DRIFT
Release: NOT_REQUESTED | BLOCKED_PENDING_EVIDENCE | BLOCKED_BY_P0_P1 | READY_FOR_RELEASE_REVIEW | APPROVED

## Root causes confirmed
- requirements classification
- goal-state modeling
- CSS ownership/cascade
- browser harness

## Current source
- globals.css SHA-256
- bytes/lines
- freeze owner and event

## Changes
- file
- ownership namespace
- reason
- rollback

## Browser matrix
| Viewport | Status | Controls measured | Violations | Evidence |

## CSS architecture
- layers created
- selectors/rules migrated
- legacy remaining
- bytes and important count before/after

## State migration
- old state
- effective current state
- resume event/epoch
- external sync state

## QA commands
- command, result, evidence

## Remaining batches
- state, owner, exact paths, prerequisites, next event

## Final decision
- PASS | PASS_WITH_RISK | HARD_BLOCKED
```

Khong noi `PASS` neu browser matrix chua chay du 360/390/430/768/1280 tren cung source hash. Khong noi `HARD_BLOCKED` neu chi dang source freeze, cho browser retest, cho release evidence, hoac con safe non-overlapping work. Bat dau fresh audit va implement ngay.
