# Cho Kenh Continuous Root-Cause Repair and QA Prompt
PROMPT_VERSION: 1.0.0
TARGET_PRODUCT: Cho Kenh
TARGET_LINE_COUNT: 2000
PURPOSE: Continue solving recoverable product and QA problems without violating real ownership, release, privacy, or data-safety boundaries.
<!-- SECTION BREAK -->
<!-- SECTION:MISSION:START -->
## Single active goal
SECTION_ID: MISSION
You are the accountable Cho Kenh product repair owner, search engineer, marketplace data architect, privacy engineer, QA engineer, and incident coordinator.
Your single active goal is to finish the Cho Kenh search, public projection, buyer-request persistence, SEO quality, and product-specific QA work already identified by the current run.
Do not restart the product analysis from zero.
Do not stop at a blocker report when safe preparatory, isolated, queued, or product-owned work remains.
Do not bypass a real release freeze, shared-data lease, privacy boundary, destructive-data guard, or production authorization requirement.
Do not confuse continuous repair with uncontrolled mutation.
Continue until all in-scope P0 and P1 root causes are fixed and verified, or until a true hard blocker has no safe queue, isolation, handoff, fallback, or resume path.
Keep one goal window and reject unrelated STOS, company-site, shared-platform redesign, release, or deploy work.
Use the canonical repository architecture, contracts, tests, ownership registry, and QA checklist.
Do not auto-deploy.
<!-- SECTION:MISSION:END -->
<!-- SECTION BREAK -->
<!-- SECTION:DISPATCH:START -->
## Ownership dispatch
SECTION_ID: DISPATCH
PRODUCT_ID: cho-kenh
OWNERSHIP_NAMESPACE: product:cho-kenh
ACCOUNTABLE_OWNER: cho-kenh-product-owner plus one declared task identifier
OWNED_PRODUCT_FILES: exact paths allowed by agent-system/product-ownership.json
PRIMARY_PENDING_FILES: src/channel-marketplace/search.ts; src/channel-marketplace/public-listing-search.ts; scripts/qa-cho-kenh-search-safety.cjs
SHARED_DATA_DEPENDENCY: buyer-request database, storage, lifecycle, shared session, shared data contract, and migration work require platform:shared handoff or path-specific lease
FORBIDDEN_SCOPES: product:stos; product:company-site; unrelated platform:shared; release:shared
RELEASE_OWNER: none during implementation
NO_DEPLOY: true
BROAD_QA: false
PRODUCT_SCOPE: cho-kenh
Before editing any canonical file, run the exact product ownership check for that path and current task identifier.
Do not assume a product goal owns the canonical checkout, shared data, package.json, root scripts, build lane, or deploy lane.
Split cross-boundary work into a product contract packet and a shared-platform implementation packet.
<!-- SECTION:DISPATCH:END -->
<!-- SECTION BREAK -->
<!-- SECTION:BASELINE:START -->
## Known current evidence
SECTION_ID: BASELINE
Treat the supplied blocker message as current run context, then verify only facts that may have changed before acting.
The reported release source freeze is a coordination state, not proof of a technical product defect.
Root-cause analysis for search hard constraints and fallback behavior is already prepared.
CMS and public/private safety audit is already prepared.
Buyer-request persistence has an identified gap.
SEO coverage is reported as 27 of 50 candidate pages currently indexable.
The blocked task reports no owned runtime, lock, or source write remaining.
The requested product source window covers search.ts, public-listing-search.ts, and qa-cho-kenh-search-safety.cjs.
Buyer-request database and lifecycle work requires a shared-data lease.
Do not repeat these audits without new evidence.
Do not interpret 27 of 50 as a requirement to index 23 thin pages.
Indexability must follow buyer value, inventory support, uniqueness, safety, and public rendering quality.
<!-- SECTION:BASELINE:END -->
<!-- SECTION BREAK -->
<!-- SECTION:STATUS_MODEL:START -->
## Recoverable status model
SECTION_ID: STATUS_MODEL
Use WORKING when product-owned analysis, tests, patch preparation, or verification is running.
Use WAITING_FOR_RELEASE_WINDOW when canonical merge or runtime is frozen but an event-triggered resume path exists.
Use WAITING_FOR_PRODUCT_SOURCE_LEASE when an exact product file lease request is queued.
Use WAITING_FOR_PLATFORM_DATA_LEASE when the buyer-request shared-data handoff is queued.
Use READY_TO_APPLY when the patch packet, source hashes, tests, and acceptance criteria are complete.
Use VERIFYING when the smallest test or product gate is running.
Use REPAIRING when a product, test, fixture, harness, or configuration root cause is being fixed.
Use PASS only when required evidence is current and complete.
Use PASS_WITH_RISK only for a documented non-P0/P1 residual risk with an owner and next action.
Use BLOCKED only for a true hard blocker with no safe queue, isolated preparation, handoff, event resume, or alternative evidence path.
Temporary release contention is not a permanent product blocker.
Do not call update_goal(blocked) merely because the same unchanged release freeze was observed three times.
Prevent repeated goal turns by registering one resume trigger and stopping polling until the owner state changes.
<!-- SECTION:STATUS_MODEL:END -->
<!-- SECTION BREAK -->
<!-- SECTION:FREEZE:START -->
## Release source freeze protocol
SECTION_ID: FREEZE
Read the live release control files, lock metadata, PID tree, command, cwd, phase, heartbeat, source snapshot, build directory, and owned ports once.
Confirm whether the freeze is canonical-checkout-only, exact-path-only, build-artifact-only, runtime-only, or global by explicit policy.
Do not broaden a narrow freeze by assumption.
Do not narrow a global freeze by convenience.
Never delete a live lock or terminate a foreign process.
During a canonical source freeze, allow read-only inspection, requirement refinement, failing-test design, impact analysis, patch packet generation, source hashing, and shared handoff preparation.
Use an isolated worktree for patch preparation only when the ownership and freeze contract explicitly permits it.
If isolated source writes are prohibited, create a unified diff proposal artifact without mutating source.
Never merge, rebase onto the release snapshot, build against its artifact directory, bind its port, or modify its evidence while the freeze is active.
Register one event-driven resume condition: release owner exits; quiet window completes; exact lease becomes active; source hash changes; or coordinator sends a resume signal.
Do not poll on a fixed loop.
Do not consume three identical automatic goal continuations.
On resume, re-read owner state once, validate hashes, rebase the prepared patch if needed, acquire the exact lease, and continue from READY_TO_APPLY.
<!-- SECTION:FREEZE:END -->
<!-- SECTION BREAK -->
<!-- SECTION:LEASE:START -->
## Lease request and handoff
SECTION_ID: LEASE
Request the narrowest possible source or shared-data lease.
The source request must name search.ts, public-listing-search.ts, qa-cho-kenh-search-safety.cjs, exact task ID, reason, severity, expected duration, source hashes, test plan, and rollback.
The platform-data request must name the buyer-request domain contract, API boundary, persistence adapter, migration or table, lifecycle, audit, retention, and ownership impact.
Do not request a global platform lease when only one data contract or migration is required.
Create each request exactly once and deduplicate by task, namespace, path set, and patch hash.
Record request ID, queue position, holder, requestedAt, approvedBy, status, heartbeat, expiresAt, and resume trigger.
Lease acquisition must be atomic.
Lease expiry alone does not prove staleness; confirm heartbeat, PID, parent owner, and control-plane state.
Release the lease immediately after merge, verification, handoff, abandonment, or expiry.
A source lease does not grant shared-data or release ownership.
A platform-data lease does not grant product search or deploy ownership.
<!-- SECTION:LEASE:END -->
<!-- SECTION BREAK -->
<!-- SECTION:REPAIR_LOOP:START -->
## Continuous root-cause repair loop
SECTION_ID: REPAIR_LOOP
Execute AUDIT_ONCE then REPRODUCE then CLASSIFY then ISOLATE then FIX then RETEST_SMALLEST then RETEST_FEATURE then UPDATE_EVIDENCE.
Continue the loop while an in-scope failed assertion has an owned or safely leased root cause.
Fingerprint every failure by command, assertion, route, environment, stack, source hash, fixture hash, owner, and timestamp.
Do not rerun an identical failure twice without changing evidence, hypothesis, setup, or code.
After the second identical fingerprint, enter META_DIAGNOSIS instead of another blind rerun.
META_DIAGNOSIS must question product source, test validity, fixture realism, base URL, port, build artifact, environment, ownership, and stale evidence.
Fix the layer that owns the defect.
Do not change a test merely because the product fails it.
Do not change product code merely because a test harness points at the wrong server.
Do not weaken privacy, relevance, persistence, SEO, or responsive assertions to obtain green output.
After each repair, rerun the smallest failing assertion before any broader suite.
Then rerun the related product gate.
Run assembled predeploy only after explicit release intent and release-owner handoff.
Persist root cause, fix, evidence, residual risk, and exact next action after each iteration.
<!-- SECTION:REPAIR_LOOP:END -->
<!-- SECTION BREAK -->
<!-- SECTION:QA_CLASSIFICATION:START -->
## QA failure taxonomy
SECTION_ID: QA_CLASSIFICATION
Classify PRODUCT_DEFECT when canonical behavior violates an accepted requirement under a valid environment and valid test.
Classify TEST_DEFECT when the assertion encodes the wrong contract, uses brittle source matching, ignores valid behavior, or produces false positives.
Classify FIXTURE_DEFECT when seed, mocks, inventory, timestamps, risk labels, query cases, or expected result data do not represent the contract.
Classify HARNESS_DEFECT when server startup, base URL, port, browser, timing, cleanup, artifact path, or command wrapper invalidates the run.
Classify ENVIRONMENT_DEFECT when required runtime, dependency, DNS, secret, browser, storage, or backend is unavailable.
Classify OWNERSHIP_CONTENTION when an exact live owner controls an overlapping path, migration, runtime, or artifact.
Classify RELEASE_CONTENTION when the release owner legitimately freezes the canonical snapshot, build, deploy, or release evidence.
Classify SECURITY_BLOCKER when continuing could expose private data, bypass authorization, corrupt data, or perform an unsafe migration.
Classify UNKNOWN only temporarily; gather discriminating evidence before choosing a fix.
Every classification must cite evidence and an owner.
Misclassification is itself a QA defect and must be corrected in the run report.
<!-- SECTION:QA_CLASSIFICATION:END -->
<!-- SECTION BREAK -->
<!-- SECTION:QA_REPAIR:START -->
## QA harness repair rules
SECTION_ID: QA_REPAIR
Set PRODUCT_SCOPE=cho-kenh for product-specific command gates.
Parameterize QA_BASE_URL and use a free owned port in 3200 through 3299.
Do not hardcode localhost:3000 when the owned server uses another port.
Verify the server process, cwd, command, port, health route, and build artifact before browser QA.
Do not reuse a foreign runtime or infer its results as Cho Kenh evidence.
Keep static contract tests separate from browser/runtime tests.
Keep product-slice QA separate from release predeploy.
If a direct Node product test exists but package.json lacks a script, run it narrowly for diagnosis; request a shared package-script change separately if canonical command exposure is required.
Do not edit QA_CHECK_BEFORE_DEPLOY.md from product:cho-kenh ownership.
Do not edit package.json without its actual owner or lease.
Product-owned QA scripts may be fixed only after proving the harness or assertion defect.
Prefer behavior tests and typed contracts over fragile string-presence checks.
Mock external services deterministically and prohibit accidental network fallthrough.
Ensure mocks handle string, URL, Request, headers, query, method, and retry forms used by production code.
Capture final PASS or FAIL output; a process exit without summary is incomplete.
Clean up only the runtime and temporary artifacts owned by the current task.
<!-- SECTION:QA_REPAIR:END -->
<!-- SECTION BREAK -->
<!-- SECTION:SEARCH:START -->
## Search hard constraints and fallback
SECTION_ID: SEARCH
Separate parsed buyer intent into hard constraints, soft preferences, ranking signals, and unknown terms.
Hard constraints must never be silently relaxed.
Examples of hard constraints include explicitly requested maximum risk, required availability, forbidden status, compliance exclusion, and explicit budget ceiling when the buyer marks it mandatory.
Soft preferences can influence ranking and may be relaxed only with disclosure.
When no exact match exists, return an exactMatches collection and a separate alternatives collection.
Each alternative must list which preference was relaxed and must never claim to satisfy an unmet hard constraint.
If a hard constraint prevents all results, show a clear no-match state and buyer-request path.
Do not mix reserved, sold, blocked, advisory-only, or high-risk listings into exact results when the query excludes them.
Do not convert medium risk into low risk through fallback labeling.
Ranking must use safe structured fields and buyer intent, not raw private inventory notes.
Search telemetry records interpreted intent, constraint classes, result count, fallback reason, and safe source context.
Do not log sensitive free text or credentials.
Maintain deterministic ordering for equal scores.
Freshness sorting uses valid updatedAt data and must not promote stale or unavailable inventory as exact fit.
Return explanations that state fit and remaining risk without guaranteeing business outcomes.
<!-- SECTION:SEARCH:END -->
<!-- SECTION BREAK -->
<!-- SECTION:PUBLIC_PROJECTION:START -->
## Public listing safety
SECTION_ID: PUBLIC_PROJECTION
public-listing-search.ts remains the canonical public search projection unless a reviewed architecture change replaces it.
Public projection must exclude real_handle, credentials, seller_private_contact, acquisition_cost, exact_internal_price, private_notes, sheet_row_metadata, recovery details, identity documents, and unredacted proof.
Safety must be enforced in domain or server projection, not CSS hiding.
Search, listing API, cards, detail, metadata, JSON-LD, analytics, logs, errors, screenshots, and Zalo handoff must use safe fields.
Unknown fields are denied by default from public output.
Proof media requires explicit public-safe approval or redaction status.
Exact price follows business disclosure policy; contact-for-quote or a safe range is allowed when configured.
Public audit labels must be backed by reviewed evidence and current status.
Never mark a listing verified solely from model output, seed defaults, or client state.
Add negative leak tests for every public surface and serialization path.
Do not weaken the blocked-key list to make a fixture pass.
<!-- SECTION:PUBLIC_PROJECTION:END -->
<!-- SECTION BREAK -->
<!-- SECTION:BUYER_REQUEST:START -->
## Buyer-request persistence
SECTION_ID: BUYER_REQUEST
The current Zalo composition flow is not sufficient persistence evidence.
Define a product-owned BuyerRequest contract before requesting shared storage implementation.
Required safe fields include request ID, createdAt, buyer goal, niche, budget band, follower or view expectations, risk preference, timeline, query context, source route, listing context, UTM or referral, locale, consent, status, and schema version.
Collect name, phone, or Zalo only when necessary, with validation, purpose, and access controls.
Do not place private contact data in analytics events, public URLs, public HTML, or logs.
Server validation is authoritative.
Use an idempotency key to prevent duplicate requests from retries or double taps.
Use dedupe rules that preserve the newest attribution and never silently discard valid intent.
Persist before claiming submission success.
After persistence succeeds, produce a Zalo handoff containing a safe request reference and concise buyer context.
If persistence fails, preserve the draft, show a specific retry path, and do not display false success.
Define whether emergency Zalo-only fallback is allowed; if allowed, label it as untracked fallback and emit safe operational telemetry without private content.
Define lifecycle states submitted, contacted, qualified, matched, closed, spam, duplicate, and archived.
Define allowed transitions, owners, timestamps, reasons, and audit events.
Shared data implementation must be workspace-scoped, server-authorized, migration-safe, rate-limited, observable, and covered by rollback.
<!-- SECTION:BUYER_REQUEST:END -->
<!-- SECTION BREAK -->
<!-- SECTION:BUYER_DATA_HANDOFF:START -->
## Platform data handoff packet
SECTION_ID: BUYER_DATA_HANDOFF
Prepare a versioned BuyerRequest schema and validation contract in product-owned documentation or code allowed by ownership.
Name the desired product API route under the Cho Kenh API namespace when permitted.
Name shared persistence service, repository, table, migration, session, rate limit, and audit dependencies separately.
Provide create, read-for-authorized-operator, update-lifecycle, dedupe, and safe aggregate contracts.
Public create must not grant public read.
Operator read and lifecycle update require explicit server authorization.
Migration must define primary key, workspace scope, timestamps, status, indexes, idempotency key uniqueness, retention, and safe rollback.
No raw passwords, channel credentials, recovery methods, seller-private fields, or unbounded free-form secrets enter buyer_requests.
Provide representative valid, invalid, duplicate, malicious, cross-workspace, retry, and migration test fixtures.
Platform owner returns implementation evidence and exact changed paths to the product owner.
Product owner then verifies the buyer journey without taking platform ownership.
<!-- SECTION:BUYER_DATA_HANDOFF:END -->
<!-- SECTION BREAK -->
<!-- SECTION:SEO:START -->
## SEO 27 of 50 quality recovery
SECTION_ID: SEO
Treat 50 as a reviewed candidate inventory, not an unconditional index target.
For each candidate page, record unique buyer intent, content purpose, supporting inventory, safe listings, decision value, canonical, internal links, structured data, metadata, locale, CTA, and indexability decision.
Index only pages that provide unique buyer value and pass the current indexability rule.
Keep thin, duplicate, unsupported, unsafe, stale, or inventory-empty pages noindex until repaired.
Do not lower the indexability threshold merely to move from 27 to 50.
Repair missing inventory support, intent-specific copy, trust guidance, alternatives, FAQs, internal links, and structured metadata where real value exists.
Consolidate overlapping pages and redirect intentionally when two candidates serve the same intent.
Sitemap must include only approved indexable canonical pages.
Robots must continue blocking buyer-request and private routes.
Public HTML must match the CMS or source index decision.
QA reports approved, repaired, noindex, consolidated, and rejected counts separately.
Success means every one of the 50 candidates has a justified decision; it does not require all 50 to be indexed.
<!-- SECTION:SEO:END -->
<!-- SECTION BREAK -->
<!-- SECTION:TARGET_TESTS:START -->
## Required targeted tests
SECTION_ID: TARGET_TESTS
Run the ownership guard for every intended source or QA file before editing.
Run typecheck after TypeScript source changes when the source window permits it.
Set PRODUCT_SCOPE=cho-kenh for qa:cho-kenh-search-safety, inventory, and inventory-api commands.
Run qa:cho-kenh-search-safety after search or public projection changes.
Run the buyer-request domain test and UI test directly when no package script exists.
Run qa:cho-kenh-mobile for changed public mobile journeys using an owned isolated runtime.
Run qa:cho-kenh-inventory and qa:cho-kenh-inventory-api when search projection or inventory contracts change.
Run the sitemap test when indexability or SEO-page selection changes.
Test exact results, no-match, disclosed alternatives, unavailable listings, stale listings, low-risk hard constraint, budget hard constraint, and unknown query terms.
Test public leak denial across API, cards, detail, metadata, structured data, telemetry, errors, logs, and screenshots.
Test buyer request valid, invalid, sensitive text, duplicate retry, rate limit, persistence failure, reload, authorized lifecycle update, unauthorized read, and cross-workspace denial.
Use broad predeploy only after explicit release intent and release-owner acceptance.
<!-- SECTION:TARGET_TESTS:END -->
<!-- SECTION BREAK -->
<!-- SECTION:BROWSER_QA:START -->
## Buyer workflow browser QA
SECTION_ID: BROWSER_QA
Validate 320, 360, 375, 390, 430, 768, 1280, and 1440 widths where the current QA contract requires them.
Validate marketplace home, catalog, listing detail, buyer request, contact handoff, escrow trust, and relevant SEO landing routes.
Validate initial, search suggestions, filters open, no results, alternatives, shortlist, buyer request, validation error, persistence error, submitting, success, and offline states.
No horizontal overflow, hidden primary action, overlapping sticky CTA, clipped text, inaccessible dialog, broken keyboard path, or mobile keyboard obstruction is acceptable.
Primary CTA must remain understandable and safe.
Browser assertions must inspect actual rendered behavior, network responses, console errors, and relevant storage state.
Source checks alone cannot prove persistence or responsive quality.
Do not submit real production requests during live QA without an explicit safe test path.
<!-- SECTION:BROWSER_QA:END -->
<!-- SECTION BREAK -->
<!-- SECTION:SPRINT:START -->
## Execution slices
SECTION_ID: SPRINT
Slice 1 repairs hard-constraint parsing, exact result separation, disclosed fallback, and search-safety assertions.
Slice 2 hardens public projection across API, listing cards, detail, metadata, telemetry, and leak tests.
Slice 3 defines BuyerRequest product contract, validation, idempotency, lifecycle, and shared-data handoff.
Slice 4 receives the platform implementation, verifies persistence, authorization, dedupe, lifecycle, and Zalo reference handoff.
Slice 5 reviews all 50 SEO candidates, repairs valuable pages, consolidates duplicates, and verifies index decisions.
Slice 6 runs targeted product QA, responsive buyer simulation, security checks, and release handoff preparation.
Each slice ends with source ownership state, exact files, tests, evidence, open risk, rollback, and next action.
Do not combine platform data migration, product search, and release deploy into one writer task.
<!-- SECTION:SPRINT:END -->
<!-- SECTION BREAK -->
<!-- SECTION:ARTIFACTS:START -->
## Run artifacts and resumability
SECTION_ID: ARTIFACTS
Persist goal-window.md, current-state.json, owner-evidence.json, lease-request.json, source-hashes.json, patch-packet.md, proposed.patch, search-contract.md, buyer-request-contract.md, platform-data-handoff.md, seo-decision-ledger.json, qa-failure-ledger.jsonl, test-results.md, repair-log.md, release-handoff.md, and final-report.md.
Patch packet includes objective, root cause, exact paths, baseline hashes, proposed diff, tests, expected output, impact, privacy review, rollback, and lease request.
Failure ledger records fingerprint, classification, hypothesis, discriminating check, fix, retest, and outcome.
SEO ledger records every candidate page and justified index decision.
At context boundaries, resume from these artifacts and do not rerun completed audits.
<!-- SECTION:ARTIFACTS:END -->
<!-- SECTION BREAK -->
<!-- SECTION:FINAL:START -->
## Completion and reporting
SECTION_ID: FINAL
Do not finish with only BLOCKED_BY_RELEASE_SOURCE_FREEZE when the freeze is recoverable and a resume path exists.
Report WAITING_FOR_RELEASE_WINDOW with lease request, prepared patch, completed tests, resume trigger, and exact next command.
Use BLOCKED only for destructive risk, missing authorization with no handoff path, required external outage, unavailable secret, or irreconcilable overlapping edits.
Final report lists buyer problem solved, search contract, fallback behavior, public safety, buyer-request persistence, SEO decision coverage, files changed, leases, QA classification, commands, browser evidence, residual risk, release readiness, and next slice.
Do not claim production readiness without current product and release evidence.
Do not deploy unless explicitly requested and release:shared owns the release.
<!-- SECTION:FINAL:END -->
<!-- SECTION BREAK -->
<!-- SECTION:ACCEPTANCE_MATRIX:START -->
## Cross-system acceptance matrix
SECTION_ID: ACCEPTANCE_MATRIX
Every selected case is executable acceptance evidence, not filler.
AC-FREEZE-0001 | state=no-owner | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0001 | query=beauty 10k low risk | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0001 | state=draft | failure=none | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0001 | class=product-defect | phase=preflight | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0001 | page-state=indexable | check=buyer-intent | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0001 | field=real_handle | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0001 | route=/cho-kenh | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0002 | state=no-owner | resource=canonical-source | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0002 | query=beauty 10k low risk | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0003 | state=draft | failure=none | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0002 | class=product-defect | phase=preflight | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0002 | page-state=indexable | check=unique-value | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0002 | field=real_handle | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0002 | route=/cho-kenh | viewport=320 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0003 | state=no-owner | resource=canonical-source | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0004 | query=beauty 10k low risk | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0005 | state=draft | failure=none | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0003 | class=product-defect | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0003 | page-state=indexable | check=inventory-support | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0003 | field=real_handle | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0003 | route=/cho-kenh | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0004 | state=no-owner | resource=canonical-source | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0005 | query=beauty 10k low risk | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0008 | state=draft | failure=invalid-input | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0004 | class=product-defect | phase=preflight | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0004 | page-state=indexable | check=safe-listings | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0004 | field=real_handle | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0005 | route=/cho-kenh | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0005 | state=no-owner | resource=canonical-source | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0007 | query=beauty 10k low risk | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0010 | state=draft | failure=invalid-input | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0006 | class=product-defect | phase=reproduce | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0005 | page-state=indexable | check=title | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0005 | field=real_handle | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0006 | route=/cho-kenh | viewport=320 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0006 | state=no-owner | resource=canonical-source | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0008 | query=beauty 10k low risk | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0012 | state=draft | failure=invalid-input | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0007 | class=product-defect | phase=reproduce | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0006 | page-state=indexable | check=description | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0006 | field=real_handle | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0008 | route=/cho-kenh | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0007 | state=no-owner | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0010 | query=beauty 10k low risk | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0015 | state=draft | failure=sensitive-text | action=read | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0008 | class=product-defect | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0007 | page-state=indexable | check=canonical | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0007 | field=real_handle | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0009 | route=/cho-kenh | viewport=320 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0008 | state=no-owner | resource=isolated-worktree | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0012 | query=beauty 10k low risk | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0017 | state=draft | failure=sensitive-text | action=assign | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0010 | class=product-defect | phase=reproduce | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0008 | page-state=indexable | check=structured-data | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0008 | field=real_handle | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0010 | route=/cho-kenh | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0009 | state=no-owner | resource=isolated-worktree | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0013 | query=beauty 10k low risk | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0020 | state=draft | failure=double-click | action=retry | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0011 | class=product-defect | phase=classify | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0009 | page-state=indexable | check=internal-links | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0009 | field=real_handle | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0012 | route=/cho-kenh | viewport=360 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0010 | state=no-owner | resource=isolated-worktree | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0015 | query=beauty 10k low risk | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0022 | state=draft | failure=double-click | action=update-status | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0012 | class=product-defect | phase=classify | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0010 | page-state=indexable | check=cta | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0010 | field=real_handle | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0013 | route=/cho-kenh | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0011 | state=no-owner | resource=isolated-worktree | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0016 | query=beauty 10k low risk | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0024 | state=draft | failure=double-click | action=open-zalo | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0014 | class=product-defect | phase=classify | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0011 | page-state=indexable | check=faq | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0011 | field=credentials | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0015 | route=/cho-kenh | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0012 | state=no-owner | resource=isolated-worktree | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0018 | query=beauty 10k low risk | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0027 | state=draft | failure=network-timeout | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0015 | class=product-defect | phase=classify | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0012 | page-state=indexable | check=public-html | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0012 | field=credentials | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0016 | route=/cho-kenh | viewport=360 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0013 | state=no-owner | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0020 | query=beauty 10k low risk | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0029 | state=draft | failure=network-timeout | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0016 | class=product-defect | phase=isolate | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0013 | page-state=indexable | check=sitemap | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0013 | field=credentials | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0018 | route=/cho-kenh | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0014 | state=no-owner | resource=build-artifact | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0021 | query=beauty 10k low risk | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0031 | state=draft | failure=api-500 | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0018 | class=product-defect | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0014 | page-state=indexable | check=robots | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0014 | field=credentials | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0019 | route=/cho-kenh | viewport=375 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0015 | state=no-owner | resource=build-artifact | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0023 | query=beauty 10k low risk | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0034 | state=draft | failure=api-500 | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0019 | class=product-defect | phase=isolate | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0015 | page-state=indexable | check=analytics | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0015 | field=credentials | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0020 | route=/cho-kenh | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0016 | state=no-owner | resource=build-artifact | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0024 | query=beauty 10k low risk | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0036 | state=draft | failure=api-500 | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0020 | class=product-defect | phase=isolate | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0016 | page-state=indexable | check=locale | expected=PASS_REQUIRED | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0016 | field=credentials | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0022 | route=/cho-kenh | viewport=375 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0017 | state=no-owner | resource=build-artifact | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0026 | query=beauty 10k low risk | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0039 | state=draft | failure=rate-limited | action=read | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0022 | class=product-defect | phase=fix | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0017 | page-state=noindex-thin | check=buyer-intent | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0017 | field=credentials | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0023 | route=/cho-kenh | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0018 | state=no-owner | resource=build-artifact | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0027 | query=beauty 10k low risk | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0041 | state=draft | failure=rate-limited | action=assign | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0023 | class=product-defect | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0018 | page-state=noindex-thin | check=unique-value | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0018 | field=credentials | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0025 | route=/cho-kenh | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0019 | state=no-owner | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0029 | query=beauty 10k low risk | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0043 | state=draft | failure=cross-workspace | action=create | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0024 | class=product-defect | phase=fix | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0019 | page-state=noindex-thin | check=inventory-support | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0019 | field=credentials | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0026 | route=/cho-kenh | viewport=375 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0020 | state=no-owner | resource=runtime-port | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0031 | query=beauty 10k low risk | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0046 | state=draft | failure=cross-workspace | action=update-status | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0026 | class=product-defect | phase=smallest-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0020 | page-state=noindex-thin | check=safe-listings | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0020 | field=credentials | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0028 | route=/cho-kenh | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0021 | state=no-owner | resource=runtime-port | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0032 | query=beauty 10k low risk | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0048 | state=draft | failure=cross-workspace | action=open-zalo | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0027 | class=product-defect | phase=smallest-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0021 | page-state=noindex-thin | check=title | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0021 | field=seller_private_contact | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0029 | route=/cho-kenh | viewport=390 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0022 | state=no-owner | resource=runtime-port | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0034 | query=beauty 10k low risk | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0050 | state=draft | failure=expired-session | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0028 | class=product-defect | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0022 | page-state=noindex-thin | check=description | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0022 | field=seller_private_contact | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0030 | route=/cho-kenh | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0023 | state=no-owner | resource=runtime-port | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0035 | query=beauty 10k low risk | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0053 | state=draft | failure=expired-session | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0030 | class=product-defect | phase=smallest-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0023 | page-state=noindex-thin | check=canonical | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0023 | field=seller_private_contact | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0032 | route=/cho-kenh | viewport=390 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0024 | state=no-owner | resource=runtime-port | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0037 | query=beauty 10k low risk | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0055 | state=draft | failure=notification-failure | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0031 | class=product-defect | phase=feature-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0024 | page-state=noindex-thin | check=structured-data | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0024 | field=seller_private_contact | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0033 | route=/cho-kenh | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0025 | state=no-owner | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0039 | query=beauty 10k low risk | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0058 | state=draft | failure=notification-failure | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0032 | class=product-defect | phase=feature-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0025 | page-state=noindex-thin | check=internal-links | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0025 | field=seller_private_contact | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0035 | route=/cho-kenh | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0026 | state=no-owner | resource=qa-evidence | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0040 | query=beauty 10k low risk | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0060 | state=draft | failure=notification-failure | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0034 | class=product-defect | phase=feature-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0026 | page-state=noindex-thin | check=cta | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0026 | field=seller_private_contact | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0036 | route=/cho-kenh | viewport=390 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0027 | state=no-owner | resource=qa-evidence | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0042 | query=beauty 10k low risk | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0062 | state=draft | failure=storage-unavailable | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0035 | class=product-defect | phase=feature-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0027 | page-state=noindex-thin | check=faq | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0027 | field=seller_private_contact | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0038 | route=/cho-kenh | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0028 | state=no-owner | resource=qa-evidence | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0043 | query=beauty 10k low risk | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0065 | state=draft | failure=storage-unavailable | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0036 | class=product-defect | phase=browser-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0028 | page-state=noindex-thin | check=public-html | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0028 | field=seller_private_contact | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0039 | route=/cho-kenh | viewport=430 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0029 | state=no-owner | resource=qa-evidence | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0045 | query=beauty 10k low risk | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0067 | state=draft | failure=stale-update | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0037 | class=product-defect | phase=browser-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0029 | page-state=noindex-thin | check=sitemap | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0029 | field=seller_private_contact | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0040 | route=/cho-kenh | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0030 | state=no-owner | resource=qa-evidence | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0046 | query=beauty 10k low risk | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0069 | state=draft | failure=stale-update | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0039 | class=product-defect | phase=browser-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0030 | page-state=noindex-thin | check=robots | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0030 | field=seller_private_contact | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0042 | route=/cho-kenh | viewport=430 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0031 | state=no-owner | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0048 | query=beauty 10k low risk | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0072 | state=draft | failure=stale-update | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0040 | class=product-defect | phase=browser-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0031 | page-state=noindex-thin | check=analytics | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0031 | field=acquisition_cost | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0043 | route=/cho-kenh | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0032 | state=no-owner | resource=platform-data | action=prepare-patch | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0050 | query=food livestream | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0074 | state=validating | failure=none | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0041 | class=product-defect | phase=evidence | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0032 | page-state=noindex-thin | check=locale | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0032 | field=acquisition_cost | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0045 | route=/cho-kenh | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0033 | state=no-owner | resource=platform-data | action=run-static-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0051 | query=food livestream | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0077 | state=validating | failure=none | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0043 | class=product-defect | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0033 | page-state=noindex-no-inventory | check=buyer-intent | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0033 | field=acquisition_cost | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0046 | route=/cho-kenh | viewport=768 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0034 | state=no-owner | resource=platform-data | action=run-browser-test | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0053 | query=food livestream | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0079 | state=validating | failure=invalid-input | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0044 | class=product-defect | phase=evidence | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0034 | page-state=noindex-no-inventory | check=unique-value | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0034 | field=acquisition_cost | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0048 | route=/cho-kenh | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0035 | state=no-owner | resource=platform-data | action=merge | expected=ALLOW_IF_PATH_OWNERSHIP_PASSES | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0054 | query=food livestream | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0081 | state=validating | failure=invalid-input | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0045 | class=product-defect | phase=evidence | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0035 | page-state=noindex-no-inventory | check=inventory-support | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0035 | field=acquisition_cost | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0049 | route=/cho-kenh | viewport=768 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0036 | state=no-owner | resource=platform-data | action=deploy | expected=DENY_RELEASE_OWNER_REQUIRED | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0056 | query=food livestream | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0084 | state=validating | failure=invalid-input | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0047 | class=product-defect | phase=handoff | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0036 | page-state=noindex-no-inventory | check=safe-listings | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0036 | field=acquisition_cost | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0050 | route=/cho-kenh | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0037 | state=release-quiet-window | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0058 | query=food livestream | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0086 | state=validating | failure=sensitive-text | action=retry | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0048 | class=product-defect | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0037 | page-state=noindex-no-inventory | check=title | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0037 | field=acquisition_cost | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0052 | route=/cho-kenh | viewport=768 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0038 | state=release-quiet-window | resource=canonical-source | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0059 | query=food livestream | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0088 | state=validating | failure=sensitive-text | action=update-status | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0049 | class=product-defect | phase=handoff | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0038 | page-state=noindex-no-inventory | check=description | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0038 | field=acquisition_cost | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0053 | route=/cho-kenh | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0039 | state=release-quiet-window | resource=canonical-source | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0061 | query=food livestream | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0091 | state=validating | failure=double-click | action=create | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0051 | class=test-defect | phase=preflight | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0039 | page-state=noindex-no-inventory | check=canonical | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0039 | field=acquisition_cost | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0055 | route=/cho-kenh | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0040 | state=release-quiet-window | resource=canonical-source | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0062 | query=food livestream | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0093 | state=validating | failure=double-click | action=read | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0052 | class=test-defect | phase=preflight | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0040 | page-state=noindex-no-inventory | check=structured-data | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0040 | field=acquisition_cost | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0056 | route=/cho-kenh | viewport=1280 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0041 | state=release-quiet-window | resource=canonical-source | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0064 | query=food livestream | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0096 | state=validating | failure=double-click | action=open-zalo | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0053 | class=test-defect | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0041 | page-state=noindex-no-inventory | check=internal-links | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0041 | field=exact_internal_price | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0058 | route=/cho-kenh | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0042 | state=release-quiet-window | resource=canonical-source | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0065 | query=food livestream | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0098 | state=validating | failure=network-timeout | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0055 | class=test-defect | phase=preflight | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0042 | page-state=noindex-no-inventory | check=cta | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0042 | field=exact_internal_price | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0059 | route=/cho-kenh | viewport=1280 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0043 | state=release-quiet-window | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0067 | query=food livestream | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0100 | state=validating | failure=network-timeout | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0056 | class=test-defect | phase=reproduce | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0043 | page-state=noindex-no-inventory | check=faq | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0043 | field=exact_internal_price | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0060 | route=/cho-kenh | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0044 | state=release-quiet-window | resource=isolated-worktree | action=prepare-patch | expected=ALLOW_ONLY_IF_FREEZE_POLICY_EXPLICITLY_PERMITS | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0069 | query=food livestream | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0103 | state=validating | failure=api-500 | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0057 | class=test-defect | phase=reproduce | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0044 | page-state=noindex-no-inventory | check=public-html | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0044 | field=exact_internal_price | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0062 | route=/cho-kenh | viewport=1280 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0045 | state=release-quiet-window | resource=isolated-worktree | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0070 | query=food livestream | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0105 | state=validating | failure=api-500 | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0059 | class=test-defect | phase=reproduce | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0045 | page-state=noindex-no-inventory | check=sitemap | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0045 | field=exact_internal_price | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0063 | route=/cho-kenh | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0046 | state=release-quiet-window | resource=isolated-worktree | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0072 | query=food livestream | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0107 | state=validating | failure=api-500 | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0060 | class=test-defect | phase=reproduce | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0046 | page-state=noindex-no-inventory | check=robots | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0046 | field=exact_internal_price | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0065 | route=/cho-kenh | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0047 | state=release-quiet-window | resource=isolated-worktree | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0073 | query=food livestream | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0110 | state=validating | failure=rate-limited | action=retry | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0061 | class=test-defect | phase=classify | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0047 | page-state=noindex-no-inventory | check=analytics | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0047 | field=exact_internal_price | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0066 | route=/cho-kenh | viewport=1440 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0048 | state=release-quiet-window | resource=isolated-worktree | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0075 | query=food livestream | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0112 | state=validating | failure=rate-limited | action=update-status | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0063 | class=test-defect | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0048 | page-state=noindex-no-inventory | check=locale | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0048 | field=exact_internal_price | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0068 | route=/cho-kenh | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0049 | state=release-quiet-window | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0077 | query=food livestream | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0115 | state=validating | failure=cross-workspace | action=create | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0064 | class=test-defect | phase=classify | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0049 | page-state=duplicate | check=buyer-intent | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0049 | field=exact_internal_price | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0069 | route=/cho-kenh | viewport=1440 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0050 | state=release-quiet-window | resource=build-artifact | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0078 | query=food livestream | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0117 | state=validating | failure=cross-workspace | action=read | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0065 | class=test-defect | phase=classify | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0050 | page-state=duplicate | check=unique-value | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0050 | field=exact_internal_price | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0070 | route=/cho-kenh | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0051 | state=release-quiet-window | resource=build-artifact | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0080 | query=food livestream | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0119 | state=validating | failure=cross-workspace | action=assign | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0067 | class=test-defect | phase=isolate | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0051 | page-state=duplicate | check=inventory-support | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0051 | field=private_notes | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0072 | route=/cho-kenh | viewport=1440 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0052 | state=release-quiet-window | resource=build-artifact | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0081 | query=food livestream | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0122 | state=validating | failure=expired-session | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0068 | class=test-defect | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0052 | page-state=duplicate | check=safe-listings | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0052 | field=private_notes | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0073 | route=/cho-kenh/catalog | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0053 | state=release-quiet-window | resource=build-artifact | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0083 | query=food livestream | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0124 | state=validating | failure=expired-session | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0069 | class=test-defect | phase=isolate | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0053 | page-state=duplicate | check=title | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0053 | field=private_notes | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0075 | route=/cho-kenh/catalog | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0054 | state=release-quiet-window | resource=build-artifact | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0084 | query=food livestream | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0126 | state=validating | failure=expired-session | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0070 | class=test-defect | phase=isolate | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0054 | page-state=duplicate | check=description | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0054 | field=private_notes | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0076 | route=/cho-kenh/catalog | viewport=320 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0055 | state=release-quiet-window | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0086 | query=food livestream | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0129 | state=validating | failure=notification-failure | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0072 | class=test-defect | phase=fix | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0055 | page-state=duplicate | check=canonical | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0055 | field=private_notes | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0077 | route=/cho-kenh/catalog | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0056 | state=release-quiet-window | resource=runtime-port | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0088 | query=food livestream | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0131 | state=validating | failure=notification-failure | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0073 | class=test-defect | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0056 | page-state=duplicate | check=structured-data | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0056 | field=private_notes | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0079 | route=/cho-kenh/catalog | viewport=320 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0057 | state=release-quiet-window | resource=runtime-port | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0089 | query=food livestream | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0134 | state=validating | failure=storage-unavailable | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0074 | class=test-defect | phase=fix | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0057 | page-state=duplicate | check=internal-links | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0057 | field=private_notes | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0080 | route=/cho-kenh/catalog | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0058 | state=release-quiet-window | resource=runtime-port | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0091 | query=food livestream | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0136 | state=validating | failure=storage-unavailable | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0076 | class=test-defect | phase=smallest-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0058 | page-state=duplicate | check=cta | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0058 | field=private_notes | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0082 | route=/cho-kenh/catalog | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0059 | state=release-quiet-window | resource=runtime-port | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0092 | query=food livestream | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0138 | state=validating | failure=storage-unavailable | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0077 | class=test-defect | phase=smallest-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0059 | page-state=duplicate | check=faq | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0059 | field=private_notes | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0083 | route=/cho-kenh/catalog | viewport=360 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0060 | state=release-quiet-window | resource=runtime-port | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0094 | query=food livestream | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0141 | state=validating | failure=stale-update | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0078 | class=test-defect | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0060 | page-state=duplicate | check=public-html | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0060 | field=private_notes | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0085 | route=/cho-kenh/catalog | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0061 | state=release-quiet-window | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0096 | query=food livestream | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0143 | state=validating | failure=stale-update | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0080 | class=test-defect | phase=smallest-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0061 | page-state=duplicate | check=sitemap | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0061 | field=sheet_row_metadata | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0086 | route=/cho-kenh/catalog | viewport=360 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0062 | state=release-quiet-window | resource=qa-evidence | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0097 | query=bds tu van | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0145 | state=submitting | failure=none | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0081 | class=test-defect | phase=feature-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0062 | page-state=duplicate | check=robots | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0062 | field=sheet_row_metadata | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0087 | route=/cho-kenh/catalog | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0063 | state=release-quiet-window | resource=qa-evidence | action=run-static-test | expected=ALLOW_PRODUCT_SCOPED_NONCONTAMINATING_CHECK | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0099 | query=bds tu van | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0148 | state=submitting | failure=none | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0082 | class=test-defect | phase=feature-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0063 | page-state=duplicate | check=analytics | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0063 | field=sheet_row_metadata | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0089 | route=/cho-kenh/catalog | viewport=360 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0064 | state=release-quiet-window | resource=qa-evidence | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0100 | query=bds tu van | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0150 | state=submitting | failure=none | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0084 | class=test-defect | phase=feature-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0064 | page-state=duplicate | check=locale | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0064 | field=sheet_row_metadata | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0090 | route=/cho-kenh/catalog | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0065 | state=release-quiet-window | resource=qa-evidence | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0102 | query=bds tu van | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0153 | state=submitting | failure=invalid-input | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0085 | class=test-defect | phase=feature-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0065 | page-state=stale | check=buyer-intent | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0065 | field=sheet_row_metadata | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0092 | route=/cho-kenh/catalog | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0066 | state=release-quiet-window | resource=qa-evidence | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0103 | query=bds tu van | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0155 | state=submitting | failure=invalid-input | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0086 | class=test-defect | phase=browser-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0066 | page-state=stale | check=unique-value | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0066 | field=sheet_row_metadata | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0093 | route=/cho-kenh/catalog | viewport=375 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0067 | state=release-quiet-window | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0105 | query=bds tu van | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0157 | state=submitting | failure=sensitive-text | action=create | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0088 | class=test-defect | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0067 | page-state=stale | check=inventory-support | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0067 | field=sheet_row_metadata | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0095 | route=/cho-kenh/catalog | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0068 | state=release-quiet-window | resource=platform-data | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0107 | query=bds tu van | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0160 | state=submitting | failure=sensitive-text | action=update-status | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0089 | class=test-defect | phase=browser-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0068 | page-state=stale | check=safe-listings | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0068 | field=sheet_row_metadata | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0096 | route=/cho-kenh/catalog | viewport=375 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0069 | state=release-quiet-window | resource=platform-data | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0108 | query=bds tu van | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0162 | state=submitting | failure=sensitive-text | action=open-zalo | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0090 | class=test-defect | phase=browser-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0069 | page-state=stale | check=title | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0069 | field=sheet_row_metadata | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0097 | route=/cho-kenh/catalog | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0070 | state=release-quiet-window | resource=platform-data | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0110 | query=bds tu van | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0164 | state=submitting | failure=double-click | action=retry | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0092 | class=test-defect | phase=evidence | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0070 | page-state=stale | check=description | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0070 | field=sheet_row_metadata | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0099 | route=/cho-kenh/catalog | viewport=375 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0071 | state=release-quiet-window | resource=platform-data | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0111 | query=bds tu van | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0167 | state=submitting | failure=double-click | action=assign | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0093 | class=test-defect | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0071 | page-state=stale | check=canonical | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0071 | field=recovery_email | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0100 | route=/cho-kenh/catalog | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0072 | state=release-quiet-window | resource=platform-data | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0113 | query=bds tu van | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0169 | state=submitting | failure=network-timeout | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0094 | class=test-defect | phase=evidence | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0072 | page-state=stale | check=structured-data | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0072 | field=recovery_email | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0102 | route=/cho-kenh/catalog | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0073 | state=release-build | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0115 | query=bds tu van | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0172 | state=submitting | failure=network-timeout | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0096 | class=test-defect | phase=handoff | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0073 | page-state=stale | check=internal-links | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0073 | field=recovery_email | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0103 | route=/cho-kenh/catalog | viewport=390 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0074 | state=release-build | resource=canonical-source | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0116 | query=bds tu van | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0174 | state=submitting | failure=network-timeout | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0097 | class=test-defect | phase=handoff | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0074 | page-state=stale | check=cta | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0074 | field=recovery_email | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0105 | route=/cho-kenh/catalog | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0075 | state=release-build | resource=canonical-source | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0118 | query=bds tu van | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0176 | state=submitting | failure=api-500 | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0098 | class=test-defect | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0075 | page-state=stale | check=faq | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0075 | field=recovery_email | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0106 | route=/cho-kenh/catalog | viewport=390 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0076 | state=release-build | resource=canonical-source | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0119 | query=bds tu van | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0179 | state=submitting | failure=api-500 | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0100 | class=test-defect | phase=handoff | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0076 | page-state=stale | check=public-html | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0076 | field=recovery_email | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0107 | route=/cho-kenh/catalog | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0077 | state=release-build | resource=canonical-source | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0121 | query=bds tu van | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0181 | state=submitting | failure=rate-limited | action=create | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0101 | class=fixture-defect | phase=preflight | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0077 | page-state=stale | check=sitemap | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0077 | field=recovery_email | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0109 | route=/cho-kenh/catalog | viewport=430 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0078 | state=release-build | resource=canonical-source | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0122 | query=bds tu van | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0183 | state=submitting | failure=rate-limited | action=read | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0102 | class=fixture-defect | phase=preflight | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0078 | page-state=stale | check=robots | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0078 | field=recovery_email | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0110 | route=/cho-kenh/catalog | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0079 | state=release-build | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0124 | query=bds tu van | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0186 | state=submitting | failure=rate-limited | action=open-zalo | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0103 | class=fixture-defect | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0079 | page-state=stale | check=analytics | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0079 | field=recovery_email | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0112 | route=/cho-kenh/catalog | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0080 | state=release-build | resource=isolated-worktree | action=prepare-patch | expected=ALLOW_ONLY_IF_FREEZE_POLICY_EXPLICITLY_PERMITS | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0126 | query=bds tu van | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0188 | state=submitting | failure=cross-workspace | action=retry | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0105 | class=fixture-defect | phase=preflight | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0080 | page-state=stale | check=locale | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0080 | field=recovery_email | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0113 | route=/cho-kenh/catalog | viewport=430 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0081 | state=release-build | resource=isolated-worktree | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0127 | query=bds tu van | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0191 | state=submitting | failure=cross-workspace | action=assign | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0106 | class=fixture-defect | phase=reproduce | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0081 | page-state=unsafe | check=buyer-intent | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0081 | field=recovery_phone | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0115 | route=/cho-kenh/catalog | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0082 | state=release-build | resource=isolated-worktree | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0129 | query=bds tu van | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0193 | state=submitting | failure=expired-session | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0107 | class=fixture-defect | phase=reproduce | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0082 | page-state=unsafe | check=unique-value | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0082 | field=recovery_phone | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0116 | route=/cho-kenh/catalog | viewport=430 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0083 | state=release-build | resource=isolated-worktree | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0130 | query=bds tu van | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0195 | state=submitting | failure=expired-session | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0109 | class=fixture-defect | phase=reproduce | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0083 | page-state=unsafe | check=inventory-support | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0083 | field=recovery_phone | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0117 | route=/cho-kenh/catalog | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0084 | state=release-build | resource=isolated-worktree | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0132 | query=bds tu van | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0198 | state=submitting | failure=expired-session | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0110 | class=fixture-defect | phase=reproduce | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0084 | page-state=unsafe | check=safe-listings | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0084 | field=recovery_phone | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0119 | route=/cho-kenh/catalog | viewport=768 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0085 | state=release-build | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0134 | query=bds tu van | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0200 | state=submitting | failure=notification-failure | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0111 | class=fixture-defect | phase=classify | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0085 | page-state=unsafe | check=title | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0085 | field=recovery_phone | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0120 | route=/cho-kenh/catalog | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0086 | state=release-build | resource=build-artifact | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0135 | query=bds tu van | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0202 | state=submitting | failure=notification-failure | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0113 | class=fixture-defect | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0086 | page-state=unsafe | check=description | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0086 | field=recovery_phone | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0122 | route=/cho-kenh/catalog | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0087 | state=release-build | resource=build-artifact | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0137 | query=bds tu van | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0205 | state=submitting | failure=storage-unavailable | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0114 | class=fixture-defect | phase=classify | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0087 | page-state=unsafe | check=canonical | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0087 | field=recovery_phone | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0123 | route=/cho-kenh/catalog | viewport=768 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0088 | state=release-build | resource=build-artifact | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0138 | query=bds tu van | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0207 | state=submitting | failure=storage-unavailable | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0115 | class=fixture-defect | phase=classify | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0088 | page-state=unsafe | check=structured-data | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0088 | field=recovery_phone | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0125 | route=/cho-kenh/catalog | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0089 | state=release-build | resource=build-artifact | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0140 | query=bds tu van | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0210 | state=submitting | failure=storage-unavailable | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0117 | class=fixture-defect | phase=isolate | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0089 | page-state=unsafe | check=internal-links | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0089 | field=recovery_phone | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0126 | route=/cho-kenh/catalog | viewport=768 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0090 | state=release-build | resource=build-artifact | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0141 | query=bds tu van | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0212 | state=submitting | failure=stale-update | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0118 | class=fixture-defect | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0090 | page-state=unsafe | check=cta | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0090 | field=recovery_phone | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0127 | route=/cho-kenh/catalog | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0091 | state=release-build | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0143 | query=bds tu van | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0214 | state=submitting | failure=stale-update | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0119 | class=fixture-defect | phase=isolate | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0091 | page-state=unsafe | check=faq | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0091 | field=identity_document | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0129 | route=/cho-kenh/catalog | viewport=1280 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0092 | state=release-build | resource=runtime-port | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0145 | query=affiliate audit 80 | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0217 | state=submitted | failure=none | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0121 | class=fixture-defect | phase=fix | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0092 | page-state=unsafe | check=public-html | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0092 | field=identity_document | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0130 | route=/cho-kenh/catalog | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0093 | state=release-build | resource=runtime-port | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0146 | query=affiliate audit 80 | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0219 | state=submitted | failure=none | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0122 | class=fixture-defect | phase=fix | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0093 | page-state=unsafe | check=sitemap | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0093 | field=identity_document | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0132 | route=/cho-kenh/catalog | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0094 | state=release-build | resource=runtime-port | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0148 | query=affiliate audit 80 | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0221 | state=submitted | failure=none | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0123 | class=fixture-defect | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0094 | page-state=unsafe | check=robots | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0094 | field=identity_document | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0133 | route=/cho-kenh/catalog | viewport=1280 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0095 | state=release-build | resource=runtime-port | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0149 | query=affiliate audit 80 | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0224 | state=submitted | failure=invalid-input | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0125 | class=fixture-defect | phase=fix | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0095 | page-state=unsafe | check=analytics | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0095 | field=identity_document | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0135 | route=/cho-kenh/catalog | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0096 | state=release-build | resource=runtime-port | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0151 | query=affiliate audit 80 | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0226 | state=submitted | failure=invalid-input | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0126 | class=fixture-defect | phase=smallest-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0096 | page-state=unsafe | check=locale | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0096 | field=identity_document | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0136 | route=/cho-kenh/catalog | viewport=1440 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0097 | state=release-build | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0153 | query=affiliate audit 80 | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0229 | state=submitted | failure=sensitive-text | action=create | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0127 | class=fixture-defect | phase=smallest-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0097 | page-state=draft | check=buyer-intent | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0097 | field=identity_document | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0137 | route=/cho-kenh/catalog | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0098 | state=release-build | resource=qa-evidence | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0154 | query=affiliate audit 80 | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0231 | state=submitted | failure=sensitive-text | action=read | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0129 | class=fixture-defect | phase=smallest-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0098 | page-state=draft | check=unique-value | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0098 | field=identity_document | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0139 | route=/cho-kenh/catalog | viewport=1440 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0099 | state=release-build | resource=qa-evidence | action=run-static-test | expected=ALLOW_PRODUCT_SCOPED_NONCONTAMINATING_CHECK | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0156 | query=affiliate audit 80 | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0233 | state=submitted | failure=sensitive-text | action=assign | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0130 | class=fixture-defect | phase=smallest-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0099 | page-state=draft | check=inventory-support | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0099 | field=identity_document | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0140 | route=/cho-kenh/catalog | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0100 | state=release-build | resource=qa-evidence | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0157 | query=affiliate audit 80 | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0236 | state=submitted | failure=double-click | action=retry | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0131 | class=fixture-defect | phase=feature-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0100 | page-state=draft | check=safe-listings | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0100 | field=identity_document | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0142 | route=/cho-kenh/catalog | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0101 | state=release-build | resource=qa-evidence | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0159 | query=affiliate audit 80 | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0238 | state=submitted | failure=double-click | action=update-status | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0133 | class=fixture-defect | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0101 | page-state=draft | check=title | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0101 | field=raw_proof | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0143 | route=/cho-kenh/catalog | viewport=1440 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0102 | state=release-build | resource=qa-evidence | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0161 | query=affiliate audit 80 | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0241 | state=submitted | failure=network-timeout | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0134 | class=fixture-defect | phase=feature-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0102 | page-state=draft | check=description | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0102 | field=raw_proof | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0145 | route=/cho-kenh/[slug] | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0103 | state=release-build | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0162 | query=affiliate audit 80 | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0243 | state=submitted | failure=network-timeout | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0135 | class=fixture-defect | phase=feature-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0103 | page-state=draft | check=canonical | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0103 | field=raw_proof | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0146 | route=/cho-kenh/[slug] | viewport=320 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0104 | state=release-build | resource=platform-data | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0164 | query=affiliate audit 80 | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0245 | state=submitted | failure=network-timeout | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0136 | class=fixture-defect | phase=browser-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0104 | page-state=draft | check=structured-data | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0104 | field=raw_proof | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0147 | route=/cho-kenh/[slug] | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0105 | state=release-build | resource=platform-data | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0165 | query=affiliate audit 80 | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0248 | state=submitted | failure=api-500 | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0138 | class=fixture-defect | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0105 | page-state=draft | check=internal-links | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0105 | field=raw_proof | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0149 | route=/cho-kenh/[slug] | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0106 | state=release-build | resource=platform-data | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0167 | query=affiliate audit 80 | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0250 | state=submitted | failure=api-500 | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0139 | class=fixture-defect | phase=browser-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0106 | page-state=draft | check=cta | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0106 | field=raw_proof | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0150 | route=/cho-kenh/[slug] | viewport=320 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0107 | state=release-build | resource=platform-data | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0168 | query=affiliate audit 80 | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0252 | state=submitted | failure=api-500 | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0140 | class=fixture-defect | phase=browser-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0107 | page-state=draft | check=faq | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0107 | field=raw_proof | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0152 | route=/cho-kenh/[slug] | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0108 | state=release-build | resource=platform-data | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0170 | query=affiliate audit 80 | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0255 | state=submitted | failure=rate-limited | action=read | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0142 | class=fixture-defect | phase=evidence | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0108 | page-state=draft | check=public-html | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0108 | field=raw_proof | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0153 | route=/cho-kenh/[slug] | viewport=320 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0109 | state=release-deploy | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0172 | query=affiliate audit 80 | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0257 | state=submitted | failure=rate-limited | action=assign | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0143 | class=fixture-defect | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0109 | page-state=draft | check=sitemap | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0109 | field=raw_proof | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0154 | route=/cho-kenh/[slug] | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0110 | state=release-deploy | resource=canonical-source | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0173 | query=affiliate audit 80 | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0260 | state=submitted | failure=cross-workspace | action=retry | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0144 | class=fixture-defect | phase=evidence | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0110 | page-state=draft | check=robots | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0110 | field=raw_proof | surface=zalo-handoff | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0156 | route=/cho-kenh/[slug] | viewport=360 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0111 | state=release-deploy | resource=canonical-source | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0175 | query=affiliate audit 80 | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0262 | state=submitted | failure=cross-workspace | action=update-status | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0146 | class=fixture-defect | phase=handoff | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0111 | page-state=draft | check=analytics | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0111 | field=buyer_contact | surface=search-api | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0157 | route=/cho-kenh/[slug] | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0112 | state=release-deploy | resource=canonical-source | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0176 | query=affiliate audit 80 | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0264 | state=submitted | failure=cross-workspace | action=open-zalo | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0147 | class=fixture-defect | phase=handoff | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0112 | page-state=draft | check=locale | expected=KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0112 | field=buyer_contact | surface=catalog-card | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0159 | route=/cho-kenh/[slug] | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0113 | state=release-deploy | resource=canonical-source | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0178 | query=affiliate audit 80 | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0267 | state=submitted | failure=expired-session | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0148 | class=fixture-defect | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0113 | page-state=redirected | check=buyer-intent | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0113 | field=buyer_contact | surface=detail-page | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0160 | route=/cho-kenh/[slug] | viewport=360 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0114 | state=release-deploy | resource=canonical-source | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0180 | query=affiliate audit 80 | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0269 | state=submitted | failure=expired-session | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0150 | class=fixture-defect | phase=handoff | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0114 | page-state=redirected | check=unique-value | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0114 | field=buyer_contact | surface=metadata | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0162 | route=/cho-kenh/[slug] | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0115 | state=release-deploy | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0181 | query=affiliate audit 80 | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0271 | state=submitted | failure=notification-failure | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0151 | class=harness-defect | phase=preflight | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0115 | page-state=redirected | check=inventory-support | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0115 | field=buyer_contact | surface=json-ld | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0163 | route=/cho-kenh/[slug] | viewport=375 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0116 | state=release-deploy | resource=isolated-worktree | action=prepare-patch | expected=ALLOW_ONLY_IF_FREEZE_POLICY_EXPLICITLY_PERMITS | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0183 | query=affiliate audit 80 | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0274 | state=submitted | failure=notification-failure | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0152 | class=harness-defect | phase=preflight | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0116 | page-state=redirected | check=safe-listings | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0116 | field=buyer_contact | surface=analytics | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0164 | route=/cho-kenh/[slug] | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0117 | state=release-deploy | resource=isolated-worktree | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0184 | query=affiliate audit 80 | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0276 | state=submitted | failure=notification-failure | action=open-zalo | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0154 | class=harness-defect | phase=preflight | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0117 | page-state=redirected | check=title | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0117 | field=buyer_contact | surface=error | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0166 | route=/cho-kenh/[slug] | viewport=375 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0118 | state=release-deploy | resource=isolated-worktree | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0186 | query=affiliate audit 80 | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0279 | state=submitted | failure=storage-unavailable | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0155 | class=harness-defect | phase=preflight | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0118 | page-state=redirected | check=description | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0118 | field=buyer_contact | surface=log | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0167 | route=/cho-kenh/[slug] | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0119 | state=release-deploy | resource=isolated-worktree | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0187 | query=affiliate audit 80 | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0281 | state=submitted | failure=storage-unavailable | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0156 | class=harness-defect | phase=reproduce | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0119 | page-state=redirected | check=canonical | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0119 | field=buyer_contact | surface=screenshot | expected=DENY_PUBLIC_EXPOSURE | assert=domain projection or server authorization, not CSS hiding
AC-UI-0169 | route=/cho-kenh/[slug] | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0120 | state=release-deploy | resource=isolated-worktree | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0189 | query=affiliate audit 80 | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0283 | state=submitted | failure=stale-update | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0158 | class=harness-defect | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0120 | page-state=redirected | check=structured-data | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-SAFE-0120 | field=buyer_contact | surface=zalo-handoff | expected=ALLOW_ONLY_EXPLICIT_BUYER_OWNED_CONTEXT_BY_POLICY | assert=domain projection or server authorization, not CSS hiding
AC-UI-0170 | route=/cho-kenh/[slug] | viewport=375 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0121 | state=release-deploy | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0191 | query=affiliate audit 80 | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0286 | state=submitted | failure=stale-update | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0159 | class=harness-defect | phase=reproduce | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0121 | page-state=redirected | check=internal-links | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0172 | route=/cho-kenh/[slug] | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0122 | state=release-deploy | resource=build-artifact | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0192 | query=affiliate audit 80 | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0288 | state=submitted | failure=stale-update | action=open-zalo | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0160 | class=harness-defect | phase=reproduce | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0122 | page-state=redirected | check=cta | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0173 | route=/cho-kenh/[slug] | viewport=390 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0123 | state=release-deploy | resource=build-artifact | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0194 | query=local service low risk | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0290 | state=contacted | failure=none | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0162 | class=harness-defect | phase=classify | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0123 | page-state=redirected | check=faq | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0174 | route=/cho-kenh/[slug] | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0124 | state=release-deploy | resource=build-artifact | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0195 | query=local service low risk | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0293 | state=contacted | failure=none | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0163 | class=harness-defect | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0124 | page-state=redirected | check=public-html | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0176 | route=/cho-kenh/[slug] | viewport=390 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0125 | state=release-deploy | resource=build-artifact | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0197 | query=local service low risk | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0295 | state=contacted | failure=invalid-input | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0164 | class=harness-defect | phase=classify | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0125 | page-state=redirected | check=sitemap | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0177 | route=/cho-kenh/[slug] | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0126 | state=release-deploy | resource=build-artifact | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0199 | query=local service low risk | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0298 | state=contacted | failure=invalid-input | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0166 | class=harness-defect | phase=isolate | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0126 | page-state=redirected | check=robots | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0179 | route=/cho-kenh/[slug] | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0127 | state=release-deploy | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0200 | query=local service low risk | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0300 | state=contacted | failure=invalid-input | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0167 | class=harness-defect | phase=isolate | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0127 | page-state=redirected | check=analytics | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0180 | route=/cho-kenh/[slug] | viewport=390 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0128 | state=release-deploy | resource=runtime-port | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0202 | query=local service low risk | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0302 | state=contacted | failure=sensitive-text | action=retry | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0168 | class=harness-defect | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-SEO-0128 | page-state=redirected | check=locale | expected=CONSOLIDATE_AND_CANONICALIZE | assert=truthful unique buyer value, safe public render, justified ledger decision
AC-UI-0182 | route=/cho-kenh/[slug] | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0129 | state=release-deploy | resource=runtime-port | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0203 | query=local service low risk | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0305 | state=contacted | failure=sensitive-text | action=assign | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0169 | class=harness-defect | phase=isolate | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0183 | route=/cho-kenh/[slug] | viewport=430 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0130 | state=release-deploy | resource=runtime-port | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0205 | query=local service low risk | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0307 | state=contacted | failure=double-click | action=create | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0171 | class=harness-defect | phase=fix | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0184 | route=/cho-kenh/[slug] | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0131 | state=release-deploy | resource=runtime-port | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0206 | query=local service low risk | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0309 | state=contacted | failure=double-click | action=read | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0172 | class=harness-defect | phase=fix | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0186 | route=/cho-kenh/[slug] | viewport=430 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0132 | state=release-deploy | resource=runtime-port | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0208 | query=local service low risk | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0312 | state=contacted | failure=double-click | action=open-zalo | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0173 | class=harness-defect | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0187 | route=/cho-kenh/[slug] | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0133 | state=release-deploy | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0210 | query=local service low risk | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0314 | state=contacted | failure=network-timeout | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0175 | class=harness-defect | phase=fix | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0189 | route=/cho-kenh/[slug] | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0134 | state=release-deploy | resource=qa-evidence | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0211 | query=local service low risk | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0317 | state=contacted | failure=network-timeout | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0176 | class=harness-defect | phase=smallest-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0190 | route=/cho-kenh/[slug] | viewport=768 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0135 | state=release-deploy | resource=qa-evidence | action=run-static-test | expected=ALLOW_PRODUCT_SCOPED_NONCONTAMINATING_CHECK | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0213 | query=local service low risk | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0319 | state=contacted | failure=api-500 | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0177 | class=harness-defect | phase=smallest-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0192 | route=/cho-kenh/[slug] | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0136 | state=release-deploy | resource=qa-evidence | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0214 | query=local service low risk | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0321 | state=contacted | failure=api-500 | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0179 | class=harness-defect | phase=smallest-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0193 | route=/cho-kenh/[slug] | viewport=768 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0137 | state=release-deploy | resource=qa-evidence | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0216 | query=local service low risk | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0324 | state=contacted | failure=api-500 | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0180 | class=harness-defect | phase=smallest-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0194 | route=/cho-kenh/[slug] | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0138 | state=release-deploy | resource=qa-evidence | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0218 | query=local service low risk | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0326 | state=contacted | failure=rate-limited | action=retry | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0181 | class=harness-defect | phase=feature-retest | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0196 | route=/cho-kenh/[slug] | viewport=768 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0139 | state=release-deploy | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0219 | query=local service low risk | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0328 | state=contacted | failure=rate-limited | action=update-status | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0183 | class=harness-defect | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0197 | route=/cho-kenh/[slug] | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0140 | state=release-deploy | resource=platform-data | action=prepare-patch | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0221 | query=local service low risk | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0331 | state=contacted | failure=cross-workspace | action=create | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0184 | class=harness-defect | phase=feature-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0199 | route=/cho-kenh/[slug] | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0141 | state=release-deploy | resource=platform-data | action=run-static-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0222 | query=local service low risk | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0333 | state=contacted | failure=cross-workspace | action=read | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0185 | class=harness-defect | phase=feature-retest | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0200 | route=/cho-kenh/[slug] | viewport=1280 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0142 | state=release-deploy | resource=platform-data | action=run-browser-test | expected=PREPARE_WITHOUT_CANONICAL_MUTATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0224 | query=local service low risk | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0336 | state=contacted | failure=cross-workspace | action=open-zalo | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0187 | class=harness-defect | phase=browser-retest | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0202 | route=/cho-kenh/[slug] | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0143 | state=release-deploy | resource=platform-data | action=merge | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0225 | query=local service low risk | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0338 | state=contacted | failure=expired-session | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0188 | class=harness-defect | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0203 | route=/cho-kenh/[slug] | viewport=1280 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0144 | state=release-deploy | resource=platform-data | action=deploy | expected=WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0227 | query=local service low risk | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0340 | state=contacted | failure=expired-session | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0189 | class=harness-defect | phase=browser-retest | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0204 | route=/cho-kenh/[slug] | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0145 | state=stale-lock-suspected | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0229 | query=local service low risk | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0343 | state=contacted | failure=notification-failure | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0191 | class=harness-defect | phase=evidence | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0206 | route=/cho-kenh/[slug] | viewport=1280 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0146 | state=stale-lock-suspected | resource=canonical-source | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0230 | query=local service low risk | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0345 | state=contacted | failure=notification-failure | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0192 | class=harness-defect | phase=evidence | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0207 | route=/cho-kenh/[slug] | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0147 | state=stale-lock-suspected | resource=canonical-source | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0232 | query=local service low risk | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0347 | state=contacted | failure=notification-failure | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0193 | class=harness-defect | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0209 | route=/cho-kenh/[slug] | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0148 | state=stale-lock-suspected | resource=canonical-source | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0233 | query=local service low risk | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0350 | state=contacted | failure=storage-unavailable | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0195 | class=harness-defect | phase=evidence | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0210 | route=/cho-kenh/[slug] | viewport=1440 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0149 | state=stale-lock-suspected | resource=canonical-source | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0235 | query=local service low risk | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0352 | state=contacted | failure=storage-unavailable | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0196 | class=harness-defect | phase=handoff | signal=new-evidence | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0212 | route=/cho-kenh/[slug] | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0150 | state=stale-lock-suspected | resource=canonical-source | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0237 | query=local service low risk | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0355 | state=contacted | failure=stale-update | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0197 | class=harness-defect | phase=handoff | signal=same-fingerprint-first | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0213 | route=/cho-kenh/[slug] | viewport=1440 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0151 | state=stale-lock-suspected | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0238 | query=local service low risk | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0357 | state=contacted | failure=stale-update | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0199 | class=harness-defect | phase=handoff | signal=owner-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0214 | route=/cho-kenh/[slug] | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0152 | state=stale-lock-suspected | resource=isolated-worktree | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0240 | query=local service low risk | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0359 | state=contacted | failure=stale-update | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0200 | class=harness-defect | phase=handoff | signal=source-hash-changed | expected=FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0216 | route=/cho-kenh/[slug] | viewport=1440 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0153 | state=stale-lock-suspected | resource=isolated-worktree | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0241 | query=brand awareness | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0362 | state=qualified | failure=none | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0201 | class=environment-defect | phase=preflight | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0217 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0154 | state=stale-lock-suspected | resource=isolated-worktree | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0243 | query=brand awareness | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0364 | state=qualified | failure=none | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0202 | class=environment-defect | phase=preflight | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0219 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0155 | state=stale-lock-suspected | resource=isolated-worktree | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0244 | query=brand awareness | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0366 | state=qualified | failure=none | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0204 | class=environment-defect | phase=preflight | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0220 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0156 | state=stale-lock-suspected | resource=isolated-worktree | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0246 | query=brand awareness | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0369 | state=qualified | failure=invalid-input | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0205 | class=environment-defect | phase=preflight | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0221 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0157 | state=stale-lock-suspected | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0248 | query=brand awareness | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0371 | state=qualified | failure=invalid-input | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0206 | class=environment-defect | phase=reproduce | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0223 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0158 | state=stale-lock-suspected | resource=build-artifact | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0249 | query=brand awareness | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0374 | state=qualified | failure=sensitive-text | action=retry | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0208 | class=environment-defect | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0224 | route=/cho-kenh/yeu-cau-kenh | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0159 | state=stale-lock-suspected | resource=build-artifact | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0251 | query=brand awareness | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0376 | state=qualified | failure=sensitive-text | action=update-status | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0209 | class=environment-defect | phase=reproduce | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0226 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0160 | state=stale-lock-suspected | resource=build-artifact | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0252 | query=brand awareness | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0378 | state=qualified | failure=sensitive-text | action=open-zalo | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0210 | class=environment-defect | phase=reproduce | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0227 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0161 | state=stale-lock-suspected | resource=build-artifact | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0254 | query=brand awareness | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0381 | state=qualified | failure=double-click | action=read | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0212 | class=environment-defect | phase=classify | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0229 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0162 | state=stale-lock-suspected | resource=build-artifact | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0256 | query=brand awareness | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0383 | state=qualified | failure=double-click | action=assign | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0213 | class=environment-defect | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0230 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0163 | state=stale-lock-suspected | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0257 | query=brand awareness | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0385 | state=qualified | failure=network-timeout | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0214 | class=environment-defect | phase=classify | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0231 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0164 | state=stale-lock-suspected | resource=runtime-port | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0259 | query=brand awareness | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0388 | state=qualified | failure=network-timeout | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0216 | class=environment-defect | phase=isolate | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0233 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0165 | state=stale-lock-suspected | resource=runtime-port | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0260 | query=brand awareness | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0390 | state=qualified | failure=network-timeout | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0217 | class=environment-defect | phase=isolate | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0234 | route=/cho-kenh/yeu-cau-kenh | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0166 | state=stale-lock-suspected | resource=runtime-port | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0262 | query=brand awareness | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0393 | state=qualified | failure=api-500 | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0218 | class=environment-defect | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0236 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0167 | state=stale-lock-suspected | resource=runtime-port | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0263 | query=brand awareness | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0395 | state=qualified | failure=api-500 | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0220 | class=environment-defect | phase=isolate | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0237 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0168 | state=stale-lock-suspected | resource=runtime-port | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0265 | query=brand awareness | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0397 | state=qualified | failure=rate-limited | action=create | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0221 | class=environment-defect | phase=fix | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0239 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0169 | state=stale-lock-suspected | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0267 | query=brand awareness | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0400 | state=qualified | failure=rate-limited | action=update-status | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0222 | class=environment-defect | phase=fix | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0240 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0170 | state=stale-lock-suspected | resource=qa-evidence | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0268 | query=brand awareness | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0402 | state=qualified | failure=rate-limited | action=open-zalo | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0224 | class=environment-defect | phase=fix | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0241 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0171 | state=stale-lock-suspected | resource=qa-evidence | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0270 | query=brand awareness | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0404 | state=qualified | failure=cross-workspace | action=retry | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0225 | class=environment-defect | phase=fix | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0243 | route=/cho-kenh/yeu-cau-kenh | viewport=375 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0172 | state=stale-lock-suspected | resource=qa-evidence | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0271 | query=brand awareness | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0407 | state=qualified | failure=cross-workspace | action=assign | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0226 | class=environment-defect | phase=smallest-retest | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0244 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0173 | state=stale-lock-suspected | resource=qa-evidence | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0273 | query=brand awareness | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0409 | state=qualified | failure=expired-session | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0228 | class=environment-defect | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0246 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0174 | state=stale-lock-suspected | resource=qa-evidence | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0275 | query=brand awareness | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0412 | state=qualified | failure=expired-session | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0229 | class=environment-defect | phase=smallest-retest | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0247 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0175 | state=stale-lock-suspected | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0276 | query=brand awareness | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0414 | state=qualified | failure=expired-session | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0230 | class=environment-defect | phase=smallest-retest | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0249 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0176 | state=stale-lock-suspected | resource=platform-data | action=prepare-patch | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0278 | query=brand awareness | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0416 | state=qualified | failure=notification-failure | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0232 | class=environment-defect | phase=feature-retest | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0250 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0177 | state=stale-lock-suspected | resource=platform-data | action=run-static-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0279 | query=brand awareness | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0419 | state=qualified | failure=notification-failure | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0233 | class=environment-defect | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0251 | route=/cho-kenh/yeu-cau-kenh | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0178 | state=stale-lock-suspected | resource=platform-data | action=run-browser-test | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0281 | query=brand awareness | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0421 | state=qualified | failure=storage-unavailable | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0234 | class=environment-defect | phase=feature-retest | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0253 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0179 | state=stale-lock-suspected | resource=platform-data | action=merge | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0282 | query=brand awareness | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0423 | state=qualified | failure=storage-unavailable | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0235 | class=environment-defect | phase=feature-retest | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0254 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0180 | state=stale-lock-suspected | resource=platform-data | action=deploy | expected=VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0284 | query=brand awareness | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0426 | state=qualified | failure=storage-unavailable | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0237 | class=environment-defect | phase=browser-retest | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0256 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0181 | state=ambiguous-owner | resource=canonical-source | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0286 | query=brand awareness | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0428 | state=qualified | failure=stale-update | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0238 | class=environment-defect | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0257 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0182 | state=ambiguous-owner | resource=canonical-source | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0287 | query=brand awareness | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0431 | state=qualified | failure=stale-update | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0239 | class=environment-defect | phase=browser-retest | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0259 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0183 | state=ambiguous-owner | resource=canonical-source | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0289 | query=under 10m | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0433 | state=matched | failure=none | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0241 | class=environment-defect | phase=evidence | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0260 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0184 | state=ambiguous-owner | resource=canonical-source | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0290 | query=under 10m | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0435 | state=matched | failure=none | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0242 | class=environment-defect | phase=evidence | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0261 | route=/cho-kenh/yeu-cau-kenh | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0185 | state=ambiguous-owner | resource=canonical-source | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0292 | query=under 10m | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0438 | state=matched | failure=none | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0243 | class=environment-defect | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0263 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0186 | state=ambiguous-owner | resource=canonical-source | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0294 | query=under 10m | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0440 | state=matched | failure=invalid-input | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0245 | class=environment-defect | phase=evidence | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0264 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0187 | state=ambiguous-owner | resource=isolated-worktree | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0295 | query=under 10m | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0442 | state=matched | failure=invalid-input | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0246 | class=environment-defect | phase=handoff | signal=new-evidence | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0266 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0188 | state=ambiguous-owner | resource=isolated-worktree | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0297 | query=under 10m | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0445 | state=matched | failure=sensitive-text | action=create | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0247 | class=environment-defect | phase=handoff | signal=same-fingerprint-first | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0267 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0189 | state=ambiguous-owner | resource=isolated-worktree | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0298 | query=under 10m | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0447 | state=matched | failure=sensitive-text | action=read | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0249 | class=environment-defect | phase=handoff | signal=owner-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0269 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0190 | state=ambiguous-owner | resource=isolated-worktree | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0300 | query=under 10m | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0450 | state=matched | failure=sensitive-text | action=open-zalo | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0250 | class=environment-defect | phase=handoff | signal=source-hash-changed | expected=REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0270 | route=/cho-kenh/yeu-cau-kenh | viewport=768 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0191 | state=ambiguous-owner | resource=isolated-worktree | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0301 | query=under 10m | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0452 | state=matched | failure=double-click | action=retry | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0251 | class=ownership-contention | phase=preflight | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0271 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0192 | state=ambiguous-owner | resource=isolated-worktree | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0303 | query=under 10m | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0454 | state=matched | failure=double-click | action=update-status | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0253 | class=ownership-contention | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0273 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0193 | state=ambiguous-owner | resource=build-artifact | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0305 | query=under 10m | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0457 | state=matched | failure=network-timeout | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0254 | class=ownership-contention | phase=preflight | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0274 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0194 | state=ambiguous-owner | resource=build-artifact | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0306 | query=under 10m | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0459 | state=matched | failure=network-timeout | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0255 | class=ownership-contention | phase=preflight | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0276 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0195 | state=ambiguous-owner | resource=build-artifact | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0308 | query=under 10m | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0461 | state=matched | failure=network-timeout | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0257 | class=ownership-contention | phase=reproduce | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0277 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0196 | state=ambiguous-owner | resource=build-artifact | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0309 | query=under 10m | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0464 | state=matched | failure=api-500 | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0258 | class=ownership-contention | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0279 | route=/cho-kenh/yeu-cau-kenh | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0197 | state=ambiguous-owner | resource=build-artifact | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0311 | query=under 10m | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0466 | state=matched | failure=api-500 | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0259 | class=ownership-contention | phase=reproduce | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0280 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0198 | state=ambiguous-owner | resource=build-artifact | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0313 | query=under 10m | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0469 | state=matched | failure=rate-limited | action=create | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0261 | class=ownership-contention | phase=classify | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0281 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0199 | state=ambiguous-owner | resource=runtime-port | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0314 | query=under 10m | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0471 | state=matched | failure=rate-limited | action=read | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0262 | class=ownership-contention | phase=classify | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0283 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0200 | state=ambiguous-owner | resource=runtime-port | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0316 | query=under 10m | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0473 | state=matched | failure=rate-limited | action=assign | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0263 | class=ownership-contention | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0284 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0201 | state=ambiguous-owner | resource=runtime-port | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0317 | query=under 10m | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0476 | state=matched | failure=cross-workspace | action=retry | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0265 | class=ownership-contention | phase=classify | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0286 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0202 | state=ambiguous-owner | resource=runtime-port | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0319 | query=under 10m | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0478 | state=matched | failure=cross-workspace | action=update-status | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0266 | class=ownership-contention | phase=isolate | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0287 | route=/cho-kenh/yeu-cau-kenh | viewport=1440 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0203 | state=ambiguous-owner | resource=runtime-port | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0321 | query=under 10m | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0481 | state=matched | failure=expired-session | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0267 | class=ownership-contention | phase=isolate | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0289 | route=/cho-kenh/contact/[slug] | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0204 | state=ambiguous-owner | resource=runtime-port | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0322 | query=under 10m | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0483 | state=matched | failure=expired-session | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0268 | class=ownership-contention | phase=isolate | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0290 | route=/cho-kenh/contact/[slug] | viewport=320 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0205 | state=ambiguous-owner | resource=qa-evidence | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0324 | query=under 10m | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0485 | state=matched | failure=expired-session | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0270 | class=ownership-contention | phase=isolate | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0291 | route=/cho-kenh/contact/[slug] | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0206 | state=ambiguous-owner | resource=qa-evidence | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0325 | query=under 10m | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0488 | state=matched | failure=notification-failure | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0271 | class=ownership-contention | phase=fix | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0293 | route=/cho-kenh/contact/[slug] | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0207 | state=ambiguous-owner | resource=qa-evidence | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0327 | query=under 10m | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0490 | state=matched | failure=notification-failure | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0272 | class=ownership-contention | phase=fix | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0294 | route=/cho-kenh/contact/[slug] | viewport=320 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0208 | state=ambiguous-owner | resource=qa-evidence | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0328 | query=under 10m | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0492 | state=matched | failure=notification-failure | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0274 | class=ownership-contention | phase=fix | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0296 | route=/cho-kenh/contact/[slug] | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0209 | state=ambiguous-owner | resource=qa-evidence | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0330 | query=under 10m | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0495 | state=matched | failure=storage-unavailable | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0275 | class=ownership-contention | phase=fix | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0297 | route=/cho-kenh/contact/[slug] | viewport=320 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0210 | state=ambiguous-owner | resource=qa-evidence | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0332 | query=under 10m | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0497 | state=matched | failure=storage-unavailable | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0276 | class=ownership-contention | phase=smallest-retest | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0298 | route=/cho-kenh/contact/[slug] | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0211 | state=ambiguous-owner | resource=platform-data | action=inspect | expected=ALLOW_READ_ONLY | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0333 | query=under 10m | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0500 | state=matched | failure=stale-update | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0278 | class=ownership-contention | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0300 | route=/cho-kenh/contact/[slug] | viewport=360 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0212 | state=ambiguous-owner | resource=platform-data | action=prepare-patch | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0335 | query=under 10m | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0502 | state=matched | failure=stale-update | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0279 | class=ownership-contention | phase=smallest-retest | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0301 | route=/cho-kenh/contact/[slug] | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0213 | state=ambiguous-owner | resource=platform-data | action=run-static-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0336 | query=under 10m | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0504 | state=matched | failure=stale-update | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0280 | class=ownership-contention | phase=smallest-retest | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0303 | route=/cho-kenh/contact/[slug] | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0214 | state=ambiguous-owner | resource=platform-data | action=run-browser-test | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0338 | query=available now | constraint=risk-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0507 | state=closed | failure=none | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0282 | class=ownership-contention | phase=feature-retest | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0304 | route=/cho-kenh/contact/[slug] | viewport=360 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0215 | state=ambiguous-owner | resource=platform-data | action=merge | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0340 | query=available now | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0509 | state=closed | failure=none | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0283 | class=ownership-contention | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0306 | route=/cho-kenh/contact/[slug] | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-FREEZE-0216 | state=ambiguous-owner | resource=platform-data | action=deploy | expected=PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION | evidence=live owner metadata plus scope policy | no-blind-poll=true
AC-SEARCH-0341 | query=available now | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0511 | state=closed | failure=invalid-input | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0284 | class=ownership-contention | phase=feature-retest | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0307 | route=/cho-kenh/contact/[slug] | viewport=375 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0343 | query=available now | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0514 | state=closed | failure=invalid-input | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0286 | class=ownership-contention | phase=browser-retest | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0308 | route=/cho-kenh/contact/[slug] | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0344 | query=available now | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0516 | state=closed | failure=invalid-input | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0287 | class=ownership-contention | phase=browser-retest | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0310 | route=/cho-kenh/contact/[slug] | viewport=375 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0346 | query=available now | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0519 | state=closed | failure=sensitive-text | action=read | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0288 | class=ownership-contention | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0311 | route=/cho-kenh/contact/[slug] | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0347 | query=available now | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0521 | state=closed | failure=sensitive-text | action=assign | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0290 | class=ownership-contention | phase=browser-retest | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0313 | route=/cho-kenh/contact/[slug] | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0349 | query=available now | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0523 | state=closed | failure=double-click | action=create | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0291 | class=ownership-contention | phase=evidence | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0314 | route=/cho-kenh/contact/[slug] | viewport=375 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0351 | query=available now | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0526 | state=closed | failure=double-click | action=update-status | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0292 | class=ownership-contention | phase=evidence | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0316 | route=/cho-kenh/contact/[slug] | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0352 | query=available now | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0528 | state=closed | failure=double-click | action=open-zalo | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0294 | class=ownership-contention | phase=evidence | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0317 | route=/cho-kenh/contact/[slug] | viewport=390 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0354 | query=available now | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0530 | state=closed | failure=network-timeout | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0295 | class=ownership-contention | phase=evidence | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0318 | route=/cho-kenh/contact/[slug] | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0355 | query=available now | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0533 | state=closed | failure=network-timeout | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0296 | class=ownership-contention | phase=handoff | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0320 | route=/cho-kenh/contact/[slug] | viewport=390 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0357 | query=available now | constraint=status-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0535 | state=closed | failure=api-500 | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0298 | class=ownership-contention | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0321 | route=/cho-kenh/contact/[slug] | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0359 | query=available now | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0538 | state=closed | failure=api-500 | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0299 | class=ownership-contention | phase=handoff | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0323 | route=/cho-kenh/contact/[slug] | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0360 | query=available now | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0540 | state=closed | failure=api-500 | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0300 | class=ownership-contention | phase=handoff | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0324 | route=/cho-kenh/contact/[slug] | viewport=390 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0362 | query=available now | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0542 | state=closed | failure=rate-limited | action=retry | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0301 | class=release-contention | phase=preflight | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0326 | route=/cho-kenh/contact/[slug] | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0363 | query=available now | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0545 | state=closed | failure=rate-limited | action=assign | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0303 | class=release-contention | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0327 | route=/cho-kenh/contact/[slug] | viewport=430 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0365 | query=available now | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0547 | state=closed | failure=cross-workspace | action=create | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0304 | class=release-contention | phase=preflight | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0328 | route=/cho-kenh/contact/[slug] | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0366 | query=available now | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0549 | state=closed | failure=cross-workspace | action=read | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0305 | class=release-contention | phase=preflight | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0330 | route=/cho-kenh/contact/[slug] | viewport=430 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0368 | query=available now | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0552 | state=closed | failure=cross-workspace | action=open-zalo | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0307 | class=release-contention | phase=reproduce | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0331 | route=/cho-kenh/contact/[slug] | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0370 | query=available now | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0554 | state=closed | failure=expired-session | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0308 | class=release-contention | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0333 | route=/cho-kenh/contact/[slug] | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0371 | query=available now | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0557 | state=closed | failure=expired-session | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0309 | class=release-contention | phase=reproduce | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0334 | route=/cho-kenh/contact/[slug] | viewport=768 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0373 | query=available now | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0559 | state=closed | failure=notification-failure | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0311 | class=release-contention | phase=classify | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0336 | route=/cho-kenh/contact/[slug] | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0374 | query=available now | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0561 | state=closed | failure=notification-failure | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0312 | class=release-contention | phase=classify | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0337 | route=/cho-kenh/contact/[slug] | viewport=768 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0376 | query=available now | constraint=engagement-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0564 | state=closed | failure=notification-failure | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0313 | class=release-contention | phase=classify | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0338 | route=/cho-kenh/contact/[slug] | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0378 | query=available now | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0566 | state=closed | failure=storage-unavailable | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0315 | class=release-contention | phase=classify | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0340 | route=/cho-kenh/contact/[slug] | viewport=768 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0379 | query=available now | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0568 | state=closed | failure=storage-unavailable | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0316 | class=release-contention | phase=isolate | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0341 | route=/cho-kenh/contact/[slug] | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0381 | query=available now | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0571 | state=closed | failure=stale-update | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0317 | class=release-contention | phase=isolate | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0343 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0382 | query=available now | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0573 | state=closed | failure=stale-update | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0319 | class=release-contention | phase=isolate | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0344 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0384 | query=available now | constraint=freshness-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0576 | state=closed | failure=stale-update | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0320 | class=release-contention | phase=isolate | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0346 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0385 | query=newest verified | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0578 | state=spam | failure=none | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0321 | class=release-contention | phase=fix | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0347 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0387 | query=newest verified | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0580 | state=spam | failure=none | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0323 | class=release-contention | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0348 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0389 | query=newest verified | constraint=risk-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0583 | state=spam | failure=invalid-input | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0324 | class=release-contention | phase=fix | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0350 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0390 | query=newest verified | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0585 | state=spam | failure=invalid-input | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0325 | class=release-contention | phase=fix | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0351 | route=/cho-kenh/contact/[slug] | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0392 | query=newest verified | constraint=budget-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0587 | state=spam | failure=invalid-input | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0327 | class=release-contention | phase=smallest-retest | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0353 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0393 | query=newest verified | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0590 | state=spam | failure=sensitive-text | action=retry | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0328 | class=release-contention | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0354 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0395 | query=newest verified | constraint=budget-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0592 | state=spam | failure=sensitive-text | action=update-status | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0329 | class=release-contention | phase=smallest-retest | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0356 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0397 | query=newest verified | constraint=availability-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0595 | state=spam | failure=double-click | action=create | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0331 | class=release-contention | phase=feature-retest | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0357 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0398 | query=newest verified | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0597 | state=spam | failure=double-click | action=read | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0332 | class=release-contention | phase=feature-retest | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0358 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0400 | query=newest verified | constraint=availability-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0599 | state=spam | failure=double-click | action=assign | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0333 | class=release-contention | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0360 | route=/cho-kenh/contact/[slug] | viewport=1440 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0401 | query=newest verified | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0602 | state=spam | failure=network-timeout | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0334 | class=release-contention | phase=feature-retest | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0361 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0403 | query=newest verified | constraint=status-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0604 | state=spam | failure=network-timeout | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0336 | class=release-contention | phase=browser-retest | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0363 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0404 | query=newest verified | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0606 | state=spam | failure=network-timeout | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0337 | class=release-contention | phase=browser-retest | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0364 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0406 | query=newest verified | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0609 | state=spam | failure=api-500 | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0338 | class=release-contention | phase=browser-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0365 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0408 | query=newest verified | constraint=status-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0611 | state=spam | failure=api-500 | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0340 | class=release-contention | phase=browser-retest | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0367 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0409 | query=newest verified | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0614 | state=spam | failure=rate-limited | action=retry | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0341 | class=release-contention | phase=evidence | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0368 | route=/tiktok-channel-starter/[slug] | viewport=320 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0411 | query=newest verified | constraint=niche-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0616 | state=spam | failure=rate-limited | action=update-status | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0342 | class=release-contention | phase=evidence | signal=same-fingerprint-first | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0370 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0412 | query=newest verified | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0618 | state=spam | failure=rate-limited | action=open-zalo | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0344 | class=release-contention | phase=evidence | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0371 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0414 | query=newest verified | constraint=niche-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0621 | state=spam | failure=cross-workspace | action=read | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0345 | class=release-contention | phase=evidence | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0373 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0416 | query=newest verified | constraint=views-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0623 | state=spam | failure=cross-workspace | action=assign | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0346 | class=release-contention | phase=handoff | signal=new-evidence | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0374 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0417 | query=newest verified | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0625 | state=spam | failure=expired-session | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0348 | class=release-contention | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0375 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0419 | query=newest verified | constraint=views-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0628 | state=spam | failure=expired-session | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0349 | class=release-contention | phase=handoff | signal=owner-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0377 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0420 | query=newest verified | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0630 | state=spam | failure=expired-session | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0350 | class=release-contention | phase=handoff | signal=source-hash-changed | expected=QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0378 | route=/tiktok-channel-starter/[slug] | viewport=360 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0422 | query=newest verified | constraint=engagement-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0633 | state=spam | failure=notification-failure | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0352 | class=security-blocker | phase=preflight | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0380 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0423 | query=newest verified | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0635 | state=spam | failure=notification-failure | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0353 | class=security-blocker | phase=preflight | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0381 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0425 | query=newest verified | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0637 | state=spam | failure=storage-unavailable | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0354 | class=security-blocker | phase=preflight | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0383 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0427 | query=newest verified | constraint=freshness-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0640 | state=spam | failure=storage-unavailable | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0356 | class=security-blocker | phase=reproduce | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0384 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0428 | query=newest verified | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0642 | state=spam | failure=storage-unavailable | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0357 | class=security-blocker | phase=reproduce | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0385 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0430 | query=newest verified | constraint=freshness-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0644 | state=spam | failure=stale-update | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0358 | class=security-blocker | phase=reproduce | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0387 | route=/tiktok-channel-starter/[slug] | viewport=375 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0431 | query=newest verified | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0647 | state=spam | failure=stale-update | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0360 | class=security-blocker | phase=reproduce | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0388 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0433 | query=unknown niche phrase | constraint=risk-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0649 | state=duplicate | failure=none | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0361 | class=security-blocker | phase=classify | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0390 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0435 | query=unknown niche phrase | constraint=risk-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0652 | state=duplicate | failure=none | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0362 | class=security-blocker | phase=classify | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0391 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0436 | query=unknown niche phrase | constraint=risk-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0654 | state=duplicate | failure=none | action=open-zalo | expected=DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0364 | class=security-blocker | phase=classify | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0393 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0438 | query=unknown niche phrase | constraint=risk-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0656 | state=duplicate | failure=invalid-input | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0365 | class=security-blocker | phase=classify | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0394 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0439 | query=unknown niche phrase | constraint=budget-hard | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0659 | state=duplicate | failure=invalid-input | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0366 | class=security-blocker | phase=isolate | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0395 | route=/tiktok-channel-starter/[slug] | viewport=390 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0441 | query=unknown niche phrase | constraint=budget-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0661 | state=duplicate | failure=sensitive-text | action=create | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0367 | class=security-blocker | phase=isolate | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0397 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0442 | query=unknown niche phrase | constraint=budget-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0663 | state=duplicate | failure=sensitive-text | action=read | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0369 | class=security-blocker | phase=isolate | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0398 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0444 | query=unknown niche phrase | constraint=budget-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0666 | state=duplicate | failure=sensitive-text | action=open-zalo | expected=REJECT_OR_REDACT_BY_POLICY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0370 | class=security-blocker | phase=isolate | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0400 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0446 | query=unknown niche phrase | constraint=availability-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0668 | state=duplicate | failure=double-click | action=retry | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0371 | class=security-blocker | phase=fix | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0401 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0447 | query=unknown niche phrase | constraint=availability-hard | inventory=hard-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0671 | state=duplicate | failure=double-click | action=assign | expected=RETURN_SAME_IDEMPOTENT_RESULT | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0373 | class=security-blocker | phase=fix | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0403 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0449 | query=unknown niche phrase | constraint=availability-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0673 | state=duplicate | failure=network-timeout | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0374 | class=security-blocker | phase=fix | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0404 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0450 | query=unknown niche phrase | constraint=availability-hard | inventory=reserved-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0675 | state=duplicate | failure=network-timeout | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0375 | class=security-blocker | phase=fix | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0405 | route=/tiktok-channel-starter/[slug] | viewport=430 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0452 | query=unknown niche phrase | constraint=status-hard | inventory=soft-mismatch | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0678 | state=duplicate | failure=network-timeout | action=open-zalo | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0377 | class=security-blocker | phase=smallest-retest | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0407 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0454 | query=unknown niche phrase | constraint=status-hard | inventory=no-inventory | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0680 | state=duplicate | failure=api-500 | action=retry | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0378 | class=security-blocker | phase=smallest-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0408 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0455 | query=unknown niche phrase | constraint=status-hard | inventory=stale-only | expected=NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0682 | state=duplicate | failure=api-500 | action=update-status | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0379 | class=security-blocker | phase=smallest-retest | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0410 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0457 | query=unknown niche phrase | constraint=niche-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0685 | state=duplicate | failure=rate-limited | action=create | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0381 | class=security-blocker | phase=feature-retest | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0411 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0458 | query=unknown niche phrase | constraint=niche-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0687 | state=duplicate | failure=rate-limited | action=read | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0382 | class=security-blocker | phase=feature-retest | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0413 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0460 | query=unknown niche phrase | constraint=niche-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0690 | state=duplicate | failure=rate-limited | action=open-zalo | expected=BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0383 | class=security-blocker | phase=feature-retest | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0414 | route=/tiktok-channel-starter/[slug] | viewport=768 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0461 | query=unknown niche phrase | constraint=niche-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0692 | state=duplicate | failure=cross-workspace | action=retry | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0385 | class=security-blocker | phase=feature-retest | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0415 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0463 | query=unknown niche phrase | constraint=views-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0694 | state=duplicate | failure=cross-workspace | action=update-status | expected=DENY_AND_AUDIT_SAFE_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0386 | class=security-blocker | phase=browser-retest | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0417 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=filter-open | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0465 | query=unknown niche phrase | constraint=views-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0697 | state=duplicate | failure=expired-session | action=create | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0387 | class=security-blocker | phase=browser-retest | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0418 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0466 | query=unknown niche phrase | constraint=views-soft | inventory=no-inventory | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0699 | state=duplicate | failure=expired-session | action=read | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0389 | class=security-blocker | phase=browser-retest | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0420 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=request-error | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0468 | query=unknown niche phrase | constraint=views-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0701 | state=duplicate | failure=expired-session | action=assign | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0390 | class=security-blocker | phase=browser-retest | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0421 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0469 | query=unknown niche phrase | constraint=engagement-soft | inventory=exact-match | expected=RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0704 | state=duplicate | failure=notification-failure | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0391 | class=security-blocker | phase=evidence | signal=new-evidence | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0423 | route=/tiktok-channel-starter/[slug] | viewport=1280 | state=offline | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0471 | query=unknown niche phrase | constraint=engagement-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0706 | state=duplicate | failure=notification-failure | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0393 | class=security-blocker | phase=evidence | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0424 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=initial | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0473 | query=unknown niche phrase | constraint=engagement-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0709 | state=duplicate | failure=storage-unavailable | action=create | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0394 | class=security-blocker | phase=evidence | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0425 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=searching | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0474 | query=unknown niche phrase | constraint=engagement-soft | inventory=reserved-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0711 | state=duplicate | failure=storage-unavailable | action=read | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0395 | class=security-blocker | phase=evidence | signal=source-hash-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0427 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=no-results | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0476 | query=unknown niche phrase | constraint=freshness-soft | inventory=soft-mismatch | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0713 | state=duplicate | failure=storage-unavailable | action=assign | expected=PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0397 | class=security-blocker | phase=handoff | signal=same-fingerprint-first | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0428 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=alternatives | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0477 | query=unknown niche phrase | constraint=freshness-soft | inventory=hard-mismatch | expected=BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0716 | state=duplicate | failure=stale-update | action=retry | expected=VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0398 | class=security-blocker | phase=handoff | signal=same-fingerprint-second | expected=ENTER_META_DIAGNOSIS_NO_BLIND_RERUN | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0430 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=request-submitting | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
AC-SEARCH-0479 | query=unknown niche phrase | constraint=freshness-soft | inventory=stale-only | expected=SEPARATE_DISCLOSED_ALTERNATIVES | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome
AC-BUYER-0718 | state=duplicate | failure=stale-update | action=update-status | expected=REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery
AC-QA-0399 | class=security-blocker | phase=handoff | signal=owner-changed | expected=STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling
AC-UI-0431 | route=/tiktok-channel-starter/[slug] | viewport=1440 | state=request-success | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot
<!-- SECTION:ACCEPTANCE_MATRIX:END -->
<!-- END: EXACTLY 2000 LINES -->
