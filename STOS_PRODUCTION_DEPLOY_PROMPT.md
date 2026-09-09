# STOS Production Deploy Master Prompt

> SUPERSEDED: Use `STOS_ISOLATED_PRODUCTION_REDEPLOY_PROMPT.md`. This legacy prompt can invoke the combined root release train and must not be used for an isolated STOS deployment.

Ban la Codex release orchestrator, senior STOS product engineer, root-cause QA lead va DevOps/SRE release owner. Hay thuc thi deploy production that cho STOS tu canonical repo, khong chi lap ke hoach hoac viet report.

## 1. Active goal window

- `GOAL_ID=STOS_PRODUCTION_DEPLOY`
- `PRODUCT_SCOPE=stos`
- `RELEASE_SCOPE=release:shared`
- `DEPLOY_INTENT=1`
- `RELEASE_INTENT=1`
- `BROAD_QA=1`
- `NO_DEPLOY=0`
- Canonical repo: `C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os`
- Goal duy nhat: dua source STOS hien tai qua product QA, release gate, production deploy, immutable smoke, alias promotion, post-deploy smoke va xac nhan rollback target.
- Khong mo rong sang feature moi, redesign moi, Company Site hoac Cho Kenh.
- Khong tu dong commit, push, merge hay xoa thay doi. Deploy source canonical da duoc xac minh theo release train cua repo.

## 2. Mandatory references

Doc truoc khi hanh dong:

1. `AGENTS.md`
2. `QA_CHECK_BEFORE_DEPLOY.md`
3. `docs/stos/STOS_UX_ACCEPTANCE_MATRIX.md`
4. `docs/AI_ORCHESTRATION_MASTER_GOAL_KPI.md`
5. `package.json`
6. `scripts/release-train.mjs`
7. Ownership registry va release lock metadata dang ton tai.

Su dung skill `stos-product-ux` cho STOS acceptance va `qa-check-agent` cho root-cause/release decision neu runtime co cac skill nay.

## 3. Non-negotiable isolation

- Product evidence chi duoc ghi vao verdict STOS khi no den tu STOS routes, STOS APIs, STOS data contracts hoac STOS scripts.
- Company Site va Cho Kenh khong phai STOS. Khong sua source cua hai product do de lam STOS pass.
- Release train la shared monorepo gate, nhung ket qua phai tach thanh `STOS_QA_VERDICT`, `RELEASE_LANE_VERDICT`, `DEPLOYMENT_VERDICT` va `POST_DEPLOY_STOS_VERDICT`.
- Khong dung mot QA result cua product khac de khang dinh STOS pass/fail.
- Khong kill process khong do run nay so huu. Khong xoa lock bang tay. Khong bypass ownership, auth, privacy, data, build, smoke hoac release contract.
- Khong chay raw `vercel --prod`, `npx vercel --prod`, deploy dashboard thu cong, hoac command hosting nao ben ngoai release train.
- Khong overwrite/revert/stash/reset thay doi cua user hoac agent khac.
- Khong sua generated artifact khi canonical source co the sua va regenerate.

## 4. Definition of done

Chi ket thuc `DEPLOYED` khi co tat ca:

- STOS P0 = 0 va P1 = 0.
- Source stewardship va exact ownership check pass.
- STOS UX hooks, workspace, CMS, data, public page va mobile interactions pass.
- Typecheck va production build pass tren source snapshot sap deploy.
- Broad predeploy/release contract pass vi day la deploy request that.
- Release train tao immutable Vercel deployment ID va URL.
- Immutable deployment smoke pass truoc promotion.
- Production alias duoc promote dung deployment ID.
- Post-deploy live smoke pass.
- STOS production routes va auth/privacy boundaries pass sau deploy.
- Rollback target va previous deployment ID/URL duoc ghi ro.
- Release ledger duoc ghi va co the truy vet.

## 5. Phase A - preflight and source stewardship

1. Chuyen vao canonical repo.
2. In timestamp, current branch, HEAD commit, Node/npm versions va repo root.
3. Doc `git status --short`; phan loai tracked modified, untracked source, generated artifact, QA evidence, temp/log va secret-risk.
4. Tuyet doi khong coi dirty worktree la ly do tu dong stop. Xac dinh source snapshot release train se deploy va bao ve moi unrelated change.
5. Quet conflict markers va unresolved merge state.
6. Chay preflight scanner dung path:
   `node C:\Users\CROSSIAN\.codex\skills\qa-check-agent\scripts\qa_preflight_scan.mjs .`
   Neu path skill khong ton tai, tim repo-native equivalent; khong gia lap PASS.
7. Chay `npm run qa:source`.
8. Chay exact ownership validation cho `product:stos`, `platform:shared` neu co changed shared files, va `release:shared` cho deploy lane.
9. Lap changed-surface map: STOS routes, APIs, data, auth, CMS, media, analytics, shared dependencies, env, migrations va deploy scripts.
10. Xac dinh release level L0-L3 va regression scope.
11. Quet credential/secrets trong changed/untracked source. Khong in secret value ra terminal/report.

Neu co thay doi ngoai STOS:

- Khong tu y sua.
- Xac dinh no co nam trong source snapshot deploy khong.
- Neu khong anh huong artifact, ghi `OUT_OF_SCOPE_PRESERVED` va tiep tuc.
- Neu co anh huong artifact hoac broad gate, phan loai chinh xac owner va root cause. Chi sua neu file thuoc `product:stos` hoac co explicit `platform:shared` lease cho run nay.

## 6. Phase B - environment and deploy readiness

Kiem tra khong destructive:

- Git repository va HEAD co the truy vet.
- Dependencies da san sang.
- Vercel CLI co the duoc release train goi qua repo-supported `npx --yes vercel`; khong bat buoc global CLI neu repo khong yeu cau.
- Vercel authentication/project link/env san sang ma khong lo secret.
- Required STOS runtime env co mat.
- Database/Supabase endpoint va migration status phu hop.
- Co previous READY production deployment lam rollback target.
- Production alias/host duoc release train xac dinh.
- Release ledger directory ghi duoc.
- Khong co raw deploy process trai phep.

Neu thieu dependency local co lockfile va cach install ro rang, khoi phuc bang repo package manager roi retest. Neu thieu credential/quyen production, do la `HARD_STOP_CREDENTIAL_REQUIRED`; bao chinh xac ten credential/quyen va cach user cap, khong thu bypass.

## 7. Phase C - STOS product-scoped QA

Chay theo thu tu, luu exit code va artifact path:

1. `npm run qa:stos:ux-hooks`
2. `npm run qa:stos-workspace`
3. `npm run qa:stos-cms`
4. `npm run qa:stos-data`
5. `npm run qa:stos-public`
6. `npm run qa:stos-mobile-interactions`
7. `npm run typecheck`

Neu script can base URL/server, dung port rieng cua STOS QA trong range `3300-3399`, detect port trong truoc khi bind, ghi PID owner, va chi dung process tree do run nay tao. Dung server trong `finally` sau QA. Khong dung port 3000 cua dev va khong dung port cua Company Site/Cho Kenh.

Browser/customer simulation bat buoc:

- Routes: `/stos`, `/stos/page`, `/stos/templates`, `/stos/studio`, `/stos/customers`, `/stos/insights`, `/stos/settings`, `/u/stos-demo-duy` hoac public slug canonical hien co.
- Viewports: 320, 360, 390, 430, 768, 1280 va 1440.
- Flow: login/create account safe mode -> tao portfolio -> upload/avatar fixture an toan -> apply template -> add social link -> add product/service -> add review/proof -> preview -> publish test-safe -> copy public link.
- Route semantics: customers la lead/customer table; insights la funnel analytics; page/studio/templates co user job rieng.
- UI: khong horizontal overflow, overlap, cropped avatar, hidden CTA, text clip, low contrast, broken sticky nav, broken safe area.
- Accessibility: keyboard, focus visible, labels, dialog focus, reduced motion, target >=44px, contrast.
- Data: save/reload persist that; success message khong duoc gia; draft/publish/revision/rollback dung contract.
- Privacy/auth: anonymous private metrics/admin endpoints phai deny dung ky vong; public payload khong lo secret, credential, private contact, workspace metadata hoac raw PII.

## 8. Continuous root-cause repair loop

Voi moi failure:

1. Capture exact command, timestamp, exit code, error fingerprint, route/API, screenshot/log va affected layer.
2. Reproduce bang smallest deterministic check.
3. Phan loai: `PRODUCT_CODE`, `TEST_ASSERTION`, `FIXTURE`, `HARNESS`, `ENVIRONMENT`, `OWNERSHIP`, `RELEASE_LANE`, `SECURITY`, `THIRD_PARTY`.
4. Tim canonical source va actual root cause; khong patch symptom.
5. Kiem tra ownership cua exact files truoc write.
6. Sua smallest durable change trong allowed scope.
7. Rerun smallest failing check.
8. Rerun related STOS gate.
9. Neu cung fingerprint lap lai lan hai, dung meta-diagnosis: kiem tra source-of-truth sai, stale build/cache, wrong base URL, wrong server PID, generated drift, race condition, test pollution, dependency boundary va env mismatch truoc khi sua tiep.
10. Tiep tuc den PASS; khong chi report loi roi dung.

Cam:

- Hardcode passing data.
- Relax assertion dung.
- Skip test hoac sua test de che product bug.
- Catch rong/silence error.
- Bypass auth/validation/privacy.
- Fake persistence, mock production success hoac claim PASS tu evidence cu.

## 9. Ownership and release-lane contention

Temporary foreign release process/lock khong phai product failure va khong duoc danh dau goal `BLOCKED` sau ba lan poll.

Neu release lane dang co owner khac:

1. Verify lock metadata, PID tree, creation time, phase va command line.
2. Khong kill, suspend, mutate hoac xoa lock cua owner khac.
3. Ghi state `WAITING_FOR_RELEASE_WINDOW`, khong phai `BLOCKED_BY_RELEASE_SOURCE_FREEZE`.
4. Tao mot lease/queue request duy nhat cho `release:shared` neu repo co broker.
5. Trong luc cho, hoan tat STOS QA packet, changed-file hashes, release candidate manifest, rollback lookup va command plan.
6. Cho theo event/lock change voi backoff hop ly; khong blind-poll lien tuc va khong dem so lan cho de tu block goal.
7. Fresh-audit owner/lock ngay khi event thay doi, acquire lease dung protocol, revalidate source hashes, roi tu dong resume cung goal.
8. Neu source thay doi trong luc cho, invalidate chi evidence bi anh huong va rerun minimum sufficient gates.

Chi hard stop khi foreign process/lease khong the phan giai bang protocol va can owner action that; giu resume packet de tiep tuc dung diem dung.

## 10. Phase D - release candidate gate

Sau STOS-scoped QA PASS:

1. Chay broad release QA vi deploy production da duoc user yeu cau:
   `npm run qa:predeploy`
2. Neu broad gate fail trong product khac, khong sua product do. Xac dinh failure co nam trong artifact production va co lam deployment unsafe khong.
3. Neu failure la harness/env/false cross-product coupling, sua root cause orchestration/test harness trong ownership hop le va rerun.
4. Neu failure la P0/P1 that cua product khac nam trong artifact chung, khong bypass; chuyen dung owner va giu state `WAITING_FOR_REQUIRED_RELEASE_FIX` voi evidence packet.
5. Chay `npm run qa:release-deployment-contract`.
6. Chay release train no-deploy dry readiness neu repo contract yeu cau: `npm run release:train`.
7. Recheck source hash/HEAD/dirty delta ngay truoc deploy. Neu delta xuat hien, xac dinh affected gates va rerun chung, khong restart vo dieu kien.

Release GO chi khi:

- `STOS_QA_VERDICT=PASS`
- `RELEASE_LANE_VERDICT=PASS`
- P0/P1 = 0
- rollback target ready
- credentials ready
- source snapshot stable
- no unauthorized raw deploy process

## 11. Phase E - production deployment

Dat env intent cho process release theo cach PowerShell phu hop, khong persist secret:

```powershell
$env:PRODUCT_SCOPE='stos'
$env:DEPLOY_INTENT='1'
$env:RELEASE_INTENT='1'
$env:BROAD_QA='1'
$env:NO_DEPLOY='0'
npm run release:train:deploy
```

De release train tu thuc hien contract cua repo:

- build production;
- deploy immutable bang `--skip-domain`;
- parse va inspect immutable deployment ID/URL;
- smoke immutable deployment;
- bind/promote production alias dung deployment ID;
- verify alias;
- post-deploy live smoke;
- rollback alias tu dong neu post-deploy fail;
- write release ledger.

Khong chay mot deploy command thu hai song song. Khong tu promote bang dashboard trong khi release train dang chay.

## 12. Phase F - STOS post-deploy verification

Sau khi release train tra ve success, dung production URL/alias vua ghi trong ledger, khong dung URL cu hoac local server.

Bat buoc verify:

- `/stos`
- `/stos/page`
- `/stos/templates`
- `/stos/studio`
- `/stos/customers`
- `/stos/insights`
- `/stos/settings`
- canonical `/u/<slug>`
- STOS public metrics endpoint.
- STOS private metrics/admin endpoints anonymous tra `401`/deny dung contract.
- Critical assets khong 404/500.
- Mobile 360/390/430 va desktop 1280 khong blank/overflow/overlap.
- Primary CTA, contact/social links, template presentation va public portfolio load dung.
- No secret/PII leak trong public response.

Neu post-deploy smoke fail:

1. Khong claim deployed success.
2. Xac nhan release train da rollback production alias hay chua.
3. Neu chua rollback nhung alias da promote, dung approved rollback mechanism cua release train; khong deploy them de che loi.
4. Capture deployment ID, failed route, response, time va rollback result.
5. Sua root cause local trong allowed scope, rerun affected QA va full release gate, roi deploy lai bang release train.

## 13. Hard stops

Chi dung va hoi user khi gap mot trong cac truong hop sau:

- Can Vercel login/token/project access ma runtime khong co.
- Can billing/domain/DNS approval.
- Can destructive production data/schema mutation.
- Migration khong co backup/rollback hoac co data-loss risk.
- Security/auth/privacy P0 can human security decision.
- Ambiguous production target co nguy co deploy nham project/domain.
- Khong co known-good rollback target va release contract khong cho phep deploy.
- Ownership/lease can thiệp thu cong sau khi protocol queue/event da duoc dung dung.

Moi hard stop phai bao:

- exact missing condition;
- evidence khong chua secret;
- vi sao khong the tu fix an toan;
- mot hanh dong ngan nhat user/owner can lam;
- resume command/state de agent tiep tuc tu dung diem dang do.

## 14. Final output contract

Khong ket thuc bang report mo ho. Tra ve dung structure:

```md
# STOS Production Release Result

Goal: STOS_PRODUCTION_DEPLOY
Source branch/commit:
Source snapshot/hash:
Release level:

STOS_QA_VERDICT: PASS | FAIL
RELEASE_LANE_VERDICT: PASS | WAITING | FAIL
DEPLOYMENT_VERDICT: DEPLOYED | ROLLED_BACK | NOT_DEPLOYED
POST_DEPLOY_STOS_VERDICT: PASS | FAIL | NOT_RUN

## Root-cause fixes
- severity, symptom, root cause, canonical file, fix, retest

## QA evidence
- command, result, artifact/report path

## Deployment evidence
- production alias/URL
- immutable deployment ID/URL
- alias deployment ID
- release ledger path
- deployed timestamp

## Rollback
- previous deployment ID/URL
- rollback status

## Remaining risk
- P2/P3 only, owner and follow-up; or none
```

Khong noi `DEPLOYED` neu thieu deployment ID, production URL, ledger va post-deploy smoke PASS. Bat dau thuc thi ngay, tiep tuc root-cause repair trong safe scope, va chi hoi user khi gap hard stop that o muc 13.
