---
title: Assessment Links — AS91893 (Digital Media 2.4)
tags: [web-development, ncea, assessment, as91893, digital-media, 12dgt, teaching-resource]
created: 2026-07-27
---

# Assessment Links — AS91893 (Digital Media 2.4)

Maps this web development unit to **AS91893 v1 — Use advanced techniques to develop a digital media outcome** (Level 2, 4 credits, internal, CMR 0233). Read this alongside the current [Conditions of Assessment](https://ncea.tki.org.nz/Resources-for-internally-assessed-achievement-standards/Technology/Digital-technologies/Level-2-Digital-technologies) and the [NZQA annotated exemplars](https://www2.nzqa.govt.nz/ncea/subjects/past-exams-and-exemplars/digital-technologies/as-91893-annotated-exemplars/).

## Is this standard still current? Yes, for now.

The standard shows a planned review date of 31 December 2020, which looks alarming, but it is still live. The new NCEA-change-programme standards became compulsory at **Level 1 in 2024**, but development and rollout of the **new Level 2 and 3 standards was paused and pushed back**: full Level 2 implementation is now 2028, not 2026. So for **2026, Level 2 Digital Technologies is still assessed against the existing standards** — AS91893 among them. NZQA/TKI publish a *Level 2 Digital Technologies Conditions of Assessment 2026*, which confirms it.

**Forward planning:** NCEA itself is being replaced. The New Zealand Certificate of Education (NZCE) replaces NCEA Level 2 at Year 12 from **2029**, with A–E letter grades and marks out of 100 instead of Achieved/Merit/Excellence. Practically, this unit against AS91893 is valid now and for the next couple of years, but the standard has a finite life — do not over-invest in AS91893-specific scaffolding you could not repurpose.

## The fit question — read this before mapping anything

AS91893 is the **digital media** standard (2.4). It is assessed through a **media and design lens**: appropriate tools for the purpose and end-users, media-type conventions, testing and data integrity, and implications. A website is a legitimate and common 2.4 context, so the **front-end** of this project maps well.

The trap is the back end. **The Flask routing and SQLite database logic is not evidence for 2.4** — that is programming, and its natural home is **AS91896 (2.7, Use advanced programming techniques to develop a computer program)**. If students pour their effort into building the database and server logic, that effort earns nothing under this standard.

Two honest options:

1. **Assess the website as a media outcome (recommended if 2.4 is the target).** Treat the front end — layout, styling, media assets, accessibility, usability, testing — as the evidence. Keep the database genuinely "if required" and minimal; it is delivery plumbing, not assessed craft. This is why the original brief's "SQLite if required" phrasing matters: for 2.4, keep it optional.
2. **If the database work is central, use the programming standard for it.** Consider AS91896 (2.7) as the home for the back end, assessed on its own evidence. You cannot use the same work as evidence for both standards — each needs its own.

The rest of this note assumes **option 1**: the website is the digital media outcome.

## Criteria → evidence in this unit

| AS91893 criterion | Where the evidence comes from |
|---|---|
| Appropriate tools/techniques for purpose and end-users | Choosing HTML/CSS/JS deliberately; responsive design for the end-users' devices (Notes 02–04); semantic, accessible markup (Notes 01, 05) |
| Applying data integrity and testing procedures | Cross-browser/device testing; HTML/CSS validation; form validation; link/functionality checks (Notes 04, 05) — **needs a documented testing log (see gaps)** |
| Relevant conventions for the media type | Web conventions: semantic HTML, consistent navigation, responsive layout, accessibility, organised asset structure (Notes 01–05) |
| Explaining relevant implications | Accessibility, usability, privacy of user data, IP/licensing of images/fonts/libraries, aesthetics, functionality, end-user needs — **needs explicit written work (see gaps)** |
| Merit: testing information used to improve quality | Iterating in response to test results (fixing validation errors, fixing responsive breakpoints found in testing) |
| Merit: conventions applied to improve quality | Applying accessibility and responsive conventions to raise quality, not just meet a minimum |
| Merit: addressing implications | Acting on implications (actually making it accessible, actually licensing assets), not only describing them |
| Excellence: iterative improvement across design/dev/testing | Documented cycles of build → test → refine — **needs a dev journal / commit history** |
| Excellence: efficient tools and techniques in production | See the table below — this is where the unit is strongest |

## Excellence hooks: the "efficient techniques" the standard names

Explanatory Note 5 of the standard lists efficient tools and techniques by name. This unit hits most of them directly, and this is the clearest route to Excellence:

| Standard's named technique | How students demonstrate it here |
|---|---|
| Using stylesheets | External CSS; CSS custom properties for a shared design system (Notes 02–06) |
| Master pages or student-developed templates | **Jinja2 template inheritance** — a `base.html` with `{% block %}` regions the pages extend (Notes 05, 06). This is a genuine, clean match for "master pages." |
| Reusing objects, styles and/or frames | Reusable component classes; Jinja2 includes/macros for repeated fragments (Note 05) |
| Commenting | Comments in HTML, CSS and JS explaining intent |
| Character formatting controls | Typographic control via CSS (scale, weight, spacing) |
| HTML/CSS validation procedures | Running pages through the W3C validators and fixing errors |
| Optimisation of media assets | Compressing images, appropriate formats (e.g. WebP), lean CSS |
| Management of assets | An organised `static/` structure |

## Advanced techniques (needed even for Achieved)

Explanatory Note 4 requires *advanced* techniques. Make sure every student clears this bar. In this unit, the obvious candidates:

- **Using a third-party library** — Pico.css, Bootstrap, or htmx (Note 06). The single easiest advanced technique to evidence cleanly.
- **Creating or customising scripts/code/presets** — custom CSS and JavaScript enhancements (Note 07), customised framework variables.
- **A combination of steps to manipulate or enhance elements** — layered responsive layout techniques; composite CSS.
- **Composite effects** — combined transitions, transforms, gradients, shadows working together.

## Evidence gaps this unit does not yet close

The notes teach the *craft* well but under-serve two assessed areas. Build these explicitly, or students will produce good websites that under-grade.

1. **Implications are not systematically taught.** The notes touch accessibility (01, 05), privacy/security (05) and IP via libraries (06), but "explaining/addressing relevant implications" needs its own deliverable. Add a short structured task: pick three or four implications (accessibility, privacy, IP/licensing, usability are the strongest for a website) and have students explain them for *their* outcome, then show how the build addresses them.
2. **Testing and iteration are not scaffolded as evidence.** "Data integrity and testing procedures" (Achieved) and "iterative improvement throughout" (Excellence) both need a visible process. Add a **testing log** (what was tested, on what, result, what changed) and a **dev journal or commit history**. Without this record, iteration that happened is invisible to the marker.

## Suggested next resources to build

- A one-page **implications task template** (Obsidian note) students fill in for their own site.
- A **testing log template** (browser/device, validation result, fix applied).
- If co-assessing the back end, a parallel `09-assessment-links-as91896.md` mapping the Flask/SQLite work to the programming standard.

## Source references

- [AS91893 standard (NZQA PDF)](https://www.nzqa.govt.nz/nqfdocs/ncea-resource/achievements/2019/as91893.pdf)
- [AS91893 annotated exemplars (NZQA)](https://www2.nzqa.govt.nz/ncea/subjects/past-exams-and-exemplars/digital-technologies/as-91893-annotated-exemplars/)
- [Level 2 Digital Technologies — internally assessed resources (TKI)](https://ncea.tki.org.nz/Resources-for-internally-assessed-achievement-standards/Technology/Digital-technologies/Level-2-Digital-technologies)
- [NCEA Change Programme timeline (NCEA Education)](https://ncea.education.govt.nz/what-ncea-change-programme)
