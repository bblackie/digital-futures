---
title: CSS Frameworks and the No-Build Decision
tags: [web-development, css, frameworks, bootstrap, tailwind, pico-css, w3css, htmx, flask, 12dgt, teaching-resource]
created: 2026-07-27
---

# CSS Frameworks and the No-Build Decision

This note is a decision, not just information. As a class, choose how the Flask project will handle CSS. The right framing is **fit for our stack**, not fashion. Students have used W3.CSS and may assume it is "old"; that is the wrong axis to judge on.

## The constraint, restated

The project is server-rendered Flask with **no front-end build step**. So any framework has to work as a plain stylesheet or a CDN `<link>`. The moment a framework needs `npm` and a compile stage, it adds a toolchain that will eat lesson time and generate "works on my machine" problems. That constraint decides more than any feature comparison.

## The options, honestly

| Approach | Build step? | Strength | Weakness for this project |
|---|---|---|---|
| **No framework** (modern CSS) | None | Full control; teaches the real skill; nothing to unlearn | More to write yourself |
| **W3.CSS** | None (CDN) | Tiny, simple, already familiar to students | Small community — less help when Googling |
| **Pico.css** | None (CDN) | Semantic HTML looks good instantly; almost no classes | Less control for bespoke designs |
| **Bootstrap** | None (CDN) | Huge community; every UI pattern covered; employable | Verbose class soup; sites can look samey |
| **Tailwind** | Standard workflow needs a build | Industry leader; total flexibility | Build step fights the no-build constraint |

### On Tailwind specifically

Tailwind is genuinely the most popular CSS framework in industry right now, so students may ask for it. Be straight with them: its normal workflow wants a build step, which is friction — not modernity — in a no-build Flask project. The CDN version exists but is explicitly not meant for production and you lose most of the benefit. For *this* project it is the wrong tool, and "it's popular" is not a good enough reason to take on the toolchain.

### On W3.CSS specifically

W3.CSS is not deprecated or broken. It is a lightweight, CDN-only framework that genuinely suits this stack. Its real weakness is community size: when a student hits a problem and searches for help, there is far less material than for Bootstrap or Tailwind. That — not age — is the honest argument for moving on, if you move on.

### The quiet recommendation: Pico.css

If you want a modern-feeling swap that keeps the no-build simplicity, [Pico.css](https://picocss.com/) is worth a serious look. It is a tiny, largely **classless** framework: it styles semantic HTML directly, so a plain `<form>`, `<table>`, `<nav>`, and `<button>` look good with almost no classes. That pairs unusually well with Flask, because the Jinja2 templates stay clean semantic HTML instead of filling with utility classes — which is arguably a better teaching artefact than W3.CSS's class-based approach.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

Drop that one line in `base.html` and the semantic HTML from Notes 01 and 05 is already styled.

## Interactivity without a JavaScript framework: htmx

Worth putting in front of students so they do not think dynamic behaviour requires React. [htmx](https://htmx.org/) is a small script (one CDN `<link>`) that lets HTML attributes trigger AJAX requests and swap in server-rendered fragments. It pairs cleanly with Flask returning a Jinja2 partial:

```html
<button hx-get="/more" hx-target="#list" hx-swap="beforeend">Load more</button>
```

That fetches `/more` from Flask and appends the returned HTML into `#list` — no page reload, no JSON wrangling, no build step. For a Year 12 outcome, keeping the JavaScript surface small is a feature. Present htmx as the option that lets a server-rendered app feel dynamic without a front-end framework.

## The decision to make with the class

Ask them to justify a choice against the constraint, not against fashion. A defensible outcome for most groups: **Pico.css or plain modern CSS for styling, plus htmx if they want interactivity.** Bootstrap is a reasonable choice too if they value the large community and pattern library. Tailwind is the one to talk them *out* of for this project, with reasons.

## Resources

- [Pico.css](https://picocss.com/) — docs and examples.
- [htmx](https://htmx.org/) — docs; see the [examples](https://htmx.org/examples/) page.
- [Bootstrap](https://getbootstrap.com/) — if the class chooses it.
- [W3.CSS reference](https://www.w3schools.com/w3css/) — what students already know.
- Article: [CSS framework market share and trends](https://w3techs.com/technologies/overview/css_framework) — data for the discussion.
- Video: [Kevin Powell — do you even need a CSS framework?](https://www.youtube.com/@KevinPowell) (search "framework" on his channel).
