# AI Orchestration State Machine Root-Fix Prompt

Ban la Codex AI orchestration architect, distributed-systems engineer, platform engineer va root-cause QA lead. Hay sua truc tiep he thong orchestration trong canonical repo, khong chi viet report hoac de xuat kien truc.

## 1. Active goal window

- `GOAL_ID=ORCHESTRATION_STATE_MACHINE_ROOT_FIX_V2`
- `PRODUCT_SCOPE=shared`
- `OWNERSHIP_NAMESPACE=docs:orchestration`
- Secondary namespace khi can: `platform:shared`
- `NO_DEPLOY=1`
- `DEPLOY_INTENT=0`
- `RELEASE_INTENT=0`
- Canonical repo: `C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os`
- Muc tieu duy nhat: sua state machine de product-owned source work khong bi khoa boi release freeze khong lien quan, temporary lease wait khong bien thanh stale blocked goal, va lease/resume event tu dong tiep tuc execution an toan.
- Khong sua business feature STOS, Cho Kenh hoac Company Site trong task nay.
- Khong build, deploy, push, commit, kill process ngoai ownership, xoa foreign lock, bypass ownership hoac gia mao platform goal status.

## 2. Incident statement to reproduce

Phai tai hien va dung incident sau lam acceptance fixture:

1. Source Cho Kenh tung bi freeze de tranh overwrite tu task STOS/company-site.
2. Run Cho Kenh cho source lease qua ba goal turns.
3. Policy goi `update_goal(status="blocked")` du contention tam thoi van co resume path.
4. Lease sau do duoc cap; hai root fix search analytics va CRM/Zalo da QA PASS.
5. Persisted goal van hien `blocked` vi grant event khong reconcile goal state.
6. Tool `update_goal` chi expose `complete|blocked`, khong expose `active|resume`.
7. User da explicit resume, nhung database/control-plane van doc stale historical block nhu current effective state.

Expected result sau root fix:

- Cho Kenh tu sua file nam tron trong `product:cho-kenh` khi khong co exact-path conflict.
- Release freeze chi block release/build/deploy lane, khong block non-overlapping source edit hoac product-scoped static QA.
- Shared file hoac exact path do owner khac giu moi can lease.
- Lease grant/release/owner-exit event trigger reconciliation va resume execution tu checkpoint.
- Stale historical `blocked` duoc giu trong audit history nhung khong con la effective current state.
- Ba lan quan sat cung temporary wait khong duoc tu dong chuyen goal thanh blocked.
- External Codex goal adapter khong duoc goi action ma tool khong support.

## 3. Mandatory references

Doc truoc khi edit:

1. `AGENTS.md`
2. `QA_CHECK_BEFORE_DEPLOY.md`
3. `docs/PRODUCT_GOAL_OWNERSHIP_CONTRACT.md`
4. `docs/CODEX_GOAL_SYSTEM.md`
5. `docs/AI_ORCHESTRATION_MASTER_GOAL_KPI.md`
6. `agent-system/product-ownership.json`
7. `agent-system/ownership/ownership-map.json`
8. `agent-system/ownership/product-ownership-lease-broker.mjs`
9. `agent-system/ownership/product-ownership-lease-broker.test.mjs`
10. `agent-system/orchestration/templates/goal-state.json`
11. `scripts/goal-window-check.mjs`
12. `scripts/automation-runtime-policy.mjs`
13. `scripts/automation-lane-lock.mjs`
14. `scripts/automation-runtime-runner.mjs`
15. `scripts/automation-command-gate.mjs`
16. `scripts/qa-product-goal-ownership.mjs`
17. `scripts/automation-runtime-isolation-test.mjs`
18. `scripts/ai-product-orchestration-governance-validate.mjs`

Su dung `qa-check-agent` neu runtime co skill nay.

## 4. Audit before implementation

Truoc khi write:

1. Chay `git status --short` va bao ve unrelated work.
2. Chay source preflight va conflict-marker scan.
3. Doc active lease, lease queue, runtime locks, qa-predeploy lock, release-train lock va current-run state.
4. Phan biet current live state voi historical report.
5. Chay exact ownership check cho moi file du kien sua.
6. Dung `docs:orchestration` cho `agent-system/ownership/**`, `agent-system/orchestration/**`, goal templates, orchestration docs va governance validators.
7. Dung `platform:shared` cho runtime/command/lane primitives duoc map vao shared platform.
8. Neu can sua file thuoc ca hai namespaces, chia thanh hai patch slices co ownership evidence rieng.
9. Khong xin product source lease de sua orchestration docs/control plane.
10. Khong dung release freeze lam ly do de block docs/control-plane source edit neu exact paths khong overlap.

## 5. Root-cause requirements

Phai chung minh hoac bac bo tung root cause sau bang source/evidence:

- `status=BLOCKED` dang duoc dung cho command rejection, lane conflict, process signal, product failure va goal lifecycle, tao semantic collision.
- Lease broker co `RESUME_READY`/`resumeTriggers` nhung chua co durable event consumer cap nhat effective goal/run state.
- `resumeNotifiedAt` co the danh dau event da notify truoc khi consumer commit resume, tao lost-resume risk.
- Goal template khong tach historical lifecycle, execution readiness va resource access states.
- Runtime lane lock scope chua du de bieu dien exact path overlap.
- Release freeze/quiet window co the bi command gate dien giai rong hon release-critical commands.
- External goal tool capability khong co `active`, nhung local control plane co the dang ky vong external status thanh canonical state.
- Three-turn blocked policy dang dem observation count thay vi cung mot hard blocker fingerprint va impasse that.
- Persisted reports/ledgers cu co the veto current run du blocker da het.

Khong duoc assume. Tim canonical source, viet reproduction test truoc hoac cung patch, roi moi sua.

## 6. Required architecture: orthogonal state model

Nang schema goal/run state len version 2, giu backward-compatible reader. Khong collapse cac truc sau thanh mot field `status`.

### 6.1 Goal lifecycle

`goal_lifecycle` chi nhan:

- `ACTIVE`
- `COMPLETED`
- `CANCELLED`
- `HARD_BLOCKED`

Quy tac:

- `HARD_BLOCKED` chi dung khi co blocker that, khong con safe work/resume path va can external action/state change.
- Temporary contention khong duoc ghi `HARD_BLOCKED`.
- Historical external `blocked` khong duoc tu dong map sang current `HARD_BLOCKED` neu blocker fingerprint khong con live.

### 6.2 Execution state

`execution_state` chi nhan:

- `ACTIVE`
- `READY`
- `WAITING_RESOURCE`
- `WAITING_EVENT`
- `NEEDS_USER`
- `VERIFYING`
- `FAILED_RETRYABLE`
- `FAILED_TERMINAL`
- `COMPLETED`

### 6.3 Independent access state

Persist ba object rieng:

```json
{
  "source_access": {
    "state": "READY|WAITING_EXACT_PATH|WAITING_SHARED_LEASE|DENIED",
    "namespace": "product:cho-kenh",
    "paths": [],
    "conflicting_paths": [],
    "owner": null,
    "lease_id": null,
    "reason_code": null,
    "updated_at": null
  },
  "runtime_access": {
    "state": "NOT_REQUIRED|READY|WAITING_LANE|WAITING_PORT|DENIED",
    "lane": null,
    "port": null,
    "owner_run_id": null,
    "reason_code": null,
    "updated_at": null
  },
  "release_access": {
    "state": "NOT_REQUESTED|READY|WAITING_RELEASE_LANE|FROZEN|DENIED",
    "owner_run_id": null,
    "phase": null,
    "reason_code": null,
    "updated_at": null
  }
}
```

### 6.4 Blocker record

Moi blocker la record co schema:

```json
{
  "blocker_id": "stable-id",
  "fingerprint": "sha256(normalized type+resource+owner+reason)",
  "kind": "SOURCE_PATH|SHARED_LEASE|RUNTIME_LANE|PORT|RELEASE_LANE|CREDENTIAL|SECURITY|DATA|USER_DECISION|THIRD_PARTY",
  "class": "TRANSIENT|HARD",
  "scope": "product:cho-kenh",
  "resources": [],
  "owner": null,
  "first_seen_at": null,
  "last_seen_at": null,
  "consecutive_goal_turns": 1,
  "live": true,
  "resume_triggers": [],
  "safe_work_remaining": true,
  "requires_user": false,
  "evidence": []
}
```

Khong tang `consecutive_goal_turns` cho observation/poll trong cung turn. Reset counter khi fingerprint doi, blocker khong con live, grant event den, user explicit resume, source hash doi, owner thoat hoac safe work duoc tim thay.

### 6.5 Derived effective state

Tao pure function duy nhat, vi du `deriveEffectiveGoalState(state, liveResources)`.

Priority:

1. `COMPLETED` neu definition of done pass.
2. `NEEDS_USER` neu co live hard blocker can user va khong con safe work.
3. `HARD_BLOCKED` chi neu live hard blocker lap du threshold goal-turn, khong con safe work, khong co automatic resume trigger va platform policy yeu cau.
4. `WAITING_RESOURCE` neu source/runtime/release resource bat buoc cho next step dang contention tam thoi.
5. `VERIFYING` neu dang QA/reconcile.
6. `ACTIVE` hoac `READY` neu co safe next action.

Khong dung latest report status, old ledger status hoac external goal status mot minh lam effective state.

## 7. Product ownership semantics

Implement va test cac rule:

1. Path nam tron trong namespace cua product va khong co exact-path owner khac: `source_access=READY`; khong can lease.
2. Path thuoc `platform:shared`: can active path-specific lease, tru khi requester chinh la `platform:shared` owner.
3. Path thuoc product khac: deny write va handoff dung owner.
4. Exact same path dang co live owner/patch transaction: wait exact-path lease/ownership resolution.
5. Cung repo, cung branch hoac dirty worktree khong du de ket luan overlap; phai so path/module/hash.
6. Release lock khong thay doi source ownership.
7. Runtime lock khong thay doi source ownership.
8. Source lease khong cap quyen build/deploy.
9. Release lease khong cap quyen sua product source.
10. QA evidence duoc danh nhan theo product scope va lane; khong cross-credit.

Cho Kenh acceptance:

- `product:cho-kenh` duoc sua `src/channel-marketplace/search.ts` neu khong co exact-path conflict.
- `product:cho-kenh` duoc sua CRM/Zalo files nam trong registry cua minh neu khong co exact-path conflict.
- Khong doi lease cho hai truong hop tren chi vi release train hoac STOS/company-site dang active o paths khac.

## 8. Lock separation

Phai tach semantic va persistence:

- `source_lock`: path/namespace/hash/owner transaction; khong co port, build hay deploy semantics.
- `runtime_lock`: lane/port/PID/run; khong co source write semantics.
- `release_lock`: quiet snapshot/build/deploy/promote/rollback; chi gate release-critical commands.

Required invariants:

- Release freeze blocks `build`, `qa:predeploy` trong release mode, `release:train`, `release:train:deploy` va canonical snapshot mutation theo contract.
- Release freeze khong block read, product-owned non-overlapping edit, unit/static test, targeted source QA hoac docs/orchestration fix.
- Neu release train da freeze mot canonical source snapshot, product edit moi duoc phep nhung khong duoc chen vao snapshot dang deploy; next release phai capture hash moi.
- Runtime lane conflict chi block command can lane/port do; cac source/doc task khong can runtime van tiep tuc.
- Lock owner phai co PID, parent PID, run ID, scope, resources, phase, heartbeat, expiry va cleanup policy.
- Stale lock chi reconcile khi owner, parent va control plane deu inactive theo policy; khong xoa dua tren TTL mot minh.

## 9. Lease broker event model

Nang lease broker thanh durable at-least-once event flow.

Events toi thieu:

- `LEASE_REQUESTED`
- `LEASE_QUEUED`
- `LEASE_GRANTED`
- `LEASE_HEARTBEAT`
- `LEASE_RELEASED`
- `LEASE_EXPIRED_RECONCILED`
- `OWNER_EXITED`
- `QUIET_WINDOW_COMPLETED`
- `GOAL_RESUME_REQUESTED`
- `GOAL_RESUMED`
- `STALE_BLOCK_CLEARED`

Event envelope:

```json
{
  "event_id": "uuid-or-deterministic-id",
  "event_type": "LEASE_GRANTED",
  "aggregate_id": "run-or-goal-id",
  "causation_id": null,
  "correlation_id": "goal-id",
  "sequence": 1,
  "occurred_at": null,
  "payload": {},
  "schema_version": 2
}
```

Requirements:

- Atomic append hoac atomic outbox cung state update.
- Consumer idempotent theo `event_id` va per-aggregate `sequence`.
- Khong set `resumeNotifiedAt` truoc khi durable consumer acknowledgement.
- Neu crash sau event append truoc state update, replay phai resume dung mot lan ve mat hieu luc.
- Duplicate `LEASE_GRANTED` khong duoc tao duplicate worker/process.
- Out-of-order event phai bi defer/reconcile, khong silently overwrite state moi.
- Consumer update `source_access`, clear matching transient blocker, increment `resume_epoch`, create checkpoint transition va dispatch next safe action.
- Auto resume chi xay ra neu source hashes/checkpoint con hop le; neu drift, chuyen `VERIFYING` va revalidate affected evidence.

## 10. Resume semantics and external goal adapter

Khong goi API/action khong ton tai.

Tao capability-aware adapter:

```json
{
  "provider": "codex_goal_tool",
  "capabilities": {
    "create": true,
    "read": true,
    "complete": true,
    "block": true,
    "resume": false,
    "set_active": false
  }
}
```

Rules:

- Internal execution state la source of truth cho orchestration run.
- External goal status la projection/audit input, khong phai canonical resource lock.
- Khi user gui explicit resume, persist `GOAL_RESUME_REQUESTED` va tang `resume_epoch`.
- Neu provider tu resume goal khi user tiep tuc task, doc fresh provider state va reconcile.
- Neu provider khong co resume API, khong fake call `update_goal(active)` va khong loop thu lai.
- Ghi `external_sync_state=UNSUPPORTED_RESUME|IN_SYNC|PENDING_PROVIDER|STALE_EXTERNAL_STATUS`.
- `STALE_EXTERNAL_STATUS` khong veto local effective state khi user explicit resume va khong con live hard blocker.
- Khong create goal moi de bypass blocked goal tru khi user explicitly yeu cau va platform contract cho phep.
- Chi goi `update_goal(status="blocked")` khi cung live HARD blocker da lap du ba consecutive goal turns, khong con meaningful safe work, khong co auto-resume path va agent that su impasse.
- Temporary source/runtime/release contention luon la `WAITING_*`, khong goi `update_goal(blocked)`.

## 11. Reconciliation loop

Tao mot deterministic reconciler co input:

- persisted goal/run state;
- current ownership registry;
- active source leases/queue;
- runtime lane/port locks;
- release lock/phase;
- live owner PID evidence;
- user resume epoch;
- external goal capability/status;
- source file hashes;
- latest QA evidence scoped theo product/source hash.

Output:

- updated orthogonal state;
- cleared/created blockers;
- invalidated evidence IDs;
- next safe action;
- events to append;
- external tool action, neu supported va truly required;
- no-op reason neu khong co transition.

Reconciler phai pure o decision layer; I/O nam o adapter. Moi transition can `from`, `to`, `reason_code`, `event_id`, `source_hash`, `timestamp` va `actor`.

Trigger reconcile:

- startup/restart;
- lease grant/release/expiry;
- owner PID exit;
- runtime lock/port release;
- release phase complete;
- user explicit resume;
- source hash change;
- QA completion;
- controlled periodic safety sweep voi backoff, khong blind poll.

## 12. Migration and stale-state repair

Viet migration idempotent tu state v1/report cu sang v2.

Rules:

- Backup state file truoc migration.
- Preserve raw legacy fields trong `legacy_snapshot` hoac audit event.
- Map old `BLOCKED` bang blocker evidence, khong map truc tiep sang `HARD_BLOCKED`.
- Neu old block la lease/release/runtime contention va current resource da clear: set lifecycle `ACTIVE`, execution `READY`, append `STALE_BLOCK_CLEARED`.
- Neu lease da grant/release va product QA PASS voi matching source hash: preserve QA evidence va tiep tuc next stage.
- Neu QA evidence khong co source hash hoac source da drift: chuyen `VERIFYING`, khong claim PASS va khong reset to blocked.
- Neu hard credential/security/data blocker van live: `NEEDS_USER` hoac `HARD_BLOCKED` theo derived rules.
- Migration phai chay dry-run, in diff redacted va co rollback.
- Khong migration production DB/destructive schema trong task nay; neu state nam o DB, tao code/migration artifact + test tren fixture/temp DB truoc.

Fixture bat buoc:

```json
{
  "legacy_goal_status": "blocked",
  "legacy_reason": "source lease not granted after three turns",
  "lease_current": "released",
  "user_explicit_resume": true,
  "product_scope": "cho-kenh",
  "source_overlap": false,
  "search_analytics_qa": "PASS",
  "crm_zalo_qa": "PASS"
}
```

Expected:

```json
{
  "goal_lifecycle": "ACTIVE",
  "execution_state": "READY",
  "source_access": "READY",
  "release_access": "NOT_REQUESTED",
  "effective_state": "ACTIVE",
  "external_sync_state": "STALE_EXTERNAL_STATUS",
  "event": "STALE_BLOCK_CLEARED"
}
```

## 13. Implementation constraints

- Uu tien nang cap files hien co; khong tao orchestrator thu hai.
- Tach pure state transition/reconciler module neu no giam coupling va test duoc.
- JSON schema versioned; reader accept v1 va v2 trong rollout window, writer chi ghi v2 sau migration.
- Atomic file write bang temp + rename; lock file ngan gon va owner-verified.
- Khong dat business product logic vao broker/runner.
- Khong import Node-only module vao browser client bundle.
- Khong dung timestamp lam idempotency key duy nhat.
- Khong swallow parse/state corruption. Quarantine invalid state va bao evidence path.
- Khong log token, credential, PII hoac full customer payload.
- Khong thay tat ca string `BLOCKED` trong repo mot cach may moc. Phan biet QA/release verdict voi goal lifecycle.
- Command co exit code nonzero van co the report `COMMAND_BLOCKED`; no khong duoc tu dong mutate goal lifecycle.

## 14. Required tests

Them/extend repo-native tests. Tat ca test dung temp directory, fake clock/process adapter khi can va khong cham live lock/process.

### Ownership tests

1. Cho Kenh owned file, no overlap, foreign release lock active -> source edit allowed.
2. Cho Kenh owned file, exact same path foreign owner active -> wait exact path.
3. Cho Kenh request shared file without lease -> wait shared lease.
4. Shared lease granted to matching run/thread/path -> source ready.
5. Lease for different path/thread/expired -> not accepted.
6. STOS/company-site activity on unrelated path -> ignored for Cho Kenh source access.

### Lock isolation tests

7. Release freeze blocks release/build command but not product-owned source check.
8. Runtime port conflict blocks only server-requiring command.
9. Source lease does not grant release lane.
10. Release owner does not grant product source ownership.
11. Stale runtime lock needs owner/parent/control inactivity before cleanup.

### Goal state tests

12. Three observations of same transient lease wait -> `WAITING_RESOURCE`, no external block action.
13. Three distinct polling calls in same goal turn -> counter remains one.
14. Three true goal turns with live hard credential blocker, no safe work -> block action eligible.
15. User explicit resume clears stale historical block when blocker is gone.
16. User explicit resume does not bypass still-live security/data blocker.
17. Old blocked ledger does not override fresh live resource state.
18. QA PASS matching source hash survives resume.
19. Source hash drift invalidates only affected QA evidence and enters VERIFYING.
20. Completion remains terminal unless a new explicitly created goal exists.

### Event/recovery tests

21. Lease granted -> resume event consumed -> execution READY/ACTIVE.
22. Duplicate grant event -> no duplicate resume worker.
23. Crash after append before state write -> replay recovers.
24. Crash after state write before acknowledgement -> replay idempotent.
25. Out-of-order release before grant -> reconcile safely.
26. `resumeNotifiedAt`/ack not marked before durable state transition.
27. Owner process exit triggers one resume event.
28. Quiet window complete unblocks release wait only, not unrelated states.

### Migration tests

29. Incident fixture migrates to ACTIVE/READY and preserves legacy audit.
30. Migration rerun is no-op.
31. Migration rollback restores byte-equivalent prior state.
32. Corrupt legacy JSON is quarantined, not overwritten.
33. V1 reader and V2 writer compatibility pass.

### Regression tests

34. Existing lease broker tests still pass.
35. Existing ownership matrix still passes.
36. Runtime isolation suite still passes.
37. Goal/governance validation still passes with schema v2.
38. Company Site and STOS product-scope isolation remain intact.
39. Raw deploy and foreign-process kill protections remain intact.
40. No product source, production data, build artifact or deploy is changed by this task.

## 15. QA execution order

Sau moi fix:

1. `node --check` tren changed `.mjs/.cjs` files.
2. Smallest new state transition unit test.
3. `node agent-system/ownership/product-ownership-lease-broker.test.mjs`
4. New goal-state reconciler/migration tests.
5. `npm run qa:product-ownership -- --self-test`
6. `npm run test:runtime-isolation`
7. `npm run goal:check`
8. `npm run ai:product:validate`
9. `npm run orchestration:qa`
10. `npm run typecheck` chi neu changed TypeScript/app contract can thiet va command gate cho phep; khong chay build/predeploy/deploy.

Neu package script syntax khac, inspect `package.json` va dung repo-native equivalent. Khong fake command.

## 16. Continuous root-cause repair loop

Voi moi failing test:

1. Capture fingerprint va smallest reproduction.
2. Phan loai `PRODUCT_OWNERSHIP`, `STATE_MODEL`, `EVENT_DELIVERY`, `LOCK_ISOLATION`, `MIGRATION`, `TEST_HARNESS`, `ENVIRONMENT`.
3. Tim canonical source.
4. Sua smallest durable root cause trong owned scope.
5. Rerun smallest test.
6. Rerun related suite.
7. Neu cung fingerprint lap lai lan hai, meta-diagnose stale fixture, wrong state source, duplicate writer, race, path normalization, clock/PID adapter va event ordering.
8. Tiep tuc den PASS hoac hard stop that.

Khong danh dau goal blocked chi vi test fail co the sua trong repo. Test failure la work item active.

## 17. Rollout plan

Implement rollout an toan:

- Feature flag hoac schema compatibility gate cho V2.
- Shadow reconciliation tren copied fixtures/current state truoc khi write canonical state.
- Compare legacy decision va V2 decision; log semantic differences redacted.
- Enable V2 writer sau khi tests PASS.
- Run one-time stale-state reconciliation dry-run.
- Apply chi cac transitions co deterministic evidence.
- Giu rollback adapter de doc backup V1.
- Khong deploy production trong task nay.

## 18. Documentation updates

Update canonical docs, khong tao competing policy:

- `docs/CODEX_GOAL_SYSTEM.md`: orthogonal state model, explicit resume, external capability limits.
- `docs/PRODUCT_GOAL_OWNERSHIP_CONTRACT.md`: product-owned no-lease rule, exact-path/shared lease rule, lock separation.
- `QA_CHECK_BEFORE_DEPLOY.md`: temporary waits khong phai hard blocked; release freeze chi gate release-critical actions.
- Goal-state template/schema va ownership map handoff contract.

Docs phai noi ro:

- `BLOCKED` trong QA/release verdict khac `HARD_BLOCKED` trong goal lifecycle.
- Platform external goal status co the stale; current effective state can live resource reconciliation.
- User message explicit resume la valid orchestration event.
- No API resume capability means local reconcile, not fake tool call.

## 19. Hard stops

Chi stop va hoi user khi:

- Exact target source file co live owner khac va khong co merge/lease path.
- Can destructive production DB migration.
- Can credential/private token.
- Architecture requires changing external Codex platform API khong nam trong repo.
- Security/data-loss risk cannot be resolved safely.

Temporary release/runtime/source contention co event path la WAITING, khong phai hard stop. Trong luc wait, hoan tat tests, migration fixtures, docs, patch packet va resume checkpoint trong non-conflicting scope.

## 20. Final evidence contract

Tra ve:

```md
# Orchestration State Machine Root Fix

Goal: ORCHESTRATION_STATE_MACHINE_ROOT_FIX_V2
Decision: PASS | PASS_WITH_RISK | HARD_BLOCKED

## Root cause
- confirmed source-level causes

## Architecture implemented
- goal lifecycle
- execution state
- source/runtime/release access states
- event/reconciliation model
- external goal adapter behavior

## Files changed
- file, ownership namespace, reason

## Migration
- dry-run result
- stale blocked records cleared
- backup/rollback path

## Verification
- command, result, evidence path
- acceptance tests passed/total

## Incident fixture result
- effective state
- resume epoch/event
- preserved QA evidence

## Residual risk
- owner, severity, next action; or none
```

Khong claim PASS neu thieu reproduction test, incident migration test, lease-grant auto-resume test, three-transient-turn no-block test, lock-isolation test va regression suites. Bat dau audit va implement ngay; khong dung o ke hoach.
