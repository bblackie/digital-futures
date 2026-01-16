---
title: "Accessibility & WCAG Compliance"
course: "Year 13 Digital Technologies"
unit: "Unit 1: Web Design & UX Principles"
aligned_standard: "AS91901 – Web Design"
topic_number: 4
version: "1.0.0"
status: "Student-facing"
---

# 4. Accessibility & WCAG Compliance

## Purpose of These Notes

These notes explain:
- why accessibility matters (moral and practical reasons)
- the W3C Web Content Accessibility Guidelines (WCAG 2.1)
- specific, actionable techniques to make designs accessible
- how to verify accessibility before submission

---

## Key Concepts

By the end of this topic, you must understand:

- **Accessibility:** Designing so people with disabilities can use your site
- **Universal design:** Designs that work for everyone benefit everyone
- **WCAG 2.1:** The international standard for web accessibility
- **Assistive technologies:** Screen readers, keyboard navigation, text magnification

> Accessibility is not optional. WCAG Level AA compliance is a minimum requirement for AS91901.

---

## Core Explanation

### Why Accessibility Matters

**Common misconception:** *"Accessibility is for disabled people; I don't need to design for them."*

**Reality:**
- **15% of the world's population has a disability** (WHO)
- **Vision problems** (colour blindness, low vision, blindness) affect 1 in 8 people
- **Hearing problems** affect 1 in 5 people
- **Motor disabilities** (arthritis, tremor, paralysis) affect many
- **Cognitive disabilities** (dyslexia, ADHD, autism) are common

**More importantly:** Accessible design benefits *everyone*:
- Captions help people in noisy environments (and people learning a language)
- Large text helps people with low vision (and people reading on a small phone)
- Keyboard navigation helps people with motor disabilities (and people on a train using one hand)
- Simple language helps people with cognitive disabilities (and people reading in their second language)

### WCAG 2.1 Standards

The **W3C Web Content Accessibility Guidelines (WCAG) 2.1** define accessibility standards.

#### Three Levels

- **Level A:** Basic accessibility
- **Level AA:** Enhanced accessibility (recommended for most websites)
- **Level AAA:** Optimal accessibility (very strict; not required for most sites)

**For AS91901:** You must achieve **Level AA** compliance.

#### Four Principles (POUR)

WCAG organizes around four principles:

1. **Perceivable:** Users must be able to perceive content
2. **Operable:** Users must be able to navigate and use the site
3. **Understandable:** Content must be clear and the site must be predictable
4. **Robust:** The site must work with assistive technologies

### WCAG 2.1 Specific Requirements

#### Perceivable

**Colour Contrast**
- Text must have sufficient contrast with its background
- Level AA: 4.5:1 for normal text, 3:1 for large text
- Test: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

**Text Alternatives (Alt Text)**
- All images must have descriptive alt text
- Alt text describes the image's *purpose*, not just the content
- Example: Image of a climbing wall
  - Bad alt text: "climbing wall"
  - Good alt text: "Indoor climbing wall with coloured holds at the climbing gym, 15 feet tall"

**Don't use colour alone**
- Never convey information through colour alone (e.g., "required fields are red")
- Pair colour with another indicator (text label, icon, asterisk)

#### Operable

**Keyboard Navigation**
- All interactive elements (buttons, links, forms) must be operable via keyboard
- Users must be able to see which element currently has focus
- Tab order should be logical (top-to-bottom, left-to-right)

**Avoid Keyboard Traps**
- Users shouldn't get stuck unable to navigate away from an element using only the keyboard

**Skip Links**
- Provide a "Skip to main content" link so keyboard users don't have to tab through the entire navigation

#### Understandable

**Clear Language**
- Use simple, plain language
- Avoid jargon or define it when necessary
- Short paragraphs, lists, and headings improve scannability

**Consistent Navigation**
- Navigation structure should be consistent across pages
- Buttons and links should be labelled clearly
- Users shouldn't be confused about where they are

**Error Messages**
- Forms must have clear error messages that identify the problem
- Error messages should suggest how to fix the problem

#### Robust

**Valid HTML**
- Code should validate against HTML5 standards
- This helps screen readers and other assistive technologies parse your content correctly

**Semantic HTML**
- Use proper HTML tags:
  - `<h1>`, `<h2>` for headings (not `<div>` styled to look like headings)
  - `<button>` for buttons (not `<div onclick>`)
  - `<nav>` for navigation
  - `<main>` for primary content
  - `<form>` with `<label>` for forms (not `<div>` acting as forms)

### Assistive Technologies

#### Screen Readers
- Software that reads website content aloud
- Popular: NVDA (free), JAWS (expensive), VoiceOver (Mac/iOS)
- Users navigate by headings, landmarks, and tabbing
- **Test your site:** Use NVDA or VoiceOver to navigate without looking at the screen

#### Keyboard Navigation
- Users who can't use a mouse rely entirely on keyboard
- Tab through your site; verify you can reach all interactive elements
- Verify focus indicators are visible (browser default is often sufficient)

#### Text Magnification
- Users may zoom to 200% or larger
- Responsive design matters; layouts shouldn't break at large zoom

#### High Contrast Mode
- Some operating systems offer high-contrast modes (e.g., Windows High Contrast)
- Test your site in high-contrast mode; verify text and buttons are visible

---

## Worked Example: Conceptual Reasoning

**Scenario:** Designing a form for a booking website.

**Initial design (inaccessible):**
```
Name: [input box]
Email: [input box]                Required fields are RED
Phone: [input box]
[Submit button]
```

**Problems:**
- No labels associated with inputs (screen reader users won't know what each field is)
- "Required" is conveyed by colour alone (colourblind users don't know which are required)
- No error messages; if submission fails, users don't know why
- Submit button isn't keyboard-accessible if the form uses JavaScript improperly

**Accessible redesign:**
```
<form>
  <fieldset>
    <legend>Booking Details</legend>
    
    <label for="name">Name *</label>
    <input id="name" type="text" required aria-required="true">
    
    <label for="email">Email *</label>
    <input id="email" type="email" required aria-required="true">
    
    <label for="phone">Phone</label>
    <input id="phone" type="tel">
    
    <p class="note">* Required fields</p>
    
    <button type="submit">Book Appointment</button>
  </fieldset>
</form>
```

**Improvements:**
- Semantic HTML: `<label>`, `<input>`, `<fieldset>`, `<legend>` clearly define form structure
- Labels linked to inputs via `for` and `id` attributes (screen readers announce labels)
- Required indicated by `*` and text "* Required fields" (not colour alone)
- Valid form element (not a `<div>` disguised as a form)
- Keyboard-accessible: Tab through inputs; Enter submits

**Testing:**
- Use NVDA screen reader to navigate; verify labels are read
- Zoom to 200%; verify layout doesn't break
- Use keyboard only; verify all fields and buttons are reachable
- Check colour contrast; verify 4.5:1 minimum

---

## Common Misconceptions

### Misconception 1: *"Accessibility is only for blind users"*

**Why it's wrong:** Disability is diverse. Accessibility benefits people with:
- Visual disabilities (blindness, low vision, colour blindness)
- Motor disabilities (can't use a mouse)
- Hearing disabilities (need captions)
- Cognitive disabilities (need clear language)
- Temporary disabilities (broken arm, sunglasses on a bright day)

**Correct thinking:** Design for everyone. Accessibility is universal design.

### Misconception 2: *"Accessible design looks boring"*

**Why it's wrong:** You can have beautiful, accessible design. They're not mutually exclusive.

**Correct thinking:** Accessibility constrains *some* decisions (e.g., colour contrast) but doesn't prevent good design. Many gorgeous, accessible sites exist.

### Misconception 3: *"I'll add accessibility after the design is done"*

**Why it's wrong:** Retrofitting accessibility is expensive and often produces poor results. Design accessibility from the start.

**Correct thinking:** Make accessibility decisions early. It's faster and produces better outcomes.

### Misconception 4: *"Alt text is optional because I have a caption"*

**Why it's wrong:** Captions describe audio; they don't describe images. Alt text is separate and mandatory.

**Correct thinking:** All images need alt text, even if there's a caption nearby.

---

## WCAG Checklist for AS91901

Before submission, verify:

- [ ] **Colour Contrast:** All text has 4.5:1 contrast with background (test with WebAIM Contrast Checker)
- [ ] **Alt Text:** All images have descriptive alt text
- [ ] **Semantic HTML:** Headings, buttons, forms, and landmarks use proper HTML tags
- [ ] **Keyboard Navigation:** All interactive elements are reachable and operable via Tab key
- [ ] **Focus Indicators:** Clear visual indication of which element is currently focused
- [ ] **Form Labels:** All form inputs have associated `<label>` elements
- [ ] **Error Messages:** Form errors are clearly explained; suggestions for fixing are provided
- [ ] **Plain Language:** Text is clear, jargon is explained, paragraphs are short
- [ ] **Responsive:** Layout works at 200% zoom; no horizontal scrolling at 320px width

---

## Assessment Relevance

In **AS91901**, you must submit:

- **Accessibility checklist** verifying WCAG 2.1 Level AA compliance
- **Evidence of testing:** Screenshots of contrast checks, keyboard navigation tests, screen reader testing
- **Design rationale:** Explain how your design decisions support accessibility (e.g., why you chose this colour, how you structured headings)

**In your design critique**, your teacher will ask:
- *"Why did you choose this colour? What's the contrast ratio?"*
- *"Can you navigate this form using only your keyboard?"*
- *"What would a screen reader user hear when they visit your site?"*
- *"Does your design work for colourblind users?"*

Accessibility is not optional. It's part of professional web design.

---

## External Resources

### WCAG & Standards
- **[WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)** – Official checklist of requirements
- **[Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)** – Comprehensive guidance

### Tools & Checkers
- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)** – Verify text contrast
- **[WAVE Browser Extension](https://wave.webaim.org/extension/)** – Accessibility evaluation tool
- **[Axe DevTools](https://www.deque.com/axe/devtools/)** – Free accessibility testing
- **[NVDA Screen Reader](https://www.nvaccess.org/)** – Free screen reader for testing

### Learning Resources
- **[WebAIM – Web Accessibility In Mind](https://webaim.org/)** – Clear, practical accessibility guidance
- **[A11ycasts by Google](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvePng7V)** – YouTube series on accessibility principles

### Videos
- **[Accessibility for Everyone (Interaction Design Foundation)](https://www.youtube.com/watch?v=O6QJF2ggpEQ)** – Overview of accessibility principles
- **[Testing Accessibility](https://www.youtube.com/watch?v=cOmehxAU_4s)** – How to manually test for common issues

---

## Key Vocabulary

- **Alt text:** Descriptive text for images, read by screen readers
- **ARIA:** Accessible Rich Internet Applications; attributes that provide additional meaning to HTML
- **Assistive technology:** Software or hardware that helps people with disabilities use computers
- **Captions:** Text transcription of audio content (for deaf/hard-of-hearing users)
- **Colour blindness:** Difficulty distinguishing certain colours (affects ~8% of men)
- **Contrast ratio:** Measure of brightness difference between text and background
- **Focus:** The interactive element currently selected (via keyboard or mouse)
- **Focus indicator:** Visual indicator of which element is focused
- **Keyboard navigation:** Using only the keyboard (Tab, Enter, Arrow keys) to interact with a website
- **Screen reader:** Software that reads website content aloud
- **Semantic HTML:** HTML that uses proper tags to convey meaning (e.g., `<button>` for buttons, not `<div>`)
- **Skip link:** Link that allows keyboard users to skip repetitive navigation
- **WCAG:** Web Content Accessibility Guidelines; international standard for web accessibility

---

## Next Steps

You now understand accessibility principles. In the next topic, [Prototyping & Tools](05_prototyping-tools.md), you'll learn how to create functional, testable prototypes in Figma or similar tools.

---

*End of Topic 4: Accessibility & WCAG Compliance*
