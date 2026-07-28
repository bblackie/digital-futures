---
title: Web Development Unit — Overview and Teaching Sequence
tags: [web-development, teaching-resource, 12dgt, css, html, javascript, flask, sequence]
created: 2026-07-27
---

# Web Development Unit — Overview and Teaching Sequence

This unit refreshes and extends student knowledge of HTML, CSS, layout, and JavaScript **before** they build a database-backed website. The final build target is **Flask (Python) with Jinja2 templates and SQLite** if persistence is needed. Every decision below is shaped by that target.

## The one constraint that drives everything

The website is **server-rendered with no front-end build step**. Students write HTML in Jinja2 templates and load CSS as a plain stylesheet or a CDN link. This rules out any workflow that needs `npm`, PostCSS, or a compile stage. It does not rule out modern CSS — modern CSS needs no build step at all. Keep this in front of students: *the browser is the runtime; there is no toolchain to hide behind.*

## Teaching order and why it is in this order

The sequence is **layout first**, then the deliberate parts of responsive design, then a focused pass on the components the project actually needs. Two principles keep it honest:

1. **Intrinsic responsiveness is taught inside layout, not bolted on afterwards.** Much of "responsive" now falls out of how you build the layout in the first place — `flex-wrap`, Grid's `auto-fit` with `minmax()`, and fluid units like `clamp()`. If you teach a fixed layout and then teach students to "make it responsive," you have taught them the old, wrong mental model. Media and container queries are the only genuinely *later* part.
2. **Components are the vehicle for practising layout, not a final module.** A nav bar *is* a Flexbox exercise; a card gallery *is* a Grid exercise. You learn the layout tool by building the component, so the two are interleaved. The one dedicated components note (05) exists because forms and tables are project-critical and deserve their own depth — not because components are saved for last.

## The notes in this folder

| # | Note | Core question it answers |
|---|------|--------------------------|
| 01 | HTML Foundations Refresh | What is the structure everything hangs on? |
| 02 | Flexbox Layout | How do I lay out things along one axis? |
| 03 | CSS Grid Layout | How do I lay out a page in two dimensions? |
| 04 | Responsive and Fluid Design | How do I handle deliberate breakpoints? |
| 05 | UI Components: Forms and Tables | How do I build the parts the Flask app needs? |
| 06 | CSS Frameworks and the No-Build Decision | Should we use W3.CSS, Bootstrap, Pico, or none? |
| 07 | JavaScript Refresh | How much JS do I actually need for a server-rendered app? |
| 08 | Assessment Links — AS91893 | How does this unit map to the standard, and where are the gaps? |

## Suggested session mapping

This is a guide, not a straitjacket. Combine or split to fit your period length.

- **Session 1** — Note 01 + the box model. Short. Sets vocabulary.
- **Session 2** — Note 02 Flexbox. Build a real nav bar. Flexbox Froggy as the warm-up.
- **Session 3** — Note 03 Grid. Build a card gallery. Grid Garden as the warm-up.
- **Session 4** — Note 04. Take a layout from Session 2 or 3 and make it survive a phone screen deliberately.
- **Session 5** — Note 05. Forms and tables, styled and accessible, ready to wire into Jinja2.
- **Session 6** — Note 06. Decide the project's CSS approach as a class, with reasons.
- **Ongoing** — Note 07 as the project demands interactivity.

## A note on frameworks up front

Students have used **W3.CSS**. It is not deprecated or broken — it is a lightweight, CDN-only framework that suits a no-build Flask project. Its real weakness is a small community, so students Googling a problem find far less help than for Bootstrap or Tailwind. Note 06 lays out the options honestly. Do not let "old school" be the deciding argument; *fit for the stack* is the argument.

## Core reference students should bookmark

- [MDN Web Docs — Learn web development](https://developer.mozilla.org/en-US/docs/Learn) — the reference to trust over random blog results.
- [web.dev — Learn CSS](https://web.dev/learn/css) and [Learn HTML](https://web.dev/learn/html) — modern, from the Chrome team.
- [Kevin Powell on YouTube](https://www.youtube.com/@KevinPowell) — the clearest CSS explainer working; used throughout these notes.
- [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations) — free, structured, project-based.
