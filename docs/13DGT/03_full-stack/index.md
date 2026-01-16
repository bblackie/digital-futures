---
title: "Unit 3: Full-Stack Website Development"
programme: "Year 13 Digital Technologies"
aligned_standard: "AS91903 – Website Project with API Backend"
version: "1.0.0"
status: "Student-facing"
last_updated: "2026-01-17"
---

# Unit 3: Full-Stack Website Development

This unit prepares you for **AS91903 – Website Project with API Backend**, a 10-week internal assessment focused on building end-to-end web applications with frontend, backend, and database components.

---

## Unit Overview

You will learn to:
- design multi-tier web application architecture
- build responsive frontends using HTML, CSS, and JavaScript
- implement RESTful APIs and backend logic
- design and query relational or NoSQL databases
- test frontend/backend integration and debug cross-layer issues
- manage a complex project with continuous evidence of progress

By the end of this unit, you will have built a functional web application with clear frontend/backend separation, comprehensive testing, and evidence of iterative development.

---

## Topics in This Unit

- [1. Web Application Architecture](01_web-app-architecture.md) – Understanding frontend/backend separation
- [2. Frontend Fundamentals](02_frontend-fundamentals.md) – HTML, CSS, responsive design, DOM manipulation
- [3. Backend Development](03_backend-development.md) – Server logic, APIs, request handling
- [4. RESTful API Design](04_restful-api-design.md) – Designing clean, predictable APIs
- [5. Database Design](05_database-design.md) – Relational schemas, queries, optimization
- [6. Frontend/Backend Integration](06_integration.md) – Connecting frontend to APIs, handling errors
- [7. Testing & Deployment](07_testing-deployment.md) – Testing full-stack, deploying applications

---

## How This Unit Relates to Assessment

**AS91903 – Website Project with API Backend** requires you to submit:

1. **Project specification and architecture diagram** (system design, data model, API endpoints, user flows)
2. **Frontend code** (HTML, CSS, JavaScript) with clear structure and comments
3. **Backend/API code** with documented endpoints and error handling
4. **Database schema** with design rationale
5. **Deployment/setup instructions** so the app can run independently
6. **Testing evidence** (frontend tests, API tests, integration tests)
7. **Development journals** tracking progress through planning, UX, frontend, backend, and integration phases
8. **Code walkthrough** demonstrating understanding of how components integrate
9. **Reflection** on full-stack development challenges and lessons

This unit's topics directly support these requirements.

---

## Key Concepts to Master

- **Separation of concerns:** Frontend and backend have distinct responsibilities
- **API contracts:** Clear agreement between frontend and backend (request format, response format, error codes)
- **Database normalization:** Efficient schema design to avoid redundancy
- **Responsive design:** Applications work across desktop, tablet, and mobile
- **Error handling:** Graceful failures on both frontend and backend
- **Integration testing:** Verifying that frontend/backend communicate correctly
- **State management:** Tracking data flow through the application
- **Deployment:** Making the application accessible on a server

---

## Important Assessment Reminders

### Fortnightly Micro-Deliverables

Progress checkpoints every two weeks:
- **Weeks 1–2:** Specification, architecture diagram, data model, API design document
- **Weeks 3–4:** Frontend prototype; API endpoint implementation (subset)
- **Weeks 5–6:** Frontend feature implementation; API implementation progress
- **Weeks 7–8:** Integration testing; debugging of cross-component issues
- **Weeks 9–10:** Final polish, user testing (if applicable), documentation

### Live Integration Demonstration

You will demonstrate:
- Frontend successfully calling API endpoints
- Data flowing correctly from frontend → API → database → frontend
- Error scenarios handled gracefully (invalid input, server down, etc.)
- Performance is acceptable (pages load quickly, no unnecessary API calls)

### Full-Stack Understanding Required

Your teacher will ask:
- *"Walk me through how data flows from the frontend input to the database and back"*
- *"What happens if this API endpoint fails? How does the frontend respond?"*
- *"Why did you structure your database schema this way?"*
- *"How would you add a new feature to this endpoint?"*

If you don't understand how all layers work together, the evidence is not valid.

### AI Use Restrictions (AS91903-Specific)

- ✗ AI-generated API designs or database schemas without understanding
- ✗ Submitting integration code you can't explain or modify
- ✓ AI tools may help understand architectural concepts
- ✓ AI tools may suggest database optimizations (which you verify)
- ✓ AI tools may help debug specific errors if you understand the fix

---

## Technology Stack Options

### Frontend
- **HTML5** (required)
- **CSS3** (required; can use Bootstrap, Tailwind, or plain CSS)
- **JavaScript** (required; can use React, Vue, Svelte, or vanilla JS)

### Backend
- **Node.js + Express** (JavaScript-based; easy path from frontend)
- **Python + Flask or Django** (clean syntax; great libraries)
- **Other frameworks** permitted with approval (Rails, .NET, Go, etc.)

### Database
- **PostgreSQL or MySQL** (relational; recommended for structured data)
- **MongoDB** (document-based; good for flexible schemas)

---

## Common Pitfalls to Avoid

1. **Tight coupling:** Frontend and backend too interconnected; hard to test separately
2. **No API documentation:** Endpoints undocumented; hard to verify contract
3. **Inadequate error handling:** Frontend doesn't handle API failures gracefully
4. **No database design phase:** Schema designed on the fly; inefficient and buggy
5. **Skipping integration testing:** Components work separately but fail when integrated
6. **Monolithic frontend:** All code in one giant JavaScript file; unmaintainable
7. **No version control:** Missing git history raises questions about AI use
8. **Poor documentation:** Deployment instructions missing; app can't run on fresh machine

---

## External Resources

### Full-Stack Architecture
- **[How the Web Works (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)** – Client/server model
- **[REST API Best Practices](https://restfulapi.net/)** – API design principles

### Frontend
- **[MDN Web Docs](https://developer.mozilla.org/)** – HTML, CSS, JavaScript reference
- **[Responsive Design Basics](https://www.interaction-design.org/literature/article/responsive-design)** – Mobile-first design

### Backend & APIs
- **[Express.js Tutorial](https://expressjs.com/en/starter/basic-routing.html)** – Node.js server framework
- **[Flask Tutorial](https://flask.palletsprojects.com/en/2.3.x/tutorial/)** – Python server framework

### Databases
- **[PostgreSQL Documentation](https://www.postgresql.org/docs/)** – SQL database guide
- **[MongoDB Guide](https://docs.mongodb.com/manual/)** – Document database guide

### Integration & Deployment
- **[Testing Full-Stack Applications](https://www.nngroup.com/articles/testing/)** – Strategies for end-to-end testing
- **[Heroku Deployment Guide](https://devcenter.heroku.com/)** – Deploy Node.js or Python apps

---

## Key Vocabulary

- **API (Application Programming Interface):** Set of rules for how software communicates
- **Backend:** Server-side code and database; handles business logic
- **Client-server model:** Frontend (client) requests; backend (server) responds
- **Database:** Organized storage of data
- **Endpoint:** URL on the backend that the frontend can request
- **Frontend:** Client-side code (HTML, CSS, JavaScript) users interact with
- **HTTP methods:** GET (retrieve), POST (create), PUT (update), DELETE (remove)
- **Integration:** Connecting frontend, backend, and database so they work together
- **Middleware:** Software sitting between frontend and backend (e.g., authentication)
- **Normalization:** Database design principle to avoid redundancy
- **Request/Response:** Frontend sends request to API; API sends response with data
- **RESTful:** API design following REST principles (resource-oriented, stateless)
- **Schema:** Structure defining how data is organized in a database

---

## Navigating Unit 3

Start with [01_web-app-architecture.md](01_web-app-architecture.md) and work through each topic in order.

---

*End of Unit 3 Overview*
