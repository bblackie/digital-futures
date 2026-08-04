---
title: CSS Grid Layout
tags: [web-development, css, grid, layout, 12dgt, teaching-resource]
created: 2026-07-27
---

# CSS Grid Layout

Grid is a **two-dimensional** layout system: it controls rows and columns at the same time. That makes it the tool for **page-level scaffolding** (header / sidebar / main / footer) and for **galleries of equal things** (a grid of cards, a photo wall). Where Flexbox flows items along one axis, Grid places them into a structure you define.

By the time students reach this note they can push boxes along one axis with Flexbox. Grid is the step up to placing boxes in a plan.

## The mental model: tracks, lines, cells, areas

![CSS Grid anatomy: tracks, lines, cells, gap, and an area](assets/css-grid-anatomy.svg)

- **Tracks** are the columns and rows you define.
- **Grid lines** are the numbered boundaries between tracks (line 1 is the start edge).
- A **cell** is one column-by-row square.
- An **area** is a block of cells an item spans.
- **gap** is the space between tracks — same idea as in Flexbox.

## The properties that do the work

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* three equal columns */
  gap: 1rem;
}
```

`fr` is the "fraction of remaining space" unit — `1fr 1fr 1fr` means three equal columns that share the available width. `repeat(3, 1fr)` is shorthand for the same thing.

To make an item span more than one cell:

```css
.featured {
  grid-column: span 2;   /* take up two columns */
}
```

## Intrinsic responsiveness lives here too

This is the single most useful Grid pattern for the project, and it is responsive with **no media query**:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

Read it as: "fit as many columns as you can, each at least 250px wide, sharing space equally." On a wide screen you get four or five columns; on a phone you get one. The browser does the counting. This is the pattern for displaying a set of database records as cards — exactly what the Flask app will do with query results.

## Page scaffolding with named areas

For whole-page layout, named areas are readable and map cleanly onto semantic HTML:

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
header { grid-area: header; }
nav    { grid-area: sidebar; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

The `grid-template-areas` block is a picture of the layout in text. Students can read the structure at a glance, which is worth a lot when the layout goes into a shared `base.html`.

## Flexbox or Grid? A decision rule students can remember

- Laying out **content along one line** (nav, button row, tag list)? **Flexbox.**
- Laying out a **structure of rows and columns** (page, card gallery)? **Grid.**
- They combine constantly: a Grid page whose cards each use Flexbox internally. That is normal and correct.

## Warm-up game

[**Grid Garden**](https://cssgridgarden.com/) — 28 levels teaching `grid-template-columns`, spanning, and line-based placement. Run it as the opener for the Grid session, the same way Flexbox Froggy opens the Flexbox one.

## Resources

- Video: [Kevin Powell — Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU) (37 min).
- Video: [Kevin Powell — Flexbox vs. Grid](https://www.youtube.com/watch?v=ESAXStllfcw) — reinforces the decision rule above.
- Interactive: [Josh Comeau — An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) — free.
- Reference: [CSS-Tricks — A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).
- Reference: [MDN — Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
- Game: [Grid Garden](https://cssgridgarden.com/).
