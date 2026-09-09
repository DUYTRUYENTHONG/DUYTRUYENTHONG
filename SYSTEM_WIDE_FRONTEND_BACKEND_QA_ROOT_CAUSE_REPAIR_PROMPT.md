# EXECUTION PROMPT - SYSTEM-WIDE FRONTEND/BACKEND QA AND ROOT-CAUSE REPAIR

> Paste this entire file into the QA/Tester task. This is an execution overlay,
> not a new QA policy, checklist, agent hierarchy or release control plane.

---

## 0. Prompt identity

```text
PROMPT_ID=system-wide-frontend-backend-qa-root-cause-repair
PROMPT_VERSION=1.1.0
PROMPT_DATE=2026-09-03
PRIMARY_ROLE=Independent QA/Tester and Root-Cause Verification Lead
SYSTEM_SCOPE=growth-commerce-os portfolio
MODEL_FAMILY=Codex-only
SOURCE_MUTATION=allowed-through-correct-owner-for-verified-fixes
PRODUCTION_DATA_MUTATION=forbidden
DEPLOY_INTENT=no-deploy
```

## 1. Mandatory dedupe receipt

This prompt has already been classified as an extension of existing QA
authority, not a replacement.

```yaml
DEDUPE_RECEIPT:
  requested_artifact_type: qa-execution-prompt
  requested_product_id: portfolio-wide
  decision: EXTEND_EXISTING
  canonical_qa_policy: growth-commerce-os/QA_CHECK_BEFORE_DEPLOY.md
  canonical_operating_skill: C:/Users/CROSSIAN/.codex/skills/qa-check-agent/SKILL.md
  orchestration_parent: AI_ORCHESTRATION_V4_BA_TRACKING_CONTROL_ROOM_EXECUTION_PROMPT.md
  delta_only_scope:
    - current system topology audit
    - frontend/backend defect discovery
    - cross-product journey verification
    - owner-routed root-cause repair
    - independent retest and release decision
    - 2026-09-03 source/contact/SEO/lifecycle/STOS remediation campaign
  forbidden_duplication:
    - another QA checklist
    - another QA agent persona
    - copied product-specific QA prompts
    - duplicate bug tickets for the same failure signature
```

Before creating any issue, test, task or developer prompt:

1. Search the current V4 goal/spec/sprint/task/event state.
2. Search active issue and QA evidence records.
3. Search the canonical QA checklist and existing repo-native tests.
4. Compare product, route/API, failure signature, acceptance contract and source
   lineage.
5. Reuse or extend existing work when it owns the same outcome.
6. Create only a delta task when new scope is proven.

A rerun, retry, new screenshot or different viewport does not automatically
justify a new issue. Attach evidence to the existing defect unless the root
cause or acceptance boundary is different.

## 2. Authority and source of truth

Read these sources before testing or changing code:

1. The founder's latest request.
2. `C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os\QA_CHECK_BEFORE_DEPLOY.md`
3. `C:\Users\CROSSIAN\.codex\skills\qa-check-agent\SKILL.md`
4. `C:\Users\CROSSIAN\.codex\skills\qa-check-agent\references\qa-check-protocol.md`
5. `C:\Users\CROSSIAN\Downloads\chợ kênh\AI_ORCHESTRATION_V4_BA_TRACKING_CONTROL_ROOM_EXECUTION_PROMPT.md`
6. Current source, Git, runtime, database, browser and deployment evidence.
7. Approved product specs and acceptance criteria.

Rules:

- `QA_CHECK_BEFORE_DEPLOY.md` remains the only canonical repo QA checklist.
- Do not create or append another broad checklist.
- This prompt tells you how to execute the current audit and repair campaign.
- Current evidence outranks stale chat summaries and old QA reports.
- Production behavior is evidence, but production source must be established by
  provenance; do not infer it from a local branch name.
- `deploy-artifacts`, old worktrees, `.next*`, screenshots and reports are not
  automatically canonical source.
- Never call the entire system PASS from one product, one viewport, one browser
  or one successful build.

## 3. Mission

Audit the complete current system to identify whether frontend, backend, API,
auth, data, CMS, integration, performance, security, observability and user
journeys contain defects.

For every valid defect:

```text
discover
-> reproduce
-> classify severity
-> isolate the root cause
-> identify the canonical owner/source
-> dispatch a bounded developer fix packet
-> independently review the patch
-> rerun the smallest failed check
-> rerun the affected regression boundary
-> update evidence and issue state
```

Do not stop at a findings report when the problem is locally fixable. Continue
through repair and independent verification. Do not hide external blockers or
fabricate a pass when secrets, irreversible data access or third-party
authorization are genuinely required.

## 4. Definition of “the complete system”

Discover the live topology first. The initial expected map is:

### Product lane A - DuyTruyenThong Company Site and CMS

- Root public company routes and shared public shell where still canonical.
- Company Site/CMS app under `apps/company-site-web` where canonical.
- Public pages, services, policies, landing pages, bio and contact flows.
- Content Hub articles, hubs, topics and authors.
- CMS authentication, user roles, content CRUD, revisions, preview, publish,
  rollback, media, templates and subsite/site-information workflows.

### Product lane B - STOS

- `apps/stos-web` when it is the canonical deployable.
- Anonymous template discovery.
- Authentication and activation.
- Studio/editor, template application and publishing.
- Public portfolio pages, contact/lead actions, analytics, domain and account
  flows.

### Product lane C - Chợ Kênh

- Root Chợ Kênh routes and APIs until an isolated canonical app exists.
- Marketplace discovery, catalog, search/filter and listing detail.
- Shortlist/comparison and customer-agent interactions.
- Seller intake, buyer requests, inventory and admin/ops workflows.
- Trust, freshness, privacy and analytics behavior.

### Product lane D - Personal Blog

- `apps/duy-personal-blog` when active/canonical.
- Public article, topics, series, search, projects and contact/subscribe flows.
- Studio authoring, preview, publish, rollback and analytics.

### Platform lane E - Shared and orchestration

- Shared packages: auth contracts, data contracts, platform core and UI
  primitives.
- Root shared shell, design tokens, navigation, persistence and release
  boundaries.
- BA intake, orchestration console, V4 events/outbox/worker/evidence paths.
- Build, deployment, environment, monitoring and rollback contracts.

This map is a hypothesis. Confirm route and source ownership before executing a
lane. If two implementations claim the same product capability, report a
source-of-truth defect before functional QA.

## 5. Current baseline to re-audit

Treat these as dated observations, not guaranteed facts:

- Repository was observed on branch `release/company-site-v2` at
  `2dac09540141`.
- Worktree had approximately 1,478 changed entries, including about 1,382
  untracked entries.
- `src` and `apps` contained roughly 635 files, 101 pages and 96 API routes.
- Apps observed: `company-site-web`, `duy-personal-blog`, `stos-web`.
- Shared packages observed: `auth-contracts`, `data-contracts`,
  `platform-core`, `ui-primitives`.
- Many `.next*`, temporary QA and historical artifact directories existed.
- The root package exposed a large number of overlapping QA/release scripts.

Do not test or repair “the whole system” directly from that state without first
selecting a canonical source candidate. A dirty worktree may contain valid user
work, stale generated output and unrelated product changes simultaneously.

## 5A. Current QA result reconciliation - 2026-09-03

This section is the delta for the current campaign. Re-audit if source changes
after this timestamp.

### 5A.1 Fresh checks executed

```text
CHECK: node scripts/automation-source-steward.mjs
RESULT: BLOCKED
EVIDENCE: 45 differing tracked-file overlaps across registered worktrees;
          no conflict markers; no blocker-class suspicious source patterns.

CHECK: npm run ownership:check
RESULT: PASS
EVIDENCE: ownership registry structure and required namespaces are valid.

CHECK: exact ownership evaluation for affected files
RESULT: PARTIAL
EVIDENCE:
  PASS product:company-site:
    src/components/contact-buttons.tsx
    src/hooks/use-floating-contact-visibility.ts
    src/styles/company-site/floating-contact.module.css
  PASS product:stos:
    apps/stos-web/src/config/stos-activation.json
    apps/stos-web/src/lib/stos-origin.ts
    apps/stos-web/src/lib/env.ts
  UNASSIGNED:
    src/app/robots.ts
    scripts/qa-content-engine-readiness.cjs
    scripts/qa-saas-lifecycle-intelligence.cjs

CHECK: node scripts/qa-duy-responsive-uiux-hooks.cjs
RESULT: FAIL
EVIDENCE: floating-contact source assertion failed.

CHECK: node scripts/qa-content-engine-readiness.cjs
RESULT: FAIL
EVIDENCE: robots source assertion failed.

CHECK: node scripts/qa-saas-lifecycle-intelligence.cjs
RESULT: FAIL
EVIDENCE: browser-runner package-script assertion failed.

CHECK: npm --prefix apps/stos-web run qa:origin-contract
RESULT: PASS 16/16

CHECK: npm --prefix apps/stos-web run qa:vercel-contract
RESULT: PASS 32/32

CHECK: canonical SaaS browser runtime-runner dry-run
RESULT: PASS
EVIDENCE: command classified in automation lane, scope shared, isolated port
          allocated; no release/process guard lock was active.
```

### 5A.2 Corrected diagnosis

Do not execute the original seven-item handoff literally. It mixed confirmed
product defects, stale test expectations, ownership gaps and environment
configuration.

The corrected state is:

| Area | Classification | Current conclusion |
|---|---|---|
| Source stewardship | confirmed P1 provenance/integration risk | 45 differing tracked overlaps and many candidate lineages prevent a trustworthy assembled candidate |
| Ownership registry | structural PASS plus three exact gaps | do not rewrite all ownership; assign only proven unassigned paths after topology review |
| Company floating contact | unresolved behavior versus stale static assertion | static gate fails, but browser behavior has not yet proven the product hook defective |
| Robots/content gate | confirmed harness-contract drift candidate | source protects additional private/search surfaces; exact source-string assertion rejects the safe superset |
| SaaS lifecycle gate | confirmed stale harness expectation | package uses canonical runtime runner and its dry-run passes; test still requires old command-gate string |
| STOS origin code | PASS | origin and dedicated-project contracts pass; do not patch application logic |
| STOS production build env | configuration evidence missing | release owner must bind the source-approved public origin to the dedicated STOS project before production build |
| Full browser matrix | intentionally pending | run only after a canonical candidate and focused gates pass |

### 5A.3 Dedupe and active-work decision

The Company navigator returned:

```text
DECISION=RECONCILE
EXISTING_WORK_REF=release/company-site-cms-content-ops-v1
SOURCE_OF_TRUTH_RISK=MULTIPLE_COMPANY_CANDIDATES_REQUIRE_RECONCILIATION
OBSERVED_REFS=25
OBSERVED_WORKTREES=62
```

Therefore:

- Do not create another Company Site feature sprint.
- Attach Company findings to the existing reconciliation/integration work.
- This system-wide QA prompt remains the execution authority for verification;
  it does not become a new Company product source.
- STOS configuration work remains a separate `product:stos`/`release:stos`
  packet and must not modify Company source.

## 5B. Mandatory remediation sequence

Run R0 through R6. Read-only comparisons may overlap, but no code patch may
start from an unresolved source lineage.

### R0 - Reconcile source and worktree lineage

**Owner**

`platform:shared` Source Steward, with the accountable product owner for every
overlapping product path.

**Root cause to resolve**

The main checkout and multiple dirty worktrees modify the same tracked files
differently. The current preflight scanner calls each such case active, while
the repository lacks one reconciled per-product continuation that can be frozen
and tested.

**Required actions**

1. Inventory all worktrees with path, branch/ref, HEAD, dirty tracked paths,
   active PID/runtime/lease, V4 task/candidate linkage and latest owner activity.
2. Classify each worktree:

```text
ACTIVE_OWNED_WORK
CANONICAL_CANDIDATE
HISTORICAL_EVIDENCE
SUPERSEDED_CANDIDATE
ABANDONED_REQUIRES_OWNER_DECISION
SAFE_TO_REMOVE_AFTER_BACKUP
```

3. Never infer inactivity only from age or detached HEAD.
4. For each of the 45 overlap records, perform a three-way comparison:

```text
common base
current checkout diff
worktree diff
accepted product contract and QA evidence
production/candidate ancestry
```

5. Preserve the implementation that satisfies the accepted contract. Do not
   automatically choose the newest, largest or production-looking branch.
6. Select one canonical continuation per product and one explicit shared
   integration base.
7. Port only accepted deltas into clean isolated worktrees.
8. Commit source; keep generated runtime/evidence outside source commits.
9. Ask owners to archive/remove superseded worktrees only after diff manifest,
   backup/reference and zero-active-process evidence exist.
10. Improve source-steward classification only if needed so historical clean
    evidence is not called active. Never weaken detection of dirty tracked
    overlap merely to obtain PASS.

**Acceptance**

- Every reported overlap has a disposition and owner.
- Canonical Company, STOS, Chợ Kênh and shared SHAs are recorded separately.
- No accepted user change is lost.
- The candidate under test is clean and reproducible.
- `node scripts/automation-source-steward.mjs` returns PASS on the selected
  integration candidate.
- `git status --short` is empty for that candidate after deterministic
  generation/cleanup.

**Evidence**

```text
WORKTREE_DISPOSITION_LEDGER
OVERLAP_THREE_WAY_DECISIONS
CANONICAL_PRODUCT_SHA_MAP
SOURCE_TREE_DIGESTS
SOURCE_STEWARD_PASS
```

### R1 - Close only proven ownership gaps

**Owner**

`docs:orchestration` for registry mutation, reviewed by `platform:shared` and
the affected product owners.

**Root cause**

`ownership:check` validates registry structure but does not prove coverage of
every current file. Exact-path evaluation found three unassigned files.

**Expected ownership, subject to topology confirmation**

```text
platform:shared
  src/app/robots.ts
  scripts/qa-content-engine-readiness.cjs
  scripts/qa-saas-lifecycle-intelligence.cjs
```

Rationale:

- Root `robots.ts` governs the assembled root route graph, not one isolated
  product component.
- Both static harnesses validate shared workspace/release contracts and are
  analogous to existing shared static QA scripts.

**Required actions**

1. Confirm the root routes are still assembled under the shared root.
2. Add the smallest exact/glob ownership entries without matching unrelated
   product scripts.
3. Do not reassign Company contact or STOS app paths; they already pass their
   product ownership checks.
4. Check all files changed by R2-R4 before editing.
5. Reject ambiguous multiple-owner matches.

**Acceptance**

```powershell
npm run ownership:check
node scripts/qa-product-goal-ownership.mjs --namespace platform:shared --file src/app/robots.ts --file scripts/qa-content-engine-readiness.cjs --file scripts/qa-saas-lifecycle-intelligence.cjs --file package.json
node scripts/qa-product-goal-ownership.mjs --namespace product:company-site --file src/components/contact-buttons.tsx --file src/hooks/use-floating-contact-visibility.ts --file src/styles/company-site/floating-contact.module.css
node scripts/qa-product-goal-ownership.mjs --namespace product:stos --file apps/stos-web/src/config/stos-activation.json --file apps/stos-web/src/lib/stos-origin.ts --file apps/stos-web/src/lib/env.ts
```

All must PASS on the canonical candidate.

### R2 - Resolve Company floating-contact behavior correctly

**Owner**

`product:company-site`, attached to the existing Company reconciliation work.

**Fresh finding**

The static hook test requires this exact one-line source marker:

```text
const canShow = scrollY > showAfter && !consentBannerVisible
```

The current hook expresses `canShow` over multiple lines and adds valid guards
for visible inline contact actions, mobile menu, modal and virtual keyboard.
Therefore the static failure alone does not prove a product regression.

**Required diagnostic order**

1. Run against the canonical Company candidate, not the dirty root checkout.
2. Inspect the accepted Company contact UX contract and previous valid visual
   baseline.
3. Run behavior-first focused browser checks on `/`, `/en`, `/contact`,
   `/services` and one long-content subpage when those routes are canonical.
4. Cover 320, 360, 390, 430, 768 and 1280 px.
5. Verify:

```text
dock hidden before threshold
dock visible after threshold
consent/menu/modal/keyboard suppress interaction
inline contact controls prevent duplicate overlap
service/channel CTA rows are not covered
footer/end-of-page behavior remains usable
safe-area and orientation changes remain correct
touch targets >= 44px
no horizontal overflow
no scroll flicker or raised/visible oscillation
reduced motion respected
no console/hydration errors
```

6. If behavior passes, fix the static harness to validate semantics instead of
   exact whitespace/line formatting. Prefer AST or exported pure-state logic.
7. If behavior fails, patch the hook/component/scoped module at the actual state
   or geometry defect, then add a regression that fails on the valid pre-fix
   implementation.
8. Do not append another global CSS override and do not remove menu/modal/
   keyboard safety guards merely to match the stale string.

**Focused retest**

```powershell
node scripts/qa-duy-responsive-uiux-hooks.cjs
node scripts/qa-duy-floating-cta-scroll-performance.cjs
# Run the established owned-runtime floating-contact browser checks on the
# canonical candidate and dedicated QA port.
```

Then run `npm run qa:duy-responsive-uiux-hooks` through the canonical command
gate. Source and browser evidence must both pass.

### R3 - Reconcile robots and content-engine semantics

**Owner**

`platform:shared`, with Company SEO/content acceptance reviewed by
`product:company-site`.

**Confirmed mismatch**

The harness checks an exact source substring representing only:

```text
disallow: ["/workspace", "/api"]
```

Current source returns a safe superset:

```text
disallow: ["/workspace", "/api", "/preview", "/search"]
```

The exact string comparison fails even though required private paths remain
disallowed. Do not delete `/preview` or `/search` from robots solely to satisfy
the test.

**Required actions**

1. Confirm SEO policy for public pages, preview routes and search-result pages.
2. Define the semantic invariant:

```text
public content routes may be crawled
workspace/API/preview routes must not be crawled
search indexing follows the approved SEO policy
sitemap points to the canonical absolute /sitemap.xml URL
robots and sitemap never expose draft/private URLs
```

3. Replace exact source formatting checks with a structured contract. Prefer:

- a pure exported robots-policy value consumed by `robots.ts` and the test; or
- TypeScript AST parsing that validates required members and permits approved
  safe additions.

4. Add runtime/build evidence for `/robots.txt` and `/sitemap.xml`.
5. Test that published Company/Content documents appear where intended and
   draft/preview/workspace/API routes do not.
6. Keep source and harness changes minimal and ownership-correct.

**Acceptance**

```powershell
node scripts/qa-content-engine-readiness.cjs
node scripts/qa-content-hub-contract.cjs
npm run qa:content-engine
```

Built-route checks for robots and sitemap must also PASS on the immutable
candidate.

### R4 - Update SaaS lifecycle harness to the canonical runtime runner

**Owner**

`platform:shared` for static contract; `release:shared` only for assembled
browser/release execution.

**Confirmed root cause**

The package script now correctly uses:

```text
node scripts/automation-runtime-runner.mjs qa:saas-lifecycle:browser -- node scripts/qa-saas-lifecycle-browser.cjs
```

The static test still requires the superseded
`automation-command-gate.mjs ... && node ...` string. The canonical runner is
listed in runtime policy, and dry-run already PASSed.

**Required actions**

1. Update the static contract to require the runtime runner, command name,
   separator and browser script semantically.
2. Avoid full-string equality where harmless quoting/spacing can change.
3. Assert `qa:saas-lifecycle:browser` remains registered as an owned-server/
   browser command in runtime policy.
4. Assert dry-run allocates the automation lane and a valid isolated port.
5. Assert the runner prevents raw unowned server execution and cleans its own
   runtime state.
6. Preserve the browser script's actual analytics assertions; do not weaken
   page-view through qualified lifecycle coverage.
7. Run browser QA only after the static contract passes and a canonical source
   runtime is available.

**Acceptance**

```powershell
node scripts/qa-saas-lifecycle-intelligence.cjs
node scripts/automation-runtime-runner.mjs qa:saas-lifecycle:browser --dry-run -- node scripts/qa-saas-lifecycle-browser.cjs
npm run qa:saas-lifecycle
npm run qa:saas-lifecycle:browser
```

Require runtime cleanup evidence and no foreign process termination.

### R5 - Bind STOS public-origin configuration without changing code

**Owners**

- `product:stos` owns the origin contract and activation manifest.
- `release:stos` owns remote Vercel environment and immutable build/deploy
  evidence.

**Fresh result**

`qa:origin-contract` PASSed 16 checks and `qa:vercel-contract` PASSed 32 checks.
The active manifest declares a dedicated STOS project distinct from the
combined root project. This is a configuration task, not a request to add a
fallback or weaken the production requirement.

**Required actions**

1. Verify through official Vercel API/CLI that the dedicated project identity
   matches the activation manifest before mutation.
2. Verify the intended production host/alias is currently owned by that
   project. The manifest currently names `stos-web-delta.vercel.app`; treat it
   as expected evidence, not unquestioned truth.
3. Set `NEXT_PUBLIC_STOS_SITE_URL` to the exact credential-free HTTPS canonical
   STOS origin in the required remote Production environment and any Preview
   environment intentionally used by the release train.
4. Do not set it on the forbidden combined `growth-commerce-os` project.
5. Do not add a production localhost fallback or derive identity from an
   arbitrary `VERCEL_URL`.
6. Pull/resolve environment through the product release adapter without
   printing secrets. This variable is public, but related token/project
   credentials remain secret.
7. Rebuild from the clean STOS candidate through the product-scoped train.
8. Verify generated public URLs, auth cookies, domain checks, portfolio links
   and release attestation use the same origin.

**Acceptance**

```powershell
npm --prefix apps/stos-web run qa:origin-contract
npm --prefix apps/stos-web run qa:vercel-contract
npm run typecheck:stos
npm run build:stos
npm run qa:artifact:stos
```

Run `npm run qa:predeploy:stos` only after the focused checks pass and only in
the authorized STOS QA lane. This remediation does not authorize production
promotion.

### R6 - Focused integration, then full browser matrix

Do not start with the broad matrix. Enter R6 only when R0-R5 applicable gates
pass on their canonical candidates.

**Order**

1. Freeze source SHA and artifact digest per product.
2. Run Company floating-contact journeys.
3. Run robots/sitemap/content runtime checks.
4. Run SaaS lifecycle browser journey.
5. Run STOS origin, activation and outcome journeys on its isolated artifact.
6. Run the shared responsive matrix only for actual shared callers.
7. Record console, network, hydration, accessibility, performance and cleanup
   evidence.
8. Reopen the owning R-step on failure; do not create a new sprint/prompt.

**Required final matrix**

- 320, 360, 390, 430, 768, 1280 and 1440 px.
- Chromium for all affected journeys.
- Firefox and WebKit for critical public/auth/editor paths.
- Keyboard, 200% zoom and reduced motion.
- No clipping, overlap, horizontal overflow or hidden primary action.
- Correct persistence and authorization where the journey writes synthetic
  data.

**Exit criteria**

- Source Steward PASS.
- Exact ownership checks PASS.
- Company hook source and behavior checks PASS.
- Content engine/robots/sitemap checks PASS.
- SaaS lifecycle static and browser checks PASS.
- STOS isolated typecheck/build/artifact/journey checks PASS.
- No P0/P1 remains in these scopes.
- All owned runtimes, ports and leases are clean.
- Candidate evidence matches source SHA.

## 5C. Prohibited shortcuts for this campaign

- Do not mass-assign every unknown file to `platform:shared`.
- Do not alter already correct Company/STOS ownership entries.
- Do not delete 62 worktrees blindly.
- Do not weaken source stewardship to ignore dirty tracked overlaps.
- Do not rewrite the floating-contact hook to match whitespace in a test.
- Do not remove safe robots disallow paths to satisfy exact string matching.
- Do not revert the SaaS browser command to the old unowned runner.
- Do not make `NEXT_PUBLIC_STOS_SITE_URL` optional in production.
- Do not run a root combined build as evidence for isolated STOS.
- Do not run the full browser matrix against the current dirty checkout.
- Do not deploy under this remediation prompt.

## 6. Non-negotiable rules

### 6.1 Independence

- QA owns reproduction, acceptance mapping, evidence and final verification.
- Frontend, backend or data developers own product-code repairs.
- A QA engineer may repair a broken QA harness, but another reviewer must verify
  that harness change before it can certify product code.
- The implementer cannot issue the final PASS for their own patch.

### 6.2 No blind cleanup

- Never reset, revert, delete or overwrite unrelated user changes.
- Never delete `.next*`, temp, screenshots, worktrees or artifacts until owner,
  canonical value and retention policy are proven.
- Never kill a process by port alone.
- Resolve PID tree, command, working directory, owner and runtime identity.

### 6.3 No fake pass

- A build pass does not prove product behavior.
- HTTP 200 does not prove a user journey.
- Static RLS text does not prove runtime authorization.
- A local test does not prove the deployed artifact.
- A screenshot does not prove persistence or API correctness.
- A test written after the patch must reproduce failure on the valid pre-fix
  baseline when practical.
- Skipped, missing, timed-out or not-applicable checks must be explicit.

### 6.4 Product isolation

- Test and repair each product in its own source/runtime/release lane.
- Do not let STOS failures block Company Site, or Chợ Kênh failures block STOS,
  unless a proven shared dependency is affected.
- Shared defects expand only to actual callers.
- Do not run broad root predeploy after every product-local change.

### 6.5 Mutation safety

- Source fixes are allowed only on canonical owned paths.
- Use synthetic QA accounts and data with cleanup.
- Do not mutate production customer data.
- Do not submit real external leads, purchases, messages or campaigns.
- Database migrations require an authorized non-production target, backup or
  reversible strategy and explicit data-owner handling.
- This request does not authorize production deployment.

## 7. Severity and release policy

Use the canonical severity model:

- `P0`: data loss, security leak, auth bypass, production outage, destructive
  migration risk or a critical transaction completely broken.
- `P1`: core journey failure, major responsive/UI regression, incorrect business
  logic, broken admin workflow or severe performance regression.
- `P2`: important defect with a viable workaround or limited affected scope.
- `P3`: polish, minor content/layout or low-risk maintainability issue.

Rules:

- No release recommendation with an open P0 or P1.
- Every reproducible in-scope P2 must be fixed or explicitly accepted by the
  product owner with impact and follow-up.
- P3 findings are never hidden; batch only when their root cause is shared.
- Severity is based on user/data/business impact, not code size.

## 8. Required execution phases

Run phases Q0 through Q9 in order. Product-local phases may execute in bounded
parallel only after source and ownership are clear.

### Q0 - Canonical source and runtime preflight

**Objective**

Establish what can be tested without corrupting or misclassifying work.

**Actions**

1. Resolve repository root, branch, HEAD, upstream and working-tree state.
2. Inventory worktrees, candidates and production provenance.
3. Classify changed paths by product and owner.
4. Separate tracked source from generated runtime/test artifacts.
5. Detect merge/conflict markers and unresolved Git operations.
6. Inventory listeners/process trees without terminating them.
7. Identify canonical environment files by names only; never print secrets.
8. Run the QA skill preflight scanner.
9. Decide whether to use an existing clean candidate or create an isolated QA
   worktree from the proven base.

**Minimum commands**

```powershell
git status --short --branch
git rev-parse --show-toplevel
git rev-parse HEAD
git worktree list --porcelain
node C:\Users\CROSSIAN\.codex\skills\qa-check-agent\scripts\qa_preflight_scan.mjs C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os
```

**Exit criteria**

- Canonical source/candidate is identified.
- Product path ownership is known.
- QA runtime/port plan cannot interfere with another task.
- Dirty/untracked source risk is explicitly resolved or isolated.

If Q0 fails, continue read-only topology and evidence work. Do not mark every
product blocked.

### Q1 - Topology, contract and coverage inventory

**Objective**

Map what exists before deciding what to test.

**Actions**

1. Enumerate deployable apps, packages, pages, route handlers and background
   workers.
2. Map each route/API to product, auth state, data source and owner.
3. Map frontend callers to API/data contracts.
4. Map database tables/RPC/storage/migrations to repositories and services.
5. Inventory test scripts by product and layer.
6. Detect duplicate or contradictory test scripts.
7. Detect duplicate source implementations for the same capability.
8. Build a requirement-to-journey-to-test traceability matrix.
9. Identify untested critical boundaries.

**Required artifacts**

```text
PRODUCT_SOURCE_MAP
ROUTE_API_AUTH_MATRIX
DATA_OWNERSHIP_MAP
TEST_INVENTORY_AND_OVERLAP
GOLDEN_JOURNEY_MATRIX
COVERAGE_GAPS
```

Do not add a test merely because a category is empty. Add tests for a concrete
contract, risk or prior failure.

### Q2 - Static, build and dependency baseline

**Objective**

Reject source-level defects before expensive browser work.

**Actions**

- Install deterministically only in an isolated canonical candidate when
  dependencies are not already valid.
- Run typecheck and production build per deployable app.
- Run lint/static checks that the repo actually defines.
- Scan for conflict markers, bypasses, unsafe casts, disabled checks, hardcoded
  credentials and server/client boundary violations.
- Run dependency audit and classify reachable runtime risk.
- Validate generated route/build manifests.
- Check bundle and artifact size regressions.
- Validate environment schema without exposing values.

**Expected command families**

```powershell
npm run typecheck
npm run build
npm --prefix apps/company-site-web run typecheck
npm --prefix apps/company-site-web run build
npm --prefix apps/stos-web run typecheck
npm --prefix apps/stos-web run build
npm --prefix apps/duy-personal-blog run typecheck
npm --prefix apps/duy-personal-blog run build
npm audit --audit-level=high
```

Run only applicable app commands after Q1 determines canonical deployables. Do
not count duplicate root/app builds as extra confidence.

### Q3 - Backend, API and service QA

**Objective**

Verify server behavior independently from the UI.

For every public, authenticated and admin API family, test:

- method and route contract;
- authentication required/optional behavior;
- server-side authorization and role boundaries;
- request schema validation;
- content type and body-size handling;
- missing, malformed, duplicate and boundary inputs;
- response status and stable error envelope;
- no sensitive fields in public responses;
- idempotency for retryable writes;
- concurrency and lost-update behavior;
- transaction atomicity;
- pagination, sorting, filtering and search semantics;
- rate limit and abuse controls where required;
- timeout, cancellation and retry behavior;
- third-party degradation/fallback;
- cache key, invalidation and privacy boundaries;
- structured logs, trace correlation and safe errors;
- backward compatibility for active callers.

Do not use the UI as the only API test. Compare response behavior against shared
data/auth contracts and repository/service invariants.

### Q4 - Database, auth, CMS and data-integrity QA

**Objective**

Verify that persistence and permissions match product claims.

Test where applicable:

- migration ordering, checksums, additive/compatible behavior and rollback or
  forward-fix plan;
- canonical storage mode and source of truth;
- no third write model for projected CMS records;
- schema exposure and runtime client configuration;
- Supabase Auth identity-to-profile reconciliation;
- anonymous, viewer, editor, approver/admin and disabled-user matrix;
- RLS on tables, views, RPCs and storage;
- cross-workspace/cross-product denial;
- expired, revoked and stale sessions;
- create/read/update/delete lifecycle;
- revision history and optimistic concurrency;
- draft/preview/public separation;
- publish and rollback persistence after reload;
- media ownership and orphan cleanup;
- backup/restore evidence appropriate to the active plan;
- audit-log completeness without secrets/PII;
- duplicate email/username and identity conflict handling;
- safe test-data cleanup.

For DuyTruyenThong CMS, verify the canonical rule:

```text
CompanyDocument = company page/service/landing/policy/bio authority
ContentDocument = article/hub/topic/author authority
CmsContentRecord = read projection only, never independent CRUD/publish source
```

Do not fake readiness by changing a feature flag while migrations, identity or
parity remain unproven.

### Q5 - Frontend feature and UI/UX QA

**Objective**

Verify real rendered behavior, not only component code.

For every critical route and changed/shared component, test:

- correct information architecture and route identity;
- header/navbar consistency across root and subpages;
- mobile navigation open/close/focus/scroll behavior;
- complete content visibility without clipping;
- footer presence and consistency;
- primary and secondary CTA hierarchy;
- contact/floating controls that do not overlap content;
- typography, Vietnamese glyphs, font loading and fallback;
- responsive text wrapping and readable line length;
- grid/list/card/carousel behavior;
- image sizing, crop, loading and alt text;
- loading, skeleton, empty, error, success and disabled states;
- dialogs, menus, toasts and form errors;
- sticky/fixed layers, z-index, safe area and mobile keyboard;
- no horizontal overflow or inaccessible off-screen action;
- stable hydration and no client/server markup mismatch;
- purposeful motion without layout shift;
- reduced-motion behavior;
- keyboard navigation and visible focus;
- semantic headings, labels, names and landmarks;
- contrast and 200% zoom/reflow;
- runtime console and network errors;
- deep-link, refresh, back/forward and locale behavior;
- analytics events without duplicate firing or private payloads.

**Core viewport matrix**

```text
320x568
360x800
390x844
430x932
768x1024
1024x768
1280x800
1440x900
1920x1080 for wide-layout sanity
```

Run every critical golden journey at representative compact mobile, tablet and
desktop widths. Run the full matrix for shared layout, navigation, typography,
responsive or visual-system changes.

**Browser policy**

- Chromium is the baseline for every journey.
- Firefox and WebKit are mandatory for critical public/auth/editor journeys and
  browser-sensitive behavior.
- Include mobile Safari/Chrome risk through the established Playwright/device
  harness when available.
- Treat a harness injection or browser-driver problem as a harness defect only
  after proving source behavior independently.

### Q6 - Product golden journeys

**Objective**

Test complete user outcomes across frontend, backend and persistence.

Validate route existence and current spec before using these expected journeys.

#### Company Site public journey

```text
home
-> navigate service/content/subpage
-> inspect consistent shell and full content
-> change locale where supported
-> open contact action
-> submit synthetic valid/invalid lead safely
-> verify API response, persistence/audit and user feedback
```

#### Company CMS content journey

```text
admin creates or activates test content user
-> authenticated login/session
-> create CompanyDocument or ContentDocument
-> save and reload
-> edit blocks/components/navigation metadata where supported
-> preview draft while public route remains protected
-> request/approve publish according to role
-> verify public route, SEO and sitemap projection
-> edit revision
-> rollback
-> verify persistence, audit and cleanup
```

Run separate artifacts for active content types instead of inferring all types
from one Page/Article test.

#### STOS activation journey

```text
anonymous template catalog
-> select template
-> authenticate/activate workspace
-> apply and customize template
-> preview responsive result
-> publish
-> open public portfolio
-> execute synthetic contact/lead action
-> verify persistence, analytics and permissions
```

#### Chợ Kênh buyer journey

```text
home/catalog
-> search/filter
-> listing detail
-> verify metrics/freshness/trust
-> shortlist/compare
-> customer-agent or buyer-request action
-> verify privacy, response and persistence
```

#### Chợ Kênh seller/ops journey

```text
seller intake
-> validation and consent
-> inventory persistence
-> authorized ops review/update
-> public listing projection
-> analytics/audit verification
```

#### Personal Blog reader/author journey

```text
home/article/topic/search
-> contact or subscribe safely
-> authorized studio create/edit/preview/publish/rollback
-> public SEO/RSS/sitemap and analytics verification
```

#### Orchestration journey

```text
BA submits request
-> product routing and dedupe
-> spec/sprint/task
-> worker result
-> independent QA evidence
-> candidate/release decision
-> Control Room trace parity
```

For each journey record route transitions, API calls, data mutations, visible
state, reload persistence, role boundaries, console/network output and cleanup.

### Q7 - Performance, security, resilience and observability

**Performance**

- Measure server response, route transition, LCP, INP, CLS and resource weight
  for critical routes.
- Identify render-blocking fonts/styles/scripts, oversized images, duplicate
  client bundles, waterfalls and unnecessary dynamic rendering.
- Test cold and warm behavior separately.
- Verify cache correctness before recommending more caching.
- Compare against a recorded baseline; do not label a page “fast” by feel.

**Security/privacy**

- Check auth bypass, IDOR/cross-tenant access, insecure direct RPC/table access,
  mass assignment, unsafe redirects and injection boundaries.
- Confirm server-side role checks even when UI controls are hidden.
- Inspect browser bundles, source maps, logs and responses for secrets.
- Run approved dependency and secret scanners where available.
- Do not perform destructive exploitation or access real customer data.

**Resilience**

- Simulate timeout, offline, stale session, partial API failure, retry and
  duplicate submission in a safe environment.
- Verify errors are recoverable and do not corrupt UI/data state.
- Verify kill switch/feature flag behavior for risky features.

**Observability**

- Confirm changed critical paths emit useful redacted logs/traces/metrics.
- Confirm correlation from browser request to API/data operation where
  supported.
- Verify alert/runbook coverage for P0/P1 runtime failures.

### Q8 - Root-cause remediation loop

**Objective**

Close verified defects instead of accumulating reports.

For each issue, create one canonical record:

```yaml
issue_id:
product_id:
severity:
title:
user_impact:
environment:
source_sha:
affected_routes_or_apis:
affected_roles_viewports_browsers:
acceptance_contract:
steps_to_reproduce:
actual_result:
expected_result:
failure_signature:
evidence_ids:
root_cause_layer:
root_cause:
canonical_owner:
owned_paths:
fix_strategy:
regression_boundary:
status:
```

Then follow this loop:

1. Reproduce on the canonical pre-fix candidate.
2. Minimize the reproduction without changing behavior.
3. Determine whether the root cause belongs to frontend, backend, data/auth,
   shared platform, QA harness, environment or specification.
4. Check for an active issue/task with the same failure signature.
5. Dispatch one delta-only developer task packet.
6. Require developer-focused tests and changed-path evidence.
7. Require independent code review.
8. Rerun the exact reproduction.
9. Rerun affected contract/journey/regression checks.
10. Close only when evidence matches the fixed source digest.

Do not patch CSS over an API defect, add frontend fallback over corrupt data,
weaken an assertion, suppress a console error, broaden a catch or hardcode test
data to obtain PASS.

### Q9 - Final regression and decision

After all fixable issues are repaired:

1. Freeze one clean candidate per deployable product.
2. Re-run source/type/build checks.
3. Run product-focused predeploy suites.
4. Run full golden journeys for affected products.
5. Run shared regression only for actual shared callers.
6. Verify no runtime/listener/lease residue.
7. Verify evidence and candidate source digests.
8. Produce independent QA sign-off and release recommendation.

Do not deploy. Return the candidate and evidence to the release automation.

## 9. Developer fix packet

Send frontend and backend fixes separately unless one atomic contract change
requires coordinated ownership.

```yaml
FIX_PACKET:
  issue_id:
  product_id:
  owner_role: frontend | backend | data-auth | shared-platform | qa-harness
  canonical_base_sha:
  exact_root_cause:
  scope_in:
  scope_out:
  allowed_paths:
  forbidden_paths:
  acceptance_criteria:
  reproduction_command_or_journey:
  required_focused_tests:
  required_evidence:
  regression_boundary:
  source_lease_required:
  runtime_requirements:
  deploy_intent: no-deploy
```

Frontend packet may cover rendering, interaction, responsive behavior,
accessibility, browser state or client performance. Backend packet may cover API,
auth, business logic, persistence, concurrency, integrations or server
performance. Do not ask both teams to “review everything.”

## 10. Test selection and efficiency

Use change-impact testing:

```text
changed path
-> owner/product
-> callers/routes/APIs/data contracts
-> acceptance risks
-> focused tests
-> golden journey
-> product predeploy
```

Rules:

- Cheap deterministic checks first.
- Reproduction before broad regression.
- Browser only after build/runtime is valid.
- Do not run all 100+ scripts after every fix.
- Run the complete relevant release suite once on the frozen candidate.
- Cache immutable dependencies/build inputs safely.
- Reuse one browser runtime for compatible read-only tests.
- Allocate unique product/task ports.
- Stop runtimes you own and prove cleanup.
- Record duration and flaky reruns.
- A flaky test must be root-caused; repeated rerun-until-pass is invalid.

## 11. Blocker handling

Separate these states:

```text
NEEDS_FIX
WAITING_EXACT_SOURCE_OWNERSHIP
WAITING_TEST_ENVIRONMENT
WAITING_CREDENTIAL
WAITING_EXTERNAL_SERVICE
AWAITING_INDEPENDENT_RETEST
INVALID_CANDIDATE
HARD_BLOCKED
```

Do not mark the system hard blocked because one product lane waits.

When a lane waits:

- preserve evidence and checkpoint;
- name the exact resource/action/owner;
- continue non-overlapping lanes;
- subscribe to the relevant wake condition;
- resume automatically when resolved.

Use `HARD_BLOCKED` only when no meaningful safe work remains and an external
operator action is unavoidable. Missing credentials do not justify fabricated
tests or bypassed auth.

## 12. Required evidence

For every check record:

```yaml
check_id:
issue_or_acceptance_id:
product_id:
layer:
environment:
source_sha:
artifact_digest:
test_data_class: synthetic | sanitized | production-read-only
command_or_journey_version:
started_at:
completed_at:
result: PASS | FAIL | SKIP | INVALID
observed_value:
expected_value:
evidence_path_or_id:
producer:
independent_verifier:
```

Evidence rules:

- Screenshots include route, viewport and source/deployment identity.
- API evidence removes tokens, secrets and private fields.
- Browser evidence includes console/network/hydration outcome.
- Data evidence uses synthetic IDs and cleanup receipt.
- Retest evidence references the original issue and failure signature.
- Old evidence cannot certify a changed source digest.

## 13. Completion criteria

The QA campaign is complete only when:

- canonical source and product ownership are known;
- every active deployable has typecheck/build evidence;
- route/API/auth/data inventory is current;
- critical frontend and backend contracts are tested;
- critical user journeys pass end to end;
- responsive/browser/accessibility coverage matches risk;
- all P0/P1 defects are fixed and independently retested;
- all in-scope P2 defects are fixed or explicitly accepted;
- every remaining P3 has an owner and rationale;
- no secret, PII or production-data mutation occurred;
- no unrelated user change was reverted;
- no owned runtime/port/lease residue remains;
- final candidate and evidence digests match;
- QA reports `PASS`, `BLOCKED` or `PASS_WITH_RISK` using the canonical policy;
- release recommendation is explicit, while deployment remains untouched.

## 14. First response required

Before modifying source, return this short packet:

```text
QA_EXECUTION_PACKET

CANONICAL_REPO_BRANCH_SHA:
WORKTREE_RISK:
PRODUCTS_AND_DEPLOYABLES_FOUND:
SOURCE_OF_TRUTH_CONFLICTS:
ACTIVE_WORK_AND_DEDUPE_RESULT:
RUNTIME_PORT_OWNERSHIP:
TEST_INVENTORY:
COVERAGE_GAPS:
LANES_SAFE_TO_RUN_NOW:
LANES_WAITING:
INITIAL_P0_P1_RISKS:
QA_PHASE_NOW:
NEXT_ACTION:
```

Then continue automatically through safe phases. Do not stop after writing the
packet.

## 15. Progress update format

At each lane/phase boundary report only changed information:

```text
PHASE_AND_LANE:
SOURCE_SHA:
CHECKS_RUN:
NEW_FINDINGS:
ROOT_CAUSES_CONFIRMED:
FIX_PACKETS_DISPATCHED:
FIXES_RECEIVED:
RETEST_RESULTS:
OPEN_P0_P1:
WAITING_CONDITIONS:
NEXT_SAFE_WORK:
```

Avoid repeated generic statements such as “still blocked” when no state changed.

## 16. Final report format

```markdown
# System-wide QA Result

## Scope And Provenance
- Canonical repository/branch/SHA:
- Products/apps checked:
- Environments checked:
- Excluded scope and reason:

## Executive Decision
- QA decision: PASS | BLOCKED | PASS_WITH_RISK
- Release recommendation: GO | NO_GO
- Open P0/P1 count:

## Frontend Result
- Routes/journeys:
- Responsive/browser/accessibility:
- Performance:
- Findings fixed:
- Remaining risks:

## Backend Result
- API/auth/data contracts:
- Persistence/concurrency/resilience:
- Security/privacy:
- Findings fixed:
- Remaining risks:

## Product Journey Results
- Company Site/CMS:
- STOS:
- Chợ Kênh:
- Personal Blog:
- Orchestration Platform:

## Root-Cause Fix Ledger
| Issue | Severity | Root cause | Owner | Fix SHA | Retest | Status |
|---|---|---|---|---|---|---|

## Checks And Evidence
- Static/build:
- API/data/auth:
- Browser/journey:
- Security/performance:
- Evidence IDs/paths:

## Candidate
- Product:
- Candidate SHA:
- Artifact digest:
- Clean status:
- Runtime cleanup:

## Remaining Actions
- Exact action:
- Owner:
- Blocking scope:
```

## 17. Start now

Start with Q0 against the live workspace. Read the canonical QA checklist; do
not copy it. Establish canonical source and product lanes, then execute the
smallest reliable tests first.

Find real defects, route each fix to the correct frontend/backend/data/shared
owner, and independently retest until every fixable in-scope defect is closed.
Do not declare the entire system PASS from partial evidence, and do not deploy
under this prompt.
