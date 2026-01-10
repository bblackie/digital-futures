# Markdown Style Guide  
*Digital Technologies Course Site*

This guide defines how content on this site is written and structured.  
The goal is **clarity, consistency, and long-term maintainability**.

---

## 1. General Principles

- Content is written in **Markdown first**
- HTML is used **only** for layout (hero blocks, cards, figures, video)
- Moodle handles submissions and grades — **not content**
- Pages should read like **articles**, not worksheets

> If something looks wrong, check spacing before assuming it’s broken.

---

## 2. Headings

Use headings to create a clear hierarchy.

```markdown
# Page title (one per page)
## Major section
### Subsection
```
Rules:

- Always leave one blank line after a heading

- Do not skip heading levels

- Headings should describe ideas, not tasks

## 3. Paragraphs and Line Length

Write in short, readable paragraphs

One idea per paragraph

Blank line between paragraphs (always)

Good:

- AI systems rely on data.

- The quality of that data matters.

## 4. Lists (Very Important)

Lists must be separated from surrounding content.

Correct:

Some examples include:

- Recommendation systems
- Spam filters
- Face recognition


Incorrect:

Some examples include:
- Recommendation systems


Rules:

Use - for bullets

Start bullets at column 1

Leave a blank line before and after lists

## 5. Emphasis

Use emphasis sparingly.

Italics for emphasis or tone

Bold for key terms

Avoid ALL CAPS

**Artificial Intelligence (AI)** refers to systems that can *learn from data*.

## 6. Images and Figures

All images should include context.

Preferred pattern (HTML for reliability):

<figure>
  <img src="IMAGE_URL" alt="Descriptive alt text">
  <figcaption>Short caption explaining why the image matters.</figcaption>
</figure>


Rules:

Images should support the text, not decorate it

Captions explain relevance

Avoid embedding images mid-sentence

## 7. Video Embeds (YouTube)

Videos should be framed as learning tools, not filler.

Use the responsive container:

<div class="video">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
    title="Descriptive video title"
    allowfullscreen></iframe>
</div>


Always introduce the video with a sentence explaining why it’s included.

## 8. Callouts (Admonitions)

Use callouts to guide attention.

!!! tip "In plain English"
    This explains the idea without technical language.


Common types:

tip – guidance or clarification

note – supporting information

warning – misconceptions or risks

question – prompts for discussion

Do not overuse them.

## 9. Magazine Components (Custom Layout)

Custom layout elements are allowed:

.hero → page introduction

.pullquote → key ideas worth pausing on

.cards → comparisons or contrasts

Rule:

- Use layout to support meaning, not to show off.

## 10. Tone and Voice

Clear

Neutral

Curious, not preachy

No slang

No filler phrases

Assume:

The reader is intelligent but unfamiliar with the topic.

## 11. What NOT to Do

Do not paste content directly from OneNote without editing

Do not mix Markdown lists inside HTML blocks

Do not rely on visual formatting alone to convey meaning

Do not embed assessments here — link to Moodle instead

## 12. Final Check Before Publishing

Before moving on:

Headings render correctly

Lists display as lists

Images load and have captions

Page scrolls cleanly on mobile

Content reads well aloud

If all of that is true, the page is ready.


---

### Why this is worth having

- You’ll write faster
- Pages will feel consistent
- You won’t re-learn the same Markdown lessons
- It quietly models **good technical documentation practice** to students

If you want next, I’d suggest:

- a **Lesson Page Template** (blank starter file)
- or an **Assessment Page Template** aligned to NCEA evidence expectations
- blah
