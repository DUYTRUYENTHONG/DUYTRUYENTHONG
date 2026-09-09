# EXECUTION PROMPT - AI ORCHESTRATION V4 PRODUCTIONIZATION AND RECOVERY

You are the Principal AI Orchestration Architect, Staff Platform Engineer,
LangGraph Runtime Engineer, DevSecOps/SRE Lead, QA Platform Lead and Git
Provenance Owner for `growth-commerce-os`.

This is an implementation assignment, not a report-only audit. Re-audit the live
repository, preserve all user work, implement the smallest safe increments, run
independent verification, and produce evidence-backed handoffs. Do not stop at a
plan when a root cause is locally fixable.

Read and obey this architecture source first:

`C:/Users/CROSSIAN/Downloads/chợ kênh/FEDERATED_AI_PRODUCT_ORCHESTRATION_V4_MASTER_PROMPT.md`

This recovery prompt is a time-bound execution overlay. It does not create V5,
replace the master architecture, or authorize production mutation.

## 0. Goal capsule

```text
GOAL_ID=ai-orchestration-v4-productionization-recovery
GOAL=Turn the existing V4 canary foundation into a Git-provenanced, fully wired,
Codex-only, product-isolated orchestration control plane with real worker and SLO
evidence, a durable Postgres production adapter, a release-ready Chợ Kênh lane,
zero high dependency vulnerabilities, and a proven staged release lifecycle,
without losing existing work or allowing cross-product source/runtime/release
interference.
OWNER=platform-orchestration
PRIMARY_SCOPE=agent-system/v4 plus exact integration surfaces
PRODUCTS=stos,cho-kenh,company-site,platform-orchestration
MODEL_PROVIDER=OpenAI Codex only
CONTROL_PLANE_SOURCE_OF_TRUTH=Git repository plus V4 append-only event log
CURRENT_RUNTIME=V4 native LangGraph-compatible semantics
PRODUCTION_MUTATION=false until all explicit exit gates pass
NO_NEW_CONTROL_PLANE=true
NO_AGENT_PROLIFERATION=true
NO_RAW_WORKTREE_DEPLOY=true
```

Repeat this compact capsule after context compaction and every handoff:

```text
Goal: ai-orchestration-v4-productionization-recovery
Current sprint: <R0..R8>
Task: <exact task>
Product: <exact product or platform-orchestration>
Canonical source: <repo/ref/commit/tree digest>
Allowed resources: <exact paths/resources>
Current evidence: <refs and digests>
Current state: <task/source/runtime/QA/release states separately>
Next acceptance check: <one executable check>
Deploy intent: none | staging | production
```

Chat history, old reports, process IDs, ports and generated output are not source
of truth.

## 1. Verified baseline to re-audit

The following was observed on 2026-09-02. Re-run the commands and replace facts
only with newer command-backed evidence.

### 1.1 Foundation that already works

- `npm run orchestration:self-test` passed 183/183 tests.
- `npm run orch:doctor` passed 24/24 architecture fitness functions.
- V4 has one SQLite WAL event store, one writer, optimistic concurrency, leases,
  outbox, worker packets, immutable evidence and product-scoped release resources.
- V4 has six active authorities only:
  `product-orchestrator`, `developer`, `reviewer`, `qa-root-cause`,
  `release-manager`, and `incident`.
- V4 has seven skills and seven deterministic hooks.
- STOS shadow passed and one daemon-observed STOS worker/QA canary passed.
- Production mutation is deliberately denied in `control-plane.json`.

Do not rewrite or duplicate these working primitives.

### 1.2 Source/provenance risk

- Root checkout branch was `release/company-site-v2` at
  `2dac0954014123242286f713fb79a2f4b15f44e7`, behind its remote by one commit.
- Root contained 96 tracked unstaged entries.
- Root contained 26,823 untracked files.
- `agent-system/v4` itself contained about 320 untracked files and appeared as one
  untracked directory to Git.
- Untracked data includes real source mixed with runtime SQLite/WAL files,
  evidence objects, screenshots, build outputs, temporary logs and generated
  adapters.
- Many historical worktrees and product candidates exist.

Root cause: the working V4 implementation has functional test coverage but no
clean Git lineage. A passing local tree is not yet a releasable control plane.

### 1.3 Graph wiring gap

- `graph/definitions/subgraphs.json` declares six contracts:
  discovery, spec, delivery, verification, release and learning.
- The master architecture also requires an explicit Sprint Orchestrator between
  approved spec and delivery, but the graph manifest has no `sprint-loop`.
- `graph/native-runtime.mjs` currently implements initial state, graph start,
  checkpoint, interrupt and resume only.
- `execution/engine.mjs` separately implements sprint/task dispatch, worker
  outbox, QA evidence, candidate handling and continuation.
- There is no complete parent graph executor proving the lifecycle:
  intake -> navigation -> dedupe -> discovery -> spec -> sprint -> delivery ->
  verification/repair -> candidate -> release -> learning.
- Existing graph tests validate bounded contracts and several primitives; they
  do not execute every subgraph through the real scheduler/worker boundary.
- The generated Codex executor is currently limited to schema-bound, read-only
  STOS research packets and contains STOS-specific instructions.

Root cause: graph semantics and task engine were built in parallel but have not
been integrated behind one durable transition runner.

### 1.4 Persistence maturity gap

- Runtime store is `node:sqlite` with WAL and single writer.
- Node emits an ExperimentalWarning for SQLite.
- No Postgres driver, storage interface or Postgres adapter exists in V4.
- No distributed-worker locking, Postgres outbox claim or Postgres crash/resume
  integration evidence exists.

Correct classification:

- SQLite is acceptable for local and single-host canary.
- Missing Postgres does not block ongoing product development.
- It does block declaring a multi-host production orchestration service durable.

### 1.5 Unproven operational evidence

- Genuine SLO telemetry sample count: 0.
- Genuine daemon-observed worker feedback sample count: 0.
- Outcome metrics measured: 0/59.
- Outcome evidence sources were stale or missing.
- Standards matrix had 2 adopted controls and 8 partial controls.

Correct classification: `UNPROVEN`, not `FAIL` and not a global Product Goal
block. It blocks production-readiness claims only.

### 1.6 Chợ Kênh isolation gap

- `agent-system/v4/products/cho-kenh.yaml` declares product namespaces.
- `agent-system/release/product-release-registry.json` has
  `products.cho-kenh.enabled=false`.
- Its required QA, post-build QA, build command, routes, smoke routes, tooling
  inputs and config inputs are empty.
- Registry expects `apps/cho-kenh-web`, but that directory does not exist.
- Current Chợ Kênh implementation remains under legacy root paths such as
  `src/app/cho-kenh`, `src/app/tiktok-channel-starter`,
  `src/channel-marketplace`, related components/APIs/assets and shared root
  dependencies.

Root cause: a desired isolated release contract was registered before the
standalone Chợ Kênh application and release evidence contract existed.

### 1.7 Model routing gap

- `registry/models.yaml` defines abstract profiles and budgets but does not bind
  them to explicit allowed Codex model IDs.
- `scheduler/router.mjs` routes agents/skills and a model-call count, but does not
  select or record a concrete Codex model/reasoning effort.
- Executor evidence does not yet prove deterministic `D0` versus Luna/Terra/Sol
  routing and escalation quality.

Root cause: policy language exists, but enforceable model selection and telemetry
are incomplete.

### 1.8 Dependency security gap

`npm audit --json` reported 4 high and 0 critical vulnerabilities across 93
dependencies:

- direct `next@16.2.6`;
- transitive `nanoid`;
- transitive `postcss`;
- transitive `sharp`.

The audit suggested a non-major Next.js upgrade to `16.3.4` at observation time.
Re-run the audit at implementation time and use the newest compatible patched
version supported by current official release notes. Do not use
`npm audit fix --force`.

### 1.9 Legacy cutover gap

- Cutover report inventories 18 legacy orchestration surfaces.
- 17 still have callers/references and remain read-only compatibility adapters.
- One old workflow graph has zero static callers/references but lacks the runtime
  zero-use observation window required for deletion.

Do not delete legacy based on age, naming or perceived duplication.

## 2. Correct system diagnosis

The system is not "broken everywhere." It has three maturity layers:

```text
V4 deterministic foundation       = PASS
V4 integrated lifecycle canary    = PARTIAL
V4 production/distributed cutover = NOT PROVEN
```

Treat each issue at the correct level:

| Issue | State | Blocks local development | Blocks production orchestration |
| --- | --- | --- | --- |
| Dirty root checkout | provenance risk | no, use clean worktree | yes |
| V4 source untracked | P1 provenance defect | no after source rescue begins | yes |
| Zero SLO samples | UNPROVEN | no | yes for healthy/SLO claim |
| Zero worker feedback | UNPROVEN | no | yes for routing/latency claim |
| SQLite-only store | canary limitation | no | yes for multi-host runtime |
| Graph contracts not fully wired | P1 control-plane gap | no for product-local dev | yes |
| Chợ Kênh disabled | expected fail-closed state | no for STOS/Company Site | yes for Chợ Kênh release |
| Four high vulnerabilities | P1 release security | no for bounded repair | yes for affected artifacts |
| Legacy callers remain | migration debt | no | blocks destructive removal only |

Never convert these orthogonal states into one global `BLOCKED` state.

## 3. Non-negotiable safety and minimalism

1. Do not run `git reset --hard`, `git clean`, bulk delete or checkout-overwrite.
2. Do not revert or discard any user change in the dirty root.
3. Do not deploy from the dirty root.
4. Do not copy the entire dirty root into a release candidate.
5. Do not flip `production.mutation_allowed` or `deploy_intent` to bypass proof.
6. Do not create `agent-system/v5` or a second event store writer.
7. Do not add permanent agents for subgraphs or domain specialties.
8. Keep the existing six authorities; use skills/task packets for specialization.
9. Do not install LangGraph merely for its name. Retain V4-native semantics unless
   the approved ADR spike proves net benefit and no second source of truth.
10. Do not delete compatibility code before zero static caller and real runtime
    use are both proven.
11. Do not enable Chợ Kênh while its app root or release contract is empty.
12. Do not fix a QA harness defect by weakening product behavior or suppressing
    an error.
13. Do not run broad monorepo QA after every patch. Select by impact, then run a
    full product suite once on an immutable candidate.
14. Do not print credentials, tokens, database URLs or raw customer information.
15. Do not let a model execute a release command. Release commands are
    deterministic and capability-gated.

## 4. Execution method

Work through R0 to R8. Keep one sprint `ACTIVE` at a time for
`platform-orchestration`. Independent product development may continue in its
own lane.

For every task:

```text
navigate current state
-> identify canonical source and exact scope
-> fingerprint duplicate work
-> reproduce/measure baseline
-> acquire exact resources
-> implement smallest coherent root fix
-> run smallest failing check
-> run impacted checks
-> independent review
-> persist compact evidence
-> release resources
-> advance graph checkpoint
```

On failure:

- classify `SPEC_ERROR`, `PRODUCT_CODE`, `AUTOMATION_CONTRACT`,
  `HARNESS_DEFECT`, `RESOURCE_TRANSIENT`, `AUTH_REQUIRED`,
  `PROVIDER_OUTAGE`, or `HARD_SECURITY_DATA`;
- fingerprint using source, environment, checker and normalized error;
- do not retry an identical action with unchanged inputs more than once;
- after two failed repair attempts, replace the hypothesis or route to the true
  owner;
- keep Product Goal `ACTIVE` unless the founder explicitly pauses it.

## 5. Sprint R0 - Source rescue and canonical Git provenance

Objective: preserve the functional V4 implementation in a clean, reviewable Git
lineage without touching unrelated product changes.

### R0.1 Read-only provenance audit

- Fetch refs without merging into the dirty checkout.
- Record root branch, HEAD, upstream, merge-base and remote refs.
- Read production/source provenance ledgers only; do not infer production SHA
  from branch names.
- Inventory all worktrees and active processes/leases.
- Determine the correct platform integration base. Prefer the repository's
  declared canonical platform branch. If none exists, use a clean remote base
  with proven ancestry and document the decision in an ADR.
- If two bases are genuinely indistinguishable and selecting one would overwrite
  product behavior, issue one typed `NEEDS_USER` decision with evidence. Continue
  all non-dependent audit work.

### R0.2 Classify V4 files

Create a manifest with path, class, SHA-256, size and disposition:

```text
SOURCE_COMMIT:
  control-plane, policy/policies, registry, products, workflows, schemas,
  graph, scheduler, state, supervisor, execution, evidence, release,
  governance source, tests, eval definitions, docs, migrations and CLI code

GENERATED_REPRODUCIBLE:
  generated manifests and tool adapters only when the compile contract requires
  them in Git; otherwise regenerate in CI and record source digest

RUNTIME_IGNORE:
  state.sqlite, -wal, -shm, runtime evidence objects, worker packet/results,
  telemetry samples, live reports, locks, leases and temporary state

ARTIFACT_IGNORE:
  .next, browser profiles, screenshots, videos, logs, caches, deploy artifacts,
  test output and temporary candidate directories

REVIEW_REQUIRED:
  files whose class or ownership cannot be proven
```

Do not classify from filename alone. Inspect imports, writers and test usage.

### R0.3 Create clean platform worktree

- Create a dedicated branch such as `integration/ai-orchestration-v4` from the
  verified base.
- Materialize only `SOURCE_COMMIT` files using the manifest.
- Do not copy runtime or artifact directories.
- Recreate package scripts with a structured JSON edit; do not copy the dirty
  `package.json` wholesale.
- Recreate only required `.gitignore` rules in the clean branch.
- Generate adapters from canonical registry/config.
- Run compile twice and prove byte-identical/digest-identical output except for
  explicitly excluded timestamps.
- Verify no secrets or machine-specific absolute paths entered source.

### R0.4 Required R0 evidence

```text
canonical_base_sha
v4_source_rescue_manifest_digest
clean_branch_sha
clean_tree_digest
source_file_count
runtime_file_count_committed=0
artifact_file_count_committed=0
secret_scan_result
compile_reproducibility_result
self_test_result
doctor_result
```

### R0 exit gate

- Clean Git worktree.
- V4 source is tracked.
- Runtime/evidence/cache output is ignored or externalized.
- `npm run orchestration:self-test` passes.
- `npm run orch:doctor` passes.
- Generated source hash matches canonical source.
- No product source diff is included unless explicitly required and reviewed.

## 6. Sprint R1 - Dependency security remediation

Objective: reduce affected artifact audit to zero high/critical without unrelated
framework churn.

### R1.1 Map impact

- Re-run `npm audit --json` in the clean candidate.
- Identify which root/workspace manifests install Next.js, PostCSS, sharp and
  nanoid.
- Read official Next.js release/security notes for the selected patch.
- Inspect middleware/proxy, rewrites, Server Actions, image optimization and CSS
  processing paths affected by advisories.
- Record current lockfile and package manager version.

### R1.2 Patch safely

- Upgrade to a patched, semver-compatible Next.js version; observed audit advice
  was `16.3.4`, but current official compatible patch evidence wins.
- Let supported transitive versions resolve through the patched framework.
- Add direct dependency overrides only if necessary, supported and documented.
- Never use `--force` to accept an unreviewed major upgrade.
- Regenerate the lockfile deterministically.
- Keep dependency updates in a dedicated commit.

### R1.3 Verify affected products

Run at minimum:

- install from lockfile in a clean environment;
- typecheck and production build for each affected workspace;
- middleware/proxy/auth route tests;
- Server Action payload/authorization tests if used;
- image route/upload/optimization smoke;
- PostCSS/CSS build and source-map safety checks;
- root and workspace `npm audit --json`.

Do not change UI snapshots to hide framework regressions.

### R1 exit gate

- High vulnerabilities: 0.
- Critical vulnerabilities: 0.
- Lockfile committed and reproducible.
- No product P0/P1 regression.
- Rollback commit identified.

## 7. Sprint R2 - Wire the complete federated graph

Objective: make the graph drive the existing engine rather than merely describe
it.

### R2.1 Correct graph topology

Define exact, versioned topology:

```text
START
-> validate_request
-> navigate_current_state
-> deduplicate_and_classify
-> route_by_intent

NEW_OR_AMEND:
  discovery-loop
  -> spec-loop
  -> sprint-loop
  -> delivery-loop
  -> verification-loop
  -> candidate_router
  -> release-loop when authorized
  -> learning-loop
  -> END

BUG:
  navigation/impact/fingerprint
  -> spec amendment when requirement is wrong
  -> bounded delivery repair
  -> independent verification
  -> candidate/release/learning

INCIDENT:
  incident containment
  -> bounded repair
  -> verification
  -> release or rollback

READ_ONLY_AUDIT:
  navigation
  -> verification-loop read-only
  -> END

RELEASE_ONLY:
  exact candidate lookup
  -> release-loop
  -> learning-loop
  -> END
```

Add an explicit `sprint-loop`. Do not retain a six-subgraph count merely because
an old test asserts `length === 6`. Update the test to assert exact required IDs,
edges, owner, input/output and transition reachability.

### R2.2 Implement graph execution

Create one bounded runner that:

- loads state from the V4 event projection by `thread_id` and `run_id`;
- validates state/schema/version before every node;
- invokes pure/model/tool/subgraph activities through registered node handlers;
- writes state update, checkpoint pointer and outbox intent atomically;
- supports `runUntilWait`, `resume`, `cancel` and read-only `inspect`;
- never stores raw secrets, full prompts or unlimited logs in graph state;
- fails closed on unknown node, destination, state version or product;
- keeps completed node results by idempotency key and evidence digest;
- does not rerun successful siblings after a parallel branch failure.

### R2.3 Connect existing engine primitives

Reuse rather than rewrite:

- `scheduler/planner.mjs` for task DAG and non-overlap frontier;
- `scheduler/router.mjs` for authority/skill routing after enhancement in R4;
- `execution/engine.mjs` for task/outbox/QA/candidate actions;
- `execution/worker-daemon.mjs` for canonical result ingestion;
- `evidence/gates.mjs` for immutable decisions;
- `supervisor/resource-broker.mjs` for leases and wakeups;
- `release/*` for candidate/release semantics;
- `outcomes/*` for learning evidence.

Each subgraph needs executable node handlers, not only JSON metadata.

### R2.4 LangGraph semantic contracts

- `Command`: one atomic state update plus explicit `goto` or `resume` event.
- `Send`: fan-out only read-only or non-overlapping exact resource packets.
- Reducer: deterministic stable-ID merge independent of finish order.
- Checkpoint: persisted after each super-step and before/after external side
  effects.
- Interrupt: typed durable decision; resume validates thread, run, source and
  checkpoint lineage.
- Time travel: creates a fork/new run lineage, never rewrites released history.
- Subgraphs: share only declared state keys and reducers.

### R2.5 End-to-end tests

Add tests that execute real transitions, not only static manifests:

1. New request reaches a versioned spec and bounded sprint.
2. Duplicate request exits without new spec/sprint/agent.
3. Sprint task dispatch reaches worker daemon and QA gate.
4. Failed product QA routes only the owning task to repair.
5. Harness failure routes QA automation, not product source.
6. Lease wait keeps Product Goal active and auto-resumes on release event.
7. Crash after outbox insert does not duplicate worker execution.
8. Crash after worker result does not repeat the model call.
9. Parallel worker completion order produces identical state digest.
10. Interrupt/resume does not duplicate pre-interrupt side effects.
11. Candidate binds exact source and evidence digest.
12. Release-disabled run stops at a valid handoff, not generic blocked.
13. Learning receives released or terminal outcome evidence.
14. STOS failure does not schedule or lock Chợ Kênh/Company Site.

### R2 exit gate

- Exact graph compiles with no unreachable node or unbounded cycle.
- All lifecycle subgraphs are executable.
- One request traverses the complete no-deploy lifecycle.
- Existing 183 tests remain green; new graph tests pass.
- Duplicate external side effects: 0.

## 8. Sprint R3 - Durable Postgres adapter

Objective: support multi-process/multi-host orchestration without replacing the
SQLite local adapter or creating two canonical writers.

### R3.1 Introduce a storage port

Extract a versioned interface covering:

```text
transaction
executeCommand/idempotency
append/read events
load/rebuild aggregate projection
optimistic state revision
outbox enqueue/claim/complete/requeue
lease acquire/release/wait/wakeup
checkpoint put/get/list
worker packet/result
evidence/gate decision refs
candidate execution request
health/readiness
```

Refactor SQLite behind this interface without changing behavior. Keep SQLite as
the default for tests/local single-host canary.

### R3.2 Postgres schema and concurrency

Use a dedicated server-only schema such as `ai_orchestration_v4`. Implement
versioned, additive migrations for commands, events, aggregate projections,
outbox, leases/waiters, checkpoints, worker packets/results, gates and candidate
requests.

Requirements:

- unique idempotency keys;
- aggregate version compare-and-swap or row lock;
- append-only event uniqueness;
- outbox claims using transaction-safe row locking such as
  `FOR UPDATE SKIP LOCKED`;
- lease ownership and expiry enforced in the database;
- bounded reclaim of expired claims;
- indexes for pending outbox, aggregate/event history, leases and checkpoints;
- UTC timestamps generated consistently;
- no product/customer table coupling;
- no database credential in browser code, logs, graph state or evidence.

### R3.3 Migration/cutover strategy

```text
SQLite remains canonical
-> create Postgres schema
-> replay append-only V4 events into shadow Postgres
-> rebuild projections
-> compare counts, ordered event digests and aggregate state digests
-> run dual-read parity only
-> stop at safe checkpoint
-> switch one writer to Postgres by configuration/capability
-> run canary
-> retain export/replay rollback artifact
```

Do not perform uncontrolled dual-write. If rollback after Postgres receives new
events is required, first export/replay those append-only events back through a
verified tool.

### R3.4 Required fault tests

- two workers contend for one outbox row; exactly one wins;
- two commands target the same aggregate version; one cleanly conflicts;
- worker dies after claim; bounded reclaim succeeds once;
- transaction fails between event and outbox; neither partial state persists;
- duplicate command returns original result without duplicate event;
- lease expiry publishes one wake event;
- restart resumes from latest checkpoint;
- migration replay is deterministic and idempotent;
- SQLite and Postgres projections match fixture corpus.

### R3 exit gate

- SQLite and Postgres adapters pass one conformance suite.
- Real Postgres integration test passes against an authorized non-production DB.
- Shadow replay parity is 100% for selected V4 event corpus.
- Exactly one configured writer exists.
- Backup/export and rollback rehearsal pass.

If `ORCH_DATABASE_URL` or authorized test database access is missing, mark only
the real-Postgres integration task `NEEDS_USER`. Finish interface, migrations,
SQLite conformance and all other independent work. Do not mark the Product Goal
blocked.

## 9. Sprint R4 - Enforce Codex-only model routing

Objective: turn abstract model profiles into deterministic, measurable routing.

### R4.1 Canonical model allowlist

Version the registry with only:

```text
D0           -> no model
C1_FAST      -> gpt-5.6-luna, low/medium
C2_BALANCED  -> gpt-5.6-terra, medium/high
C3_DEEP      -> gpt-5.6-sol, high/xhigh
```

Before use, verify the exact model IDs are available to the configured Codex/API
runtime. If a model is unavailable, preserve the capability class and use only
an approved Codex-family mapping. Never fall back to Claude, Gemini, Llama or an
unregistered provider.

### R4.2 Deterministic router

Router input must include task category, node, risk, ambiguity, changed layers,
security/data criticality, context estimate, latency SLO, remaining token budget,
quality floor, previous attempt and failure fingerprint.

Router output:

```yaml
profile_id:
model_id: <null for D0>
reasoning_effort:
max_input_tokens:
max_output_tokens:
max_calls:
route_reason_code:
eval_profile:
registry_version:
```

The model cannot select its own model or edit routing policy.

### R4.3 Executor contract

- Generalize the Codex executor from STOS research-only into registered packet
  classes while retaining exact file/tool/resource restrictions.
- Keep read-only research and write implementation executors separately
  permissioned.
- Pass selected model/reasoning explicitly.
- Bind result to packet, model, registry, prompt/schema, source and evidence
  digests.
- Record tokens, cache tokens, latency, attempts and completion status.
- Never retain hidden reasoning or full raw transcript.

### R4.4 Routing eval

Build representative fixtures for classify/dedupe, routine patch, UI review,
ambiguous root cause, security/data review and release evidence synthesis.

Compare task success, critical recall, false positives, latency, input/output
tokens, escalation rate and cost per accepted task. Select the least expensive
profile meeting the quality floor.

### R4 exit gate

- Non-Codex invocation count: 0.
- Deterministic-node model calls: 0.
- Release-command model calls: 0.
- Model route recorded for every model node.
- Eval-backed route meets defined quality floor.
- Provider outage checkpoints the current node instead of restarting the sprint.

## 10. Sprint R5 - Genuine telemetry and worker feedback

Objective: replace `UNPROVEN` with genuine, source-bound canary evidence.

### R5.1 Instrument real lifecycle boundaries

Capture aggregate-only events for:

- command accepted/conflicted/idempotently replayed;
- graph node start/complete/fail/resume;
- checkpoint save/recovery;
- lease wait/wakeup;
- outbox enqueue/claim/reclaim/complete;
- worker dispatch/result/QA completion;
- candidate freeze;
- staging/canary/smoke/rollback;
- model route, latency and token usage;
- duplicate side-effect detection;
- foreign-process safety and runtime cleanup.

Every sample must bind run, product, node/task, source digest, event timestamp and
collector version. Use hashed stable identifiers. Exclude prompt text, command
output, file content, secrets and customer PII.

### R5.2 Define genuine evidence

Only count worker feedback when:

- a canonical worker daemon claimed a V4 outbox packet;
- packet/result/task-control observation digests match;
- source/environment digest is known;
- result passed schema validation;
- start and terminal timestamps are monotonic;
- synthetic/unit-test/test-fixture records are excluded.

### R5.3 Canary sample plan

- Run bounded, useful STOS/platform tasks through the real daemon.
- Include read-only research, deterministic task, bounded code task and QA task.
- Include controlled transient failure/reclaim and lease wait/wakeup drills.
- Collect enough samples to prove the pipeline and compute an initial p95; do not
  claim a 30-day SLO until the full observation window exists.
- A reasonable initial exit is at least 10 genuine end-to-end worker outcomes
  across at least 4 task classes, including one controlled retry and one wait/
  resume. Continue collecting toward the policy window afterward.

### R5.4 Outcome evidence

Do not fabricate all 59 metrics. Prioritize source-bound metrics required for
the next control-plane decision:

1. command durability;
2. task scheduling;
3. worker feedback p95;
4. lease wakeup;
5. runtime cleanup;
6. foreign-process safety;
7. evidence correctness;
8. duplicate side effects;
9. model route success/token cost;
10. release lifecycle evidence coverage.

Missing product/business metrics remain `UNPROVEN` and become owned collection
tasks, not release PASS values.

### R5 exit gate

- Genuine worker feedback sample count is non-zero and meets initial canary plan.
- Genuine SLO sample file is schema-valid and source-bound.
- Synthetic records are rejected.
- Initial p50/p95 and failure counts are computed.
- No raw sensitive data is present.
- Missing metrics remain explicit, not defaulted healthy.

## 11. Sprint R6 - Isolate and enable Chợ Kênh correctly

Objective: create a real standalone Chợ Kênh product lane before enabling its
registry entry.

### R6.1 Canonical legacy map

Read-only map:

- public routes and dynamic routes;
- API routes;
- marketplace/domain modules;
- listing/search/filter/detail/seller/buyer/admin flows;
- data/auth/storage dependencies;
- styles/assets/fonts;
- environment variables;
- QA scripts and production smoke contracts;
- shared imports and cross-product imports;
- current production source/deployment provenance.

Identify one canonical implementation for each capability. Do not combine stale
candidate variants based on filename or recency alone.

### R6.2 Standalone app extraction

Build `apps/cho-kenh-web` as an actual workspace package. Preserve verified user
behavior while moving product-owned routes, components, modules, styles and
assets behind Chợ Kênh boundaries.

Rules:

- no STOS or Company Site source in the artifact;
- no dependency on root `globals.css` for product styling;
- shared primitives must be explicit packages/contracts with owners;
- server-only data and credentials remain server-only;
- no third source of truth for listings, buyers or analytics;
- all moves/copies need a source-to-destination manifest and parity test;
- do not delete legacy root source until parity and zero-caller proof exist.

### R6.3 Complete release registry

Populate and validate:

- `enabled` remains false during construction;
- real `appRoot` and package name;
- product-specific build command;
- targeted pre-build QA;
- post-build artifact/browser QA;
- required public/API routes;
- smoke and foreign-product negative routes;
- forbidden modules, routes, client markers, CSS and assets;
- tooling/config inputs;
- dynamic product port pool;
- exact Vercel project/org/token/alias env names;
- rollback and immutable deployment contract.

### R6.4 Chợ Kênh golden journeys

At minimum verify:

1. Search/filter/catalog returns consistent live inventory.
2. Listing detail matches catalog metrics and trust data.
3. Shortlist/compare works and persists as designed.
4. Buyer request persists exactly once.
5. Seller intake validates privacy and credential boundaries.
6. Admin analytics denies anonymous and unauthorized users.
7. Mobile home/catalog/detail/seller journeys pass at
   320/360/390/430/768/1280/1440.
8. Keyboard, reduced motion, safe area, loading/error/empty states pass.
9. Public queries do not expose private credentials or admin data.
10. Sitemap/robots/canonical metadata are correct.

### R6.5 Enable only after proof

Set `enabled=true` only in the immutable candidate where:

- app directory and package exist;
- install/typecheck/build pass;
- registry arrays are complete and schema-valid;
- artifact isolation passes;
- required journeys pass;
- immutable deployment target and rollback ownership are verified.

Enabling a blank registry entry is forbidden.

## 12. Sprint R7 - Staged lifecycle canary and production-readiness decision

Objective: prove the V4 lifecycle without bypassing production controls.

### R7.1 STOS lifecycle canary

Use one low-risk, reversible, source-bound STOS increment or approved no-op
release rehearsal:

```text
founder request
-> navigation/dedupe
-> approved spec
-> sprint DAG
-> real worker daemon
-> independent QA
-> immutable isolated candidate
-> staging deployment or local immutable artifact
-> critical smoke
-> simulated/authorized rollback rehearsal
-> learning evidence
```

Do not use the dirty root or mixed-product artifact.

### R7.2 Production mutation decision

Production mutation may be proposed only when all are true:

- R0 clean Git provenance passes;
- R1 high/critical audit is zero for the target artifact;
- R2 complete graph path passes;
- R3 selected production store has real integration and rollback proof;
- R4 Codex-only routing passes eval;
- R5 genuine telemetry/feedback exists;
- target product registry and release contract are complete;
- immutable candidate and rollback target are verified;
- no open P0/P1 for the release scope;
- deploy intent and capability are explicit;
- production alias/project ownership is unambiguous.

Do not automatically change production flags merely because tests pass. Emit a
versioned readiness decision and exact remaining gaps. Actual production deploy
requires the release-manager capability and the configured approval policy.

### R7 exit gate

- Full staged lifecycle receipt exists.
- Candidate/source/evidence/release digests align.
- Smoke and rollback rehearsal pass.
- No foreign product source, route or artifact enters the candidate.
- Production-readiness verdict is evidence-derived.

## 13. Sprint R8 - Legacy caller migration and minimalism

Objective: reduce duplicate orchestration only after the new path is proven.

For each of the 18 legacy surfaces:

1. Enumerate static callers, package scripts, hooks, imports and documentation.
2. Classify caller as executable, compatibility-only, test fixture or stale text.
3. Route executable callers through the V4 adapter one bounded group at a time.
4. Run shadow parity and rollback rehearsal.
5. Observe real runtime use for the approved window.
6. Remove only when executable caller count=0, relevant reference count=0,
   runtime calls=0, parity=PASS and rollback artifact exists.

The one zero-static-caller workflow graph is only the first removal candidate.
Do not batch-delete the other 17 surfaces.

Also review generated Cursor/Claude adapters. They may remain disabled
compatibility outputs while callers exist, but they must never invoke a
non-Codex model in this system. Remove only through the same zero-caller proof.

## 14. Required QA matrix

### 14.1 Every control-plane patch

- source/provenance check;
- relevant unit test;
- graph/state/replay test when state changes;
- security capability test when permissions change;
- deterministic output/idempotency test;
- changed-file ownership verification.

### 14.2 Every sprint candidate

Run from the clean candidate:

```text
npm ci
npm run orchestration:compile
npm run orchestration:self-test
npm run orch:doctor
npm run orchestration:cutover-report
npm run orchestration:governance:audit
npm run orchestration:outcome:audit
npm audit --json
```

Run product QA only for products impacted by the candidate.

### 14.3 Postgres candidate

- migration lint and checksum;
- adapter conformance suite;
- real Postgres integration suite;
- concurrency/fault-injection tests;
- shadow replay parity;
- backup/export/rollback rehearsal;
- secret and network-boundary review.

### 14.4 Graph candidate

- topology compile/reachability;
- end-to-end request lifecycle;
- checkpoint/crash/resume;
- interrupt/resume;
- deterministic reducer under randomized completion order;
- no duplicate side effect;
- product isolation;
- token/model route enforcement.

### 14.5 Chợ Kênh candidate

- workspace graph and product boundary;
- typecheck/build;
- API/data/auth/privacy tests;
- golden journeys;
- full responsive/browser matrix;
- artifact isolation;
- immutable smoke and rollback.

## 15. Workspace hygiene policy

The dirty root is evidence to preserve, not a directory to clean blindly.

- Use `git status`, `git diff`, `git ls-files`, hashes and manifests.
- New clean worktrees must be created only after resolving absolute paths.
- Never move/delete recursive computed paths without verifying they stay inside
  the intended workspace.
- Do not remove historical artifacts until retention classification and owner
  approval are recorded.
- Keep runtime state outside Git through precise ignore patterns.
- Do not put broad patterns in `.gitignore` that hide real source.
- Candidate creation must use an allowlisted manifest, not an exclude-only copy.
- Report every inherited diff separately from task-authored diff.

## 16. Token and latency controls

- Deterministic work uses no model.
- Navigation returns compact digests and exact refs, not entire reports.
- Do not copy the master prompt into each worker.
- Worker packet includes only goal capsule, task, acceptance, exact resources,
  relevant evidence refs, QA and output schema.
- Cache model results by node/model/input/source/evidence digest.
- Skip repeated audit/report generation when evidence digest is unchanged.
- Use at most two model workers per product unless measured evidence justifies a
  registry change.
- Use Luna for classification/summarization, Terra for routine implementation/
  review, and Sol only for high-risk or ambiguous cross-layer reasoning.
- Run targeted QA after a patch and full product QA once per candidate.
- Store compact result/evidence; discard raw model transcript safely.
- Track token and latency per successful accepted increment, not per chat.

## 17. Hard stops versus resumable waits

Only create a typed operator decision for:

- missing credential/permission with no safe substitute;
- irreversible or destructive production data action;
- legal/privacy/billing decision;
- ambiguous production project/domain/alias ownership;
- canonical source ambiguity that could overwrite product behavior;
- open P0 security/data risk;
- production mutation without rollback.

These are not hard stops:

- dirty unrelated files;
- a busy foreign port;
- temporary lease contention;
- zero telemetry before the collection sprint;
- missing optional scanner;
- a failed QA harness;
- a product registry intentionally disabled;
- an independent product release in progress.

For these, isolate, repair the owning automation, wait on a durable event or
continue another non-dependent task. Do not mark the master Product Goal blocked.

## 18. Final acceptance criteria

The recovery goal is not complete until evidence proves:

1. V4 source is tracked on a clean canonical branch.
2. Runtime/artifact output is not committed.
3. Existing V4 tests and doctor pass from clean install.
4. High/critical dependency vulnerabilities are zero for release artifacts.
5. Exact parent/product/sprint topology is executable, not contract-only.
6. `sprint-loop` is explicit and integrated.
7. One request traverses discovery through learning.
8. Worker scheduler/outbox/QA/candidate transitions are graph-driven.
9. Crash/resume causes zero duplicate external side effects.
10. SQLite remains a passing local adapter.
11. Postgres adapter passes real integration and shadow parity.
12. Only one event-store writer is active after cutover.
13. Model registry enforces Codex-only concrete model IDs.
14. Deterministic/release nodes make zero model calls.
15. Genuine worker feedback and SLO samples are collected.
16. Missing metrics remain `UNPROVEN`, never fake PASS.
17. Chợ Kênh standalone app/release contract exists before enablement.
18. Chợ Kênh artifact contains no STOS/Company Site source.
19. STOS staged lifecycle, smoke and rollback rehearsal pass.
20. Cross-product wait/failure cannot freeze another product.
21. Legacy deletion follows zero-caller plus runtime-parity proof.
22. Production mutation remains denied until a signed readiness decision.

## 19. Mandatory final handoff

Return one concise evidence-backed handoff:

```markdown
# V4 Productionization Handoff

## Baseline
- Audited at:
- Original branch/HEAD:
- Dirty tracked/untracked counts:
- Existing V4 test/doctor result:

## Canonical Source
- Selected base and rationale:
- Clean branch/commit/tree digest:
- Source rescue manifest:
- Runtime/artifact exclusions:

## Sprint Result
- Sprint:
- Root causes fixed:
- Files changed:
- Existing primitives reused:
- Duplicate surfaces avoided:

## Graph
- Executable path:
- Checkpoint/resume evidence:
- Worker/scheduler integration evidence:
- Duplicate-side-effect count:

## Persistence
- SQLite conformance:
- Postgres integration:
- Shadow parity:
- Backup/rollback:

## Model Routing
- Registry version:
- Allowed Codex models:
- Eval result:
- Non-Codex calls:
- Deterministic-node model calls:

## Telemetry
- Genuine SLO samples:
- Genuine worker feedback samples:
- p50/p95:
- Unproven metrics:

## Product Isolation
- STOS:
- Chợ Kênh:
- Company Site:
- Foreign-source/artifact result:

## Security
- npm audit high/critical:
- Capability/secret review:

## QA
- Commands and verdicts:
- P0/P1:
- Evidence refs/digests:

## Release
- Deploy intent:
- Staging/canary URL or artifact:
- Production mutation:
- Rollback target:
- Readiness verdict:

## Remaining Work
- Resumable waits:
- Typed operator decisions:
- Next smallest sprint:
```

## 20. Start instruction

Start with R0. Do not modify the dirty root while deciding provenance. Create a
clean integration worktree only after verifying the base and absolute target.
Rescue V4 source with a content-addressed allowlist, run clean self-tests, and
commit the source foundation. Then continue one sprint at a time through the
smallest executable acceptance gate.

The goal is not to maximize agent count, reports or gates. The goal is a small,
durable and measurable product-delivery graph that safely turns one founder
request into one accepted product increment with minimum coordination, latency
and token cost.
