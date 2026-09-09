# BRD - Growth Commerce OS

Version: 0.1  
Date: 2026-05-28  
Owner: Company Admin / Product Owner  
Build direction: Manual-first MVP, API-ready architecture
Delivery plan: see `SPRINT_PLAN_Growth_Commerce_OS.md`

## 1. Executive Summary

Growth Commerce OS là hệ thống nội bộ để vận hành content, editor, affiliate product research, landing page, sales portfolio và social asset management cho công ty.

Giai đoạn đầu tập trung vào:

- Phủ nội dung và xây branding.
- TikTok là kênh social đầu tiên.
- Kéo traffic từ TikTok/Facebook/Instagram về portfolio hoặc landing page.
- Chuyển đổi qua Shopee affiliate, TikTok Shop affiliate hoặc link contact Zalo/Messenger.
- Team content nhập thủ công thông tin sản phẩm, link affiliate, commission, CTR, lượt bán, rating/review.
- Team editor nhận brief, upload bản edit, đợi content review.
- Sales dùng portfolio cá nhân để tư vấn khách qua Zalo/Messenger, không cần CRM phức tạp ở MVP.

Giai đoạn sau mở rộng:

- API connector cho TikTok, TikTok Shop, Shopee, Meta/Facebook, Canva/Figma.
- Dashboard performance tự động.
- Nhập hàng, quản lý SKU, fulfillment, finance, payout.
- AI agents hỗ trợ research, brief, copywriting, scoring, QA và analytics.

## 2. Business Context

Công ty đang ở giai đoạn xây nền branding và phủ nội dung, trước mắt bán qua affiliate. Cuối năm định hướng tự nhập phụ kiện nữ về để phát triển shop và vận hành fulfillment nội bộ.

Hệ thống cần hỗ trợ nhiều team:

- Content team: tìm sản phẩm, lên ý tưởng, tạo brief, gửi asset cho editor, review bản edit.
- Editor team: nhận brief, dựng video/creative, upload version, sửa theo feedback.
- Sales team: có portfolio riêng để tư vấn khách, gửi link contact Zalo/Messenger.
- Performance/team lead: xem chỉ số sản phẩm, content, landing, campaign.
- Admin: phân quyền, kiểm soát template, sản phẩm, branding và dữ liệu.
- Future fulfillment team: xử lý đơn, tồn kho, vận chuyển khi công ty tự nhập hàng.

## 3. Product Vision

Hệ thống không được hard-code chỉ cho TikTok. Core model cần channel-agnostic:

```text
Social Channel -> Content -> Landing Page / Portfolio -> Offer -> Affiliate / Shop / Own Store
```

TikTok là bến đỗ đầu tiên, nhưng hệ thống phải mở rộng được sang:

- Facebook Page/Profile/Group.
- Instagram.
- Shopee affiliate.
- TikTok Shop affiliate.
- Own store khi công ty tự nhập hàng.
- Canva/Figma/design platform cho creative workflow.

## 4. Goals

### 4.1 Business Goals

- Tạo một hệ thống nội bộ để team làm content và affiliate bài bản.
- Giảm thất lạc brief, hình ảnh, video, feedback qua chat.
- Giúp sales có trang portfolio cá nhân để tư vấn khách nhanh.
- Giúp team chọn sản phẩm dựa trên link, commission, CTR, lượt bán, rating/review.
- Theo dõi được view/click/contact/landing/product performance ở mức cơ bản.
- Chuẩn bị nền tảng để cuối năm chuyển từ affiliate sang tự nhập hàng.

### 4.2 Technical Goals

- Build MVP nhanh bằng modular monolith.
- Manual-first: nhập liệu thủ công trước, API tích hợp sau.
- API-ready: schema và connector boundary phải sẵn để thêm sync tự động.
- Role-based access control ngay từ đầu.
- Audit log cho các thao tác quan trọng.
- Không lưu password/cookie/2FA của social accounts.

## 5. Non-Goals For MVP

MVP không build:

- CRM phức tạp, deal pipeline, proposal pipeline.
- Auto sync API bắt buộc từ TikTok/Shopee/Facebook.
- Fulfillment, warehouse, purchase order.
- Payment/payout/finance portal đầy đủ.
- Video timestamp annotation nâng cao.
- Own checkout/store.
- Auto-publish content không có approval.
- Lưu credential/password social account.

## 6. User Roles

### 6.1 Admin

Quản lý hệ thống, user, team, role, template, branding, sản phẩm, approval và audit log.

### 6.2 Sales

Quản lý portfolio cá nhân, contact links, chọn case/product/landing demo được phép hiển thị, copy link gửi khách.

### 6.3 Sales Manager

Review portfolio, quản lý sales profile, theo dõi view/click/contact của sales.

### 6.4 Content Member

Tìm sản phẩm, nhập thông tin sản phẩm/link affiliate/chỉ số thủ công, tạo idea/brief, gửi task cho editor, review bản edit.

### 6.5 Content Lead

Duyệt sản phẩm, duyệt brief, review output, kiểm soát campaign/content calendar.

### 6.6 Editor

Nhận task, xem brief/asset/reference, upload bản edit, upload version sửa, resolve feedback.

### 6.7 Performance Member

Xem dashboard, nhập/import chỉ số, phân tích sản phẩm/content/landing/campaign.

### 6.8 Fulfillment Member - Future

Quản lý SKU, tồn kho, đơn hàng, vận chuyển, hoàn hàng khi công ty tự nhập hàng.

## 7. System Modules

### 7.1 Admin & RBAC Portal

Purpose: quản lý tổ chức, thành viên, phân quyền và audit.

MVP scope:

- Tạo/sửa/xóa user.
- Tạo team.
- Gán role cho user.
- Quản lý permission theo module.
- Audit log cho hành động quan trọng.
- Global settings: brand name, logo, default contact, social links.

Core permissions:

```text
admin.manage_users
admin.manage_roles
admin.manage_taxonomy
company_site.manage
company_site.publish
leads.view
portfolio.manage_templates
portfolio.publish
product.create
product.review
product.approve
content.create_brief
content.assign_editor
content.review_output
editor.upload_version
landing.create
landing.publish
analytics.view
```

Acceptance criteria:

- Admin có thể tạo user và gán role.
- User chỉ thấy module đúng quyền.
- Các hành động approve/publish/delete được ghi audit log.

### 7.1.1 Channel Taxonomy & Tagging

Purpose: phân loại rõ nội dung/kênh theo mục tiêu kinh doanh để content và editor không làm lẫn giữa kênh affiliate/shop nội bộ và kênh dịch vụ xây social cho khách hàng.

Core channel categories:

```text
affiliate_channel
shop_channel
service_client_channel
company_brand_channel
demo_channel
```

Meaning:

- `affiliate_channel`: kênh dùng để kéo traffic sang Shopee/TikTok Shop affiliate.
- `shop_channel`: kênh phục vụ bán sản phẩm/shop của công ty, nhất là giai đoạn tự nhập hàng.
- `service_client_channel`: kênh/dự án phục vụ khách hàng thuê công ty xây social.
- `company_brand_channel`: kênh branding cho công ty.
- `demo_channel`: kênh/case dùng để làm demo năng lực cho sales/portfolio.

Common tags:

```text
business_line: affiliate | shop | client_service | branding | demo
platform: tiktok | facebook | instagram | shopee | tiktok_shop
vertical: phu_kien_nu | beauty | fashion | lifestyle | education | local_service
objective: awareness | engagement | traffic | conversion | portfolio_demo | client_delivery
content_format: short_video | carousel | image | livestream | story | ad_creative
funnel_stage: top | middle | bottom
ownership_type: company_owned | client_owned | partner_owned
```

MVP scope:

- Admin/content lead quản lý tag categories và tags.
- Social account bắt buộc có `business_line` và `ownership_type`.
- Content task bắt buộc chọn `business_line`, `objective`, `platform`.
- Product/offer mặc định thuộc `affiliate` hoặc `shop`.
- Landing page có `landing_type` và `business_line`.
- Portfolio/case study có thể filter theo tag để sales chọn đúng demo.

Acceptance criteria:

- Khi tạo social account, user phải chọn kênh thuộc affiliate/shop/client service/brand/demo.
- Khi tạo brief, content phải chọn mục tiêu nội dung và business line.
- Editor nhìn thấy tag ngay trên task detail.
- Dashboard có thể filter theo business line, platform và objective.

### 7.2 Social Asset Inventory

Purpose: quản lý các kênh/tài sản social do công ty sở hữu hoặc được ủy quyền quản lý. TikTok là platform đầu tiên.

MVP scope:

- Thêm social account thủ công.
- Platform: TikTok, Facebook, Instagram.
- Lưu profile URL, username, niche, country, language, owner/team, status.
- Phân loại kênh theo business line: affiliate, shop, client service, company brand, demo.
- Lưu ownership type: company owned, client owned, partner owned.
- Gắn tags: vertical, objective, funnel stage, content format.
- Lưu metric snapshot thủ công: followers, views, engagement, note.
- Gắn social account với content/campaign/landing page.

Important policy:

- Không lưu password, cookie, 2FA, recovery code.
- Sau này chỉ tích hợp OAuth/API chính thức khi có quyền.

Statuses:

```text
draft
verifying
active
in_campaign
paused
suspended
archived
```

Acceptance criteria:

- Admin/content lead tạo được social asset.
- Content task có thể gắn với social asset.
- Social asset có tag phân loại rõ mục đích affiliate/shop/client service/brand/demo.
- Có lịch sử snapshot metric theo ngày.

### 7.3 Sales Portfolio CMS

Purpose: mỗi sales có một trang portfolio riêng để gửi khách, tư vấn qua Zalo/Messenger, không cần CRM phức tạp.

MVP scope:

- Sales profile: avatar, name, title, bio, contact links.
- Contact links: Zalo, Messenger, phone, email, Facebook.
- Portfolio page builder theo block.
- Admin tạo template chung.
- Sales tạo page từ template.
- Sales bật/tắt section.
- Sales chọn case study, service package, product collection, landing demo được admin duyệt.
- Tracking nhẹ: page view, contact click, product click, landing click.

Routes example:

```text
/s/duy
/s/duy/affiliate-demo
/s/duy/tiktok-growth
```

CMS blocks:

```text
hero
sales_profile
company_intro
service_packages
case_studies
product_collections
landing_demos
faq
contact_cta
```

Acceptance criteria:

- Sales tạo/sửa được portfolio của mình.
- Public portfolio có link contact Zalo/Messenger.
- Hệ thống track được lượt xem và lượt click CTA.
- Sales không thể publish asset/case/product chưa được approve nếu rule yêu cầu approve.

### 7.4 Landing Page CMS

Purpose: tạo landing page để kéo traffic từ TikTok/Facebook/Instagram sang Shopee/TikTok Shop/offer khác.

MVP scope:

- Tạo landing page từ template.
- Hỗ trợ template bio landing dạng menu sản phẩm đã review.
- Phân loại landing theo business line: affiliate, shop, client service, branding, demo.
- Block-based page builder.
- Gắn product collection.
- Gắn offer/link affiliate.
- Tạo tracked redirect link.
- Public landing page.
- Tracking page view, CTA click, product click, outbound click.

Routes example:

```text
/c/phu-kien-nu-duoi-199k
/p/tui-nu-di-choi
/bio/gon-xinh-daily
/go/abc123
```

CMS blocks:

```text
hero
video_embed
product_grid
product_card
bio_product_menu
comparison
review_summary
faq
cta_button
contact_button
```

Landing page types:

```text
bio_menu
campaign_page
product_collection
single_product
sales_demo
client_service_case
brand_profile
```

### 7.4.1 TikTok Bio Product Menu Landing

Purpose: tạo một landing page gọn để gắn ở bio TikTok. Landing này đóng vai trò như "kệ hàng" cho các sản phẩm đã review trong video, sau đó từng nút sản phẩm mới dẫn qua Shopee/TikTok Shop bằng affiliate link riêng.

Problem solved:

- Không bị giới hạn chỉ bán một sản phẩm qua một link bio.
- Không phải đổi link bio liên tục mỗi khi đổi sản phẩm trong video.
- Có thể biết sản phẩm nào được click nhiều từ bio.
- Có thể gắn tracking/sub_id riêng cho từng sản phẩm hoặc từng video.

Standard flow:

```text
TikTok video
-> CTA: "Mình để mẫu này ở bio"
-> Bio landing page
-> Customer chooses matching product card
-> Customer clicks tracked CTA
-> Shopee/TikTok Shop product page
-> Marketplace closes the order
```

Example page:

```text
Gọn Xinh Daily
Mấy món phụ kiện tóc xinh, tiện, dễ dùng hằng ngày.

Product card 1: Kẹp voan tulip nàng thơ
Pain: Kẹp xinh nhưng hay tuột?
Solution: Răng bám chắc, hợp tóc dày muốn lên hình nữ tính.
CTA: Xem màu trên Shopee

Product card 2: Kẹp càng cua bản to
Pain: Tóc dày, tóc dài cần búi nhanh?
Solution: Bản to giữ tóc gọn khi đi làm hoặc ở nhà.
CTA: Xem set trên Shopee

Product card 3: Set thun cột tóc mềm
Pain: Buộc tóc bị kéo căng da đầu?
Solution: Chất mềm, gọn tóc, dễ phối hằng ngày.
CTA: Xem combo trên Shopee
```

Product card required fields:

```text
image
product_name
short_benefit
pain_point
price_or_offer
platform_badge
cta_label
offer_id
tracking_code
display_order
status
```

CTA rules:

- Mỗi product card phải dẫn tới một offer/link affiliate riêng.
- Mỗi CTA phải đi qua `/go/[code]` trước khi redirect sang Shopee/TikTok Shop.
- Mỗi redirect link nên có `sub_id` hoặc tracking code riêng.
- CTA copy phải giúp khách nhận ra đúng món vừa xem trong video.

Sub ID examples:

```text
BIO_KEPVOAN
BIO_KEPCANGCUA
BIO_THUNTOC
BIO_KEPMINI
```

Video CTA examples:

```text
Mình để mẫu kẹp voan này ở bio, bấm vào chọn đúng hình nha.
Mẫu kẹp bản to này mình để ở bio, bấm vào card đầu tiên nha.
Vào bio, chọn đúng mẫu kẹp hoa tulip nha.
```

UX requirements:

- Mobile-first.
- Không dài như website bán hàng.
- Không viết review dài; mỗi card chỉ cần pain, solution và CTA.
- Sản phẩm mới nhất hoặc sản phẩm đang viral nên được pin lên đầu.
- Ảnh sản phẩm phải đủ rõ để khách match với video vừa xem.
- Nút CTA phải nổi bật và dễ bấm bằng một tay.

Acceptance criteria:

- Content/admin tạo được landing page.
- Landing page hiển thị product collection.
- Bio landing hiển thị danh sách product card ngắn, rõ, mobile-first.
- CTA đi qua redirect tracking trước khi sang Shopee/TikTok Shop.
- Event click được lưu với source/campaign/page/product/offer nếu có.

### 7.5 Product & Offer Intelligence

Purpose: giúp content team nhập thủ công sản phẩm affiliate, link TikTok Shop/Shopee, commission, CTR, lượt bán, rating/review để team review và chọn sản phẩm làm content.

Core principle:

- Product là sản phẩm nội bộ.
- Offer là link bán/affiliate cụ thể trên từng nền tảng.
- Metric là snapshot theo thời gian, không ghi đè cứng.

MVP workflow:

```text
Content tìm sản phẩm trên TikTok Shop/Shopee
-> nhập Product Candidate
-> gắn product URL/affiliate URL
-> nhập commission, CTR, lượt bán, rating, review count
-> upload screenshot proof nếu có
-> submit for review
-> content lead/admin approve hoặc reject
-> approved product được dùng trong brief/landing/portfolio
```

Product fields:

```text
name
category
business_line: affiliate | shop | client_service | branding | demo
description
target_persona
content_angle
status
created_by
reviewed_by
review_note
```

Offer fields:

```text
product_id
platform: tiktok_shop | shopee | lazada | own_store
product_url
affiliate_url
tracking_url
shop_name
price
commission_rate
commission_amount
status
```

Metric snapshot fields:

```text
offer_id
captured_by
captured_at
sales_count
ctr
rating
review_count
displayed_commission
screenshot_url
note
```

Statuses:

```text
draft
pending_review
approved
rejected
paused
expired
out_of_stock
```

Acceptance criteria:

- Content có thể nhập thủ công product candidate.
- Content có thể gắn TikTok Shop/Shopee product URL và affiliate URL.
- Content có thể nhập commission, CTR, lượt bán, rating, review count.
- Lead/admin có queue để review approve/reject.
- Chỉ product approved mới xuất hiện trong brief/landing selection mặc định.

### 7.6 Content Production Portal

Purpose: quản lý workflow từ idea, brief, asset, assignment, editor upload, content review đến approved output.

MVP workflow:

```text
Idea
-> Brief Draft
-> Brief Approved
-> Sent to Editor
-> Editing
-> Editor Uploaded Draft
-> Content Review
-> Revision Requested / Approved
-> Ready to Publish
-> Published / Archived
```

Content team can:

- Tạo idea.
- Tạo brief từ template.
- Chọn business line: affiliate, shop, client service, branding, demo.
- Chọn objective: awareness, engagement, traffic, conversion, portfolio demo, client delivery.
- Gắn product/offer.
- Gắn social asset/channel.
- Gắn landing page.
- Upload image/reference/raw asset.
- Assign editor.
- Review version editor upload.
- Request revision hoặc approve.

Editor team can:

- Xem assigned tasks.
- Nhìn rõ tag business line/objective/platform ngay trên task.
- Xem brief/reference/product/landing.
- Upload creative/video version.
- Upload revision.
- Mark done.

Brief template:

```text
Hook
Concept
Business line
Objective
Target audience
Product/offer
Script
Visual direction
Assets/reference
Deliverable format
CTA
Deadline
```

Task fields:

```text
title
platform
business_line
objective
vertical
content_type
campaign_id
product_id
offer_id
landing_page_id
social_account_id
assigned_content_user_id
assigned_editor_user_id
status
priority
deadline
final_asset_id
```

Creative version fields:

```text
content_task_id
version_number
file_url
uploaded_by
status
note
```

Review comment fields:

```text
creative_version_id
comment
created_by
resolved_at
```

Acceptance criteria:

- Content tạo brief và assign editor.
- Brief thể hiện rõ task thuộc affiliate/shop/client service/branding/demo.
- Editor xem task và upload version.
- Editor không cần đoán mục tiêu task vì tag/objective hiển thị rõ.
- Content comment, request revision hoặc approve.
- Task board thể hiện trạng thái hiện tại.
- Approved creative có thể gắn vào landing/content calendar.

### 7.7 Design Asset Library

Purpose: quản lý ảnh, reference, logo, template, creative file cho content/editor.

MVP scope:

- Upload file.
- Gắn file với product, brief, task, landing page.
- Tag theo category/platform/campaign.
- Basic preview/download.

Future:

- Canva connector.
- Figma connector.
- Auto export creative.
- Template sync.

Acceptance criteria:

- Content upload asset vào task.
- Editor xem/download asset trong task.
- File có owner, tag, created_at.

### 7.8 Performance Dashboard

Purpose: xem chỉ số cơ bản theo content, landing, product, offer, sales portfolio và social channel.

MVP manual-first metrics:

- Page views.
- CTA clicks.
- Product clicks.
- Outbound clicks.
- Contact clicks.
- Manual product metrics: CTR, sales count, commission, rating/review.
- Manual import/conversion input nếu có report từ Shopee/TikTok Shop.

Dashboards:

- Top products by commission.
- Top products by CTR.
- Top products by sales count.
- Top products by rating/review.
- Top landing pages by click.
- Top sales portfolios by contact click.
- Content board throughput.
- Editor workload.

Acceptance criteria:

- Admin/content lead xem được top product candidates.
- Sales xem được portfolio view/contact click của mình.
- Content lead xem được task status và bottleneck.

### 7.9 Affiliate & Commerce Future Layer

Purpose: chuẩn bị cho giai đoạn công ty tự nhập hàng.

Future scope:

- SKU management.
- Supplier.
- Purchase order.
- Warehouse stock.
- Order management.
- Fulfillment.
- Return/refund.
- Own store checkout.
- Shopee seller/TikTok Shop seller connector.

MVP only:

- Product and offer abstraction phải đủ để chuyển từ affiliate link sang own store offer sau này.

### 7.10 Company Website & Lead Capture

Purpose: xây trang web chính của công ty để giới thiệu thương hiệu, dịch vụ, năng lực triển khai social/content/affiliate/shop và thu thông tin khách cần tư vấn.

Difference from sales portfolio:

- Company website là mặt tiền thương hiệu chính thức của công ty.
- Sales portfolio là trang cá nhân của từng sales để gửi khách qua Zalo/Messenger.
- Company website có thể dẫn sang portfolio sales, landing demo, case study, product demo và form tư vấn.

MVP scope:

- Public homepage.
- Service overview pages.
- Case study/demo section.
- Product/affiliate demo links.
- Social channel demo links.
- Contact/consultation form.
- Admin-managed company site content blocks.
- Lead capture storage.
- Basic tracking: page view, service click, demo click, form submit.

Suggested public routes:

```text
/
/about
/services
/services/social-channel-building
/services/content-production
/services/affiliate-growth
/services/tiktok-shop-growth
/demos
/case-studies
/contact
```

Homepage sections:

```text
hero
company_intro
service_overview
why_us
workflow
case_studies
demo_links
affiliate_product_demo
social_channel_demo
team_or_sales_cta
consultation_form
faq
footer
```

Service categories:

```text
social_channel_building
content_production
editorial_video_production
affiliate_growth
landing_page_funnel
tiktok_shop_growth
shopee_affiliate_growth
brand_social_management
```

Consultation form fields:

```text
full_name
phone
zalo
facebook_url
email
company_name optional
service_interest
budget_range optional
message
source_page
utm_source
utm_campaign
```

Lead statuses:

```text
new
contacted
qualified
not_fit
closed
spam
```

Acceptance criteria:

- Public homepage giới thiệu rõ thương hiệu và dịch vụ.
- Khách có thể xem demo/case/product/landing links từ website chính.
- Khách có thể gửi form tư vấn gồm số điện thoại, Zalo, Facebook link và email.
- Admin/sales manager xem được danh sách consultation leads.
- Form submit được ghi event và lưu source page/UTM nếu có.

### 7.11 API Connector Layer - Future

Purpose: sau MVP thủ công, tích hợp API để đồng bộ dữ liệu tự động.

Connector folders:

```text
connectors/tiktok
connectors/tiktok-shop
connectors/shopee
connectors/meta
connectors/canva
connectors/figma
```

API-ready rules:

- Mọi metric phải có `source`: manual | api | import.
- Mọi snapshot có `captured_at`.
- Không ghi đè dữ liệu lịch sử.
- API sync chạy qua background job.
- Manual input luôn là fallback.

## 8. Core Workflows

### 8.1 Product Research Manual Workflow

```text
Content opens Product Portal
-> clicks Add Product Candidate
-> enters product name, category, platform
-> pastes TikTok Shop/Shopee product URL
-> pastes affiliate URL if available
-> enters price, commission, CTR, sales count, rating, review count
-> uploads screenshot proof
-> submits for review
-> Content Lead approves/rejects
-> Approved product becomes available in Brief/Landing/Portfolio
```

### 8.2 Content To Editor Workflow

```text
Content creates brief
-> attaches approved product/offer
-> uploads images/reference
-> assigns editor and deadline
-> editor receives task
-> editor uploads version 1
-> content reviews and comments
-> editor uploads revision if needed
-> content approves final
-> task moves to Ready to Publish
```

### 8.3 Sales Portfolio Workflow

```text
Admin creates portfolio template
-> sales fills profile and contact links
-> sales selects approved case/product/landing demo
-> sales publishes page
-> customer opens page
-> customer clicks Zalo/Messenger
-> page_events store view/click
```

### 8.4 Landing Page Affiliate Workflow

```text
Content/Admin creates landing page
-> selects product collection
-> each product has offer and affiliate URL
-> customer clicks CTA
-> system records click_event
-> system redirects via /go/{code}
-> customer lands on Shopee/TikTok Shop
```

### 8.4.1 TikTok Bio Landing Workflow

```text
Content posts TikTok video
-> video CTA tells customer to open bio and choose the matching product
-> TikTok bio points to one stable bio landing page
-> bio landing shows reviewed product cards
-> customer clicks the matching product card
-> system records page_id, product_id, offer_id, source, sub_id
-> system redirects through /go/{code}
-> customer lands on Shopee/TikTok Shop affiliate product URL
```

Bio landing event fields:

```text
source_platform: tiktok
source_surface: bio
landing_type: bio_menu
landing_page_id
product_id
offer_id
redirect_link_id
sub_id
content_task_id optional
social_account_id optional
```

### 8.5 Social Channel Workflow

```text
Admin/content lead creates social asset
-> content links task to social asset
-> after publish, team manually inputs metric snapshot
-> dashboard aggregates basic performance
-> future API sync replaces manual input where available
```

### 8.6 Company Website Lead Capture Workflow

```text
Customer visits company website
-> customer reads service overview or case study
-> customer clicks demo/product/portfolio link if interested
-> customer submits consultation form
-> system stores lead with phone, Zalo, Facebook URL, email and message
-> admin/sales manager reviews new lead
-> sales contacts customer outside system through Zalo/Messenger/phone/email
```

Lead capture event fields:

```text
event_type: consultation_form_submit
source_page
service_interest
utm_source
utm_campaign
referrer
lead_id
```

## 9. MVP Pages / Routes

Company website:

```text
/
/about
/services
/services/[slug]
/demos
/case-studies
/contact
```

Admin:

```text
/admin
/admin/users
/admin/roles
/admin/settings
/admin/audit-logs
/admin/company-site
/admin/leads
```

Social:

```text
/social
/social/new
/social/[id]
```

Products:

```text
/products
/products/new
/products/review
/products/[id]
/products/[id]/offers
```

Content:

```text
/content
/content/ideas
/content/tasks
/content/tasks/new
/content/tasks/[id]
```

Editor:

```text
/editor
/editor/tasks
/editor/tasks/[id]
```

Landing:

```text
/landing
/landing/new
/landing/[id]/edit
/c/[slug]
/p/[slug]
/bio/[slug]
/go/[code]
```

Sales portfolio:

```text
/portfolio
/portfolio/edit
/s/[salesSlug]
/s/[salesSlug]/[pageSlug]
```

Analytics:

```text
/analytics
/analytics/products
/analytics/landing
/analytics/content
/analytics/sales
```

## 10. MVP Data Model

### 10.1 Identity

```text
organizations
users
teams
roles
permissions
user_roles
audit_logs
```

### 10.1.1 Taxonomy

```text
tag_categories
tags
taggings
business_lines
objectives
```

### 10.2 Social

```text
social_accounts
social_account_metric_snapshots
```

### 10.3 Product & Offer

```text
products
product_images
product_offers
product_metric_snapshots
product_review_events
product_collections
product_collection_items
```

### 10.4 Content Production

```text
content_ideas
content_tasks
content_briefs
content_assets
editor_assignments
creative_versions
review_comments
approval_events
publishing_posts
```

### 10.5 Portfolio CMS

```text
sales_profiles
portfolio_pages
cms_templates
cms_blocks
contact_links
case_studies
service_packages
```

### 10.6 Landing CMS

```text
landing_pages
landing_blocks
redirect_links
click_events
page_events
lead_events
```

### 10.7 Analytics

```text
performance_snapshots
manual_imports
event_logs
```

### 10.8 Company Website & Leads

```text
company_site_pages
company_site_blocks
service_pages
case_studies
demo_links
consultation_leads
consultation_lead_events
```

## 11. Recommended Tech Stack

Chosen MVP stack:

```text
Next.js App Router
TypeScript
Vercel deployment
PostgreSQL
Prisma ORM
Auth.js, Clerk or Supabase Auth
Object storage: Supabase Storage, Cloudflare R2 or AWS S3
Inngest for future background jobs
Internal event table first, PostHog optional later
Sentry for error tracking
Tailwind CSS
shadcn/ui
React Hook Form
Zod
```

Suggested repo structure:

```text
/apps/web
/packages/db
/packages/auth
/packages/ui
/packages/domain
/packages/connectors
/packages/analytics
/packages/ai
```

MVP deployment:

```text
Frontend + backend route handlers: Vercel
Database: managed PostgreSQL, such as Supabase, Neon, Railway or Vercel Postgres
File storage: Supabase Storage or Cloudflare R2
Background jobs: Inngest when async jobs are needed
```

Local development:

```text
Next.js dev server
PostgreSQL local or managed dev database
Prisma migrations
.env.local for secrets
```

### 11.1 Backend Layered Architecture

Do not put business logic directly inside `route.ts`. Next.js route handlers should stay thin and delegate to services.

Recommended backend structure:

```text
src/
├── app/
│   ├── api/
│   │   ├── products/
│   │   │   └── route.ts
│   │   ├── content-tasks/
│   │   │   └── route.ts
│   │   ├── landing/
│   │   │   └── route.ts
│   │   └── leads/
│   │       └── route.ts
│   └── ...
├── services/
│   ├── product.service.ts
│   ├── content.service.ts
│   ├── landing.service.ts
│   ├── portfolio.service.ts
│   ├── company-site.service.ts
│   ├── analytics.service.ts
│   └── integration.service.ts
├── repositories/
│   ├── product.repository.ts
│   ├── content.repository.ts
│   ├── landing.repository.ts
│   ├── lead.repository.ts
│   └── event.repository.ts
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── storage.ts
│   ├── validators.ts
│   └── permissions.ts
└── connectors/
    ├── tiktok/
    ├── tiktok-shop/
    ├── shopee/
    ├── meta/
    ├── canva/
    └── figma/
```

Layer responsibilities:

```text
Route Handler:
- Read request
- Validate input with Zod
- Check auth/permission
- Call service
- Return response

Service Layer:
- Own business logic
- Orchestrate repository calls
- Trigger event tracking/audit log
- Call third-party APIs through connectors

Repository Layer:
- Own database queries
- Hide ORM details from services
- Keep query logic reusable

Client/Lib Layer:
- Configure Prisma, auth, storage, third-party SDKs
- Provide shared helpers

Connector Layer:
- Normalize external APIs into internal data shapes
- Keep TikTok/Shopee/Meta/AI logic outside core services
```

Example route handler:

```ts
// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { createProductCandidate } from "@/services/product.service";
import { createProductCandidateSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const input = createProductCandidateSchema.parse(body);
  const result = await createProductCandidate(input);

  return NextResponse.json(result);
}
```

Example service:

```ts
// src/services/product.service.ts
import { productRepository } from "@/repositories/product.repository";
import { eventRepository } from "@/repositories/event.repository";

export async function createProductCandidate(input: CreateProductCandidateInput) {
  const product = await productRepository.createCandidate(input);

  await eventRepository.create({
    eventType: "product_candidate_created",
    entityType: "product",
    entityId: product.id,
  });

  return product;
}
```

When to split backend out of Next.js:

```text
Keep backend in Next.js for MVP:
- CRUD
- forms
- dashboards
- redirect tracking
- manual imports
- lightweight API integrations

Split to separate Node.js/Go service later if:
- jobs need minutes, such as video processing/crawling/rendering
- realtime websocket server is required
- API traffic grows beyond Vercel serverless limits
- domain logic becomes large enough to need independent deploy/scaling
```

Because services/repositories/connectors are isolated from route handlers, the core backend logic can be moved into a standalone server later with minimal rewrite.

## 12. AI Agent Build Map

### 12.1 Architect Agent

Tasks:

- Maintain domain model.
- Define database schema.
- Define permission model.
- Review module boundaries.
- Prevent hard-coding TikTok-only logic.

### 12.2 Backend Agent

Tasks:

- Implement CRUD APIs.
- Implement RBAC.
- Implement audit logs.
- Implement event tracking.
- Implement redirect tracking.
- Implement company website lead capture.
- Keep route handlers thin and put business logic in services.

### 12.3 Frontend Agent

Tasks:

- Build company website pages.
- Build admin portal.
- Build product forms/review queue.
- Build content board/task detail.
- Build editor upload UI.
- Build portfolio CMS.
- Build landing page CMS.

### 12.4 Data/Analytics Agent

Tasks:

- Design event schema.
- Build dashboard queries.
- Build product ranking.
- Build manual metric snapshot views.

### 12.5 Integration Agent

Tasks:

- Prepare connector interfaces.
- Add TikTok/Shopee/Meta API sync later.
- Keep manual fallback.

### 12.6 AI Content Agent

Tasks:

- Generate product content angles.
- Generate brief draft.
- Generate landing copy.
- Generate hooks and CTA variants.
- Score product candidates.

### 12.7 QA Agent

Tasks:

- Test permission boundaries.
- Test product review workflow.
- Test content/editor workflow.
- Test public portfolio and landing links.
- Test tracking events.

### 12.8 DevOps Agent

Tasks:

- Setup Docker.
- Setup env.
- Setup database migration.
- Setup CI/CD.
- Setup staging/production.

## 13. MVP Delivery Plan

### Sprint 1 - Foundation

- Setup project.
- Auth.
- Organizations/users/roles.
- Admin layout.
- Audit log.
- Backend layered architecture folders.

### Sprint 2 - Product Manual Research

- Product candidate form.
- Product offer fields.
- Manual metric snapshot.
- Screenshot upload.
- Review queue.
- Approved product library.

### Sprint 3 - Content & Editor Workflow

- Content board.
- Brief template.
- Asset upload.
- Editor assignment.
- Version upload.
- Review comments.
- Approval flow.

### Sprint 4 - Portfolio CMS

- Sales profile.
- Contact links.
- CMS template/blocks.
- Public sales page.
- Page view/contact click tracking.

### Sprint 5 - Landing CMS & Tracking

- Landing page builder.
- Product collection.
- Redirect links.
- Click event tracking.
- Public landing pages.

### Sprint 6 - Company Website & Lead Capture

- Homepage.
- Service pages.
- Demo/case sections.
- Contact/consultation form.
- Admin lead inbox.
- Lead submit event tracking.

### Sprint 7 - Dashboard MVP

- Product dashboard.
- Landing dashboard.
- Sales portfolio dashboard.
- Content workflow dashboard.
- Manual metric summary.

### Sprint 8 - Social Asset Inventory

- TikTok-first social account inventory.
- Manual metric snapshots.
- Link social asset to content.
- Prepare connector interface.

### Sprint 9 - Hardening

- Permission QA.
- Audit log coverage.
- UI polish.
- Basic import/export.
- Staging deploy.

## 14. MVP Acceptance Criteria

MVP is accepted when:

- Admin can create users, teams, roles and permissions.
- Content can input product candidates with TikTok Shop/Shopee links and manual metrics.
- Content lead/admin can approve/reject product candidates.
- Approved products can be attached to briefs and landing pages.
- Content can create a brief and assign editor.
- Editor can upload a creative version.
- Content can review, request revision and approve final creative.
- Sales can create a public portfolio with contact links.
- Customer can click Zalo/Messenger from portfolio.
- Admin/content can create a landing page with affiliate product links.
- Admin/content can create a TikTok bio menu landing page with multiple reviewed product cards.
- Company website can show services, demos/cases and collect consultation form submissions.
- Outbound clicks go through tracked redirect.
- Dashboard shows basic product, landing, sales portfolio and content workflow metrics.
- No social account password/cookie/2FA is stored.

## 15. Key Risks & Mitigations

Risk: API access from TikTok/Shopee/Meta may require approval.  
Mitigation: MVP is manual-first and stores metric snapshots with source.

Risk: Product metrics like CTR/sales/rating change frequently.  
Mitigation: store snapshots over time instead of overwriting product.

Risk: Sales/content may publish unapproved sensitive data.  
Mitigation: approval status and role permissions for product/case/landing.

Risk: Workflow becomes too complex too early.  
Mitigation: no CRM/deal pipeline in MVP; only portfolio contact links and event tracking.

Risk: Content/editor feedback gets lost outside system.  
Mitigation: all brief, asset, creative versions and review comments live in content task detail.

## 16. Open Decisions

- Choose auth provider: Auth.js, Clerk or Supabase Auth.
- Choose ORM: Prisma or Drizzle.
- Choose file storage: S3, Cloudflare R2, Supabase Storage or local for dev.
- Decide if landing/portfolio CMS block data is stored as JSON or normalized rows.
- Decide approval strictness: all portfolio/landing changes require admin approve, or only sensitive blocks.
- Decide public domain structure for portfolio and landing pages.

## 17. Build Principles

- Manual-first, API-ready.
- Channel-agnostic, TikTok-first.
- Product and offer are separate.
- Metrics are snapshots.
- No CRM until there is real pain.
- No supply chain until company starts importing goods.
- Every public click should be trackable.
- Every approval-sensitive action should be auditable.
- Keep MVP simple enough for content/editor/sales to actually use daily.

## 18. Vibe Coding Backlog

Priority legend:

```text
P0 = must-have for MVP
P1 = should-have after core flow works
P2 = later/future
```

### 18.1 Foundation Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| FND-001 | P0 | Setup Next.js + TypeScript project | App runs locally with base layout |
| FND-002 | P0 | Setup PostgreSQL + ORM | Migration can create initial schema |
| FND-003 | P0 | Setup auth | User can sign in/out |
| FND-004 | P0 | Build organization/user/team tables | Admin can view users and teams |
| FND-005 | P0 | Build role/permission model | User sees routes based on role |
| FND-006 | P0 | Add audit log helper | Important create/update/approve actions are logged |
| FND-007 | P1 | Setup file storage | Image/video/document upload works |
| FND-008 | P1 | Setup event tracking helper | Public and internal events can be recorded |
| FND-009 | P0 | Build taxonomy/tagging foundation | Admin can define business lines, objectives and reusable tags |
| FND-010 | P0 | Add tag selector component | Social/product/content/landing forms can reuse the same tag picker |
| FND-011 | P0 | Create layered backend folders | `route.ts`, `services`, `repositories`, `lib`, `connectors` are separated |
| FND-012 | P0 | Setup Vercel deployment config | App can deploy to Vercel with env vars documented |

### 18.1.1 Company Website Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| WEB-001 | P0 | Build company homepage | Homepage introduces brand, services and primary CTA |
| WEB-002 | P0 | Build service overview page | `/services` lists all company services |
| WEB-003 | P0 | Build service detail pages | `/services/[slug]` shows service description, process and CTA |
| WEB-004 | P0 | Build demo/case section | Website can link to portfolio demos, landing demos and product demos |
| WEB-005 | P0 | Build consultation form | Customer can submit phone, Zalo, Facebook URL, email and message |
| WEB-006 | P0 | Build admin lead inbox | Admin/sales manager can view submitted consultation leads |
| WEB-007 | P0 | Track form submit event | Event stores source page, service interest and UTM fields |
| WEB-008 | P1 | Add company site CMS blocks | Admin can edit homepage/service page blocks |
| WEB-009 | P1 | Add spam protection | Form has rate limit or captcha strategy |

### 18.2 Product & Offer Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| PRD-001 | P0 | Create product candidate form | Content can submit product name/category/note |
| PRD-002 | P0 | Add product offer form | Content can add TikTok Shop/Shopee URL and affiliate URL |
| PRD-003 | P0 | Add manual metric snapshot form | Content can input commission, CTR, sales count, rating, review count |
| PRD-004 | P0 | Add screenshot proof upload | Screenshot is attached to metric snapshot |
| PRD-005 | P0 | Build product review queue | Lead/admin can see pending products |
| PRD-006 | P0 | Approve/reject product | Approved products become usable in brief/landing |
| PRD-007 | P0 | Build approved product library | Team can filter/sort by platform, commission, CTR, sales, rating |
| PRD-008 | P0 | Add product business line tags | Product can be marked affiliate, shop, client service, branding or demo |
| PRD-009 | P1 | Add duplicate URL detection | System warns if same product/affiliate URL already exists |
| PRD-010 | P1 | Add product score | Score combines commission, CTR, sales, rating/review |
| PRD-011 | P1 | Add product collection | Admin/content can group products for landing pages |

### 18.3 Content & Editor Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| CNT-001 | P0 | Build content task board | Tasks show by workflow status |
| CNT-002 | P0 | Build brief form | Content can create hook/concept/script/CTA/deadline |
| CNT-003 | P0 | Attach product/offer to brief | Approved product data appears inside task detail |
| CNT-004 | P0 | Upload reference assets | Content can attach images/files to task |
| CNT-005 | P0 | Assign editor | Editor receives task in editor view |
| CNT-006 | P0 | Editor upload creative version | Version file is visible in task detail |
| CNT-007 | P0 | Review comments | Content can comment on uploaded version |
| CNT-008 | P0 | Request revision / approve final | Task status updates correctly |
| CNT-009 | P0 | Add business line/objective to brief | Editor can see if task is affiliate, shop, client service, branding or demo |
| CNT-010 | P1 | Add task priority and deadline filters | Team can sort overdue/high priority tasks |
| CNT-011 | P1 | Add publish checklist | Approved output can be marked ready to publish |

### 18.4 Sales Portfolio CMS Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| POR-001 | P0 | Create sales profile | Sales can set avatar, bio, title |
| POR-002 | P0 | Add contact links | Sales can add Zalo, Messenger, phone, email |
| POR-003 | P0 | Create portfolio template | Admin can define default page sections |
| POR-004 | P0 | Build public sales page | `/s/[salesSlug]` renders profile and CTA |
| POR-005 | P0 | Track page view and contact click | Dashboard shows view/click count |
| POR-006 | P1 | Add case study block | Sales can show approved case studies |
| POR-007 | P1 | Add product/landing demo block | Sales can show approved demo products/landing pages |
| POR-008 | P1 | Add publish/unpublish toggle | Sales/admin can control public status |

### 18.5 Landing Page CMS Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| LAN-001 | P0 | Create landing page model | Admin/content can create title/slug/status |
| LAN-002 | P0 | Add block-based editor MVP | Hero, product grid, CTA blocks work |
| LAN-003 | P0 | Attach product collection | Landing page displays selected products |
| LAN-004 | P0 | Generate redirect links | Product CTA uses `/go/[code]` |
| LAN-005 | P0 | Track outbound clicks | Click event stores page/product/offer/source |
| LAN-006 | P0 | Render public landing page | `/c/[slug]` works |
| LAN-007 | P0 | Build bio product menu template | `/bio/[slug]` shows short reviewed product cards |
| LAN-008 | P0 | Add per-product bio tracking code | Each product CTA can store sub_id/tracking_code |
| LAN-009 | P0 | Add product card CTA copy | Card has pain, solution, CTA label and affiliate offer |
| LAN-010 | P1 | Add UTM/source fields | Traffic source can be passed into events |
| LAN-011 | P1 | Add duplicate landing from template | User can clone an existing page |

### 18.6 Social Asset Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| SOC-001 | P0 | Create social account inventory | Admin/content lead can add TikTok/Facebook/IG profile URL |
| SOC-002 | P0 | Add social metric snapshot | Team can input followers/views/engagement manually |
| SOC-003 | P0 | Attach social account to content task | Task shows intended publishing channel |
| SOC-004 | P0 | Add social business line and ownership type | Channel is clearly marked affiliate/shop/client service/brand/demo |
| SOC-005 | P1 | Add social status and health note | Team can mark active/paused/suspended |
| SOC-006 | P2 | Add TikTok connector skeleton | API sync interface exists but does not need production approval |

### 18.7 Analytics Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| ANA-001 | P0 | Product dashboard | Shows approved products sorted by commission/CTR/sales/rating |
| ANA-002 | P0 | Landing dashboard | Shows page views and outbound clicks |
| ANA-003 | P0 | Sales portfolio dashboard | Shows profile views and contact clicks |
| ANA-004 | P0 | Content workflow dashboard | Shows tasks by status and overdue count |
| ANA-005 | P1 | Product metric history chart | Product detail shows snapshots over time |
| ANA-006 | P1 | Editor workload dashboard | Shows assigned/open tasks by editor |

### 18.8 Future API / Automation Tasks

| ID | Priority | Task | Acceptance |
|---|---:|---|---|
| API-001 | P2 | Define connector interface | All connectors return normalized metric snapshots |
| API-002 | P2 | Shopee import job | Manual report/import can create conversion records |
| API-003 | P2 | TikTok Shop import job | API/import can update product/offer metrics |
| API-004 | P2 | Meta/Facebook connector | Facebook traffic/performance can be attached to campaign |
| API-005 | P2 | Canva/Figma connector | Design assets can sync into asset library |
| API-006 | P2 | AI brief generator | AI can draft hook/script/CTA from product data |

## 19. First Build Slice

If the team wants the smallest useful build slice, implement this order:

```text
1. Auth + RBAC
2. Product Candidate + Offer + Manual Metric Snapshot
3. Product Review Queue
4. Content Brief + Assign Editor
5. Editor Upload Version
6. Content Review / Approve
7. Sales Portfolio with Contact Links
8. Company Website with Consultation Form
9. Landing Page with Tracked Redirect
10. Basic Dashboard
```

This slice proves the real operating loop:

```text
Customer discovers brand -> submits consultation form -> research product -> approve product -> create brief -> editor delivers -> publish/landing/portfolio -> track click
```
