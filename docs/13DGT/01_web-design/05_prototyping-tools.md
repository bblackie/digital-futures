---
title: "Prototyping & Tools"
course: "Year 13 Digital Technologies"
unit: "Unit 1: Web Design & UX Principles"
aligned_standard: "AS91901 – Web Design"
topic_number: 5
version: "1.0.0"
status: "Student-facing"
---

# 5. Prototyping & Tools

## Purpose of These Notes

These notes explain:
- how to choose and use prototyping tools
- how to create high-fidelity digital mockups
- how to make prototypes interactive for user testing
- the difference between visual design and interaction design

---

## Key Concepts

By the end of this topic, you must understand:

- **High-fidelity prototype:** A digital mockup that closely resembles the final product
- **Interaction design:** How users interact with elements (clicks, hovers, transitions)
- **Prototyping tools:** Software used to create mockups (Figma, Adobe XD, InVision)
- **Component/pattern library:** Reusable design elements for consistency

> Prototypes are working models. They should be testable and interactive, not static images.

---

## Core Explanation

### From Wireframe to Prototype

**Wireframe (low-fidelity):** Black boxes and text showing structure
**Prototype (high-fidelity):** Realistic visual design with real colours, typography, and spacing

Wireframes test structure. Prototypes test the complete user experience.

### Prototyping Tools

#### Figma (Recommended for beginners)
- **Pros:** Cloud-based (no installation), free tier, collaborative, great for interaction design
- **Cons:** Requires internet, learning curve for interactions
- **Best for:** Teams and students who want to share work easily

#### Adobe XD
- **Pros:** Integrated with Creative Suite, powerful interactions, desktop or cloud
- **Cons:** Subscription required, steeper learning curve
- **Best for:** Students with Adobe access via school

#### InVision
- **Pros:** Excellent for prototyping and user testing, good collaboration tools
- **Cons:** Paid plans, smaller community than Figma
- **Best for:** User testing and feedback collection

#### Hand-Drawn + Digital Annotation
- **Pros:** Fast, low pressure (less attachment to ideas)
- **Cons:** Hard to test interactivity, difficult to iterate
- **Best for:** Early exploration or if you lack access to tools

### Creating Effective Prototypes

#### Components and Patterns

Reusable design elements ensure **consistency**:

- **Button component:** Define a "Primary Button" once; reuse it throughout the site
- **Card component:** Define a "Product Card" layout; duplicate for all products
- **Colour palette:** Define primary, secondary, and neutral colours; apply consistently

Benefits:
- Changes to a button automatically update everywhere
- Consistency reduces cognitive load for users
- Faster to design (less repetition)

#### Interaction Design

Interactions explain *how* users navigate and get feedback:

- **Hover state:** Button changes colour on mouse hover (feedback that it's clickable)
- **Click state:** Button changes while being clicked (confirms action)
- **Transition/Animation:** Smooth movement between screens (explains what happened)
- **Feedback:** Form validation message appears (tells user if input is correct)
- **Error state:** Input field turns red with error message (alerts user to problem)

**Example: A button's interaction flow**
```
Normal state: Blue button, "Sign Up"
        ↓ (user hovers)
Hover state: Darker blue, cursor changes to pointer
        ↓ (user clicks)
Active state: Button slightly pressed/inset
        ↓ (form submits)
Success state: Green checkmark, "Welcome!"
```

Each state provides feedback.

### Prototyping for User Testing

An **interactive prototype** allows users to:
- Click buttons and navigate between screens
- Fill out forms
- See feedback and error messages
- Experience the flow without code

#### Creating Interactive Prototypes in Figma

1. **Design all screens:** Home, Product page, Checkout, Confirmation
2. **Add interactions:**
   - "Home" button links to Home screen
   - "Add to Cart" button shows Cart screen
   - Form submit button shows Confirmation
3. **Add transitions:** Define how screens appear (fade, slide, etc.)
4. **Share prototype:** Click "Share" and give user a link
5. **Collect feedback:** Watch users navigate; note confusion points

### Testing Your Prototype

#### What to Look For

1. **Can users find key elements?**
   - Can they locate the booking button?
   - Can they understand what each button does?

2. **Is the flow logical?**
   - Are steps in a sensible order?
   - Do users know what to do next?

3. **Are there confusing elements?**
   - Where do users click wrong?
   - Where do they get stuck?

4. **Does the design feel professional?**
   - Is alignment consistent?
   - Does colour scheme feel cohesive?
   - Is text readable?

---

## Worked Example: Conceptual Reasoning

**Scenario:** Creating a high-fidelity prototype for an e-commerce site.

**Step 1: Design one screen (Product page)**
- Header with logo and navigation
- Large product image
- Product name and description
- Price and ratings
- "Add to Cart" button
- Footer

**Step 2: Apply visual design**
- Colour scheme: Dark blue (trust) + bright green (action)
- Typography: Bold sans-serif headings, regular serif body text
- Layout: Image left, details right (common pattern)
- Spacing: Consistent margins and padding

**Step 3: Create components**
- "Primary Button" (bright green, bold label)
- "Product Card" (image + name + price)
- "Review Stars" (5 stars, user review)

**Step 4: Duplicate screens**
- Product Page 1
- Product Page 2
- Product Page 3
(All use same components; changing the button style updates all three)

**Step 5: Add interactions**
- Product image: Clicking it opens a lightbox with larger image
- "Add to Cart" button: Navigates to Cart screen
- Navigation links: Link to different product categories

**Step 6: Test with users**
- Share the interactive prototype
- Watch users browse products
- Note: Do they click the product image? (If not, the image needs to look more clickable)
- Note: Can they find the price easily? (If not, make it larger or more prominent)

**Step 7: Iterate**
- User feedback reveals the "Add to Cart" button is too small
- Update the button size in the "Primary Button" component
- All products instantly show the larger button (no manual updates needed)
- Re-test with another user

---

## Common Misconceptions

### Misconception 1: *"My prototype needs to be pixel-perfect"*

**Why it's wrong:** Pixel perfection takes forever. For testing, close is good enough. Refine after feedback.

**Correct thinking:** Prototypes are for testing ideas, not showing finished polish. Get feedback first; refine later.

### Misconception 2: *"I'll add interactions later"*

**Why it's wrong:** Testing a static prototype misses interaction problems. Users won't understand what's clickable.

**Correct thinking:** Add interactions as you prototype. It reveals usability issues early.

### Misconception 3: *"I should design every page"*

**Why it's wrong:** You don't have time. Design the key user flows (browsing, checkout, etc.); use placeholder screens for others.

**Correct thinking:** Design critical paths. For other pages, a wireframe or quick sketch is enough.

### Misconception 4: *"Tools matter more than design thinking"*

**Why it's wrong:** A beautiful Figma file with bad UX is still bad UX. The tool is just a means.

**Correct thinking:** Design thinking (research, iteration, user-centeredness) matters most. Tools are secondary.

---

## Assessment Relevance

In **AS91901**, you must submit:

- **High-fidelity prototype** as a Figma file, Adobe XD file, or interactive link (InVision, Figma Share)
- **Components and patterns documentation** showing reusable design elements
- **Interaction documentation** explaining how users navigate the prototype
- **Evidence of testing:** Notes on what users clicked, what confused them, what you changed

**In your design critique**, your teacher will:
- Click through your interactive prototype
- Ask: *"What happens when a user clicks this button?"*
- Watch: Do they get confused? Do they navigate as expected?
- Verify: Are all screens accessible? Do all buttons work?

Your prototype must be testable, not just pretty.

---

## External Resources

### Figma
- **[Figma Learning Resources](https://www.figma.com/resources/)** – Official tutorials
- **[Figma Design Systems Course](https://www.interaction-design.org/courses/figma-design-systems)** – Free course on components and systems

### Adobe XD
- **[Adobe XD Tutorials](https://www.adobe.com/products/xd/learn.html)** – Official guides
- **[XD to Web (Course)](https://www.linkedin.com/learning/adobe-xd-essential-training)** – LinkedIn Learning course

### Interaction Design
- **[Interaction Design Foundation – Interaction Design Course](https://www.interaction-design.org/courses/interaction-design-an-introduction-to-design-of-everyday-digital-products)** – Free course
- **[Designing Interactions (Nielsen Norman)](https://www.nngroup.com/articles/interaction-design/)** – Best practices

### Videos
- **[Figma Components Explained](https://www.youtube.com/watch?v=LLe659v5zFU)** – How to create and reuse components
- **[Prototyping with Interactions](https://www.youtube.com/watch?v=iBUKVpKpmBI)** – Adding clickability and transitions

---

## Key Vocabulary

- **Component:** Reusable design element (button, card, input field)
- **Design system:** Documented collection of components, patterns, and guidelines
- **Fidelity:** Level of detail and realism (low = sketchy; high = realistic)
- **Interaction:** How users interact with elements (hover, click, form input)
- **Interactive prototype:** Working model where users can click and navigate
- **Lightbox:** Modal that displays content (usually images) over the page
- **Responsive design:** Design that adapts to different screen sizes
- **Reuse/Duplicate:** Copying a component so changes propagate automatically
- **State:** Visual appearance of an element in different conditions (hover, active, disabled)
- **Transition/Animation:** Smooth movement or change between states

---

## Next Steps

You now understand how to create interactive prototypes. In the next topic, [User Testing & Usability Evaluation](06_user-testing-usability.md), you'll learn how to test your prototypes with real users and collect actionable feedback.

---

*End of Topic 5: Prototyping & Tools*
