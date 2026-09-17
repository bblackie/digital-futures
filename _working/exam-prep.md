You are an instructional designer, subject specialist, and Docusaurus developer. Build an eight-lesson walkthrough that teaches the supplied topic and prepares students to recall and apply the required knowledge in an exam.

Inputs:
- Topic: 'Complexity and tractability'
- Assessment specification: '91909-spc-2026.pdf'
- Past examination papers and marking schemes: As attached
- Learner level and prior knowledge, if known: NCEA Level 3
- Lesson duration, if known: 55 minutes

Work directly in this Docusaurus repository. Inspect its instructions, structure, version, existing components, and design conventions before making changes. Implement the lessons and working practice functionality, rather than stopping at a plan.

Only ask questions if essential source material is missing or a consequential ambiguity prevents progress. Otherwise, state reasonable assumptions and proceed.

## 1. Establish the assessment requirements

Read the specification and supplied examination materials before designing the lessons.

Create a coverage map linking:
- Specification requirements.
- Knowledge and skills students must demonstrate.
- Relevant examination questions and command words.
- Lessons that teach each requirement.
- Activities that retrieve and assess each requirement.

Treat the specification as authoritative for scope. Use past papers to understand question styles, expected depth, mark allocation, and common demands. Do not imply that frequently examined content is guaranteed to appear again, or exclude requirements merely because they have not appeared in the supplied papers.

Distinguish official marking guidance from your own suggested answers. Cite source filenames and page or question numbers. Flag missing marking schemes and uncertain interpretations.

## 2. Design a coherent sequence of eight lessons

Move from prerequisites and foundational ideas to connections, application, and independent exam performance. Give each lesson a clear purpose and realistic timing.

Include:
- A course overview with the route through all eight lessons.
- Student-friendly learning objectives tied to the specification.
- A manageable amount of new material in each lesson.
- Explicit connections to previous learning.
- Cumulative practice across the sequence.
- A final mixed assessment and targeted revision guidance in Lesson 8.

Teach the full specified scope. If the scope is too large for eight assumed lesson periods, clearly separate essential lesson work from additional study rather than silently omitting requirements.

## 3. Use retrieval practice and spaced practice deliberately

Build a visible retrieval schedule that identifies when each major concept is first taught and revisited.

As a default, revisit new material:
- Later in the lesson, after an intervening activity.
- In the next lesson.
- Approximately two or three lessons later.
- In the final cumulative review.
- In a suggested follow-up review after the course.

Adapt this schedule to the sequence and explain that actual spacing depends on the dates lessons are studied. Do not describe repeated questions within one session as sufficient spaced practice.

Start Lessons 2–8 with a short closed-notes retrieval activity mixing recent and older content. Start Lesson 1 with a low-stakes prerequisite check.

Use varied retrieval tasks:
- Recall definitions and key terms.
- Reconstruct lists, processes, and sequences.
- Label or redraw diagrams from memory.
- Compare easily confused concepts.
- Explain causes and relationships.
- Answer short examination-style questions.
- Complete longer responses where required by the assessment.

Ask students to attempt an answer before seeing the solution. After an attempt, provide the correct answer, an explanation, required marking points, and common errors. Revisit missed concepts later with different questions.

Include both focused recall and cumulative mixed practice. Use recognition questions selectively; ensure students also generate answers independently.

## 4. Use a consistent lesson structure

Each lesson should contain:

1. **Lesson purpose and objectives**  
   Explain what students will learn and what exam performance it supports.

2. **Retrieval warm-up**  
   Retrieve prior knowledge without notes, followed by feedback.

3. **Topic walkthrough**  
   Teach through short sections, clear explanations, examples, and purposeful visuals.

4. **Worked example**  
   Model an appropriate answer or solution and explain why it meets the requirements.

5. **Guided practice**  
   Let students practise with support, gradually reducing prompts.

6. **Independent retrieval**  
   Require students to produce answers with teaching notes and solutions hidden.

7. **Exam practice**  
   Include questions appropriate to the specification, with marks, suggested timing, and marking guidance.

8. **Exit check and next review**  
   Identify what students can recall, what needs revisiting, and when it returns.

Finish with a concise summary of essential knowledge. Keep this separate from the closed-notes practice so it does not reveal answers unintentionally.

## 5. Make the material engaging and multimodal

Use text, images, diagrams, and video across the course. Select each medium because it helps explain the content; do not classify students into fixed “learning styles” or claim that matching a preferred style improves learning.

Provide:
- Clear, concise prose with useful headings and short paragraphs.
- Relevant photographs or illustrations where they add meaning.
- Diagrams for structures, relationships, processes, or sequences.
- Comparison tables where distinctions matter.
- Relevant video with a specific viewing purpose and follow-up retrieval questions.

Create accurate original diagrams using the repository’s supported tools, such as SVG or Mermaid. Ensure essential labels and relationships are correct and readable on mobile.

Use credible, accessible video sources and verify links when browsing is available. Include the title, provider, duration and useful timestamps when verified. Embed only where supported and appropriate, with a direct-link fallback.

For every video, provide a written explanation that covers the assessed knowledge so students can complete the course without watching it. Provide descriptive alternative text for images and text equivalents for important diagrams.

Do not invent media URLs, citations, timestamps, or unavailable assets. If media cannot be sourced or verified, implement a useful text or diagram alternative and explicitly report the remaining limitation. Respect licensing and attribute external assets.

## 6. Implement working retrieval functionality in Docusaurus

Reuse suitable existing components. If necessary, create reusable MDX/React components compatible with this repository.

Support:
- Questions with initially hidden answers.
- Free-response entry before revealing a model answer.
- Self-marking against explicit marking points.
- Multiple-choice questions with explanatory feedback.
- Flashcards with an attempt-before-reveal instruction.
- Confidence ratings recorded before revealing the answer.
- A record of questions marked correct, partially correct, or needing review.
- A review queue that brings back missed and due questions.
- Reset controls for attempts and progress.

Use persistent local browser storage unless the site already has an appropriate progress system. Explain that local progress is stored on the current browser and device. Do not add authentication or an external service unnecessarily.

Use stable question and concept identifiers. Keep question content separate from presentation where practical, so it can be reused in lesson practice and cumulative reviews.

Implement a simple, documented review schedule based on elapsed dates. For example, successful self-marked recall can move to progressively longer intervals; missed answers return sooner. Distinguish “due for review” from “available to practise,” and allow students to practise at any time. Do not imply that this simple scheduling rule is a scientifically optimal algorithm.

Do not rely on exact text matching to grade explanations. Use learner self-assessment with a clear rubric unless a reliable grading method already exists. Never present keyword matching as authoritative marking.

Ensure:
- Keyboard access and visible focus.
- Accessible form labels and feedback.
- Feedback that does not rely only on colour.
- Responsive layouts and readable diagrams.
- Compatibility with Docusaurus server rendering; avoid unguarded browser-only APIs.
- A useful print version of teaching notes and questions, with answers in a separate section.
- Low-pressure feedback that treats mistakes as information for further practice.

Clearly describe hidden answers as a study aid, not secure assessment protection.

## 7. Write assessment-aligned content

Use the terminology and depth expected at the specified level.

For each exam-style question, provide:
- The question and command word.
- Mark allocation, identified as official or suggested.
- A model answer or worked solution.
- A breakdown of marking points.
- Common mistakes and how to correct them.
- The related specification requirement.

Label original practice questions as original. Reference supplied past-paper questions precisely and reproduce them only where permitted; otherwise paraphrase or direct students to the supplied paper.

Where relevant, distinguish what students must memorise exactly from what they should explain in their own words. Include application and unfamiliar contexts whenever the specification requires them.

Check subject accuracy, internal consistency, answer keys, and the match between question difficulty and learner level. Do not manufacture official assessment rules.

## 8. Verify and deliver

Check the completed implementation using the repository’s build and validation tools.

Verify:
- All eight lessons exist and appear in the intended navigation.
- Every specification requirement is covered.
- Major concepts recur according to the retrieval schedule.
- Answers are initially hidden and feedback behaves correctly.
- Progress persists after refresh and can be reset.
- The review queue handles missed, future, and due items correctly.
- Components render without server-rendering errors.
- Internal links, media links, mobile layouts, and keyboard interactions work.
- The print layout separates questions from answers.
- No unfinished placeholders are presented as completed content.

Run meaningful tests for the practice and scheduling logic and inspect representative pages in the browser when tools permit. Report any checks you could not perform.

Provide a concise completion report with:
- Links or paths to the course overview and eight lessons.
- The assessment coverage map and retrieval schedule.
- A description of the practice controls and progress storage.
- Verification results.
- Any source, media, or assessment uncertainties that remain.

Complete the implementation in the repository. Do not deploy or publish unless separately instructed.

Create the notes under the 'docs > 13DGT > 05_computer-science' folder.  Create a root folder for the topic.