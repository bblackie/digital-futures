---
title: Responsive and Fluid Design
tags: [web-development, css, responsive-design, media-queries, container-queries, 12dgt, teaching-resource]
created: 2026-07-27
---

# Responsive and Fluid Design

Read Notes 02 and 03 first. By now students have already built responsive behaviour — `flex-wrap`, `flex: 1 1 250px`, and `auto-fit`/`minmax()` all adapt to screen width with no extra code. That is **intrinsic responsiveness**, and it does most of the job.

This note covers the part that is *not* automatic: the **deliberate** changes you make at specific screen sizes. Frame it that way for students, so they do not fall back into the old habit of building a fixed layout and then "adding responsiveness."

## Set the viewport (or nothing else works)

Every page needs this in the `<head>`, or mobile browsers pretend to be desktop-width and zoom out:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Put it in the Flask `base.html` once. Forgetting it is the single most common reason "my responsive CSS isn't working."

## Fluid units: scale without breakpoints

Before reaching for media queries, prefer values that scale on their own.

- **Relative units** — use `rem` for spacing and type (relative to the root font size) rather than fixed `px`.
- **`clamp(min, preferred, max)`** — a value with built-in floor and ceiling:

```css
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}
```

That heading never drops below `1.5rem`, never exceeds `3rem`, and scales smoothly with the viewport in between — no breakpoints, no jumps. `clamp()` is the modern answer to a lot of what used to need media queries.

## Media queries: the deliberate breakpoints

When a layout genuinely needs to *change* — not just scale — use a media query. Work **mobile-first**: write the small-screen styles as the default, then add complexity as the screen grows with `min-width`.

```css
/* default: single column, mobile */
.layout { display: grid; gap: 1rem; }

/* from 40em (~640px) upward: two columns */
@media (min-width: 40em) {
  .layout { grid-template-columns: 1fr 1fr; }
}
```

Why mobile-first: the simplest layout is the default, and you *add* rules for bigger screens rather than *undoing* desktop rules for small ones. It produces less CSS and fewer bugs. Use `em` for breakpoints so they respond to the user's font size, not just pixels.

## Container queries: the newer, better tool for components

Media queries respond to the **whole viewport**. But a card does not care how wide the screen is — it cares how much room *it* has. Container queries let a component respond to its own container:

```css
.card-list { container-type: inline-size; }

@container (min-width: 400px) {
  .card { display: flex; }  /* side-by-side only when the card has room */
}
```

This is genuinely useful and now well supported. For a component that appears both in a narrow sidebar and a wide main column, a container query lets the *same* component adapt to each context. Introduce it after media queries, as the more precise tool.

## Try it (ties into the project)

Take the card gallery from Note 03. It already reflows via `auto-fit`. Now add **one** deliberate change: below `30em`, hide a secondary detail and enlarge the tap targets. The exercise makes the distinction concrete — intrinsic reflow handles the columns; the media query handles the deliberate change.

## Resources

- Course: [web.dev — Learn Responsive Design](https://web.dev/learn/design) — modern and thorough, from the Chrome team.
- Reference: [MDN — Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design).
- Reference: [MDN — Using container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries).
- Video: [Kevin Powell — Responsive design playlist](https://www.youtube.com/@KevinPowell/playlists) (search his channel for "responsive" and "container queries").
- Reference: [MDN — clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).
