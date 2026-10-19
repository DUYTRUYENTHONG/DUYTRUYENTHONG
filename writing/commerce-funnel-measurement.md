# Measure a commerce funnel without mixing attribution scopes

*Ali Nguyen · Technical note · 19 October 2026*

**Question:** When a business has content, landing pages, product pages, and lead forms, which numbers can tell it where buyers lose context or momentum?

The live [Growth Commerce OS](https://growth-commerce-os.vercel.app/en) site presents marketing and commerce workflows. This note is a measurement design for that kind of journey. It does not report data from that site or claim observed conversion gains.

## Define one event contract

Before building a dashboard, choose a user journey and specify the event grain. A minimal lead journey might be:

```text
landing_view -> product_view -> contact_start -> qualified_lead
```

Each event needs an event name, timestamp and timezone, page or product key, session key, permitted user key, source system, and schema version. Define whether `qualified_lead` is an automated rule or a human CRM decision, and record its decision time. Deduplicate form retries using a stable submission ID. Keep the mapping between anonymous web events and identified leads consent-aware and access-controlled.

| Metric | Denominator | Interpretation |
| --- | --- | --- |
| Product-view rate | Eligible landing sessions | Did visitors reach product context? |
| Contact-start rate | Eligible product-view sessions | Did they begin an inquiry? |
| Lead-completion rate | Eligible contact-start sessions | Did the form or contact step finish? |
| Qualified-lead rate | Submitted leads with a completed qualification decision | Did inquiries fit the stated qualification rule? |

The denominator must be written next to every percentage. A user-level rate and a session-level rate answer different questions. Exclude bot traffic and internal tests using documented rules, and report missing identifiers instead of silently dropping them.

## Keep acquisition scope explicit

Google Analytics BigQuery export exposes traffic-source information at different scopes: first-user, session, and event. Its [traffic attribution documentation](https://developers.google.com/analytics/bigquery/traffic-attribution-data) names the relevant fields. A first-user source asks where a person first arrived; a session source asks about this visit. Combining one source scope with another metric's grain can yield plausible-looking but inconsistent reports.

A measurement review should state:

1. The analysis unit: user, session, lead, or order.
2. The conversion window and timezone.
3. The source scope and attribution rule.
4. Whether the data came from collected events, a reporting UI, or joined CRM records.
5. The expected reconciliation differences and known missingness.

Google explains why [Analytics UI and BigQuery export can differ](https://developers.google.com/analytics/blog/2023/bigquery-vs-ui), including modelling and reporting features. A discrepancy is therefore a debugging question, not proof that either number is wrong.

## Use the funnel to choose a test

If many sessions view a product but few start contact, inspect page clarity, mobile affordances, and the offer before buying more traffic. If many start contact but do not submit, inspect field burden, errors, response time, and privacy copy. Segment by device, channel, and landing page only when sample sizes and definitions remain meaningful.

The dashboard describes what happened. It does **not** establish that a channel caused the outcome. To estimate incremental lift from a new message or page, predefine a controlled experiment or another defensible causal design, then report exposure, sample size, and decision criteria.

**Evidence boundary:** This is a proposed analytics contract, not a production dashboard, live dataset, attribution result, or revenue claim.
