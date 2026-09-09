# STOS Isolated Production Redeploy Master Prompt

> SUPERSEDED: Use `STOS_FAST_ISOLATED_PRODUCTION_DEPLOY_PROMPT.md`. The new prompt matches the activated product-release architecture and handles the current dedicated-project activation gate.

Ban la Codex principal release engineer, STOS product engineer, Next.js architect,
Vercel release architect, SRE, security engineer va root-cause QA lead.

Hay redeploy STOS len production bang release lane doc lap cua STOS.
Day la execution prompt, khong phai prompt de chi viet ke hoach hoac bao cao blocker.
Lam viec den khi release STOS thanh cong va co bang chung production day du,
hoac den khi xac dinh mot hard stop thuc su ma khong the tu sua an toan.

Khong duoc deploy Cho Kenh, Company Site hoac artifact chung duoi ten STOS.
Khong duoc gia lap ket qua QA, deploy, alias promotion hoac rollback.

## 1. Active goal window

Dat goal duy nhat cho toan bo task:

```text
GOAL_ID=stos-isolated-production-redeploy
GOAL=Build, verify, deploy and promote only the STOS production artifact, then prove live STOS health and rollback readiness.
PRODUCT_SCOPE=stos
DEPLOY_INTENT=1
RELEASE_INTENT=1
NO_DEPLOY=0
BROAD_QA=0
ALLOW_COMBINED_ARTIFACT=0
ALLOW_FOREIGN_PRODUCT_SOURCE_WRITE=0
```

Moi summary, handoff, subagent va tool call dai phai giu nguyen goal window nay.
Moi 15-20 thao tac hoac sau context compaction, nhac lai ngan gon:

```text
Product: STOS only
Current phase: <phase>
Release candidate: <commit-or-snapshot>
Next gate: <gate>
Production mutation authorized: deploy STOS only
Forbidden: combined artifact, Cho Kenh mutation, Company Site mutation
```

Khong de mot temporary wait, source freeze, browser retest hoac foreign lock
bien master product goal thanh `blocked`.

## 2. Definition of done

Chi duoc goi release thanh cong khi tat ca dieu sau dung:

1. STOS co app root/build target doc lap.
2. STOS co Vercel project doc lap.
3. STOS co production alias/domain doc lap.
4. STOS co release lock, ledger va rollback target doc lap.
5. STOS artifact khong chua route/API/domain module cua Cho Kenh.
6. STOS source snapshot duoc dong bang va co hash.
7. STOS static, contract, data, auth, browser va responsive QA PASS.
8. Production build cua STOS PASS.
9. Immutable deployment duoc inspect dung project va artifact.
10. Immutable URL smoke PASS truoc alias promotion.
11. STOS production alias duoc promote den dung deployment ID.
12. Post-deploy smoke tren production alias PASS.
13. Previous known-good STOS deployment duoc ghi lam rollback target.
14. Release ledger va final evidence packet duoc ghi day du.
15. Khong co production mutation nao tren Cho Kenh hoac Company Site.

Neu chi build/deploy artifact chung thi ket qua la FAIL, khong phai STOS release.

## 3. Mandatory references

Doc truoc khi thao tac:

1. Repository `AGENTS.md` gan nhat.
2. `QA_CHECK_BEFORE_DEPLOY.md`.
3. `package.json` cua root va STOS app root.
4. Workspace config va lockfile.
5. Product release registry.
6. STOS release train implementation.
7. STOS Vercel project manifest/configuration.
8. STOS route ownership manifest.
9. STOS artifact isolation gate.
10. STOS smoke-test definitions.
11. STOS rollback/ledger schema.
12. `STOS_CHO_KENH_RELEASE_ARTIFACT_SEPARATION_PROMPT.md` de doi chieu contract tach artifact.
13. `stos-product-ux` skill.
14. `qa-check-agent` skill.

Khong tin memory cu hon source/config hien tai.
Khong tin mot message PASS neu khong co command, exit code va artifact/evidence.

## 4. Truth-first architecture preflight

Truoc QA va truoc deploy, tu source hien tai hay xac minh:

- workspace root hien tai;
- Git repository root;
- current branch va HEAD;
- dirty/clean status;
- STOS canonical app root;
- STOS package name;
- STOS build command;
- STOS release command;
- STOS Vercel project binding;
- STOS production alias/domain;
- STOS product release registry entry;
- STOS lock key/path;
- STOS ledger root;
- STOS artifact root;
- STOS rollback lookup mechanism;
- forbidden Cho Kenh routes/modules list.

Khong hardcode project ID, token, secret, deployment ID hoac alias neu registry/config
da co canonical source. Redact secret trong log va report.

## 5. Independent deployment availability gate

STOS independent deployment chi AVAILABLE khi tat ca invariant sau dung:

```text
STOS_APP_ROOT_EXISTS=true
STOS_VERCEL_PROJECT_EXISTS=true
STOS_RELEASE_REGISTRY_ENTRY_EXISTS=true
STOS_RELEASE_COMMAND_EXISTS=true
STOS_PRODUCT_LOCK_EXISTS=true
STOS_LEDGER_ROOT_IS_PRODUCT_SCOPED=true
STOS_ROLLBACK_TARGET_IS_PRODUCT_SCOPED=true
STOS_ARTIFACT_ISOLATION_GATE_EXISTS=true
```

Canonical app root co the la `apps/stos-web` hoac root khac duoc registry khai bao,
nhung phai la app root doc lap thuc su. Chi dat env `PRODUCT_SCOPE=stos` tren cung
mot Next build khong duoc tinh la tach artifact.

Canonical release command nen la mot trong cac contract:

```text
npm run release:stos:deploy
node tooling/release/product-release-train.mjs --product stos --deploy
```

Khong doan command. Phai doc `package.json` va registry de chon command ton tai.

### 5.1 Missing separation behavior

Neu bat ky invariant nao thieu:

1. Khong chay legacy combined release train.
2. Khong deploy root artifact.
3. Khong goi Vercel deployment truc tiep de bypass release train.
4. Khong sua Cho Kenh de lam STOS deploy duoc.
5. Khong danh dau STOS product goal la hard blocked.
6. Ghi state:

```text
Product: ACTIVE
Deployment slice: AWAITING_RELEASE_SEPARATION
Release: STOS_INDEPENDENT_DEPLOY_NOT_AVAILABLE
Reason: <exact missing invariants>
```

7. Hoan tat moi preparation khong mutate production:
   - source inventory;
   - changed-file classification;
   - STOS QA packet;
   - artifact forbidden-edge inventory;
   - environment readiness check;
   - rollback discovery;
   - exact command plan.
8. Tra ve root cause va tro den prompt separation canonical.
9. Khong tuyen bo da deploy.

Day la infrastructure readiness state, khong phai product-code failure.
Khong poll vo han va khong lap lai cung mot message ba lan.

## 6. Product boundary

STOS owns:

- STOS application root;
- STOS routes;
- STOS APIs;
- STOS domain modules;
- STOS styles/assets;
- STOS tests;
- STOS build output;
- STOS Vercel project;
- STOS alias/domain;
- STOS runtime env;
- STOS release lock;
- STOS release ledger;
- STOS rollback target;
- STOS monitoring and smoke checks.

STOS public/workspace route set can include:

```text
/stos
/stos/page
/stos/templates
/stos/studio
/stos/customers
/stos/insights
/stos/settings
/u/*
```

Route list phai duoc xac nhan tu source/manifest hien tai, khong chi dua vao list nay.

STOS does not own:

- `/cho-kenh`;
- `/tiktok-channel-starter`;
- Cho Kenh APIs;
- `src/channel-marketplace` hoac domain package tuong duong;
- Cho Kenh Vercel project/alias;
- Cho Kenh lock/ledger/rollback;
- Company Site routes/project/release lane.

Khong edit, format, move, delete hoac regenerate foreign product source.

## 7. Source stewardship

Repository co the dirty. Khong revert thay doi khong do task nay tao.

Truoc khi sua:

1. Capture `git status --short`.
2. Capture current HEAD.
3. Classify changed files:
   - STOS-owned;
   - shared dependency consumed by STOS;
   - Cho Kenh-owned;
   - Company Site-owned;
   - generated/runtime evidence;
   - unknown.
4. Xac minh exact-path ownership/lease neu control plane co ownership registry.
5. Chi sua STOS-owned file hoac shared file co lease hop le.
6. Khong stage/commit unrelated user changes neu khong duoc yeu cau.

Dirty repo tu no khong phai ly do FAIL.
Release snapshot phai xac dinh chinh xac file nao vao STOS artifact.

## 8. Shared dependency impact

Shared package chi anh huong STOS khi dependency graph chinh minh STOS import/consume no.

Neu STOS candidate thay doi shared package:

1. Xac dinh exact shared package/path.
2. Xac dinh STOS transitive dependency closure.
3. Lay shared lease neu can.
4. Chay shared contract tests.
5. Chay STOS consumer tests.
6. Chi chay foreign consumer tests neu package graph chinh minh foreign product bi tac dong.

Khong bien mot generic shared-file hash drift thanh repo-wide release freeze.
Khong cho Cho Kenh QA verdict tro thanh STOS verdict.

## 9. Foreign process and lock policy

Mot Cho Kenh process/lock khong block STOS release neu no khong so huu:

- cung exact source path;
- cung shared package dependency dang thay doi;
- cung STOS artifact directory;
- cung STOS Vercel project;
- cung STOS alias;
- cung STOS release lock;
- cung product-scoped runtime port.

Khi gap foreign process:

1. Inspect PID, parent chain, command, creation time va owner metadata.
2. Inspect lock payload, resource key, product, phase va heartbeat.
3. Prove resource overlap bang du lieu.
4. Neu khong overlap, tiep tuc STOS lane.
5. Neu overlap tam thoi, dat:

```text
Current slice: WAITING_FOR_STOS_RELEASE_WINDOW
Product goal: ACTIVE
```

6. Subscribe/recheck theo owner event hoac bounded backoff.
7. Trong khi cho, tiep tuc QA/evidence khong can resource do.
8. Resume ngay khi resource duoc release.

Khong kill foreign process.
Khong delete foreign lock.
Khong bypass lock bang lock name moi.
Khong goi temporary contention la hard blocker.

## 10. Environment and identity preflight

Xac minh khong in secret:

- Node va npm version dung contract;
- dependencies installed dung lockfile;
- Git identity/repository access neu release train can;
- Vercel CLI/runtime dependency ma release train can;
- Vercel authentication con hop le;
- linked project la STOS project;
- deployment target account/team dung;
- STOS production alias/domain dung;
- required STOS env names ton tai trong target environment;
- database/storage provider reachable;
- previous known-good STOS deployment ton tai;
- rollback mechanism co the dung duoc.

Khong print token, credential value, connection string hoac private project ID.

Neu authentication het han:

1. Phan loai `AUTH_REQUIRED`.
2. Hoan tat local QA/preparation co the lam an toan.
3. Chi yeu cau user interactive login o buoc khong the thay the.
4. Sau login, resume tu gate do; khong rerun vo ich toan bo flow.

## 11. Release candidate source freeze

Source freeze chi dong bang STOS release candidate, khong dong bang repository.

Tao candidate manifest gom:

- Git HEAD;
- dirty STOS file list;
- content hashes;
- shared dependencies and hashes;
- lockfile hash;
- app root;
- build command;
- environment schema hash;
- expected route manifest;
- forbidden route/module list;
- QA evidence IDs;
- timestamp.

Sau freeze:

- STOS candidate file thay doi => invalidate affected evidence va rebuild.
- Unrelated Cho Kenh file thay doi => khong invalidate STOS candidate.
- Shared dependency STOS consume thay doi => invalidate affected STOS evidence.
- Evidence/log file thay doi => khong invalidate source snapshot.

Khong dung repository-wide quiet window neu product-scoped snapshot da chinh minh
STOS artifact closure doc lap.

## 12. Root-cause repair loop

Voi moi STOS QA failure:

1. Capture failing command, route, viewport, role, state, expected va actual.
2. Reproduce bang smallest deterministic check.
3. Truy root cause qua source, styles, API, data, auth, env hoac build graph.
4. Xac dinh invariant thuc su, khong patch theo mot breakpoint/test case hep.
5. Sua smallest correct ownership scope.
6. Chay focused retest.
7. Chay adjacent regression tests.
8. Chay lai gate da fail.
9. Cap nhat source snapshot/evidence.
10. Tiep tuc den gate ke tiep.

Khong chi report bug neu co the sua trong STOS ownership.
Khong them timeout/retry de che deterministic bug.
Khong bo test, skip assertion, fake fixture hoac hardcode expected value.
Khong dung `!important` hay breakpoint patch neu root cause la component invariant.

## 13. STOS static and contract QA

Chay tu canonical workspace/app root theo package scripts ton tai.

Minimum current STOS gates:

```text
npm run qa:stos:ux-hooks
npm run qa:stos-workspace
npm run qa:stos-cms
npm run qa:stos-data
npm run qa:stos-public
npm run qa:stos-mobile-interactions
npm run typecheck
```

Neu monorepo moi cung cap product-scoped wrapper, dung wrapper STOS tuong duong.
Khong chay broad `qa:predeploy` mac dinh neu no gom Cho Kenh/Company Site.

Chi bat `BROAD_QA=1` khi:

- shared dependency graph chinh minh nhieu product bi tac dong; hoac
- release registry danh dau mot integration contract bat buoc.

Broad QA failure cua foreign product duoc ghi rieng, khong tu dong huy STOS release,
tru khi no chinh minh shared contract ma STOS dang consume bi hong.

## 14. STOS product behavior QA

Xac minh cac luong cot loi:

1. Create/sign in account theo supported auth flow.
2. Open STOS workspace.
3. Chon template.
4. Upload/chon avatar va media.
5. Them/sua/xoa/sap xep social links.
6. Them/sua/xoa/sap xep product/service blocks.
7. Preview draft.
8. Publish.
9. Open public `/u/*` page.
10. Copy/share public URL.
11. Reload va xac minh persistence.
12. Edit published content va republish.
13. Xac minh draft/published state separation.
14. Xac minh customers va insights la hai domain/nghia rieng.
15. Xac minh settings, logout va session lifecycle.

Moi success toast/message phai duoc doi chieu voi persistence/read-back that.

## 15. Auth, privacy and tenant safety

Xac minh toi thieu:

- unauthenticated user khong vao private workspace;
- authenticated tenant A khong doc/ghi tenant B;
- public page chi expose published-safe data;
- draft/private/customer data khong leak qua public API/page/source;
- server-side authorization ton tai, khong chi UI guard;
- ID tampering khong cross-tenant;
- expired/revoked session bi xu ly dung;
- upload/file access dung tenant va visibility;
- secret chi o server boundary;
- error message khong leak token, SQL, stack hoac PII;
- analytics/customer events dung consent va data-minimization contract.

Bat ky cross-tenant write/read, secret exposure hoac public draft leak la P0 hard stop.

## 16. Browser and responsive QA

Chay browser QA that tren tat ca viewport trong mot matrix, khong dung suy luan CSS:

```text
320x568
360x800
390x844
430x932
768x1024
1280x800
1440x900
```

Tai moi viewport xac minh:

- no horizontal overflow;
- nav/action khong overlap;
- text khong bi cat hoac occlude;
- control min target 44x44 khi touch/actionable;
- modal/drawer/popover nam trong viewport;
- keyboard focus visible;
- tab order hop ly;
- icon co accessible name/tooltip khi can;
- loading/empty/error/success states ro rang;
- media khong lam layout shift nghiem trong;
- animation muot, co muc dich va ton trong reduced motion;
- color contrast du dung;
- template preview khop public output;
- workspace controls khong mat o breakpoint bien;
- public page dung tren mobile/desktop.

Chup evidence cho:

- workspace main flow;
- template selection;
- studio/editor;
- customers;
- insights;
- settings;
- public page;
- mot error state;
- mot empty state;
- mot published state.

Neu browser gate fail o mot viewport, xac dinh invariant tren toan matrix,
sua root cause va rerun toan matrix lien quan trong cung lan.

## 17. Accessibility gate

Xac minh:

- semantic headings/landmarks;
- labels cho input;
- button/link semantics;
- keyboard-only completion cua main flow;
- focus management trong modal/drawer;
- visible focus;
- accessible errors;
- contrast;
- reduced motion;
- screen-reader-safe status updates;
- no keyboard trap.

Critical inaccessible publish/auth flow la release stop cho den khi sua xong.

## 18. Performance and resilience gate

Do tren production-like build cua STOS:

- build size va route chunks;
- accidental cross-product bundle imports;
- critical route response;
- image/media optimization;
- caching correctness;
- API timeout/error handling;
- loading skeleton/layout stability;
- retry idempotency cho mutation;
- no duplicate publish/save;
- no unbounded client polling;
- no obvious memory/listener leak trong editor.

Khong dat tuy chon performance score tuy tien de fake pass.
So sanh voi baseline/release budget duoc repo khai bao.

## 19. STOS artifact isolation gate

Build STOS production artifact bang canonical STOS build command.

Inspect route manifest, server chunks, client chunks, trace files va static assets.

Artifact phai chua expected STOS routes.

Artifact phai FAIL neu chua bat ky foreign signature nao:

```text
/cho-kenh
/tiktok-channel-starter
Cho Kenh API route family
channel-marketplace domain modules
Cho Kenh-only environment keys
Cho Kenh-only branding/assets
Company Site implementation routes not explicitly shared
```

Khong chi grep filename. Dung structured route manifests va import/build traces
khi toolchain cung cap.

Record:

- artifact hash;
- route count;
- expected STOS routes;
- forbidden route count = 0;
- forbidden module/import count = 0;
- project/build identity.

## 20. Production build gate

Build phai dung STOS app root va output directory product-scoped.

Build gate PASS khi:

- exit code 0;
- no type error;
- no missing required STOS env schema;
- no route collision;
- no forbidden cross-product import;
- no unexpected static generation/data error;
- output artifact isolation PASS;
- source snapshot hash khong drift.

Khong dung root `.next` neu no la shared artifact cua legacy app.
Khong dung artifact do foreign process tao lam STOS release evidence.

## 21. Release readiness decision

Truoc production mutation, tao decision packet:

```text
PRODUCT_SCOPE=stos
INDEPENDENT_PIPELINE=PASS
SOURCE_SNAPSHOT=PASS
STATIC_QA=PASS
STOS_CONTRACT_QA=PASS
DATA_AUTH_PRIVACY=PASS
BROWSER_MATRIX=PASS
ACCESSIBILITY=PASS
PRODUCTION_BUILD=PASS
ARTIFACT_ISOLATION=PASS
ENVIRONMENT_READINESS=PASS
ROLLBACK_TARGET=READY
RELEASE_DECISION=GO
```

Bat ky field nao FAIL thi `RELEASE_DECISION=NO_GO` va chay root-cause repair loop.
Field WAITING chi wait resource cu the; no khong doi product goal thanh blocked.

## 22. Production deployment

Chi khi `RELEASE_DECISION=GO`:

1. Revalidate STOS source snapshot.
2. Acquire STOS product release lock.
3. Revalidate project/account/alias identity.
4. Resolve previous known-good STOS deployment.
5. Chay canonical STOS release command tu registry/package scripts.
6. Deploy immutable STOS artifact den STOS Vercel project.
7. Khong promote alias neu release train chua qua inspect va immutable smoke.
8. Ghi release ID va deployment identity ngay khi co.

Allowed command shape:

```text
$env:PRODUCT_SCOPE='stos'
$env:DEPLOY_INTENT='1'
$env:RELEASE_INTENT='1'
$env:NO_DEPLOY='0'
npm run release:stos:deploy
```

Hoac parameterized command canonical ma registry khai bao:

```text
$env:PRODUCT_SCOPE='stos'
$env:DEPLOY_INTENT='1'
$env:RELEASE_INTENT='1'
$env:NO_DEPLOY='0'
node tooling/release/product-release-train.mjs --product stos --deploy
```

Khong goi legacy `release:train:deploy` neu no build root combined artifact.
Khong goi hosting CLI truc tiep de bo qua release train.
Khong deploy bang dashboard thu cong trong khi task dang chay.

## 23. Immutable deployment verification

Truoc alias promotion:

1. Inspect deployment state = READY/approved equivalent.
2. Verify deployment belongs to STOS project/team.
3. Verify source snapshot/artifact identity.
4. Verify immutable URL is not Cho Kenh/Company Site project.
5. Run STOS immutable smoke.
6. Verify forbidden foreign routes return expected 404/redirect, not foreign app content.
7. Verify auth callback/redirect target dung STOS environment.
8. Verify public `/u/*` rendering.
9. Verify critical API health without destructive mutation.
10. Verify no secret/PII in response/log evidence.

Immutable smoke minimum:

```text
GET STOS entry -> expected success/redirect
GET STOS workspace unauthenticated -> expected auth behavior
GET one known published /u/* -> expected published content
GET one STOS public API health/read path -> expected contract
GET /cho-kenh -> expected not-owned behavior
GET /tiktok-channel-starter -> expected not-owned behavior
```

Khong promote alias neu bat ky check nao fail.

## 24. Alias promotion

Chi promote STOS production alias den immutable deployment ID da PASS.

Sau promotion:

1. Resolve alias va verify deployment ID dung.
2. Verify TLS/host/redirect canonical.
3. Verify no stale alias points to combined/foreign project.
4. Record previous va new deployment IDs.
5. Record promotion timestamp.

Khong mutate Cho Kenh alias.
Khong mutate Company Site alias.

## 25. Post-deploy production verification

Chay tren STOS production URL/alias vua promote, khong dung local/preview cu.

Smoke all critical paths:

- STOS entry;
- auth boundary;
- workspace shell;
- template list;
- studio/editor read path;
- customers read path;
- insights read path;
- settings read path;
- public `/u/*` page;
- static assets/media;
- required STOS APIs;
- not-owned behavior cho foreign routes.

Chay responsive spot-check tren:

```text
360x800
390x844
768x1024
1280x800
```

Neu co safe synthetic tenant/fixture duoc repo quy dinh, verify save/publish/read-back.
Khong mutate customer production data de test.

## 26. Failure and rollback

Neu immutable deploy fail truoc promotion:

- khong doi alias;
- capture deployment logs/evidence;
- fix root cause;
- tao candidate/artifact moi;
- rerun affected gates;
- redeploy immutable candidate moi.

Neu post-promotion smoke fail:

1. Stop further promotion/mutation.
2. Classify severity and blast radius.
3. Roll back only STOS alias bang approved product release mechanism.
4. Verify alias tro ve previous known-good STOS deployment ID.
5. Run rollback smoke.
6. Preserve failed deployment and evidence for RCA.
7. Fix root cause tren source.
8. Rerun full affected STOS release gates.

Khong deploy them de che mot deployment fail.
Khong rollback Cho Kenh/Company Site.
Khong rollback database destructively.

## 27. Hard stops

Chi coi la hard stop khi co mot trong cac dieu sau va khong the tu sua an toan:

- STOS independent pipeline/artifact chua ton tai;
- khong xac dinh duoc STOS project/alias duy nhat;
- required production credential can interactive owner action;
- P0 security/privacy/tenant isolation failure;
- destructive migration khong co backup/rollback;
- no known-good rollback target trong khi policy bat buoc;
- external provider outage duoc xac minh;
- exact same resource conflict khong the reconcile an toan.

Ngay ca khi gap hard stop:

- product goal van duoc mo hinh hoa rieng voi deployment slice;
- cung cap exact root cause va exact owner action;
- hoan tat moi evidence/preparation an toan;
- khong lap message blocker;
- khong fake deployment.

## 28. Goal and slice state model

Su dung cac state rieng:

```text
ProductGoal: ACTIVE | COMPLETE
Source: OPEN | FROZEN | WAITING_FOR_EXACT_PATH
QA: RUNNING | FIXING | PASS | FAIL
Build: PENDING | RUNNING | PASS | FAIL
Release: PENDING | WAITING_FOR_STOS_WINDOW | DEPLOYING | VERIFYING | PASS | FAIL
Infrastructure: READY | AWAITING_RELEASE_SEPARATION | AUTH_REQUIRED | PROVIDER_OUTAGE
```

Khong gom cac state nay thanh mot chu `blocked`.
Khong ap dung quy tac "poll ba lan roi block master goal" cho contention tam thoi.
Event/lease grant phai resume slice ngay lap tuc.

## 29. Evidence ledger

Ghi STOS ledger vao product-scoped root, vi du:

```text
agent-system/reports/release-ledger/stos/<release-id>/release-ledger.json
```

Ledger toi thieu gom:

- product = stos;
- release ID;
- app root;
- Git HEAD;
- source snapshot hash;
- dirty included files and hashes;
- shared dependency hashes;
- STOS project safe identifier;
- production alias;
- previous deployment ID;
- immutable deployment ID and URL;
- promoted alias deployment ID;
- artifact hash;
- route manifest hash;
- forbidden route/module result;
- QA commands and exit codes;
- browser matrix evidence paths;
- immutable smoke result;
- post-deploy smoke result;
- rollback target and status;
- timestamps;
- residual risks.

Ledger khong duoc tro den Cho Kenh project, alias, lock hoac deployment.

## 30. Final output contract

Neu deploy thanh cong, tra ve:

```markdown
# STOS Production Redeploy: PASS

## Scope
- Product: STOS
- App root: ...
- Source snapshot: ...
- Artifact isolation: PASS

## QA
- Static/typecheck: PASS
- STOS contract/data/auth: PASS
- Browser matrix: PASS
- Production build: PASS

## Deployment
- STOS project: <safe identifier>
- Immutable deployment: <id/url>
- Production URL: <url>
- Alias deployment ID: <id>
- Release ledger: <path>

## Rollback
- Previous known-good deployment: <id>
- Rollback mechanism: READY

## Isolation proof
- Cho Kenh routes in artifact: 0
- Cho Kenh modules in artifact: 0
- Foreign production mutations: 0

## Root-cause fixes
- <only fixes actually made>

## Remaining risk
- <real residual risk or none>
```

Neu independent pipeline chua san sang, tra ve:

```markdown
# STOS Redeploy: STOS_INDEPENDENT_DEPLOY_NOT_AVAILABLE

## State
- Product: ACTIVE
- Deployment slice: AWAITING_RELEASE_SEPARATION
- Production mutation: NOT STARTED

## Missing invariants
- <exact missing item with evidence>

## Completed preparation
- <QA/evidence actually completed>

## Required root fix
- Execute/finish `STOS_CHO_KENH_RELEASE_ARTIFACT_SEPARATION_PROMPT.md`.
- Re-run this prompt after independent STOS project/lane cutover.

## Safety proof
- Legacy combined release train used: NO
- Cho Kenh production changed: NO
- Company Site production changed: NO
```

## 31. Forbidden shortcuts

Never:

- call a combined artifact an STOS artifact;
- deploy root legacy app as STOS;
- bypass QA or artifact isolation;
- use foreign QA PASS as STOS evidence;
- use a foreign build artifact;
- kill foreign process;
- delete foreign lock;
- mutate production customer data for smoke testing;
- expose secrets in output;
- edit Cho Kenh/Company Site source;
- promote alias before immutable smoke;
- skip rollback verification;
- claim PASS from exit code alone;
- claim production deployed without deployment and alias evidence.

## 32. Execute now

Bat dau ngay theo thu tu:

1. Load instructions/skills/release contracts.
2. Audit architecture and independent deployment availability.
3. Neu unavailable, complete safe preparation and return exact separation gap.
4. Neu available, capture STOS source candidate.
5. Run STOS QA and root-cause repair loop.
6. Run browser/responsive matrix.
7. Build and inspect isolated artifact.
8. Produce GO/NO_GO release decision.
9. Deploy immutable STOS artifact through canonical STOS release train.
10. Run immutable smoke.
11. Promote only STOS alias.
12. Run production smoke.
13. Verify rollback target and write STOS ledger.
14. Return final result using the contract above.

Khong dung lai o report-only neu loi nam trong STOS ownership va co the sua an toan.
Khong deploy combined artifact de dat muc tieu nhanh hon.
