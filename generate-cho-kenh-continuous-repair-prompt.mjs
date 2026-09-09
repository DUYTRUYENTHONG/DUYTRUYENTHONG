import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const outputPath = resolve(dirname(fileURLToPath(import.meta.url)), "CHO_KENH_CONTINUOUS_REPAIR_QA_PROMPT_2000_LINES.md");
const targetLines = 2000;

function split(value) {
  return String(value).trim().split(/\r?\n/).map((line) => line.trimEnd());
}

function section(id, title, body) {
  return [
    `<!-- SECTION:${id}:START -->`,
    `## ${title}`,
    `SECTION_ID: ${id}`,
    ...split(body),
    `<!-- SECTION:${id}:END -->`,
    "<!-- SECTION BREAK -->"
  ];
}

const core = [
  "# Cho Kenh Continuous Root-Cause Repair and QA Prompt",
  "PROMPT_VERSION: 1.0.0",
  "TARGET_PRODUCT: Cho Kenh",
  "TARGET_LINE_COUNT: 2000",
  "PURPOSE: Continue solving recoverable product and QA problems without violating real ownership, release, privacy, or data-safety boundaries.",
  "<!-- SECTION BREAK -->",
  ...section("MISSION", "Single active goal", `
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
`),
  ...section("DISPATCH", "Ownership dispatch", `
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
`),
  ...section("BASELINE", "Known current evidence", `
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
`),
  ...section("STATUS_MODEL", "Recoverable status model", `
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
`),
  ...section("FREEZE", "Release source freeze protocol", `
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
`),
  ...section("LEASE", "Lease request and handoff", `
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
`),
  ...section("REPAIR_LOOP", "Continuous root-cause repair loop", `
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
`),
  ...section("QA_CLASSIFICATION", "QA failure taxonomy", `
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
`),
  ...section("QA_REPAIR", "QA harness repair rules", `
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
`),
  ...section("SEARCH", "Search hard constraints and fallback", `
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
`),
  ...section("PUBLIC_PROJECTION", "Public listing safety", `
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
`),
  ...section("BUYER_REQUEST", "Buyer-request persistence", `
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
`),
  ...section("BUYER_DATA_HANDOFF", "Platform data handoff packet", `
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
`),
  ...section("SEO", "SEO 27 of 50 quality recovery", `
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
`),
  ...section("TARGET_TESTS", "Required targeted tests", `
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
`),
  ...section("BROWSER_QA", "Buyer workflow browser QA", `
Validate 320, 360, 375, 390, 430, 768, 1280, and 1440 widths where the current QA contract requires them.
Validate marketplace home, catalog, listing detail, buyer request, contact handoff, escrow trust, and relevant SEO landing routes.
Validate initial, search suggestions, filters open, no results, alternatives, shortlist, buyer request, validation error, persistence error, submitting, success, and offline states.
No horizontal overflow, hidden primary action, overlapping sticky CTA, clipped text, inaccessible dialog, broken keyboard path, or mobile keyboard obstruction is acceptable.
Primary CTA must remain understandable and safe.
Browser assertions must inspect actual rendered behavior, network responses, console errors, and relevant storage state.
Source checks alone cannot prove persistence or responsive quality.
Do not submit real production requests during live QA without an explicit safe test path.
`),
  ...section("SPRINT", "Execution slices", `
Slice 1 repairs hard-constraint parsing, exact result separation, disclosed fallback, and search-safety assertions.
Slice 2 hardens public projection across API, listing cards, detail, metadata, telemetry, and leak tests.
Slice 3 defines BuyerRequest product contract, validation, idempotency, lifecycle, and shared-data handoff.
Slice 4 receives the platform implementation, verifies persistence, authorization, dedupe, lifecycle, and Zalo reference handoff.
Slice 5 reviews all 50 SEO candidates, repairs valuable pages, consolidates duplicates, and verifies index decisions.
Slice 6 runs targeted product QA, responsive buyer simulation, security checks, and release handoff preparation.
Each slice ends with source ownership state, exact files, tests, evidence, open risk, rollback, and next action.
Do not combine platform data migration, product search, and release deploy into one writer task.
`),
  ...section("ARTIFACTS", "Run artifacts and resumability", `
Persist goal-window.md, current-state.json, owner-evidence.json, lease-request.json, source-hashes.json, patch-packet.md, proposed.patch, search-contract.md, buyer-request-contract.md, platform-data-handoff.md, seo-decision-ledger.json, qa-failure-ledger.jsonl, test-results.md, repair-log.md, release-handoff.md, and final-report.md.
Patch packet includes objective, root cause, exact paths, baseline hashes, proposed diff, tests, expected output, impact, privacy review, rollback, and lease request.
Failure ledger records fingerprint, classification, hypothesis, discriminating check, fix, retest, and outcome.
SEO ledger records every candidate page and justified index decision.
At context boundaries, resume from these artifacts and do not rerun completed audits.
`),
  ...section("FINAL", "Completion and reporting", `
Do not finish with only BLOCKED_BY_RELEASE_SOURCE_FREEZE when the freeze is recoverable and a resume path exists.
Report WAITING_FOR_RELEASE_WINDOW with lease request, prepared patch, completed tests, resume trigger, and exact next command.
Use BLOCKED only for destructive risk, missing authorization with no handoff path, required external outage, unavailable secret, or irreconcilable overlapping edits.
Final report lists buyer problem solved, search contract, fallback behavior, public safety, buyer-request persistence, SEO decision coverage, files changed, leases, QA classification, commands, browser evidence, residual risk, release readiness, and next slice.
Do not claim production readiness without current product and release evidence.
Do not deploy unless explicitly requested and release:shared owns the release.
`)
];

const freezeStates = ["no-owner", "release-quiet-window", "release-build", "release-deploy", "stale-lock-suspected", "ambiguous-owner"];
const freezeResources = ["canonical-source", "isolated-worktree", "build-artifact", "runtime-port", "qa-evidence", "platform-data"];
const freezeActions = ["inspect", "prepare-patch", "run-static-test", "run-browser-test", "merge", "deploy"];

function freezeDecision(state, resource, action) {
  if (action === "inspect") return "ALLOW_READ_ONLY";
  if (state === "no-owner") return action === "deploy" ? "DENY_RELEASE_OWNER_REQUIRED" : "ALLOW_IF_PATH_OWNERSHIP_PASSES";
  if (state === "stale-lock-suspected") return "VERIFY_PID_HEARTBEAT_PARENT_AND_CONTROL_STATE_FIRST";
  if (state === "ambiguous-owner") return "PREPARE_ONLY_AND_REQUEST_OWNER_RECONCILIATION";
  if (resource === "isolated-worktree" && action === "prepare-patch") return "ALLOW_ONLY_IF_FREEZE_POLICY_EXPLICITLY_PERMITS";
  if (["merge", "deploy"].includes(action)) return "WAIT_FOR_EVENT_AND_EXACT_OWNER_RELEASE";
  if (resource === "qa-evidence" && action === "run-static-test") return "ALLOW_PRODUCT_SCOPED_NONCONTAMINATING_CHECK";
  return "PREPARE_WITHOUT_CANONICAL_MUTATION";
}

function freezeCases() {
  const lines = [];
  let id = 1;
  for (const state of freezeStates) for (const resource of freezeResources) for (const action of freezeActions) {
    lines.push(`AC-FREEZE-${String(id++).padStart(4, "0")} | state=${state} | resource=${resource} | action=${action} | expected=${freezeDecision(state, resource, action)} | evidence=live owner metadata plus scope policy | no-blind-poll=true`);
  }
  return lines;
}

const queries = ["beauty 10k low risk", "food livestream", "bds tu van", "affiliate audit 80", "local service low risk", "brand awareness", "under 10m", "available now", "newest verified", "unknown niche phrase"];
const constraints = ["risk-hard", "budget-hard", "availability-hard", "status-hard", "niche-soft", "views-soft", "engagement-soft", "freshness-soft"];
const inventoryStates = ["exact-match", "soft-mismatch", "hard-mismatch", "no-inventory", "stale-only", "reserved-only"];

function searchExpected(constraint, inventory) {
  if (inventory === "exact-match") return "RETURN_EXACT_WITH_FIT_AND_RISK_EXPLANATION";
  if (constraint.endsWith("hard")) return "NO_EXACT_MATCH_AND_NEVER_RELAX_SILENTLY";
  if (["soft-mismatch", "stale-only", "reserved-only"].includes(inventory)) return "SEPARATE_DISCLOSED_ALTERNATIVES";
  return "BUYER_REQUEST_PATH_WITH_INTERPRETED_INTENT";
}

function searchCases() {
  const lines = [];
  let id = 1;
  for (const query of queries) for (const constraint of constraints) for (const inventory of inventoryStates) {
    lines.push(`AC-SEARCH-${String(id++).padStart(4, "0")} | query=${query} | constraint=${constraint} | inventory=${inventory} | expected=${searchExpected(constraint, inventory)} | assert=safe projection, deterministic order, fallback disclosure, telemetry classification, no guaranteed outcome`);
  }
  return lines;
}

const buyerStates = ["draft", "validating", "submitting", "submitted", "contacted", "qualified", "matched", "closed", "spam", "duplicate"];
const buyerFailures = ["none", "invalid-input", "sensitive-text", "double-click", "network-timeout", "api-500", "rate-limited", "cross-workspace", "expired-session", "notification-failure", "storage-unavailable", "stale-update"];
const buyerActions = ["create", "retry", "read", "update-status", "assign", "open-zalo"];

function buyerExpected(state, failure, action) {
  if (failure === "cross-workspace") return "DENY_AND_AUDIT_SAFE_REFERENCE";
  if (failure === "sensitive-text") return "REJECT_OR_REDACT_BY_POLICY";
  if (failure === "double-click") return "RETURN_SAME_IDEMPOTENT_RESULT";
  if (["network-timeout", "api-500", "storage-unavailable"].includes(failure)) return "PRESERVE_DRAFT_NO_FALSE_SUCCESS_AND_OFFER_SAFE_RETRY";
  if (failure === "rate-limited") return "BOUNDED_RETRY_GUIDANCE_NO_DUPLICATE";
  if (action === "open-zalo" && state !== "submitted") return "DENY_TRACKED_SUCCESS_UNTIL_PERSISTED_OR_LABEL_EXPLICIT_FALLBACK";
  if (["read", "update-status", "assign"].includes(action)) return "REQUIRE_AUTHORIZED_OPERATOR_AND_WORKSPACE_SCOPE";
  return "VALIDATE_PERSIST_AUDIT_AND_RETURN_SAFE_REQUEST_REFERENCE";
}

function buyerCases() {
  const lines = [];
  let id = 1;
  for (const state of buyerStates) for (const failure of buyerFailures) for (const action of buyerActions) {
    lines.push(`AC-BUYER-${String(id++).padStart(4, "0")} | state=${state} | failure=${failure} | action=${action} | expected=${buyerExpected(state, failure, action)} | assert=idempotency, dedupe, privacy, lifecycle, attribution, audit, recovery`);
  }
  return lines;
}

const qaClasses = ["product-defect", "test-defect", "fixture-defect", "harness-defect", "environment-defect", "ownership-contention", "release-contention", "security-blocker"];
const qaPhases = ["preflight", "reproduce", "classify", "isolate", "fix", "smallest-retest", "feature-retest", "browser-retest", "evidence", "handoff"];
const qaSignals = ["new-evidence", "same-fingerprint-first", "same-fingerprint-second", "owner-changed", "source-hash-changed"];

function qaCases() {
  const lines = [];
  let id = 1;
  for (const kind of qaClasses) for (const phase of qaPhases) for (const signal of qaSignals) {
    const expected = signal === "same-fingerprint-second"
      ? "ENTER_META_DIAGNOSIS_NO_BLIND_RERUN"
      : kind.endsWith("contention")
        ? "QUEUE_ONCE_AND_RESUME_ON_STATE_CHANGE"
        : kind === "security-blocker"
          ? "STOP_UNSAFE_ACTION_AND_CONTINUE_SAFE_REMEDIATION"
          : kind === "environment-defect"
            ? "REPAIR_OR_ISOLATE_ENVIRONMENT_THEN_RERUN_VALID_CHECK"
            : "FIX_OWNING_LAYER_AND_COLLECT_EVIDENCE";
    lines.push(`AC-QA-${String(id++).padStart(4, "0")} | class=${kind} | phase=${phase} | signal=${signal} | expected=${expected} | assert=no weakened gate, no fake pass, no foreign evidence, no infinite polling`);
  }
  return lines;
}

const seoStates = ["indexable", "noindex-thin", "noindex-no-inventory", "duplicate", "stale", "unsafe", "draft", "redirected"];
const seoChecks = ["buyer-intent", "unique-value", "inventory-support", "safe-listings", "title", "description", "canonical", "structured-data", "internal-links", "cta", "faq", "public-html", "sitemap", "robots", "analytics", "locale"];

function seoCases() {
  const lines = [];
  let id = 1;
  for (const state of seoStates) for (const check of seoChecks) {
    const expected = state === "indexable" ? "PASS_REQUIRED" : ["duplicate", "redirected"].includes(state) ? "CONSOLIDATE_AND_CANONICALIZE" : "KEEP_NOINDEX_UNTIL_VALUE_AND_SAFETY_PASS";
    lines.push(`AC-SEO-${String(id++).padStart(4, "0")} | page-state=${state} | check=${check} | expected=${expected} | assert=truthful unique buyer value, safe public render, justified ledger decision`);
  }
  return lines;
}

const sensitiveFields = ["real_handle", "credentials", "seller_private_contact", "acquisition_cost", "exact_internal_price", "private_notes", "sheet_row_metadata", "recovery_email", "recovery_phone", "identity_document", "raw_proof", "buyer_contact"];
const publicSurfaces = ["search-api", "catalog-card", "detail-page", "metadata", "json-ld", "analytics", "error", "log", "screenshot", "zalo-handoff"];

function safetyCases() {
  const lines = [];
  let id = 1;
  for (const field of sensitiveFields) for (const surface of publicSurfaces) {
    const expected = field === "buyer_contact" && surface === "zalo-handoff" ? "ALLOW_ONLY_EXPLICIT_BUYER_OWNED_CONTEXT_BY_POLICY" : "DENY_PUBLIC_EXPOSURE";
    lines.push(`AC-SAFE-${String(id++).padStart(4, "0")} | field=${field} | surface=${surface} | expected=${expected} | assert=domain projection or server authorization, not CSS hiding`);
  }
  return lines;
}

const routes = ["/cho-kenh", "/cho-kenh/catalog", "/cho-kenh/[slug]", "/cho-kenh/yeu-cau-kenh", "/cho-kenh/contact/[slug]", "/tiktok-channel-starter/[slug]"];
const viewports = ["320", "360", "375", "390", "430", "768", "1280", "1440"];
const states = ["initial", "searching", "filter-open", "no-results", "alternatives", "request-error", "request-submitting", "request-success", "offline"];

function responsiveCases() {
  const lines = [];
  let id = 1;
  for (const route of routes) for (const viewport of viewports) for (const state of states) {
    lines.push(`AC-UI-${String(id++).padStart(4, "0")} | route=${route} | viewport=${viewport} | state=${state} | assert=overflowX<=1, no overlap, primary action visible, text fits, touch and keyboard work, safe CTA context, stable layout | evidence=browser metrics plus screenshot`);
  }
  return lines;
}

const pools = [freezeCases(), searchCases(), buyerCases(), qaCases(), seoCases(), safetyCases(), responsiveCases()];
const matrixHeader = [
  "<!-- SECTION:ACCEPTANCE_MATRIX:START -->",
  "## Cross-system acceptance matrix",
  "SECTION_ID: ACCEPTANCE_MATRIX",
  "Every selected case is executable acceptance evidence, not filler."
];
const closing = [
  "<!-- SECTION:ACCEPTANCE_MATRIX:END -->",
  "<!-- END: EXACTLY 2000 LINES -->"
];
const requiredCases = targetLines - core.length - matrixHeader.length - closing.length;
function sampleEvenly(pool, count) {
  if (count >= pool.length) return [...pool];
  return Array.from({ length: count }, (_, index) => pool[Math.floor((index * pool.length) / count)]);
}

const fullPoolIndexes = new Set([0, 4, 5]);
const variablePoolIndexes = [1, 2, 3, 6];
const fixedCount = pools.reduce((total, pool, index) => total + (fullPoolIndexes.has(index) ? pool.length : 0), 0);
const variableBudget = requiredCases - fixedCount;
const baseVariableCount = Math.floor(variableBudget / variablePoolIndexes.length);
let variableRemainder = variableBudget % variablePoolIndexes.length;
const selectedPools = pools.map((pool, index) => {
  if (fullPoolIndexes.has(index)) return [...pool];
  const count = baseVariableCount + (variableRemainder > 0 ? 1 : 0);
  variableRemainder = Math.max(0, variableRemainder - 1);
  return sampleEvenly(pool, count);
});

const selected = [];
let selectedCursor = 0;
while (selected.length < requiredCases) {
  let added = false;
  for (const pool of selectedPools) {
    if (selectedCursor < pool.length && selected.length < requiredCases) {
      selected.push(pool[selectedCursor]);
      added = true;
    }
  }
  if (!added) throw new Error(`Acceptance pools exhausted at ${selected.length}/${requiredCases}`);
  selectedCursor += 1;
}

const lines = [...core, ...matrixHeader, ...selected, ...closing].map((line) => line === "" ? "<!-- SECTION BREAK -->" : line);
if (lines.length !== targetLines) throw new Error(`Expected ${targetLines} lines, received ${lines.length}`);
writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
process.stdout.write(`${JSON.stringify({ status: "PASS", outputPath, lineCount: lines.length, acceptanceCases: selected.length }, null, 2)}\n`);
