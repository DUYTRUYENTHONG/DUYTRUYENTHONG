# A source-grounded marketing knowledge assistant

*Ali Nguyen · Technical note · 19 October 2026*

**Question:** How could a seller ask an assistant about product facts, campaign rules, or customer-service policy and receive an answer that a human can verify?

My [portfolio's AI section](https://duytruyenthong.github.io/Alinguyen-portfolio/#ai-expertise) describes retrieval and prompt prototypes. This note is a proposed system and evaluation design, not a claim that I deployed a production assistant.

## Start with a bounded corpus

A marketing assistant should search an approved corpus: product specifications, current prices and promotions, policy documents, and editorial guidelines. Each indexed unit needs `source_id`, title, canonical URL or document path, owner, version, effective dates, language, and access scope. A changed price is a new version, not a silent rewrite of old evidence.

The retrieval path can be expressed as:

```text
user question
  -> identify language and access scope
  -> retrieve candidate passages from permitted, current documents
  -> rank and attach source metadata
  -> generate an answer constrained to those passages
  -> show citations, freshness, and an escalation path
```

Keyword search helps exact product names and policy terms; semantic search helps paraphrases. A hybrid retrieval design is a candidate to test, not an automatic winner. Microsoft's [RAG overview](https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview) discusses chunking, hybrid queries, and citation provenance.

## The answer contract

The response should separate **answer**, **sources**, and **uncertainty**. For example, a price question should cite the specific valid price-list version. If the only retrieved page is expired or the user's access scope excludes it, the assistant should say it cannot verify the current price and route the question to a person. A citation proves where text came from; it does not, by itself, prove the source is current or correct.

Two controls are essential in a marketing setting:

- **Permissions:** filter documents before they enter the prompt. Customer-specific records and internal campaign plans must never become retrievable to an unauthorised user.
- **Instruction boundary:** retrieved pages are data. A sentence inside a document that tells the model to ignore its rules should not control the assistant's behaviour.

## Evaluate retrieval and answers separately

Build a small, versioned question set that includes exact product questions, multilingual paraphrases, conflicting documents, stale promotions, missing answers, and access-denied cases. For each question, record the expected source and whether abstention is correct.

| Stage | Review question | Failure example |
| --- | --- | --- |
| Retrieval | Did a permitted, current source enter the candidate set? | The right price sheet was missed. |
| Evidence use | Does each material claim follow from its cited passage? | A discount was invented. |
| Response | Is the answer complete, readable, and appropriately uncertain? | It hides a missing delivery condition. |
| Safety | Did access rules and document instructions stay separate? | An internal plan appears in a public answer. |

Compare against a simple search-only experience as a baseline. Review failures by category before tuning prompts or replacing the model. The [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) provides a broader framework for testing and managing generative-AI risks; Microsoft's [RAG evaluation guidance](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-llm-evaluation-phase) distinguishes groundedness, completeness, and relevance.

**Evidence boundary:** This is a design and research direction connected to my prototype work. I do not claim a live assistant, benchmark score, or customer-support automation outcome.
