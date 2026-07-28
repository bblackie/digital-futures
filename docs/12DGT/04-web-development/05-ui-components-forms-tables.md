---
title: UI Components — Forms and Tables
tags: [web-development, html, css, forms, tables, accessibility, flask, 12dgt, teaching-resource]
created: 2026-07-27
---

# UI Components — Forms and Tables

Students have been building components all along — the nav bar in Note 02, the card gallery in Note 03. This note goes deep on the two components the **Flask + SQLite** project cannot do without: **forms** (how data gets *into* the database) and **tables** (how query results come *out*). Both are easy to do badly and worth doing well.

## Forms: the front door to the database

A form is how the app receives user input. In a Flask app it POSTs to a route, which reads the values and writes to SQLite. The HTML side has non-negotiable rules.

### Labels are mandatory, not decoration

Every input needs a `<label>` tied to it. This is an accessibility requirement *and* it enlarges the clickable area, which helps on touch screens.

```html
<form action="/submit" method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Save</button>
</form>
```

Two things to drill:

- **`name` is what Flask reads.** In the route, `request.form["username"]` matches the `name` attribute, not the `id`. Students conflate these constantly.
- **Use the right `type`.** `type="email"`, `type="number"`, `type="date"` give free validation and better mobile keyboards. This is client-side convenience only — **the server must validate again**, because anything sent from the browser can be faked.

### Layout with Flexbox or Grid

A stacked form is a one-dimensional flow — Flexbox in a column:

```css
form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 24rem;
}
```

For label-beside-input rows, a two-column Grid lines everything up neatly. Either is a direct callback to Notes 02 and 03.

### Security note to plant early

Never build SQL by pasting form values into a query string. Use Flask's parameterised queries. This connects to the wider Impacts / SQL-injection material — flag it here and revisit it when the database work starts.

## Tables: displaying query results

When the Flask route returns rows from SQLite, a `<table>` is the correct, semantic way to show them. Use real table elements, not a grid of `<div>`s — screen readers and keyboard users rely on the structure.

```html
<table>
  <thead>
    <tr><th>Name</th><th>Email</th><th>Joined</th></tr>
  </thead>
  <tbody>
    {% for user in users %}
    <tr><td>{{ user.name }}</td><td>{{ user.email }}</td><td>{{ user.joined }}</td></tr>
    {% endfor %}
  </tbody>
</table>
```

That `{% for %}` block is Jinja2 looping over the rows the route passed in — the exact pattern the project will use. Style tables for readability:

```css
table { border-collapse: collapse; width: 100%; }
th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid #ddd; }
tbody tr:nth-child(even) { background: #f6f6f6; }  /* zebra striping */
```

### Tables and small screens

Wide tables overflow phones. The pragmatic fix is a scroll container:

```css
.table-wrap { overflow-x: auto; }
```

Wrap the table in `<div class="table-wrap">`. It is not elegant, but it is honest and it works — good enough for the project, and a real technique used in production.

## Other components, briefly

Buttons, cards, and alerts are all just boxes with padding, a background, and a border-radius — the box model from Note 01 plus a little Flexbox for internal alignment. Once students see that "a component is a styled box, sometimes with a flex row inside," the mystery goes. Encourage a small set of reusable classes over one-off styles.

## Try it (ties into the project)

Build one complete "add a record" form and one "list all records" table on a single static HTML page, styled and accessible, with placeholder Jinja2 syntax where the dynamic data will go. This page becomes a working template the moment the Flask routes exist.

## Resources

- Course: [web.dev — Learn Forms](https://web.dev/learn/forms) — the best free, modern forms course.
- Reference: [MDN — Web forms guide](https://developer.mozilla.org/en-US/docs/Learn/Forms).
- Reference: [MDN — Styling tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_tables).
- Reference: [MDN — HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).
- Docs: [Flask — handling form data](https://flask.palletsprojects.com/en/stable/quickstart/#the-request-object) and [Jinja2 templates](https://jinja.palletsprojects.com/en/stable/templates/).
- Video: [Kevin Powell — styling forms](https://www.youtube.com/@KevinPowell) (search "forms" on his channel).
