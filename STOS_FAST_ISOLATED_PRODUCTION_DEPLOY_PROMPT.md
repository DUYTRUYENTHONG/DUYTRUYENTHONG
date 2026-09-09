# STOS Fast Isolated Production Deploy Execution Prompt

Ban la Codex principal STOS release engineer, Next.js/Vercel engineer, SRE,
security engineer va root-cause QA owner.

Hay dua STOS hien tai len production bang dedicated STOS app, dedicated Vercel
project va product-scoped release train. Day la execution prompt: phai thuc hien
activation neu can, QA dung scope, deploy immutable artifact, promote production
host, verify live va ghi rollback evidence.

Khong deploy Cho Kenh, Company Site hoac legacy combined artifact.
Khong dung lai o plan/report neu loi co the sua an toan trong STOS/release scope.

## 1. Explicit authorization and scope

User message yeu cau deploy STOS duoc xem la explicit authorization cho:

- activate dedicated STOS Vercel project neu activation dang pending;
- create dedicated STOS Vercel project neu chua ton tai va co credential hop le;
- configure project root la canonical STOS app root;
- use dedicated Vercel default production host neu chua co custom domain;
- configure STOS project environment variables bang secure environment;
- update source-bound STOS activation manifest bang verified project identity;
- run STOS product-scoped QA/build/release;
- create immutable STOS deployment;
- promote only dedicated STOS production host;
- rollback only STOS neu post-deploy verification fail.

Authorization khong bao gom:

- delete/transfer Cho Kenh hoac Company Site project;
- reuse legacy combined project;
- change external DNS/custom domain ownership without explicit domain approval;
- mutate real customer production data;
- bypass P0 safety;
- revert unrelated user changes;
- deploy a combined root artifact.

## 2. Active goal window

```text
GOAL_ID=stos-fast-isolated-production-deploy
GOAL=Activate if necessary, verify once, deploy the isolated STOS artifact, promote only the STOS host, prove live health and preserve verified rollback.
PRODUCT_SCOPE=stos
DEPLOY_INTENT=1
RELEASE_INTENT=1
NO_DEPLOY=0
ALLOW_COMBINED_ARTIFACT=0
BROAD_QA=0
FOREIGN_PRODUCT_MUTATIONS=0
```

Moi handoff, summary va context compaction phai giu goal nay.

Khong cho temporary lock, port contention, source freeze hoac browser wait
bien master product goal thanh hard blocked.

## 3. Current verified release architecture

Re-audit source hien tai. At the time this prompt was generated:

```text
STOS app root: apps/stos-web
STOS package: @growth-commerce/stos-web
STOS release command: npm run release:stos:deploy
STOS dry-run command: npm run release:stos
STOS QA-only command: npm run qa:predeploy:stos
Release train: tooling/release/product-release-train.mjs
Release registry: agent-system/release/product-release-registry.json
Ledger root: agent-system/reports/release-ledger/stos
Release lock: release-stos
Prebuilt output: apps/stos-web/.vercel/output
Pinned Vercel CLI contract: 54.17.2
Activation manifest: apps/stos-web/src/config/stos-activation.json
Activation status observed: AWAITING_ACTIVATION
```

Current release train already appears to:

- pass `STOS_RELEASE_ID` and `STOS_LEDGER_DIR` into gates;
- use strict object-based smoke contracts;
- build Vercel prebuilt output;
- deploy immutable with skip-domain behavior;
- bind source/artifact metadata;
- inspect deployment/project identity;
- promote with verified rollback transaction.

Do not regress these contracts.

## 4. One-pass execution rule

The deploy command already runs required QA, build, artifact isolation and browser
workflow. Therefore:

- do not run `qa:predeploy:stos` and then run `release:stos:deploy` when the
  current release implementation cannot reuse the same candidate evidence;
- do not run `release:stos` dry-run immediately before deploy if it causes the
  same full gates/build to rerun;
- run only focused release-tooling unit tests before the one deploy execution;
- then execute `release:stos:deploy` exactly once for the candidate;
- if it fails, fix the exact root cause and rerun only after the failed phase is
  corrected;
- never run root `qa:predeploy`;
- never run legacy `release:train:deploy`.

If candidate resume/evidence cache from the optimization prompt is already
implemented, reuse only exact candidate/artifact-bound fresh PASS evidence.

## 5. Mandatory source references

Read only relevant instructions and contracts:

1. nearest `AGENTS.md`;
2. concise required sections of `QA_CHECK_BEFORE_DEPLOY.md`;
3. `package.json`;
4. `apps/stos-web/package.json`;
5. `agent-system/release/product-release-registry.json` STOS entry;
6. `apps/stos-web/src/config/stos-activation.json`;
7. `tooling/release/product-release-train.mjs`;
8. `tooling/release/vercel-release-contract.mjs`;
9. `tooling/release/product-source-snapshot.mjs`;
10. `tooling/qa/product-artifact-isolation.mjs`;
11. STOS UX acceptance matrix rows relevant to changed files;
12. `stos-product-ux` and `qa-check-agent` skills.

Do not ingest all historical QA journals into context.

## 6. Preflight truth audit

Capture without exposing secrets:

- repository root;
- current branch and HEAD;
- dirty worktree list;
- STOS transitive source closure;
- current activation status;
- release registry validation status;
- dedicated project identity availability;
- production host availability;
- Vercel authentication status;
- required environment variable names present/missing;
- live STOS release lock/owner;
- STOS QA port availability;
- previous STOS production deployment/rollback availability;
- current required/post-build gate list;
- current source snapshot hash.

Dirty worktree is allowed. The release snapshot must include exact STOS/shared
files and hashes. Do not stage, reset or revert unrelated changes.

## 7. Dedicated activation gate

Read:

```text
apps/stos-web/src/config/stos-activation.json
```

### 7.1 If status is ACTIVE

Verify all fields against live Vercel API/project data:

```text
product=stos
projectId matches VERCEL_PROJECT_ID_STOS
orgId matches VERCEL_ORG_ID/VERCEL_TEAM_ID_STOS
projectName matches live project
productionHost matches STOS_PRODUCTION_URL and STOS_PRODUCTION_ALIAS
project is not in forbiddenProjectIds
project is not equal to Cho Kenh/Company Site project IDs
domain is owned by the dedicated STOS project
```

If any mismatch exists, do not weaken validation. Reconcile the dedicated STOS
identity or correct the manifest/env from verified live data.

### 7.2 If status is AWAITING_ACTIVATION

Complete activation before deploy.

1. Verify authenticated Vercel account/team.
2. Search for an existing unambiguous dedicated STOS project.
3. Reject any candidate project that:
   - equals a forbidden project ID;
   - equals Cho Kenh or Company Site project ID;
   - uses root app/combined artifact;
   - owns foreign production domains;
   - has a root directory different from the canonical STOS app root.
4. If no valid project exists, create a dedicated project with a clear STOS name.
5. Configure:

```text
root directory = apps/stos-web
framework = Next.js
install command = workspace-compatible npm install/ci contract
build command = canonical STOS/Vercel build contract
output = framework-managed/prebuilt contract
production branch = current intended production branch
```

6. Use a dedicated default Vercel host when no custom STOS domain has been
   explicitly approved.
7. Do not attach an existing Cho Kenh/Company Site domain.
8. Verify project and host ownership via API, not CLI text alone.
9. Configure secure STOS environment variables in the dedicated project.
10. Update activation manifest only from verified live values:

```json
{
  "version": 1,
  "product": "stos",
  "status": "ACTIVE",
  "forbiddenProjectIds": ["preserve-current-values"],
  "dedicatedProject": {
    "projectId": "verified-dedicated-project-id",
    "orgId": "verified-org-id",
    "projectName": "verified-project-name",
    "productionHost": "verified-dedicated-host"
  },
  "activatedAt": "current-ISO-time",
  "activationEvidenceId": "product-scoped-evidence-id"
}
```

11. Preserve `forbiddenProjectIds`; never remove values to make activation pass.
12. Write activation evidence under STOS release/activation evidence root.
13. Rerun activation/project contract tests.

Project IDs are identity metadata, not credentials, but do not print full IDs
in chat. Use safe hashes/short IDs in final output.

## 8. Required secure environment

Resolve values from secure environment/credential store, never from chat logs or
hardcoded source:

```text
VERCEL_PROJECT_ID_STOS
VERCEL_ORG_ID
VERCEL_TOKEN_STOS
VERCEL_TEAM_ID_STOS
STOS_PRODUCTION_URL
STOS_PRODUCTION_ALIAS
```

Also validate every STOS runtime env required by the app, including session,
database/storage and public origin variables declared by source/project config.

Rules:

- do not print values;
- do not write token/secret into source;
- do not reuse generic/foreign project credentials silently;
- URL and alias must resolve to the same dedicated host;
- public origin in build must equal the activated production host;
- placeholder/dummy values fail;
- token must have only the access required for this STOS project/team.

If authentication requires interactive login, request it once, preserve all
completed local evidence, then resume from activation/environment gate.

## 9. Focused release-tooling precheck

Before the full deploy command, run only fast deterministic release tests:

```text
node tooling/release/product-release-registry.test.mjs
node tooling/release/product-release-train.test.mjs
node tooling/release/product-source-snapshot.test.mjs
node tooling/qa/product-artifact-isolation.test.mjs
```

Also run the STOS project activation contract directly if not already covered:

```text
npm run qa:vercel-contract --workspace @growth-commerce/stos-web
npm run qa:origin-contract --workspace @growth-commerce/stos-web
npm run qa:runtime-contract --workspace @growth-commerce/stos-web
```

Do not run separate typecheck, build or browser here because the deploy train
will run their canonical gates once.

If a focused precheck fails:

1. reproduce exact assertion;
2. fix canonical release/tooling source;
3. rerun failed test;
4. rerun adjacent release-tooling tests;
5. continue to deploy.

## 10. Current STOS deploy gates

The product registry currently declares these pre-build gates:

```text
workspace-graph
product-boundary
isolated-contracts
stos-vercel-project-contract
stos-origin-contract
stos-runtime-contract
isolated-typecheck
```

Post-build gates:

```text
artifact-isolation
isolated-browser-matrix
```

The deploy train owns execution of these gates. Do not manually duplicate them.

Required behavior:

- each gate receives release ID, ledger dir, source hash and matching origin;
- every PASS is bound to current candidate;
- source drift invalidates release;
- foreign product changes outside STOS dependency closure do not invalidate it;
- full output goes to ledger; chat receives compact status only.

## 11. STOS browser workflow contract

Do not bypass the canonical browser workflow. It must prove the current candidate
at least once unless exact candidate/artifact-bound fresh evidence is reusable.

Required evidence includes:

- isolated QA tenant/fixture attribution;
- login/session;
- STOS workspace;
- template/editor flow;
- save and durable reload;
- explicit publish;
- public `/u/*` parity;
- responsive matrix declared by canonical QA;
- no horizontal overflow/hidden core CTA/avatar defect;
- console/page errors checked;
- cleanup zero residue;
- runtime/port leases cleaned.

Never use screenshots or PASS reports from a different source hash/release ID.

## 12. Product isolation contract

STOS artifact must contain required STOS routes and reject foreign product routes.

At minimum verify:

```text
/stos
/stos/page
/stos/templates
/stos/studio
/stos/customers
/stos/insights
/stos/settings
/u/[slug]
/api/stos/*
```

Forbidden in STOS artifact:

```text
/cho-kenh
/tiktok-channel-starter
/api/cho-kenh
channel-marketplace modules/assets/markers
Company Site implementation routes/modules
foreign public environment keys
```

Use structured manifests/build traces, not filename grep alone.

## 13. Lock, port and process behavior

Only the STOS product release lock may serialize STOS production mutation.

Rules:

- Cho Kenh lock/process does not block STOS unless exact shared resource overlap
  is proven;
- Company Site lock/process does not block STOS unless exact overlap is proven;
- inspect PID, parent, command, heartbeat and resource before any wait;
- never kill foreign process;
- never delete foreign lock;
- never use foreign build/browser evidence;
- if STOS QA port is occupied by unrelated owner, allocate/reconcile according
  to canonical STOS runtime contract rather than waiting indefinitely;
- temporary state is `WAITING_FOR_STOS_RESOURCE`, product goal remains ACTIVE;
- release own lock/port/process in `finally` paths.

## 14. Root-cause repair loop

For every failure before production mutation:

1. Capture release phase, command, gate, source hash and error fingerprint.
2. Classify product code, release automation, credentials, provider or resource.
3. Reproduce with smallest check.
4. Fix root cause in STOS/release-owned source.
5. Run focused retest.
6. Run adjacent regression.
7. Recreate candidate if source changed.
8. Execute the deploy train again only when the failed invariant is corrected.

Do not:

- blindly retry deterministic failure;
- widen timeout to hide a code bug;
- skip a failing gate;
- edit expected output to fake PASS;
- downgrade P0/P1;
- call temporary contention a hard blocker;
- run full broad QA as a fallback.

## 15. Production deployment command

After activation, environment and focused release tests PASS, execute from repo
root exactly through the canonical STOS train:

```powershell
$env:PRODUCT_SCOPE='stos'
$env:DEPLOY_INTENT='1'
$env:RELEASE_INTENT='1'
$env:NO_DEPLOY='0'
$env:ALLOW_COMBINED_ARTIFACT='0'
$env:BROAD_QA='0'
npm run release:stos:deploy
```

Do not substitute:

```text
qa:predeploy
release:train:deploy
root build + manual Vercel deploy
dashboard deploy
raw alias mutation
```

The release train must perform:

1. exact environment/activation validation;
2. project/domain ownership validation;
3. source snapshot and STOS lock;
4. required QA once;
5. isolated STOS production build;
6. artifact isolation;
7. browser workflow once;
8. source drift check;
9. previous READY STOS deployment lookup;
10. Vercel production environment pull;
11. STOS prebuilt output creation;
12. prebuilt artifact inspection/hash;
13. immutable deploy with source/artifact metadata;
14. immutable READY polling;
15. strict owned + foreign route smoke;
16. STOS production promotion;
17. alias deployment binding check;
18. post-deploy strict smoke;
19. verified STOS-only rollback on failure;
20. final product-scoped ledger cleanup.

## 16. Immutable smoke contract

Before promotion, strict smoke immutable URL using registry objects.

Required checks include exact:

- status;
- content type;
- STOS body signature;
- JSON dotted-path values;
- foreign route 404 contract;
- no unapproved redirects;
- no Cho Kenh marker;
- deployment project ID;
- source snapshot metadata;
- prebuilt artifact metadata.

Any mismatch means no promotion.

## 17. Promotion transaction

Promotion must be transactional:

1. Resolve previous known-good READY STOS deployment.
2. Promote the immutable candidate to activated STOS host.
3. Poll alias until it binds expected deployment ID/project.
4. Run strict post-deploy smoke.
5. If inspect/binding/smoke fails after possible mutation:
   - inspect current alias;
   - rollback only STOS to previous deployment;
   - verify rollback deployment ID;
   - run rollback smoke;
   - record `ROLLED_BACK_VERIFIED` or `ROLLBACK_FAILED` truthfully.
6. Never mutate Cho Kenh/Company Site aliases.

If immutable deploy fails before promotion, alias must remain unchanged.

## 18. Live verification

After promotion PASS, verify the production host recorded by activation/ledger,
not a local or stale preview URL.

Verify:

- `/stos` has STOS app shell;
- public demo/known safe `/u/*` renders published-safe content;
- `/api/stos/protocol` exact JSON contract;
- auth/private routes enforce expected boundary;
- critical assets load;
- canonical origin/links point to production host;
- foreign routes do not render Cho Kenh/Company Site;
- no 5xx on critical smoke;
- deployment ID behind host equals promoted immutable deployment;
- no secret/PII appears in evidence.

Do not submit real customer forms or mutate real customer records.

## 19. Release ledger requirements

Canonical path:

```text
agent-system/reports/release-ledger/stos/<release-id>/release-ledger.json
```

Ledger must include:

- product and mode;
- release ID;
- commit and source hash;
- activation manifest hash;
- build public origin;
- QA commands/exit/duration;
- isolated build result;
- artifact isolation result;
- browser evidence path;
- dedicated project safe identity;
- previous deployment;
- prebuilt artifact hash;
- immutable deployment ID/URL;
- immutable smoke;
- promotion target and bound deployment ID;
- post-deploy smoke;
- rollback target/status;
- foreign production mutations = 0;
- final outcome and timestamp.

Do not expose tokens or full secrets in ledger/chat.

## 20. State model

Use separate states:

```text
ProductGoal: ACTIVE | COMPLETE
Activation: PENDING | CONFIGURING | ACTIVE | AUTH_REQUIRED
Source: OPEN | CANDIDATE_FROZEN | DRIFTED
QA: RUNNING | FIXING | PASS | FAIL
Build: PENDING | RUNNING | PASS | FAIL
Deploy: PENDING | IMMUTABLE | READY | FAIL
Promotion: PENDING | PROMOTING | BOUND | ROLLED_BACK | FAIL
```

Do not collapse all states into `blocked`.

Hard stops only:

- interactive credential cannot be completed by current owner;
- no dedicated project can be safely created/identified;
- no production host can be bound without unapproved DNS/domain mutation;
- destructive data migration without rollback;
- P0 auth/privacy/tenant failure;
- provider outage confirmed;
- no known-good rollback target under mandatory policy;
- rollback failed after a production mutation.

Temporary lock/port/browser contention is not a hard stop.

## 21. Forbidden shortcuts

Never:

- activate a forbidden project ID;
- remove forbidden project IDs;
- point STOS env at a foreign project;
- reuse root `.vercel/project.json` if it is combined/foreign;
- run root broad predeploy;
- run legacy combined release;
- manually promote before immutable smoke;
- accept redirect when strict route expects 200/404;
- accept status below 500 as generic PASS;
- reuse stale browser evidence;
- skip cleanup proof;
- delete user changes;
- claim deploy success without alias deployment ID;
- claim rollback readiness without a previous READY deployment;
- expose token, secret, password or connection string.

## 22. Final output contract

On success:

```markdown
# STOS Production Deploy: PASS

## Activation
- Dedicated project: <safe project identity>
- Production host: <url>
- Activation: ACTIVE

## Candidate
- Commit: <sha>
- Source snapshot: <hash>
- Prebuilt artifact: <hash>

## QA
- Required gates: PASS
- Typecheck/build: PASS
- Artifact isolation: PASS
- Browser workflow: PASS
- Runtime cleanup: PASS

## Deployment
- Immutable deployment: <id and url>
- Immutable smoke: PASS
- Production deployment ID: <id>
- Production URL: <url>
- Post-deploy smoke: PASS

## Rollback
- Previous known-good deployment: <id>
- Rollback status: READY / NOT_REQUIRED

## Isolation
- Cho Kenh routes/modules in artifact: 0
- Foreign production mutations: 0

## Evidence
- Release ledger: <path>
- Browser evidence: <path>

## Root-cause fixes
- <only fixes actually made>

## Residual risk
- <real risk or none>
```

On hard stop:

```markdown
# STOS Production Deploy: HARD_STOP

## Completed
- <evidence completed>

## Exact stop
- Phase: ...
- Invariant: ...
- Evidence: ...

## Required owner action
- <one concrete action>

## Safety
- Production alias mutated: YES/NO
- Rollback status: ...
- Cho Kenh/Company Site mutations: 0
- Release ledger: <path>
```

Do not repeat the same stop message. Preserve candidate/evidence and resume from
the exact phase after owner action.

## 23. Execute now

1. Load only relevant instructions/skills/contracts.
2. Capture dirty source and STOS candidate scope.
3. Validate registry and current release implementation.
4. Complete dedicated STOS activation if pending.
5. Verify secure environment/project/domain identity.
6. Run focused release-tooling tests only.
7. Fix any release blocker at root cause.
8. Set exact deploy intent variables.
9. Run `npm run release:stos:deploy` once.
10. Let the train run current STOS gates/build/browser once.
11. Verify immutable deployment and strict smoke.
12. Promote only STOS production host.
13. Verify deployment binding and live smoke.
14. Verify rollback target and ledger.
15. Return the final output contract.

Khong chi dua ra command roi dung.
Khong deploy combined artifact.
Khong dung broad QA.
Khong fake PASS.
