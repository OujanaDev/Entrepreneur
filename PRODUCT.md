# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Foreign students in France, Moroccan students first, finishing or just past their studies, who want to stay and work independently (micro-entreprise) instead of as employees. Their job: understand what the change from a student residence permit to an "entrepreneur / profession libérale" permit involves, and produce the business plan the prefecture and banks expect.

## Product Purpose
A single landing page that (1) explains the change of status with official, dated sources and a short situation questionnaire, and (2) sells a personalised business plan: the visitor uploads a PDF CV and writes one paragraph describing their future project, pays through Stripe, and receives a business plan (Word + PDF). Success: a paid order and a document the client can submit after review.

## Positioning
Built from the client's own CV and project in their words, structured like a real business plan that went through a prefecture file, with the administrative path explained from official sources rather than forum advice.

## Operating Context
Visitors arrive anxious about a permit expiry date, often on mobile, and compare with paid consultants. The deliverable is reviewed by a prefecture, a bank or an accompanying structure. Account by email/password or Google.

## Capabilities and Constraints
- Inputs: one PDF CV (text-based, not scanned) + one paragraph about the future project. No multi-step form.
- Payment: Stripe Checkout; generation only after Stripe confirms payment; free retry if generation fails.
- AI (Claude) extracts facts from the CV and paragraph and drafts the plan. Financial figures absent from the inputs are AI-proposed assumptions, always labelled as such in the document.
- Administrative information: section of the landing page, every claim with an official source and verification date; never a guarantee of eligibility; creating a micro-entreprise is distinct from the right of residence.
- Google sign-in: implemented; the operator still has to create the Google OAuth client ID (undecided: none yet).

## Brand Commitments
- Name in code: "Cap Entrepreneur" (not confirmed as final).
- Palette pinned by the owner: #606c38, #283618, #fefae0, #dda15e, #bc6c25.

## Evidence on Hand
- Photo of a French residence permit back side reading "ENTREPRENEUR / PROFESSION LIBERALE — EXERCICE D'UNE ACTIVITE NON SALARIEE", personal data blurred. Presented as an illustrative example only: no claim that a client obtained it through the platform.
- Verified official sources in backend/app/content/info.json (reviewed 2026-10-15).
- No testimonials, client counts, success rates or press: none may be invented.

## Product Principles
- Never promise a permit or a decision; inform and prepare.
- Every administrative claim carries its official source.
- The client's facts are never invented; assumptions are labelled.
- Asking less of the visitor (CV + paragraph) beats a long form.

## Accessibility & Inclusion
French-language audience, often non-native French readers: plain language, readable sizes, WCAG AA contrast, works on mobile.
