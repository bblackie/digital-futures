---
title: "User Testing & Usability Evaluation"
course: "Year 13 Digital Technologies"
unit: "Unit 1: Web Design & UX Principles"
aligned_standard: "AS91901 – Web Design"
topic_number: 6
version: "1.0.0"
status: "Student-facing"
---

# 6. User Testing & Usability Evaluation

## Purpose of These Notes

These notes explain:
- how to plan and conduct user testing
- how to observe and record usability issues
- how to distinguish between real problems and false alarms
- how to convert feedback into actionable design changes

---

## Key Concepts

By the end of this topic, you must understand:

- **Usability testing:** Observing real users interact with your design to find problems
- **Think-aloud protocol:** Asking users to explain their reasoning as they use your design
- **Usability issue:** A problem that prevents users from completing a task or causes frustration
- **Actionable feedback:** Specific, testable problems with clear solutions

> User testing reveals what you can't see from your desk. Don't guess; test.

---

## Core Explanation

### Why Test with Users?

Designers are biased. You know how your site works because you built it. Users don't have that knowledge.

Common problems designers miss:
- Text you think is clear is actually confusing
- The button you think is obvious is actually hard to find
- The feature you're proud of is the one users ignore
- The flow you designed isn't intuitive

**Testing with 3–5 users catches 85% of usability problems.** It's not about quantity; it's about watching people struggle.

### Planning a User Test

#### Define Your Research Question

What do you want to know?
- *"Can users find the booking button?"*
- *"Do users understand what 'premium plan' means?"*
- *"What confuses users about this form?"*

Clear questions lead to focused testing.

#### Select Participants

Choose users who **represent your actual users**, not just classmates.

**Bad:** Test only your friends (they know you, they're biased, they might use tech differently than your actual users)

**Good:** Test people who:
- Fit your user persona
- Haven't seen your design before
- Use the same devices as your typical users
- Have relevant experience (e.g., if designing a booking site, test with people who book things)

**For AS91901:** You need at least 3 testers. Ideally, they're not in your class.

#### Write Tasks (Not Instructions)

Give users a **goal**, not instructions on how to achieve it.

**Bad task:** "Click on the navigation menu, scroll to 'Pricing', and click on the 'Premium Plan' button."
(This is instructions; it defeats the purpose of testing)

**Good task:** "You want to see what the premium plan includes. How would you find that information?"
(This is a goal; users find their own path)

#### Create a Testing Script

Write what you'll say and do during the test:
1. Welcome participant; explain the test (5 min)
2. Ask participant to think aloud (explain their reasoning) (1 min)
3. Give first task (1 min)
4. Observe without helping (5–10 min)
5. Ask clarifying questions (2 min)
6. Repeat for remaining tasks
7. Debrief (3 min)

Total: ~30 minutes per user

### Conducting the Test

#### The Think-Aloud Protocol

Ask users: *"As you navigate this site, please tell me what you're thinking. Why did you click that button? What are you looking for now?"*

This reveals:
- User mental models (how they think about the site)
- Confusion points (where they get stuck)
- Misunderstandings (wrong expectations)

**What to listen for:**
- Hesitations: *"Um... should I click here?"* (Sign of uncertainty)
- Wrong assumptions: *"I thought this page would show pricing."* (Navigation problem)
- Frustration: *"I don't know what that button does."* (Unclear labeling)

#### Observe Without Interfering

Let users struggle. Don't help them (unless they're truly stuck).

**Resist these impulses:**
- Don't say "try clicking the button in the top-right corner" (you're leading them)
- Don't explain what your design does (you're solving the problem for them)
- Don't defend your design (they're testing it, not criticizing you)

**Do say:**
- *"Tell me what you're thinking right now"*
- *"What would you try next?"*
- *"Where would you expect to find that?"*

#### Record the Test

Capture:
- **Video or screen recording:** Shows exactly what the user did
- **Audio:** Captures their think-aloud commentary
- **Notes:** Your observations (hesitations, confusion, comments)

Tools: Zoom, OBS, Figma's built-in recording (if testing a prototype)

### Analyzing Results

#### Identify Issues

After testing, watch the recordings and list problems:

**Issue 1:** User couldn't find the booking button
- **Frequency:** Happened with 3 of 3 users
- **Severity:** Critical (task couldn't be completed)
- **Why:** Button is small and uses similar colour to background; no clear call-to-action

**Issue 2:** User was confused by the term "Add to Wishlist"
- **Frequency:** 1 of 3 users
- **Severity:** Minor (user figured it out)
- **Why:** Terminology is unclear; icon helps but isn't enough for someone unfamiliar with it

**Issue 3:** User thought a decorative image was a link
- **Frequency:** 1 of 3 users
- **Severity:** Minor
- **Why:** Image needed a "not clickable" indicator (e.g, no hover effect or cursor change)

#### Prioritize Fixes

**High priority:**
- Critical issues (prevent task completion)
- Issues affecting most users
- Quick fixes with big impact

**Medium priority:**
- Issues affecting some users
- Confusing but not blocking
- Fixes that require moderate effort

**Low priority:**
- Issues affecting one user
- Edge cases
- Fixes that take significant effort for minor improvement

### Common Testing Issues

#### False Alarms

Not every hesitation is a design problem.

**False alarm:** User pauses for 2 seconds before clicking the right button
- **Reason:** They might be thinking, reading, or just slow
- **Action:** If 2 of 3 users click it immediately, the button is clear

**Real problem:** All 3 users click the wrong button initially
- **Reason:** The design is misleading
- **Action:** Redesign for clarity

#### Observer Bias

You already know how your design works. Watching someone struggle with it is painful.

**Resist this:**
- Don't explain your design (let them figure it out)
- Don't defend your choices (listen without reacting)
- Don't dismiss feedback as "the user is wrong" (if a user gets it wrong, your design is unclear)

#### Asking Leading Questions

**Leading question:** "That button was clear, right?"
(User agrees because you suggested it was clear)

**Better question:** "What did you think that button would do?"
(User explains their actual interpretation)

---

## Worked Example: Conceptual Reasoning

**Scenario:** Testing a prototype for a fitness app.

**Task:** "You want to find your workout history for the past month. How would you do that?"

**User 1:**
- Clicks "Home" button
- Scrolls down looking for a "History" section
- Doesn't find it
- Clicks "Menu" button (three lines icon)
- Sees "Workout History" option
- Clicks it; finds history
- **Issue:** History wasn't obvious; users needed to open menu to find it

**User 2:**
- Immediately taps "Menu" button
- Finds "Workout History"
- **No issue:** This user knew to check the menu

**User 3:**
- Clicks "Home"
- Looks for a tab or button labeled "History"
- Gets confused
- Says: "I would expect a tab at the bottom or an icon I could tap"
- **Issue:** Hamburger menu (three lines) isn't obvious to all users

**Analysis:**
- **Issue:** Workout history is in the menu, not obvious on home screen
- **Frequency:** 2 of 3 users had trouble
- **Severity:** Medium (users found it eventually, but not intuitively)
- **Root cause:** Hamburger menu is a common pattern, but not universal; some users prefer tabs

**Design fix:**
- Add a "History" tab at the bottom of the screen alongside "Home" and "Workouts"
- Keep menu as backup
- Test again with new users to verify the fix

---

## Common Misconceptions

### Misconception 1: *"One user test is enough"*

**Why it's wrong:** One user's experience might be atypical. Three is a minimum.

**Correct thinking:** Test with 3–5 users. Patterns emerge; outliers become obvious.

### Misconception 2: *"I should explain my design before testing"*

**Why it's wrong:** If you explain it, you remove the usability test. You're training users, not testing design.

**Correct thinking:** Users should be able to figure out your design without explanation. If they can't, fix the design.

### Misconception 3: *"Feedback from friends/family is valuable"*

**Why it's wrong:** People you know are biased. They want to be nice. They have different expectations.

**Correct thinking:** Test with strangers who match your user persona. Neutrality matters.

### Misconception 4: *"Testing is validation; if users like it, I'm done"*

**Why it's wrong:** Positive feedback doesn't mean there are no problems. Testing reveals issues.

**Correct thinking:** Expect to find problems. That's the point of testing. Use feedback to improve.

---

## Testing Template

Use this template to document your testing:

```
TEST SESSION NOTES

Participant: [Name or initials]
Date: [Date]
Task: [What you asked them to do]

OBSERVATIONS:
- [User clicked X]
- [User said Y]
- [User looked confused when Z]

ISSUES IDENTIFIED:
- Issue 1: [Description]
  Severity: High/Medium/Low
  Frequency: [How often did this happen across all users?]
  
- Issue 2: [Description]
  Severity: High/Medium/Low
  Frequency: [How often?]

QUOTES (what users actually said):
- "[Quote 1]"
- "[Quote 2]"
```

---

## Assessment Relevance

In **AS91901**, you must submit:

- **User testing evidence:** Participant notes, recordings, or transcripts from at least 3 users
- **Issues documented:** Problems found, their severity, how many users experienced them
- **Design changes:** How you responded to feedback in your revision
- **Iteration journal:** Document the cycle: test → find issues → design fix → test again

**In your design critique**, your teacher will ask:
- *"What feedback did users give you?"*
- *"How did you change your design based on that feedback?"*
- *"Show me the before and after for this element"*

Testing and iteration are central to assessment.

---

## External Resources

### User Testing Guides
- **[Nielsen Norman – Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/)** – Classic guide to planning and running tests
- **[How to Conduct Usability Testing (Interaction Design Foundation)](https://www.interaction-design.org/literature/article/usability-testing)** – Detailed walkthrough

### Tools
- **[Figma Prototyping & Testing](https://www.figma.com/prototyping/)** – Test prototypes directly in Figma
- **[Maze.co](https://maze.co/)** – User testing platform with built-in analytics
- **[User Testing](https://www.usertest ing.com/)** – Recruit remote test participants (paid)
- **[Zoom Screen Recording](https://support.zoom.us/hc/en-us/articles/203656649-local-recording)** – Free recording during tests

### Videos
- **[Running Usability Tests (Nielsen Norman)](https://www.youtube.com/watch?v=QckIJNuMY0w)** – How to plan and execute tests
- **[5-Second Usability Test](https://www.youtube.com/watch?v=ew5bVhKnP1s)** – Quick, valuable testing method

---

## Key Vocabulary

- **Formative testing:** Testing during design to improve it (not summative/grading)
- **Moderated test:** Researcher present with participant (online or in-person)
- **Unmoderated test:** Participant tests alone (via a tool); researchers watch recording
- **Usability issue:** A problem that prevents users from completing a task
- **Usability testing:** Observing real users interact with a design to find problems
- **Task:** A goal you ask users to accomplish (not step-by-step instructions)
- **Think-aloud protocol:** Asking users to verbalize their reasoning
- **User flow:** The path a user takes to complete a task

---

## Next Steps

You now understand how to test and get feedback. In the next topic, [Design Iteration & Feedback](07_design-iteration-feedback.md), you'll learn how to systematically improve your design based on evidence.

---

*End of Topic 6: User Testing & Usability Evaluation*
