# STOS And Cho Kenh Release Artifact Separation Master Prompt

Ban la Codex principal monorepo architect, Next.js platform engineer, Vercel release architect, DevOps/SRE lead, security engineer va root-cause QA lead. Hay tach STOS va Cho Kenh thanh hai product deployable doc lap. Khong chi doi ten lane hoac them `PRODUCT_SCOPE` vao cung mot Next build; phai chung minh artifact, route graph, project, alias, lock, QA, ledger va rollback doc lap.

## 1. Active goal window

- `GOAL_ID=STOS_CHO_KENH_RELEASE_ARTIFACT_SEPARATION_V1`
- Canonical repo: `C:\Users\CROSSIAN\Downloads\chợ kênh\growth-commerce-os`
- Scope: `platform:shared`, `docs:orchestration`, `release:shared`, sau do handoff product-specific cho `product:stos` va `product:cho-kenh`.
- `NO_DEPLOY=1`
- `DEPLOY_INTENT=0`
- `RELEASE_INTENT=0`
- Muc tieu: cung mot Git monorepo nhung STOS va Cho Kenh co application root, dependency graph, build artifact, Vercel project, production alias, release lock, QA gate, source snapshot, ledger, rollback va post-deploy smoke rieng.
- Company Site phai duoc bao toan; khong redesign hoac refactor business behavior cua Company Site trong task nay.
- Khong deploy, promote alias, tao/xoa Vercel project, thay doi DNS/domain production hoac mutate production data khi chua co explicit activation approval.

## 2. Current verified architecture

Fresh-audit lai, nhung baseline hien tai la:

- Repo chi co mot root `package.json`, khong co `workspaces`.
- Root package name dang la `cho-kenh` du source chua ca Company Site, STOS va Cho Kenh.
- Chi co mot Next app route tree duoi `src/app`.
- Chi co mot `.vercel/project.json` tro toi project `growth-commerce-os`.
- Chi co mot `vercel.json`, mot `next.config.mjs`, mot `npm run build`, mot `qa:predeploy`, mot `release:train`, mot `release:train:deploy`.
- STOS routes, Cho Kenh routes, APIs, workspace/shared source va Company Site dang vao cung `.next` artifact.
- Cho Kenh host rewrites trong root `next.config.mjs` van route vao `/cho-kenh` cua cung artifact.
- Release train dang dung mot `.release-train.lock`, mot production alias fallback va mot ledger family.
- Broad `qa:predeploy` chay cross-product checks.

Ket luan baseline: `PRODUCT_SCOPE` hien chi la policy/QA label, chua phai build-boundary.

## 3. Problem statement

STOS va Cho Kenh la hai product doc lap. Coupling hien tai la release-infrastructure coupling:

- mot source snapshot;
- mot Next route graph;
- mot build output;
- mot Vercel project;
- mot immutable deployment stream;
- mot production alias;
- mot release lock;
- mot broad predeploy gate;
- mot rollback target.

Vi vay mot Cho Kenh runtime/source change co the lam STOS release khong dong bang snapshot an toan. Day khong phai product logic dependency va khong duoc tiep tuc mo hinh hoa nhu mot product blocker.

## 4. Success definition

Task chi dat architectural PASS khi:

1. STOS build artifact khong chua Cho Kenh routes/APIs/domain modules.
2. Cho Kenh build artifact khong chua STOS routes/APIs/domain modules.
3. Moi product co Vercel project configuration/manifest rieng; project ID va secret khong hardcode trong source.
4. Moi product co alias/domain env, immutable deployment, rollback target va ledger rieng.
5. STOS release lock khong block Cho Kenh development/release va nguoc lai.
6. STOS predeploy gate chi chay STOS + shared dependencies STOS thuc su consume.
7. Cho Kenh predeploy gate chi chay Cho Kenh + shared dependencies Cho Kenh thuc su consume.
8. Shared package change tinh ra impacted product set bang dependency graph; no khong bien thanh generic repo-wide blocker.
9. Mot product co the release/promotion doc lap trong khi product kia van giu production deployment cu.
10. Company Site khong bi mat route, style, API hoac release fallback trong migration.
11. Cutover co preview/canary, domain/SEO/session plan, observability va rollback.
12. Task migration nay khong tu deploy production.

## 5. Mandatory references

Doc truoc khi edit:

1. `AGENTS.md`
2. `QA_CHECK_BEFORE_DEPLOY.md`
3. `docs/PRODUCT_GOAL_OWNERSHIP_CONTRACT.md`
4. `docs/AI_ORCHESTRATION_MASTER_GOAL_KPI.md`
5. `docs/stos/STOS_UX_ACCEPTANCE_MATRIX.md`
6. `docs/cho-kenh/CHO_KENH_MASTER_GOAL_WORLD_CLASS_MARKETPLACE.md`
7. `agent-system/product-ownership.json`
8. `agent-system/ownership/ownership-map.json`
9. `package.json` and lockfile
10. `next.config.mjs`
11. `vercel.json`
12. `.vercel/project.json` read-only; do not commit project credentials.
13. `scripts/release-train.mjs`
14. `scripts/qa-predeploy-runner.mjs`
15. `scripts/automation-runtime-policy.mjs`
16. `scripts/automation-lane-lock.mjs`
17. `scripts/automation-command-gate.mjs`
18. `scripts/automation-runtime-runner.mjs`
19. `scripts/qa-release-deployment-contract.cjs`
20. `scripts/vercel-immutable-smoke.mjs`
21. STOS and Cho Kenh route/API/domain import graphs.

Consult current official Vercel documentation before changing project settings:

- `https://vercel.com/docs/monorepos`
- `https://vercel.com/docs/monorepos/monorepo-faq`
- `https://vercel.com/docs/builds`
- `https://vercel.com/docs/deployments/vercel-ignore`

Use `qa-check-agent`. Use `stos-product-ux` for STOS route/UX acceptance. Use Cho Kenh canonical goal and product-specific QA for Cho Kenh.

## 6. Non-negotiable product isolation

- `product:stos` and `product:cho-kenh` are peers, never parent/child.
- STOS verdict cannot consume Cho Kenh QA evidence.
- Cho Kenh verdict cannot consume STOS QA evidence.
- A product cannot edit the other product's source.
- Shared code must live in an explicit package/namespace with owner, API contract and consumers.
- No import from STOS app/domain into Cho Kenh app/domain.
- No import from Cho Kenh app/domain into STOS app/domain.
- No shared package may import product packages.
- No release owner may claim product backlog/source ownership.
- No product lock may use a global singleton when its resource is product-scoped.
- A shared dependency change may require QA for both consumers, but production promotions remain independent.

## 7. Do not accept fake separation

The following are NOT sufficient:

- Only adding `PRODUCT_SCOPE=stos|cho-kenh` to the existing single build.
- Building the same `src/app` twice with different env values while both route trees remain present.
- Hiding unrelated routes with middleware, rewrites, feature flags or CSS.
- Keeping one Vercel project and only changing aliases.
- Keeping one `.next` directory and renaming the ledger.
- Running broad `qa:predeploy` then filtering the report.
- Duplicating all source into two folders without explicit shared packages.
- Copying private env/secrets between products.
- Treating `.vercelignore` alone as a product architecture boundary.
- Relying only on source path names without verifying bundle/route manifests.

## 8. Target monorepo architecture

Preferred target unless the dependency audit proves a safer equivalent:

```text
growth-commerce-os/
  apps/
    stos-web/
      package.json
      next.config.mjs
      vercel.json
      src/app/
      src/styles/
    cho-kenh-web/
      package.json
      next.config.mjs
      vercel.json
      src/app/
      src/styles/
    company-site-web/             # migrate now only if necessary; otherwise keep legacy root with explicit plan
      package.json
      next.config.mjs
      vercel.json
      src/app/
  packages/
    platform-core/
    auth-contracts/
    data-contracts/
    observability/
    ui-primitives/
    design-tokens/
    testing/
    config-typescript/
    config-eslint/
  tooling/
    release/
    qa/
    dependency-graph/
  agent-system/
  package.json
  package-lock.json
  turbo.json                       # only if Turborepo is justified and validated
  tsconfig.base.json
```

Default to npm workspaces because root currently uses npm/package-lock. Add Turborepo only if it materially improves affected-build graph, caching and Vercel integration; do not add Nx or a second package manager without a documented need.

## 9. Workspace requirements

Root package must become private orchestration package with:

- explicit `workspaces` for every app/package;
- explicit `packageManager` matching installed/lockfile toolchain;
- unique package names;
- root scripts that delegate by product;
- no Next app runtime behavior at root after final migration;
- one canonical lockfile.

Every internal package:

- has unique `name`;
- declares explicit dependencies/peerDependencies;
- has clear owner and consumers;
- exports only public entrypoints through `exports`;
- forbids deep imports across package internals;
- has build/typecheck/test contract;
- does not contain product-specific environment fallbacks.

Affected-project detection must use workspace dependency graph, not broad string matching or raw dirty status.

## 10. Route ownership inventory

Before moving files, generate a machine-readable route manifest from Next app routes and imports.

### STOS candidate routes

Audit at minimum:

- `/stos`
- `/stos/page`
- `/stos/templates`
- `/stos/studio`
- `/stos/customers`
- `/stos/insights`
- `/stos/settings`
- `/stos-admin`
- `/sales-traffics-os` compatibility route if still live
- `/u/[slug]`
- `/api/stos/**`
- STOS-owned metrics, protocol, publish, media, lead and admin endpoints.

### Cho Kenh candidate routes

Audit at minimum:

- `/cho-kenh`
- `/cho-kenh/catalog`
- `/cho-kenh/[slug]` or actual detail route
- `/cho-kenh/contact/[slug]`
- `/cho-kenh/giao-dich-trung-gian`
- `/tiktok-channel-starter/**` compatibility routes
- `/api/cho-kenh/**`
- `/api/admin/cho-kenh/**`
- Cho Kenh inventory, search, buyer request, seller intake and CRM/Zalo endpoints.

### Shared/company routes

Classify, do not guess:

- `/workspace/**`
- `/api/app-data/**`
- auth/session APIs
- root Company Site public routes
- shared health/automation APIs
- sitemap/robots/not-found/root layout.

For every route record:

```json
{
  "route": "/stos/templates",
  "product": "stos",
  "entry_file": "...",
  "imports": [],
  "api_dependencies": [],
  "data_dependencies": [],
  "auth_dependencies": [],
  "styles": [],
  "assets": [],
  "compatibility_urls": [],
  "owner": "product:stos"
}
```

Unclassified route is a migration blocker for that route only, not automatic hard block for the other product.

## 11. Dependency graph and forbidden edges

Generate source graph using TypeScript/Next-aware parsing, not regex only.

Allowed direction:

```text
apps/stos-web -> packages/*
apps/cho-kenh-web -> packages/*
apps/company-site-web -> packages/*
packages/product-neutral -> packages/lower-level-neutral
```

Forbidden:

```text
apps/stos-web -> apps/cho-kenh-web
apps/cho-kenh-web -> apps/stos-web
packages/* -> apps/*
packages/shared -> product-specific domain package
product:stos -> channel-marketplace internals
product:cho-kenh -> STOS internals
```

If a current cross-import exists:

1. identify actual shared concept;
2. design smallest neutral contract;
3. move only neutral logic into a shared package;
4. keep product adapters in each product;
5. add dependency-boundary test;
6. do not move business-specific behavior into `shared` just to make import pass.

## 12. Product application boundaries

### STOS app owns

- STOS routes and route layouts.
- STOS public portfolio `/u/**`.
- STOS APIs.
- STOS domain/store/publish/template/CMS modules.
- STOS product styles/assets.
- STOS-specific auth/session adapters and data adapters.
- STOS sitemap/robots/canonical metadata.

### Cho Kenh app owns

- Marketplace/catalog/detail/trust/Zalo routes.
- Cho Kenh APIs and admin APIs.
- Search, inventory, listing projection, buyer request, seller intake, CRM/Zalo modules.
- Cho Kenh product styles/assets.
- Cho Kenh-specific auth/session/data adapters.
- Cho Kenh sitemap/robots/canonical metadata.

### Shared packages may own

- low-level auth interfaces and validation;
- tenant-safe data contracts;
- observability primitives;
- safe HTTP/error utilities;
- product-neutral UI primitives and design tokens;
- test/runtime helpers;
- schema types with no product policy.

Shared does not own product route decisions, funnel rules, marketplace ranking, STOS publishing behavior or product copy.

## 13. Workspace and operator routing decision

The existing `/workspace` shell must not silently re-couple products.

Audit real use and choose one explicit architecture:

### Option A - product-owned workspaces (preferred for full independence)

- STOS operator routes live in STOS app.
- Cho Kenh operator/admin routes live in Cho Kenh app.
- Shared UI shell becomes package, not deployed app.
- Product session/cookie/API boundaries are explicit.

### Option B - separate control-plane app

- Create a third independently deployed control-plane app only if both products genuinely require a shared operator platform.
- Control plane uses versioned APIs; it does not import product server internals.
- Its release cannot block STOS/Cho Kenh public releases unless changed API compatibility is proven.

Do not keep a hidden shared `/workspace` route inside one product artifact while calling products independent.

## 14. CSS and asset isolation

Do not import the full legacy `globals.css` into both new apps.

- Shared design tokens/primitives become explicit packages/files.
- STOS imports STOS styles only plus shared primitives.
- Cho Kenh imports Cho Kenh styles only plus shared primitives.
- Company Site imports Company Site styles only plus shared primitives.
- Product-specific selector roots are forbidden in shared CSS.
- Shared asset package contains only truly reusable public-safe assets.
- Private/customer/product assets remain product-owned.
- Build manifest verifies no unrelated product CSS chunks/assets.

Coordinate with the existing CSS decomposition plan; do not duplicate a second style architecture.

## 15. Environment and secrets isolation

Create versioned environment contracts per product.

### STOS

- STOS public URL and canonical host.
- STOS auth/session/cookie config.
- STOS database/schema/storage variables.
- STOS analytics/observability variables.
- STOS Vercel project/alias identifiers supplied through secure environment.

### Cho Kenh

- Cho Kenh public URL and canonical host.
- Cho Kenh auth/session/cookie config.
- Cho Kenh database/schema/storage variables.
- Cho Kenh analytics/observability variables.
- Cho Kenh Vercel project/alias identifiers supplied through secure environment.

Rules:

- No secret value in repo, logs, manifests or reports.
- No fallback from missing STOS secret to Cho Kenh secret or vice versa.
- Public env is allowlisted by app.
- Server-only env cannot enter client bundle.
- Session cookies use product-specific names/audience; domain/SameSite/Secure strategy is tested during domain cutover.
- CORS/CSRF/redirect allowlists are product-specific.
- Shared backend use, if retained, must use product/tenant scope and separate authorization contracts.
- Any database split/migration is a separate L3 slice with backup/rollback; do not mutate production in this task.

## 16. Vercel project model

Prepare two separate Vercel projects connected to the same Git repository:

```json
{
  "stos": {
    "appRoot": "apps/stos-web",
    "projectIdEnv": "VERCEL_PROJECT_ID_STOS",
    "orgIdEnv": "VERCEL_ORG_ID",
    "productionUrlEnv": "STOS_PRODUCTION_URL",
    "aliasEnv": "STOS_PRODUCTION_ALIAS"
  },
  "cho-kenh": {
    "appRoot": "apps/cho-kenh-web",
    "projectIdEnv": "VERCEL_PROJECT_ID_CHO_KENH",
    "orgIdEnv": "VERCEL_ORG_ID",
    "productionUrlEnv": "CHO_KENH_PRODUCTION_URL",
    "aliasEnv": "CHO_KENH_PRODUCTION_ALIAS"
  }
}
```

Do not commit actual project IDs unless repository security policy explicitly allows non-secret IDs; prefer environment/config outside source.

Each project needs:

- distinct Root Directory;
- distinct production domain/alias;
- distinct environment variables;
- distinct deployment history;
- distinct observability/logs;
- distinct rollback target;
- skip-unaffected configuration based on workspace dependency graph;
- project-level `.vercelignore` only after validating shared package inclusion.

Creating projects, linking Git, changing domains or enabling production is an external mutation and requires explicit activation approval/credentials.

## 17. Product release registry

Create one canonical release registry with no secrets:

```json
{
  "version": 1,
  "products": {
    "stos": {
      "ownershipNamespace": "product:stos",
      "appRoot": "apps/stos-web",
      "releaseLane": "release:stos",
      "qaLane": "qa:stos",
      "ledgerRoot": "agent-system/reports/release-ledger/stos",
      "lockKey": "release-stos",
      "requiredQa": [],
      "smokeRoutes": [],
      "forbiddenRoutes": ["/cho-kenh", "/tiktok-channel-starter"],
      "projectIdEnv": "VERCEL_PROJECT_ID_STOS",
      "productionUrlEnv": "STOS_PRODUCTION_URL"
    },
    "cho-kenh": {
      "ownershipNamespace": "product:cho-kenh",
      "appRoot": "apps/cho-kenh-web",
      "releaseLane": "release:cho-kenh",
      "qaLane": "qa:cho-kenh",
      "ledgerRoot": "agent-system/reports/release-ledger/cho-kenh",
      "lockKey": "release-cho-kenh",
      "requiredQa": [],
      "smokeRoutes": [],
      "forbiddenRoutes": ["/stos", "/stos-admin", "/u"],
      "projectIdEnv": "VERCEL_PROJECT_ID_CHO_KENH",
      "productionUrlEnv": "CHO_KENH_PRODUCTION_URL"
    }
  }
}
```

Registry validation fails on duplicate app root, project env key, alias env key, lock key or ledger root.

## 18. Release commands

Expose explicit repo-native commands, names may be adjusted consistently:

```text
npm run build:stos
npm run build:cho-kenh
npm run qa:predeploy:stos
npm run qa:predeploy:cho-kenh
npm run release:stos
npm run release:stos:deploy
npm run release:cho-kenh
npm run release:cho-kenh:deploy
```

Or one parameterized implementation:

```text
node tooling/release/product-release-train.mjs --product stos [--deploy]
node tooling/release/product-release-train.mjs --product cho-kenh [--deploy]
```

Package scripts must pass product explicitly; no default product for deploy.

Legacy `release:train` may remain during migration but:

- emits deprecation warning;
- cannot silently choose a product;
- cannot be used as evidence for separated product release;
- is disabled after cutover except documented rollback window.

## 19. Product source snapshot

Each release candidate freezes only the product transitive closure:

- app root;
- explicit internal packages consumed by app;
- root lockfile/package manager metadata relevant to build;
- release tooling/config used by product;
- environment contract names, never values.

Snapshot manifest:

```json
{
  "product": "stos",
  "commit": "...",
  "appRoot": "apps/stos-web",
  "files": [{"path":"...","sha256":"..."}],
  "internalPackages": [{"name":"...","version":"...","treeHash":"..."}],
  "dependencyGraphHash": "...",
  "lockfileHash": "...",
  "createdAt": "..."
}
```

Rules:

- Unrelated Cho Kenh change outside STOS transitive closure does not invalidate STOS snapshot.
- Shared package consumed by STOS does invalidate STOS snapshot when changed.
- Shared package consumed only by Cho Kenh does not invalidate STOS snapshot.
- Same exact shared file/package changed after freeze invalidates only affected product candidate.
- Do not infer invalidation from repo dirty flag alone.
- Preserve unrelated changes; never stash/reset them.

## 20. Locks and runtime lanes

Replace global singleton semantics with product-scoped resources:

```text
release-stos
release-cho-kenh
qa-stos
qa-cho-kenh
build-stos
build-cho-kenh
```

Lock payload includes:

- product;
- resource type;
- app root;
- source snapshot hash;
- PID/parent PID/run ID;
- command/cwd;
- phase;
- heartbeat/expiry;
- project ID hash or safe identifier;
- alias host safe identifier;
- ledger path.

Rules:

- STOS lock never blocks Cho Kenh lane.
- Cho Kenh lock never blocks STOS lane.
- Shared package migration may acquire explicit package/path lease, not both release locks by default.
- If both products intentionally release a shared breaking contract, orchestrate two independent candidates and promotions with compatibility order.
- Never kill foreign process; reconcile stale locks by owner/parent/control-plane evidence.
- Separate dist directories and ports; no shared `.next` mutation.

Suggested local artifact roots:

```text
apps/stos-web/.next
apps/cho-kenh-web/.next
agent-system/runtime/stos/**
agent-system/runtime/cho-kenh/**
```

## 21. QA architecture

Split broad `qa:predeploy` into product pipelines.

### STOS predeploy

Must include:

- source/ownership for STOS transitive closure;
- STOS UX hooks;
- STOS workspace;
- STOS CMS workflow;
- STOS data/publish lifecycle;
- STOS public page;
- STOS mobile interactions;
- STOS route manifest/bundle isolation;
- STOS typecheck/build;
- STOS immutable smoke contract;
- shared contracts actually consumed by STOS.

Must not include Cho Kenh inventory/search/mobile/seller/trust gates.

### Cho Kenh predeploy

Must include:

- source/ownership for Cho Kenh transitive closure;
- search safety;
- inventory and inventory API;
- mobile states;
- seller intake;
- trust routes;
- buyer request/CRM/Zalo persistence and privacy contracts;
- Cho Kenh route manifest/bundle isolation;
- Cho Kenh typecheck/build;
- Cho Kenh immutable smoke contract;
- shared contracts actually consumed by Cho Kenh.

Must not include STOS CMS/public/workspace/data gates.

### Broad integration QA

Retain broad QA only for:

- shared package contract migration;
- scheduled integration audit;
- control-plane/gateway change;
- explicit multi-product release.

Broad integration QA report cannot overwrite either product release verdict. It emits impacted findings routed to owners.

## 22. Route and bundle isolation gates

After each app build, inspect actual Next manifests/build traces.

STOS artifact must fail if it contains:

- `/cho-kenh/**`;
- `/tiktok-channel-starter/**` unless an explicit external redirect-only compatibility route is approved;
- Cho Kenh API routes;
- `src/channel-marketplace/**` modules;
- Cho Kenh product CSS/assets/private env.

Cho Kenh artifact must fail if it contains:

- `/stos/**`;
- `/stos-admin/**`;
- `/sales-traffics-os/**` unless explicit external redirect-only compatibility is approved;
- `/u/**` STOS public routes;
- STOS APIs;
- `src/stos/**` modules;
- STOS product CSS/assets/private env.

Verify:

- route manifest;
- app-build manifest;
- server trace/file list;
- client chunk import graph;
- static assets;
- environment exposure;
- sitemap/robots/canonical URLs;
- unknown route returns correct 404 or external redirect, never hidden render.

## 23. Product-specific release train

Each product release train performs:

1. Load and validate product registry entry.
2. Acquire product release lock only.
3. Source steward product transitive closure.
4. Create source snapshot manifest.
5. Run product predeploy.
6. Build product app into product artifact directory.
7. Assert forbidden route/module absence.
8. Capture product-specific rollback target.
9. Deploy immutable artifact to product Vercel project with `--skip-domain` or equivalent approved contract.
10. Inspect immutable deployment and project identity.
11. Run product immutable smoke.
12. Promote only product production alias.
13. Verify alias resolves to expected deployment ID/project.
14. Run product post-deploy smoke.
15. Roll back only product alias on failure.
16. Write product ledger.
17. Release product lock/resources.

No release train may read default `growth-commerce-os.vercel.app` for both products after separation. Production URL is required from product registry/env.

## 24. Independent ledgers and rollback

Ledger paths:

```text
agent-system/reports/release-ledger/stos/<release-id>/release-ledger.json
agent-system/reports/release-ledger/cho-kenh/<release-id>/release-ledger.json
```

Ledger contains:

- product;
- app root;
- source snapshot/dependency graph hashes;
- QA commands/results;
- Vercel project safe ID;
- immutable deployment ID/URL;
- alias host;
- previous deployment ID/URL;
- promotion status;
- post-deploy smoke;
- rollback status;
- timestamps/owner.

STOS rollback cannot change Cho Kenh alias. Cho Kenh rollback cannot change STOS alias.

## 25. Shared package change policy

Shared does not mean synchronized deployment.

For every shared package change:

1. Determine consumers from explicit workspace dependencies.
2. Determine compatibility: additive, backward-compatible, breaking.
3. Generate impacted product set.
4. Run contract tests for impacted consumers.
5. Build separate immutable candidates.
6. For additive/backward-compatible changes, products may promote independently.
7. For breaking changes, use expand-contract or versioned API/package; deploy compatible providers/consumers in safe order.
8. Do not require simultaneous alias promotion unless architecture proves atomic multi-product cutover is required.
9. If only one product consumes package, other product is not involved.

## 26. Domains, compatibility and SEO

Create a route/domain cutover map before activation.

For each existing public URL:

- current host/path;
- target product host/path;
- status code/redirect/proxy strategy;
- canonical URL;
- sitemap owner;
- robots behavior;
- cookie/session impact;
- analytics attribution;
- rollback behavior.

Rules:

- Prefer distinct product domains/aliases.
- Keep old links working through reviewed 301/308 redirects after target is verified.
- Do not redirect API/auth callback blindly.
- Preserve query parameters/UTM safely.
- Prevent redirect loops.
- Update OAuth callback, CORS, CSRF, cookie domain and trusted origin lists.
- Do not create duplicate indexable content across old/new hosts.
- If a gateway/microfrontend is used to preserve one domain, it must be a third independent routing project and cannot merge artifacts back together.

## 27. Observability isolation

Every log/metric/trace includes product identifier.

Separate:

- deployment health;
- request/error rate;
- release version;
- product funnel metrics;
- alerts;
- SLOs;
- incident routing.

STOS production incident does not automatically mark Cho Kenh down. Shared backend incident may affect both but must report separate impact.

## 28. Migration phases

### Phase 0 - audit and ADR

- Capture current route/import/API/style/asset/env graph.
- Capture baseline builds, route manifests, QA and production URL map.
- Write ADR with alternatives and decision.
- No source movement yet.

### Phase 1 - workspace/control-plane foundation

- Add npm workspaces and unique package names.
- Add base TypeScript/config packages.
- Add dependency boundary validator.
- Add product release registry.
- Parameterize runtime/lock/ledger paths by product.
- Keep legacy app behavior unchanged.

### Phase 2 - extract neutral packages

- Move only proven shared contracts/primitives.
- Add package exports and consumer dependencies.
- Prove no product policy leaked into shared packages.

### Phase 3 - create Cho Kenh app root

- Move/adapt Cho Kenh routes/APIs/domain/styles/assets.
- Replace current host rewrites with app-native root paths or explicit compatibility redirects.
- Run Cho Kenh-only build/QA and forbidden STOS manifest checks.
- Legacy production remains unchanged.

### Phase 4 - create STOS app root

- Move/adapt STOS routes/APIs/domain/styles/assets.
- Preserve `/u/[slug]`, workspace flows and auth/data contracts.
- Run STOS-only build/QA and forbidden Cho Kenh manifest checks.
- Legacy production remains unchanged.

### Phase 5 - company/shared root cleanup

- Keep root as Company Site app or move to `apps/company-site-web` based on ADR.
- Remove migrated product routes from legacy app only after parity evidence.
- Ensure root Company Site artifact no longer contains STOS/Cho Kenh product implementations unless explicit gateway redirects.

### Phase 6 - release train shadow mode

- Run STOS and Cho Kenh product release trains with `--dry-run`/no deploy.
- Compare artifact routes, sizes, QA time, dependency closure and ledger output.
- Inject failure and prove rollback target isolation without production mutation.

### Phase 7 - preview/canary preparation

- Prepare Vercel project settings manifests and activation checklist.
- External project creation/linking requires approval.
- Deploy preview only after explicit approval.
- Run full product smoke on preview URLs.

### Phase 8 - production cutover

- Not part of this default no-deploy run.
- Requires explicit user approval, credentials, verified preview, domain plan and rollback rehearsal.
- Cut over one product at a time.

## 29. Backward compatibility

During migration:

- Legacy combined app remains known-good production fallback.
- New app routes match functional behavior before domain cutover.
- API contracts are versioned or adapter-backed.
- Data writes are not duplicated accidentally.
- Analytics events are not double-counted.
- Preview traffic cannot mutate production without approved safe mode.
- Old route redirects are activated only after target product production is healthy.
- Remove legacy implementation only after monitoring window and rollback confidence.

## 30. Required tests: architecture

1. Root workspace graph resolves both apps and shared packages.
2. Every workspace package name is unique.
3. Every internal dependency is explicitly declared.
4. Dependency graph rejects STOS -> Cho Kenh imports.
5. Dependency graph rejects Cho Kenh -> STOS imports.
6. Shared package rejects import from product app/domain.
7. Product release registry has unique roots/locks/ledgers/project env keys.
8. Unknown product fails closed.
9. Deploy command without explicit product fails closed.
10. Existing Company Site routes remain assigned.

## 31. Required tests: artifact isolation

11. STOS build route manifest contains required STOS routes.
12. STOS build route manifest contains no Cho Kenh routes/APIs.
13. STOS bundle graph contains no channel-marketplace modules.
14. STOS client bundle contains no Cho Kenh env/assets/styles.
15. Cho Kenh build route manifest contains required Cho Kenh routes.
16. Cho Kenh build route manifest contains no STOS routes/APIs.
17. Cho Kenh bundle graph contains no STOS modules.
18. Cho Kenh client bundle contains no STOS env/assets/styles.
19. Both artifacts return correct 404/redirect for forbidden routes.
20. Company Site artifact does not regress.

## 32. Required tests: release isolation

21. Active STOS release lock does not block Cho Kenh source QA/build/release dry-run.
22. Active Cho Kenh release lock does not block STOS source QA/build/release dry-run.
23. STOS snapshot ignores unrelated Cho Kenh file change.
24. Cho Kenh snapshot ignores unrelated STOS file change.
25. Shared package consumed by both invalidates both candidates independently.
26. Shared package consumed only by STOS does not invalidate Cho Kenh.
27. Dist directories cannot overwrite each other.
28. Runtime ports/leases cannot collide silently.
29. STOS ledger never points to Cho Kenh project/alias.
30. Cho Kenh ledger never points to STOS project/alias.
31. STOS rollback command targets only STOS alias/deployment.
32. Cho Kenh rollback command targets only Cho Kenh alias/deployment.
33. Old global release lock is ignored by product lane after cutover unless it owns a proven shared resource.
34. Broad integration QA failure does not overwrite unrelated product candidate status.

## 33. Required tests: product QA

### STOS

35. Required STOS route smoke passes.
36. STOS account -> template -> content -> preview -> publish -> copy link flow passes in safe test mode.
37. STOS public page responsive matrix passes.
38. STOS private/admin endpoints deny anonymous access.
39. STOS publish/data/privacy contracts pass.

### Cho Kenh

40. Marketplace/catalog/detail/search routes pass.
41. Search safety and public projection privacy pass.
42. Inventory/API contracts pass.
43. Buyer request/CRM/Zalo persistence does not fake success.
44. Mobile search/menu/filter states pass.
45. Seller intake/trust routes pass.

## 34. Required tests: cutover safety

46. Old URL -> new target mapping has no loop.
47. Canonical/sitemap/robots reflect one owner per product URL.
48. Session/cookie/auth callback works on target host.
49. CORS/CSRF/trusted origins are product scoped.
50. Preview cannot expose secrets or mutate production unexpectedly.
51. Product observability identifies deployment/project/version.
52. Rollback rehearsal restores previous product target without affecting the other.

## 35. QA execution order

After each implementation batch:

1. Run exact ownership guard for changed files.
2. `node --check` changed scripts.
3. Run workspace/dependency-boundary unit tests.
4. Run product registry/lock/ledger tests.
5. Run affected app typecheck.
6. Run affected app build.
7. Inspect route and bundle manifests.
8. Run product-specific QA.
9. Run Company Site compatibility smoke when shared/root files changed.
10. Run runtime-isolation tests.
11. Run release-train dry-run only for affected product.
12. Run broad integration QA only for explicit shared changes, never as default product gate.

Do not run production deploy in this task.

## 36. Continuous root-cause repair loop

For every failure:

1. Capture product, app root, package, command, route/module, artifact hash and error fingerprint.
2. Classify `PRODUCT_CODE`, `SHARED_CONTRACT`, `DEPENDENCY_EDGE`, `BUILD_CONFIG`, `BUNDLE_LEAK`, `QA_HARNESS`, `RUNTIME_LANE`, `RELEASE_REGISTRY`, `VERCEL_CONFIG`, `ENVIRONMENT`, `AUTH_DATA`, `MIGRATION`.
3. Reproduce smallest deterministic failure.
4. Find canonical owner/source.
5. Fix smallest durable root cause.
6. Rerun smallest test.
7. Rerun affected product gate only.
8. Rerun cross-product integration only when changed shared contract requires it.
9. If same fingerprint repeats twice, meta-diagnose hidden cross-import, implicit root dependency, cache/dist collision, route compatibility adapter, env fallback, lock key collision and stale manifest.

Do not call product hard blocked while safe migration/QA work remains. Temporary external Vercel credential/project setup is `AWAITING_ACTIVATION`, not product failure.

## 37. Hard stops

Stop and ask only when:

- Vercel project creation/link/domain change needs user credentials or approval.
- Production DNS/domain/OAuth callback change needs approval.
- Destructive production data/schema migration is required.
- Auth/security boundary cannot be inferred safely.
- Exact source path is owned by another live task without handoff/lease path.
- External service outage prevents required proof and no safe local work remains.

Every hard stop returns exact action and resume checkpoint. It does not mark the other product blocked.

## 38. Rollback

Every phase has rollback:

- Workspace foundation: restore root scripts/package metadata and lockfile from phase backup.
- Package extraction: retain compatibility re-exports until consumers migrate.
- App extraction: legacy route stays live until parity/cutover.
- Release train: feature flag selects legacy vs product train; no mixed promotion.
- Vercel project setup: no production domain assignment before preview acceptance.
- Domain cutover: restore previous alias/DNS/redirect config.
- Data/auth: no destructive change without separate rollback-tested migration.

Never use broad `git reset --hard`, stash or checkout that would discard unrelated work.

## 39. Deliverables

Produce:

- architecture ADR;
- current route/import/env/style/asset inventory;
- product dependency graph;
- migration matrix;
- workspace configuration;
- STOS app root;
- Cho Kenh app root;
- explicit shared packages;
- product release registry;
- product-scoped locks/runtime/ledgers;
- product predeploy pipelines;
- artifact isolation validator;
- Vercel project setup manifests/checklist without secrets;
- preview/cutover/rollback runbooks;
- tests and evidence;
- owner handoff packets.

## 40. Final output contract

Return:

```md
# STOS / Cho Kenh Separation Result

Decision: PASS | PASS_WITH_RISK | AWAITING_ACTIVATION | HARD_BLOCKED
Production mutated: no

## Architecture
- monorepo/workspaces
- app roots
- shared packages
- dependency graph

## STOS
- routes/APIs
- build artifact
- QA
- release lock/ledger
- Vercel project readiness
- rollback

## Cho Kenh
- routes/APIs
- build artifact
- QA
- release lock/ledger
- Vercel project readiness
- rollback

## Isolation proof
- forbidden routes/modules per artifact
- source snapshot invalidation tests
- concurrent lock/runtime tests

## Company Site compatibility
- preserved routes and evidence

## Files changed
- path, namespace, owner, reason, rollback

## External activation needed
- Vercel project creation/link
- env secrets
- domains/OAuth/DNS
- exact user action

## Remaining migration batches
- state, owner, prerequisite, next command/event
```

Do not claim separation PASS if both products still share one Next route manifest, one Vercel project, one alias, one release lock or one rollback target. Begin with source/ownership audit and dependency graph, then implement in safe batches. Do not deploy production.
