---
title: JavaScript Refresh
tags: [web-development, javascript, dom, events, flask, htmx, 12dgt, teaching-resource]
created: 2026-07-27
---

# JavaScript Refresh

The important framing for this unit: in a **server-rendered Flask app, most of the "logic" lives in Python, not JavaScript.** The page is built on the server and sent as finished HTML. So students need *less* client-side JavaScript than a single-page-app tutorial implies. This note refreshes the JS that is actually useful for enhancing a server-rendered page, and stops there.

Set expectations early: JavaScript here is for **small enhancements** — reacting to a click, toggling something, validating a field before submit. It is not the engine of the app.

## The three things JavaScript does on a page

1. **Select an element** from the page.
2. **Listen for an event** (click, input, submit).
3. **Change something** in response.

That loop covers almost everything a project page needs.

```javascript
// 1. select
const button = document.querySelector("#toggle");
const panel = document.querySelector("#panel");

// 2. listen
button.addEventListener("click", () => {
  // 3. change
  panel.classList.toggle("hidden");
});
```

`querySelector` uses the same selectors as CSS, so students already know the syntax. `classList.toggle` flips a class on and off — pair it with a `.hidden { display: none; }` rule and you have a working show/hide with almost no code.

## Events students will actually use

- **`click`** — buttons, toggles.
- **`input`** — live reaction as the user types (character counters, live search).
- **`submit`** — on a `<form>`; use `event.preventDefault()` if you want to handle it in JS instead of a full page POST.

```javascript
form.addEventListener("submit", (event) => {
  if (nameField.value.trim() === "") {
    event.preventDefault();          // stop the POST
    showError("Name is required");
  }
});
```

Reinforce the security point from Note 05: **client-side validation is a convenience, not a safeguard.** The Flask route must validate again, because the browser can be bypassed.

## Where htmx fits (and why it means less JS)

Note 06 introduced [htmx](https://htmx.org/). It matters here too: a lot of what students might reach for JavaScript to do — load more rows, submit a form without a reload, refresh part of a page — htmx does with HTML attributes and a server-rendered fragment. For a server-rendered Flask app, htmx often removes the need to write the JavaScript at all. Teach the DOM basics above so students understand what is happening, then let htmx handle the common cases.

## What to deliberately leave out

You do **not** need frameworks (React, Vue), build tools, or `fetch`/JSON plumbing for this unit. If a student is keen and ahead, `fetch` to a Flask JSON endpoint is a reasonable extension — but it is an extension, not core. Keeping JavaScript minimal is the correct choice for the outcome, not a limitation to apologise for.

## Try it (ties into the project)

Add a live character counter to the "add a record" form from Note 05: an `input` listener that updates a count as the user types. Small, self-contained, and it exercises all three steps — select, listen, change.

## Resources

- Reference: [MDN — JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps).
- Reference: [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
- Deep reference: [javascript.info](https://javascript.info/) — the best structured JS resource; the DOM and Events sections are what this unit needs.
- Course: [freeCodeCamp — JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/) — free; assign specific sections, not the whole cert.
- Interactive: [Scrimba — Learn JavaScript (free tier)](https://scrimba.com/) — code-along from the first lesson.
- htmx: [examples](https://htmx.org/examples/) — copy-paste patterns for common interactions.
