# Predict churn from what was known then

*Ali Nguyen · Technical note · 19 October 2026*

**Question:** If a subscription team must decide whom to contact on 1 June, how can its model use only information available on 1 June?

The [KKBox baseline in my portfolio](https://duytruyenthong.github.io/Alinguyen-portfolio/#project-kkbox-baseline) explores this boundary with a synthetic future-event exclusion check and a local run on official competition files. The [documented holdout](https://github.com/DUYTRUYENTHONG/kkbox-customer-churn-prediction/blob/main/docs/RESULTS.md) reached 0.217324 log loss and 0.819295 ROC AUC. It is a within-cohort result, not an out-of-time test or an operational retention outcome. The design below explains what I would require before using a churn score in a marketing workflow.

## Define the decision before the dataset

Let `t` be a customer snapshot date. A row represents one customer who is eligible for a retention decision at `t`. Features may use records observable through `t`. A label describes a separately defined future window, such as whether an eligible subscription lapses during `(t, t + horizon]`. The horizon, grace period, eligibility rules, and treatment of customers whose outcome window is incomplete must be written down before training.

| Field | Example definition | Boundary |
| --- | --- | --- |
| `customer_id` | Stable pseudonymous key | Keep direct identifiers outside the modeling table. |
| `snapshot_at` | Decision cutoff in one documented timezone | Apply the same cutoff to every source. |
| `transactions_30d` | Count of transactions with `event_at <= snapshot_at` in the prior 30 days | Never join later transactions into this feature. |
| `listening_days_30d` | Distinct active days in the same lookback window | Do not derive it from a lifetime total calculated after `t`. |
| `churn_next_horizon` | Outcome observed after `t` | A label, never a predictor. |

For events that arrive late, event time alone is insufficient. If the production system would not have received a record by `t`, a backtest should exclude it too. A practical feature rule is:

```text
include event only if event_at <= snapshot_at
                  and observed_at <= snapshot_at
```

That second condition is an **as-of availability rule**. It matters when payment, channel, or support systems publish data on different schedules.

## Build and test the pipeline

1. Generate customer snapshots at fixed cutoffs. Freeze the eligible population before observing labels.
2. Aggregate transaction and activity events within explicit lookback windows. Record source, timestamp, and missing-data rules for each feature.
3. Separate development and final evaluation by time. Fit imputers, encoders, feature selection, and the estimator only on training data. Keep the final period untouched until the model and threshold are chosen.
4. Start with a transparent baseline, such as logistic regression, then compare a more complex model only if the same holdout and operating metric justify it.
5. Test a **future-only fixture**: add an event after the cutoff, rebuild the same snapshot, and assert that all pre-cutoff features are unchanged.

The future-only fixture catches a class of temporal leakage, but it cannot prove that every source field was available in production. That requires a field-level availability review. [scikit-learn's leakage guidance](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) also explains why preprocessing must be fitted on training data rather than on the complete dataset.

## Evaluate the decision, not just a score

For an outreach team with limited capacity, compare precision and recall at a stated contact budget or threshold, along with calibration and results across time periods. A high overall accuracy can conceal weak performance on a smaller churn class; [Google's classification guide](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall) explains that tradeoff. Report the number of eligible customers, churn prevalence, holdout dates, confidence intervals where appropriate, and what happened to missing or late data.

A prediction does not establish that an outreach action will prevent churn. To claim incremental retention, the team would need a separately designed intervention evaluation, such as a randomized holdout, with consent and operational safeguards.

**Evidence boundary:** I publish aggregate local holdout metrics, input hashes, source counts, and limitations for the official KKBox data. I do not publish customer rows or predictions, claim a Kaggle leaderboard score, or infer retention lift from prediction quality.
