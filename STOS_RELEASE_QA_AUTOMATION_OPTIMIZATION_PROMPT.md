# STOS Release And QA Automation Optimization Master Prompt

Ban la Codex principal developer productivity engineer, release architect,
STOS product engineer, QA platform engineer, SRE, security engineer va
root-cause automation optimizer.

Hay audit, sua va toi uu toan bo development gate, QA automation va release
gate cua STOS de tang toc dev/deploy, giam token/log/process contention va
van giu du cac invariant production quan trong.

Day la implementation prompt. Khong chi dua ra plan, bang danh gia hoac de xuat.
Phai sua source automation, test lai, do before/after va xoa/deprecate gate thua
sau khi co bang chung gate moi bao phu dung defect class.

Khong deploy production trong task toi uu nay.

## 1. Active goal window

```text
GOAL_ID=stos-release-qa-fast-lane-v1
GOAL=Make STOS development and isolated production release fast, deterministic, product-scoped, evidence-bound and low-token without weakening P0 safety.
PRODUCT_SCOPE=stos
NO_DEPLOY=1
DEPLOY_INTENT=0
RELEASE_INTENT=0
ALLOW_COMBINED_ARTIFACT=0
BROAD_QA=0
OPTIMIZATION_MODE=1
```

Moi agent, handoff, summary va context compaction phai giu goal nay.

North-star metrics:

```text
Warm developer feedback p95 <= 90 seconds
Cold developer feedback p95 <= 4 minutes
Impact QA p95 <= 6 minutes for normal scoped change
Local release candidate gate p95 <= 12 minutes excluding provider deployment
Exactly one production artifact build per candidate
Exactly one browser server lifecycle per browser gate
Zero unrelated-product gates on STOS lane
Zero repeated broad checklist ingestion by agents
Zero false hard blocks from unrelated locks/processes
Zero P0 safety invariants removed
PASS output <= 2 KB per gate
Full logs stored on disk, not emitted into agent context
```

Targets are budgets, not permission to fake PASS.

## 2. Current verified baseline

Re-audit source before editing. At the time this prompt was created, the repo had:

```text
STOS app root: apps/stos-web
STOS package: @growth-commerce/stos-web
STOS deploy command: release:stos:deploy
STOS QA-only command: qa:predeploy:stos
STOS product release train: tooling/release/product-release-train.mjs
STOS release registry: agent-system/release/product-release-registry.json
Root QA scripts: 72
STOS app-owned QA files: 4
QA_CHECK_BEFORE_DEPLOY.md: 7435 lines, 310793 bytes
Observed STOS release ledgers at audit time: 0
```

Current registry STOS gate graph:

```text
requiredQa:
  workspace-graph
  product-boundary
  isolated-contracts
  isolated-typecheck

build:
  build @growth-commerce/stos-web

postBuildQa:
  artifact-isolation
  isolated-browser-matrix
```

Current browser gate includes:

- local production server startup;
- current Supabase QA tenant fixture provisioning;
- durable workflow;
- template designer browser flow;
- 7 responsive viewports;
- fresh-session reload;
- publish/public parity;
- persistence verification;
- fixture cleanup and zero-residue proof.

This is valuable deep QA but too broad to run for every low-risk change.

## 3. Verified root causes to confirm first

Do not assume these have already been fixed. Reproduce with focused tests.

### RC-01: missing browser gate release binding

`apps/stos-web/qa/isolated-workflow.mjs` requires:

```text
STOS_LEDGER_DIR
STOS_RELEASE_ID
STOS_SOURCE_SNAPSHOT_HASH
```

The current `runGates` path in `product-release-train.mjs` was observed to pass
only product scope, snapshot hash and broad/artifact flags. This can make
`qa:browser` fail before doing useful work.

Required fix:

- create one release execution context;
- pass ledger dir, release id, snapshot hash and artifact identity to every
  gate that declares those inputs;
- validate required gate inputs before spawning the child;
- add a test proving the exact env contract;
- never pass secrets in command arguments or ledger output.

### RC-02: smoke contract shape mismatch

The registry stores smoke routes as objects:

```json
{
  "route": "/stos",
  "status": 200,
  "contentType": "text/html",
  "bodyIncludes": ["stos-app-shell"]
}
```

The current train was observed to iterate these objects as if each value were
a route string. It also hardcoded foreign routes and accepted any status below
500, which is weaker than the registry contract.

Required fix:

- remove duplicate weak smoke implementation from product release train;
- use the existing canonical `runStrictSmoke` from
  `tooling/release/vercel-release-contract.mjs`;
- use `config.smokeRoutes` and `config.foreignSmokeRoutes` directly;
- enforce exact status, content type, required signatures, forbidden
  signatures and JSON dotted-path values;
- test object contracts, wrong status, redirects, wrong project and foreign
  content leakage.

### RC-03: canonical helper exists but release train duplicates weaker logic

`vercel-release-contract.mjs` already provides stronger primitives for:

- production identity;
- project/domain binding;
- deployment parsing;
- READY polling;
- strict smoke;
- promotion transaction;
- verified rollback;
- source snapshot assertion;
- deployment URL parsing.

Required fix:

- make release train orchestrate these primitives;
- delete local duplicate identity/smoke/promotion logic after tests pass;
- keep one source of truth.

### RC-04: source snapshot is recomputed after every gate

Current release flow recomputes the complete product dependency closure after
each gate. This repeats filesystem reads and hashes while gates are sequential.

Required fix:

- create one candidate snapshot at start;
- monitor candidate paths for mutation during the run;
- rehash once after pre-build QA and once immediately before production
  mutation/promotion;
- do not rehash after every small static gate;
- unrelated Cho Kenh or Company Site writes must not invalidate STOS snapshot;
- add tests for STOS path drift, shared dependency drift and unrelated product
  drift.

### RC-05: QA policy and historical evidence are mixed

`QA_CHECK_BEFORE_DEPLOY.md` is too large for a canonical instruction file and
causes repeated context/token ingestion.

Required fix:

- keep `QA_CHECK_BEFORE_DEPLOY.md` as the single canonical checklist;
- reduce it to concise policy, severity, gate selection and release criteria;
- target <= 250 lines and <= 20 KB;
- move dated execution history to immutable report/archive files;
- do not create a second competing QA policy;
- agents read only policy plus the generated impact plan for the current change;
- historical reports are queried by release/incident ID, never loaded wholesale.

### RC-06: duplicated STOS QA implementations

Near-duplicate implementations were observed in:

```text
scripts/qa-stos-persistence-tenant.cjs
apps/stos-web/qa/persistence-tenant.cjs

scripts/qa-stos-template-designer-browser.cjs
apps/stos-web/qa/template-designer-browser.cjs
```

Required fix:

- select app-owned STOS QA as canonical;
- migrate useful deltas into the canonical files;
- update package scripts/imports/references;
- keep temporary root shims only during compatibility migration;
- add a test preventing duplicate QA implementations;
- remove shims after all callers use canonical paths.

### RC-07: gate tests cover declarations, not execution contracts

Current product release train tests were observed to validate mode, lock path
and absence of broad predeploy, but not full gate env, strict smoke, promotion,
resume, cache or failure cleanup.

Required fix:

- test the orchestration behavior with injected process/fetch/clock adapters;
- no real Vercel or production mutation in unit tests;
- add end-to-end dry-run fixture for STOS release candidate.

## 4. Non-negotiable rules

Never optimize by:

- skipping a reproducible P0/P1 failure;
- changing an assertion to accept broken behavior;
- turning a required test into warning without risk analysis;
- deleting auth, tenant, privacy, artifact, project identity, rollback or smoke
  protection;
- returning PASS when a child process did not run;
- using stale evidence for changed source;
- using browser screenshots from another source hash;
- treating build success as proof of user workflow success;
- running broad repo QA for a STOS-only change;
- killing a foreign process;
- deleting a foreign lock;
- mutating production data;
- deploying as part of this optimization task;
- reverting unrelated user changes.

Every deleted gate must have evidence that it is duplicate, obsolete,
non-deterministic without value, or covered by a stronger canonical gate.

## 5. Safety kernel: gates that must remain

Reduce the production release path to a small safety kernel.

The following capabilities cannot be removed, although they may be merged,
cached or implemented more efficiently:

1. STOS product/project/alias identity validation.
2. STOS source and dependency-bound candidate identity.
3. Type/compile correctness.
4. Critical auth, tenant, privacy and persistence invariants when impacted.
5. Exactly one canonical production artifact build.
6. Artifact and route isolation from Cho Kenh/Company Site.
7. Immutable deployment inspection and strict smoke.
8. Alias promotion bound to expected deployment ID.
9. Previous known-good rollback target.
10. Automatic verified rollback after failed post-promotion smoke.
11. Product-scoped runtime/port/lock cleanup.
12. Machine-verifiable release ledger.

These are capabilities, not a requirement for 12 separate processes.
Merge them where one deterministic process can prove multiple invariants.

## 6. Gate inventory and classification

Build a machine-readable inventory for every gate that STOS can invoke.

For each gate record:

```json
{
  "id": "...",
  "command": ["..."],
  "owner": "product:stos|platform:shared|legacy",
  "defectClasses": ["..."],
  "riskLevel": "P0|P1|P2|P3",
  "triggers": ["glob-or-change-category"],
  "phase": "dev|impact|release|post-deploy|scheduled",
  "estimatedSeconds": 0,
  "timeoutSeconds": 0,
  "requiresBuild": false,
  "requiresServer": false,
  "requiresBrowser": false,
  "requiresExternalData": false,
  "mutatesTestData": false,
  "cacheInputs": ["..."],
  "concurrencyGroup": "cpu|build|browser|data|network",
  "canonicalEvidence": "...",
  "classification": "KEEP|MERGE|ON_IMPACT|POST_DEPLOY|SCHEDULED|DELETE|QUARANTINE",
  "replacedBy": "...",
  "reason": "..."
}
```

No gate may remain `unknown` at cutover.

### Classification rules

`KEEP`:

- unique high-value invariant;
- deterministic;
- correctly bound to current source/artifact;
- cost proportional to risk.

`MERGE`:

- multiple gates scan the same files/start the same server/launch the same
  browser/build the same artifact;
- one process can emit separate assertions and evidence sections.

`ON_IMPACT`:

- necessary only when relevant files, routes, schema or dependencies changed.

`POST_DEPLOY`:

- best verified on immutable/production environment and does not justify a
  duplicate local full run.

`SCHEDULED`:

- deep exhaustive coverage with high cost and low per-change value;
- run nightly/daily and on high-risk changes.

`DELETE`:

- duplicate without unique defect detection;
- obsolete route/product;
- static string check fully covered by compiler/structured manifest/test;
- always-pass/no-op/report-only gate;
- legacy broad wrapper unused by STOS.

`QUARANTINE`:

- flaky or nondeterministic;
- cannot block release until root cause is fixed;
- must have owner and deletion/fix deadline;
- cannot hide P0/P1 risk.

## 7. Prove a gate can be removed

Before deleting or demoting a gate:

1. Identify every defect class it claims to catch.
2. Find incidents/regressions that motivated it.
3. Create small replay fixtures for representative defects.
4. Run old gate and proposed replacement against the fixtures.
5. Confirm replacement catches the same defect deterministically.
6. Compare runtime, flake rate, process count and output size.
7. Record decision in gate inventory.
8. Delete implementation and all references only after replacement PASS.

If a gate has no documented defect class, no unique assertion and no consumer,
delete it after reference scan and focused tests.

Do not preserve dead automation because it once looked important.

## 8. Target QA architecture

Create four explicit lanes. A command must belong to exactly one default lane.

### Lane A: developer fast feedback

Command:

```text
npm run qa:fast:stos
```

Budget:

```text
warm p95 <= 90 seconds
cold p95 <= 4 minutes
no browser
no external database writes
no production build unless compile surface requires it
no Vercel calls
no release lock
```

Contents:

- changed-file impact classification;
- registry/schema validation when touched;
- workspace graph only when workspace/package metadata changed;
- product boundary only when imports/routes/config changed;
- incremental STOS typecheck;
- focused unit/contract tests selected by impact;
- lint/static security check only for changed files if configured;
- compact result.

### Lane B: impact QA

Command:

```text
npm run qa:impact:stos
```

Budget:

```text
p95 <= 6 minutes for normal scoped changes
one local server at most
one browser process at most
only impacted viewports/routes/workflows
```

Contents depend on impact manifest:

- UI/CSS/layout: focused browser routes and representative viewports;
- auth/session: auth boundary and tenant tests;
- data/persistence: isolated data contract and cleanup proof;
- templates/studio: editor-save-reload-publish-public parity;
- public page: mobile/public privacy/CTA route smoke;
- release tooling: release unit/integration tests, no product browser;
- shared package: affected consumer gates only.

### Lane C: release candidate

Command:

```text
npm run qa:release:stos
```

Budget:

```text
p95 <= 12 minutes excluding external provider time
one candidate snapshot
one canonical build
one browser lifecycle only when browser evidence is required or stale
```

Contents:

- candidate and environment contract;
- reusable fresh evidence check;
- missing P0/P1 impact gates;
- canonical build;
- artifact isolation;
- minimal critical browser smoke;
- release tooling tests if release code changed;
- GO/NO_GO packet.

### Lane D: deep scheduled QA

Command:

```text
npm run qa:deep:stos
```

Schedule and triggers:

- nightly or daily;
- before major release;
- auth/data/schema migration;
- template engine redesign;
- broad shared dependency change;
- incident regression campaign.

Contents:

- full 320/360/390/430/768/1280/1440 matrix;
- full durable Supabase QA tenant lifecycle;
- accessibility suite;
- performance budgets;
- full route semantics;
- extended failure/empty/retry states;
- security/privacy regression;
- visual screenshots;
- cleanup zero residue.

Scheduled QA finding P0/P1 opens an incident and invalidates affected reusable
evidence. It does not need to occupy the local dev/release lock while running.

## 9. Change impact engine

Implement a deterministic STOS impact classifier.

Inputs:

- changed files against candidate base;
- dirty included files;
- workspace dependency graph;
- route ownership manifest;
- API/schema ownership;
- gate definitions;
- last known evidence index.

Output:

```json
{
  "product": "stos",
  "candidateHash": "...",
  "categories": ["ui", "auth", "data", "release-tooling"],
  "impactedRoutes": ["..."],
  "impactedPackages": ["..."],
  "requiredGates": ["..."],
  "optionalGates": ["..."],
  "notApplicable": [{"gate": "...", "reason": "..."}],
  "risk": "low|medium|high|critical"
}
```

Suggested mapping:

### Docs/report only

- no typecheck;
- no build;
- no browser;
- validate referenced paths/schema only if automation docs changed.

### CSS/component visual only

- incremental typecheck if TSX changed;
- focused route browser;
- viewport set selected by affected layout contract;
- no durable external database workflow unless save/publish behavior changed.

### Domain pure logic

- focused unit/contract tests;
- typecheck;
- no browser unless user-observable integration changed.

### Route/API contract

- focused API contract;
- auth/privacy checks for route class;
- typecheck;
- build/route manifest before release.

### Auth/session/tenant

- all relevant P0 auth and tenant gates;
- negative cross-tenant cases;
- session lifecycle;
- full release gate.

### Persistence/schema/migration

- schema compatibility;
- isolated fixture;
- write/read/reload;
- cleanup/rollback;
- no production mutation.

### Build/release/tooling

- release tooling unit/integration tests;
- registry validation;
- source/artifact binding tests;
- strict smoke tests with fake fetch;
- no STOS browser unless product source/artifact changed.

### Shared package

- compute consumers through dependency graph;
- only run STOS gate if STOS is in affected closure;
- never run Cho Kenh gate merely because both are in one Git repository.

## 10. Evidence cache

Implement content-addressed gate evidence.

Cache key must include:

```text
product
gate id
gate implementation hash/version
relevant source input hashes
dependency graph hash
artifact hash when applicable
environment class
browser/runtime major version when applicable
schema version when applicable
```

Do not key only by Git commit because dirty source can be released.

Evidence record:

```json
{
  "status": "PASS",
  "gate": "...",
  "cacheKey": "...",
  "candidateHash": "...",
  "artifactHash": "...",
  "startedAt": "...",
  "finishedAt": "...",
  "durationMs": 0,
  "environmentClass": "local|staging|immutable|production",
  "expiresAt": "...",
  "evidencePaths": ["..."],
  "assertions": 0
}
```

Reuse rules:

- static/unit evidence: reusable until relevant input or gate implementation changes;
- production build/artifact evidence: exact candidate and environment only;
- browser evidence: exact artifact plus browser/runtime version, short TTL;
- external data evidence: exact schema/environment class, short TTL;
- immutable smoke: deployment-specific, never reused for another deployment;
- post-deploy smoke: alias/deployment-specific, never reused.

Cache hit must be visible in ledger as `REUSED`, not fake `EXECUTED`.

## 11. Candidate resume instead of full rerun

Current `qa-only`, `dry-run` and `deploy` modes must not rebuild and rerun all
gates independently for the same unchanged candidate.

Implement candidate lifecycle:

```text
CREATED
FAST_QA_PASS
IMPACT_QA_PASS
BUILT
ARTIFACT_PASS
RELEASE_READY
DEPLOYING
IMMUTABLE_PASS
PROMOTED
POST_DEPLOY_PASS
COMPLETE
```

Resume requirements:

- exact candidate hash;
- exact artifact hash;
- gate implementation hashes unchanged;
- required evidence fresh;
- no relevant source/dependency drift;
- target project/alias unchanged;
- previous rollback target revalidated.

Deploy mode should resume a `RELEASE_READY` candidate instead of rerunning
browser, typecheck and build.

If any binding changes, invalidate only dependent evidence and continue from
the earliest affected phase.

## 12. Build once, deploy the tested artifact

The tested artifact and deployed artifact must be identical.

Audit current Next/Vercel flow and choose one canonical strategy:

### Preferred strategy

- pin Vercel CLI version in the workspace toolchain;
- prepare Vercel project/environment once;
- run one canonical Vercel prebuild producing `.vercel/output` for STOS;
- inspect that output;
- browser-test that exact output;
- deploy with the approved prebuilt contract;
- bind source/artifact hash in deployment metadata;
- do not trigger a second remote source rebuild.

### Acceptable fallback

- if prebuilt deployment cannot satisfy framework/runtime requirements,
  document why;
- perform one local build for focused validation only when impacted;
- remote provider build remains canonical;
- compare source metadata and route/artifact signatures before promotion;
- do not call two builds the same artifact.

Do not run `npx --yes` in every release step if it repeatedly resolves/downloads
the same CLI. Use a pinned local executable or deterministic tool cache.

## 13. Parallelism policy

Parallelize only gates with disjoint resources.

Safe examples:

- workspace graph + static contract scan;
- product boundary + registry validation;
- independent small unit suites.

Never parallelize:

- two builds for same app;
- build and browser server on same artifact directory;
- two browser suites on same port/fixture;
- data fixture mutation and cleanup from another run;
- alias promotion and smoke;
- source-writing dev task and release candidate freeze on overlapping paths.

Default concurrency:

```text
max lightweight static workers = min(2, available CPU budget)
build workers = 1
browser workers = 1
external data mutation workers = 1
release workers per product = 1
```

Benchmark sequential versus concurrency=2. Keep the faster and more stable
configuration; do not assume more parallelism is faster on Windows.

## 14. Runtime, port and lock simplification

STOS development must not wait for release locks.

Resources:

```text
source path lease
candidate freeze
build artifact lock
browser runtime lease
port lease
release project lock
alias promotion transaction
```

Do not represent them as one global lock.

Rules:

- dev and focused QA continue unless exact source/runtime resource overlaps;
- release lock is acquired only immediately before release-critical mutation;
- expensive local QA/build should not hold alias lock;
- browser allocates a free product-scoped port dynamically;
- fixed port 3310 is a preference, not a global blocker;
- one owner writes and cleans its own lease;
- stale lock reconciliation uses PID, parent, heartbeat and resource identity;
- unrelated Cho Kenh process is ignored;
- temporary contention state is `WAITING_FOR_RESOURCE`, not master goal blocked;
- bounded backoff plus owner event, no repeated agent narration.

## 15. Browser QA optimization

Keep one browser launch and one server lifecycle for all selected browser checks.

Split assertions into tagged groups within the same harness:

```text
smoke
responsive
studio
publish
public-parity
auth
tenant
accessibility
performance
```

Impact engine selects tags.

### Minimum release browser smoke

When no UI/auth/data code changed and fresh exact-artifact deep evidence exists:

- `/stos` entry;
- authenticated workspace shell using isolated fixture or safe session;
- one critical edit/preview path without external mutation if possible;
- one public `/u/*` page;
- representative mobile 390;
- representative desktop 1280;
- console/page errors;
- no horizontal overflow;
- core CTA visible;
- route semantics smoke.

### Full matrix triggers

Run 320/360/390/430/768/1280/1440 only when:

- CSS/layout/component/template changed;
- route shell/navigation changed;
- acceptance matrix row changed;
- responsive incident regression;
- deep scheduled QA;
- no valid exact-artifact browser evidence exists for a major release.

Do not take full-page screenshots for every viewport on every unchanged release.
Capture screenshot only for changed route/viewports, failures and required
release evidence.

## 16. Data and tenant QA optimization

Current durable workflow writes an isolated QA tenant into the current Supabase
project and performs cleanup. Keep its safety guarantees but reduce frequency.

Required changes:

- run preflight and self-tests without external writes in fast lane;
- run external durable fixture only for auth/data/persistence/template publish
  impact, scheduled deep QA, or stale required evidence;
- prefer dedicated non-production QA project/environment when available;
- preserve unique marker, `isTest`, tenant ownership and zero-residue cleanup;
- abort cleanup if identity guard fails;
- never run two fixture lifecycles concurrently on same marker/environment;
- record before/after counts and cleanup status;
- no production customer data mutation.

Do not make a current-production-database write test mandatory for CSS-only
or release-tooling-only changes.

## 17. Static contract optimization

`isolated-contracts.mjs` currently walks and concatenates STOS source for string
markers. Improve it:

- use file-by-file streaming/scanning;
- report exact file and line;
- avoid concatenating all source into one giant string;
- use structured route manifest/source discovery;
- use dependency graph/import parser for forbidden imports where practical;
- cache by file hashes;
- scan only changed/relevant files in fast lane;
- run complete scan in release lane or when boundary config changes.

Do not duplicate product-boundary assertions already proven by dependency graph.
Merge overlapping assertions and preserve one canonical error format.

## 18. Typecheck optimization

- use workspace-scoped STOS tsconfig;
- enable incremental build info outside shared canonical output;
- cache by source/config/compiler version;
- do not typecheck root products for STOS-only changes;
- do not run typecheck twice between QA-ready and deploy if exact evidence is
  still valid;
- build invalidates typecheck only if compiler/build config requires different
  semantics;
- emit compact diagnostic summary and store full diagnostics in evidence file.

Type correctness remains required for production candidate.

## 19. Release train refactor

Refactor `tooling/release/product-release-train.mjs` into a thin orchestrator.

Suggested modules:

```text
tooling/release/release-context.mjs
tooling/release/gate-planner.mjs
tooling/release/evidence-cache.mjs
tooling/release/candidate-state.mjs
tooling/release/product-source-snapshot.mjs
tooling/release/vercel-release-contract.mjs
tooling/release/product-release-train.mjs
tooling/qa/stos-impact-classifier.mjs
```

Do not split files merely for style. Split only when responsibilities and tests
become clearer.

Release train responsibilities:

1. Parse mode/product.
2. Build context.
3. Load impact plan.
4. Resolve reusable evidence.
5. Run missing gates.
6. Build once if needed.
7. Inspect artifact.
8. Persist `RELEASE_READY` candidate.
9. In deploy mode, validate environment/project/domain.
10. Deploy immutable tested artifact.
11. Poll READY.
12. Strict smoke.
13. Promote transaction.
14. Post-deploy smoke.
15. Verified rollback on failure.
16. Final compact ledger/summary.

No business logic, route hardcoding or duplicate smoke implementation inside
the orchestrator.

## 20. Registry redesign

Extend product release registry gate definitions with:

```json
{
  "id": "isolated-browser",
  "command": ["npm", "run", "qa:browser", "--workspace", "@growth-commerce/stos-web"],
  "sourceBinding": "artifact",
  "phase": "impact",
  "triggers": ["ui", "auth", "data", "template"],
  "requiredInputs": ["ledgerDir", "releaseId", "sourceSnapshotHash", "artifactHash"],
  "timeoutSeconds": 900,
  "cachePolicy": "exact-artifact-short-ttl",
  "concurrencyGroup": "browser",
  "risk": "P1"
}
```

Registry validation must reject:

- duplicate gate IDs;
- missing required input mapping;
- broad predeploy command in product lane;
- gate without trigger/phase/risk;
- cache policy without cache inputs;
- browser gate without artifact binding;
- external data gate without cleanup contract;
- release gate referencing foreign product command;
- timeout outside configured budget without explicit reason.

## 21. QA checklist rewrite

Rewrite `QA_CHECK_BEFORE_DEPLOY.md` to contain only:

1. Purpose and severity.
2. Product scope and impact selection.
3. Safety kernel.
4. Fast/impact/release/deep lanes.
5. P0/P1 release rules.
6. Root-cause repair loop.
7. Evidence and cache binding.
8. Rollback/post-deploy policy.
9. Final output contract.

Remove from canonical checklist:

- dated release journals;
- repeated PASS command history;
- screenshot paths from old runs;
- old production credentials or password references;
- one-off incident narration;
- duplicated product-specific requirements already in acceptance matrices;
- obsolete route lists;
- repeated generic principles.

Archive old history under a read-only reports/history path with index by date,
product and release ID. Redact any legacy credential-like text during migration.

The canonical checklist must not contain real passwords, tokens or PII.

## 22. Token and log budget

Every gate must follow:

### On PASS

Print one compact JSON object:

```json
{
  "status": "PASS",
  "gate": "...",
  "durationMs": 0,
  "assertions": 0,
  "cache": "MISS|HIT",
  "evidence": "relative/path"
}
```

### On FAIL

Print:

- gate;
- failed invariant;
- exact file/route/viewport;
- expected versus actual;
- concise stack/error fingerprint;
- evidence path;
- suggested owning scope.

Store full stdout/stderr/screenshots/traces on disk.
Do not stream huge successful browser reports into agent context.
Do not include full source snapshot file list in chat output.

Orchestrator final output target <= 4 KB excluding explicit failure detail.

## 23. Retry and flake policy

Do not automatically rerun every failure.

Classify:

```text
DETERMINISTIC_PRODUCT_FAILURE
DETERMINISTIC_AUTOMATION_FAILURE
TRANSIENT_LOCAL_RESOURCE
TRANSIENT_PROVIDER
AUTH_REQUIRED
EXTERNAL_OUTAGE
```

Rules:

- deterministic failure: no blind retry; fix root cause first;
- transient local resource: one bounded retry after verified cleanup/reallocation;
- provider transitional state: poll within budget, not full rerun;
- auth required: stop only deploy slice and request login once;
- external outage: preserve candidate/evidence and resume later;
- same fingerprint twice: no third retry; open automation RCA.

Temporary state must not mark master STOS goal hard blocked.

## 24. Agent orchestration simplification

Do not spawn one AI agent per gate.

Use:

- one release optimizer/orchestrator;
- optional focused code owner only for a distinct module;
- one browser process;
- machine-executed gates;
- concise evidence summaries.

Agents must not read all historical QA logs.
Agents read:

```text
active goal
current impact plan
failed invariant
relevant source files
compact previous evidence index
```

No repeated status narration while commands run.
No token-heavy debate between QA/dev/devops agents for deterministic results.

## 25. Required commands after cutover

Root package scripts should expose:

```json
{
  "qa:fast:stos": "...",
  "qa:impact:stos": "...",
  "qa:release:stos": "...",
  "qa:deep:stos": "...",
  "release:stos": "... --dry-run",
  "release:stos:deploy": "... --deploy"
}
```

Compatibility:

- `qa:predeploy:stos` may temporarily alias `qa:release:stos`;
- print one deprecation notice, not repeated warnings;
- remove alias after all automation callers migrate;
- legacy root `qa:predeploy` must never be invoked by STOS release lane.

## 26. Tests required for automation

Add focused tests for:

### Impact selection

1. Docs-only change selects no build/browser.
2. STOS CSS selects responsive browser, not data fixture.
3. STOS auth selects auth/tenant gates.
4. STOS persistence selects data cleanup gate.
5. Release-tooling-only selects release tests, not product browser.
6. Cho Kenh-only change selects zero STOS gates.
7. Shared package change selects STOS only when dependency closure contains it.

### Evidence cache

8. Exact key reuses PASS.
9. Source drift invalidates affected gate only.
10. Gate implementation change invalidates its evidence.
11. Artifact change invalidates browser/artifact evidence.
12. Expired external data evidence reruns.
13. Immutable/post-deploy smoke never reuses across deployments.

### Release context

14. Browser receives ledger dir, release ID, source hash and artifact hash.
15. Missing required input fails before child spawn.
16. Secret values do not enter ledger/log command lines.
17. Candidate resume starts from earliest invalid phase.

### Strict smoke

18. Exact 200 + HTML signature passes.
19. 302 fails when 200 required.
20. 404 foreign route passes only with expected content type/signatures.
21. Foreign content marker fails.
22. JSON dotted-path mismatch fails.
23. Wrong project deployment fails.

### Promotion/rollback

24. Immutable smoke fail never mutates alias.
25. Alias binds expected deployment before post-smoke.
26. Post-smoke fail rolls back to previous deployment.
27. Rollback deployment ID and smoke are verified.
28. Foreign alias/project cannot be used.

### Locks/runtime

29. Cho Kenh lock does not block STOS.
30. STOS live release lock prevents duplicate release mutation only.
31. Dev fast lane ignores release lock.
32. Dynamic port selects free port.
33. Owner cleans only its own lease/process.
34. Stale lock requires canonical reconciliation without blind deletion.

### Duplicate/dead gate prevention

35. No STOS package script points to legacy root duplicate implementation.
36. No product release gate references broad `qa:predeploy`.
37. Every gate has defect class, trigger and evidence consumer.
38. Canonical QA checklist remains under size budget.

## 27. Benchmark protocol

Measure before and after on the same machine and comparable source state.

Scenarios:

```text
A. docs-only change
B. STOS pure TypeScript logic change
C. STOS CSS/layout change
D. STOS auth/data change
E. release-tooling-only change
F. unchanged release-ready candidate resume
G. full deep scheduled QA
```

For each capture:

- wall time;
- active CPU time where available;
- peak memory where available;
- child process count;
- filesystem hash passes;
- build count;
- browser launch count;
- server startup count;
- external data fixture count;
- log bytes emitted to stdout/stderr;
- evidence bytes stored;
- cache hit ratio;
- flake/retry count;
- gate count selected/executed/reused/skipped;
- defect fixtures caught.

Success requires speed improvement and equal or better defect detection on the
replay fixture set.

## 28. Rollout phases

### Phase 0: preserve and baseline

- capture dirty worktree;
- do not revert user changes;
- inventory commands/callers;
- benchmark components that can currently run;
- record known contract failures separately from performance.

### Phase 1: repair broken contracts

- fix release context env binding;
- replace weak smoke with canonical strict smoke;
- wire production identity/project/domain helpers;
- add execution contract tests;
- make QA-only dry run deterministic.

Do not optimize around a broken pipeline.

### Phase 2: gate inventory and ownership

- classify every STOS-invokable gate;
- locate duplicates and obsolete scripts;
- map defect classes and triggers;
- create impact engine.

### Phase 3: fast/impact/deep lanes

- implement scripts;
- implement compact evidence;
- consolidate browser lifecycle;
- move deep data/full viewport work out of default release path when valid.

### Phase 4: candidate cache/resume

- content-addressed evidence;
- candidate state machine;
- build once;
- resume deploy without rerunning unchanged gates.

### Phase 5: shadow comparison

For representative scenarios, run old and new lane without production deploy.

Compare:

- defects caught;
- output;
- duration;
- flake;
- cleanup;
- artifact identity.

New lane cannot cut over until P0/P1 defect replay parity is proven.

### Phase 6: cutover

- point `release:stos` and `release:stos:deploy` to optimized train;
- keep product isolation;
- update canonical checklist;
- migrate callers;
- keep rollback commit/path for automation source.

### Phase 7: delete dead automation

- remove legacy STOS duplicates;
- remove dead wrappers and unused config;
- remove broad STOS references;
- remove temporary compatibility aliases after reference scan;
- verify package lock and scripts;
- rerun automation tests and optimized dry-run.

## 29. Root-cause repair loop

For each failure during implementation:

1. Capture fingerprint and phase.
2. Classify product bug versus automation bug versus environment.
3. Reproduce with smallest test.
4. Fix canonical owner module.
5. Run focused test.
6. Run adjacent regression.
7. Resume from earliest invalid candidate phase.
8. Update metrics and decision record.

Do not return report-only when source automation can be fixed safely.
Do not mark the goal blocked for temporary lock, port or browser contention.

## 30. Files expected to be reviewed

At minimum inspect:

```text
package.json
package-lock.json
QA_CHECK_BEFORE_DEPLOY.md
agent-system/release/product-release-registry.json
apps/stos-web/package.json
apps/stos-web/qa/isolated-contracts.mjs
apps/stos-web/qa/isolated-workflow.mjs
apps/stos-web/qa/persistence-tenant.cjs
apps/stos-web/qa/template-designer-browser.cjs
tooling/release/product-release-train.mjs
tooling/release/product-release-registry.mjs
tooling/release/product-source-snapshot.mjs
tooling/release/vercel-release-contract.mjs
tooling/release/owned-process.mjs
tooling/qa/product-artifact-isolation.mjs
tooling/dependency-graph/workspace-graph.mjs
tooling/dependency-graph/product-boundary.mjs
scripts/automation-command-gate.mjs
scripts/automation-runtime-runner.mjs
scripts/automation-runtime-policy.mjs
scripts/automation-lane-lock.mjs
scripts/automation-port-manager.mjs
```

Also search all package scripts, docs, hooks, scheduled automation and agents for
callers before deleting/renaming commands.

## 31. Definition of done

Optimization is complete only when:

1. RC-01 through RC-07 are verified fixed or disproven with evidence.
2. Every STOS gate is classified.
3. Fast/impact/release/deep commands exist and pass relevant tests.
4. STOS release lane never calls root broad predeploy.
5. Broken smoke duplication is removed.
6. Browser receives complete release context.
7. Candidate evidence can resume without full rerun.
8. Exactly one canonical artifact build occurs per candidate.
9. Full matrix/data lifecycle runs only on impact/deep triggers.
10. Auth/tenant/privacy/artifact/project/rollback safety remains covered.
11. Duplicate STOS QA implementations are removed.
12. Canonical QA checklist is concise and history is archived safely.
13. PASS logs satisfy output budget.
14. Lock/port behavior is product-scoped and event-driven.
15. P0/P1 defect replay parity is at least equal to old lane.
16. Before/after benchmark demonstrates material time/process/token reduction.
17. Optimized `release:stos --dry-run` passes without production mutation.
18. No Cho Kenh or Company Site source/release behavior is changed except shared
    platform tests required to preserve compatibility.
19. No production deploy occurred.

## 32. Final report contract

Return concise result:

```markdown
# STOS Release/QA Optimization: PASS | PARTIAL | HARD_STOP

## Root causes fixed
- RC-01: ...
- RC-02: ...
- ...

## Gate reduction
- Before: <selected/executed gates>
- After: <selected/executed gates>
- Deleted: <gate ids>
- Merged: <old -> canonical>
- On-impact: <gate ids>
- Scheduled: <gate ids>

## Performance
| Scenario | Before | After | Improvement |
|---|---:|---:|---:|
| Fast feedback | ... | ... | ... |
| UI impact | ... | ... | ... |
| Release candidate | ... | ... | ... |
| Candidate resume | ... | ... | ... |

## Resource/token proxy
- Build count: ... -> ...
- Browser launches: ... -> ...
- Source hash passes: ... -> ...
- PASS log bytes: ... -> ...
- Checklist bytes read: ... -> ...

## Safety proof
- P0/P1 replay parity: PASS
- Auth/tenant/privacy: PASS
- Artifact isolation: PASS
- Strict smoke: PASS
- Rollback transaction tests: PASS
- Foreign product isolation: PASS

## Commands
- `npm run qa:fast:stos`
- `npm run qa:impact:stos`
- `npm run qa:release:stos`
- `npm run qa:deep:stos`
- `npm run release:stos`

## Files changed
- ...

## Deleted automation
- ...

## Residual risk
- ...

## Production mutation
- NONE
```

`PARTIAL` is allowed only when a real external prerequisite prevents completion.
Do not call temporary contention a hard stop.

## 33. Execute now

1. Read repository instructions and relevant STOS/QA skills.
2. Capture current dirty worktree without reverting anything.
3. Re-audit the verified baseline.
4. Reproduce RC-01 and RC-02 with focused tests.
5. Build gate inventory and current call graph.
6. Benchmark runnable old components.
7. Fix broken release contracts first.
8. Implement impact engine and four lanes.
9. Implement evidence cache and candidate resume.
10. Consolidate duplicate QA implementations.
11. Rewrite canonical QA checklist and archive history.
12. Add automation tests and defect replay fixtures.
13. Run shadow comparison.
14. Cut over STOS scripts only after parity PASS.
15. Delete dead STOS automation and references.
16. Run optimized STOS dry-run with `NO_DEPLOY=1`.
17. Produce before/after report.

Khong dung lai o mot danh sach de xuat.
Khong deploy production.
Khong hy sinh defect detection de dat benchmark.
