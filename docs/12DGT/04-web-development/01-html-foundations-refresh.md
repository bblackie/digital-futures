---
title: HTML Foundations Refresh
tags: [web-development, html, semantic-html, box-model, 12dgt, teaching-resource]
created: 2026-07-27
---

# HTML Foundations Refresh

This is a deliberately short note. Students have met HTML before; the goal is to reset the vocabulary that layout depends on, not to reteach tags from zero. Two things matter here: **semantic structure** and **the box model**. Everything in the layout notes assumes both.

## Semantic HTML, and why it is not optional

Every element renders a box, but the *name* of the element carries meaning that CSS classes cannot. `<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` describe what a region *is*. This matters for three concrete reasons students will hit in the project:

- **Accessibility.** Screen readers navigate by landmarks. A `<div>` soup is invisible to that navigation.
- **Jinja2 templates stay readable.** Semantic tags make a template's structure obvious when you come back to it in three weeks.
- **Less class soup.** If the element already means "navigation," you need fewer classes to describe it.

Rule of thumb: reach for `<div>` and `<span>` only when no semantic element fits. They are the "no meaning, just a box" fallback.

## The box model

Every element is content wrapped in **padding**, then a **border**, then a **margin**. Get this wrong and every layout fights you.

![The CSS box model](assets/box-model.svg)

- **content** — the text or image itself.
- **padding** — space *inside* the border, part of the element's background.
- **border** — the edge.
- **margin** — space *outside* the border, between this element and its neighbours. Margins are transparent and can collapse into each other vertically.

### The one line to put in every stylesheet

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

By default, `width` sets the content width *only*, so adding padding makes an element wider than you asked for. `border-box` makes `width` include padding and border, which is how everyone actually thinks. Set it once, globally, and stop being surprised.

## Try it (ties into the project)

Ask students to mark up a single blog-style page — `<header>` with a `<nav>`, a `<main>` holding two `<article>` elements, and a `<footer>` — using **no CSS at all**. The point is to prove the page is readable and correctly structured before a single style is applied. This is exactly the skeleton a Jinja2 template produces.

## Resources

- [MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [MDN — Semantic HTML / document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [web.dev — Learn HTML](https://web.dev/learn/html) — modern, thorough, free.
- [MDN — The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- Video: [Kevin Powell — Learn the CSS box model](https://www.youtube.com/@KevinPowell) (search "box model" on his channel; several clear walkthroughs).
