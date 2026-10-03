 # Create a bio page to showcase the work done by class members

Design a webpage the is a list of bios to introduce team members. Separate each into it's own section with a large image on the left and then the bio on the right with a circlular avatar image.

For each team member, make room for two static images showcasing work they have done. Also, I want a video that can be played as a brief intro. Assume it is a youtube video. 




 ## Creating a circular avatar

 Professional avatar portrait of [Name/Role, e.g., a female software engineer], based on the provided reference photo, retaining key facial structure, hairstyle, and likeness. Styled in a vibrant visual art style with crisp line art, subtle cel-shading, and clean modern aesthetic. 

The background features a soft gradient of [Theme Colors, e.g., deep cyan and navy] overlaid with subtle, artistic geometric accent icons representing [Profession/Interest, e.g., circuit lines and code brackets].

Lighting is warm, multi-directional key lighting with a soft rim light in [Accent Color, e.g., electric turquoise]. 

Expressive, confident, smart, and approachable smile. Framed perfectly inside a clean circular composition, high resolution, 8k, graphic illustration style. --ar 1:1

# All in one (Docosaurus version)

Create a responsive, modular Team Member Bio Showcase component tailored specifically for a Docusaurus v3 site. Provide the code in React (JSX/TSX) using CSS Modules (or Docusaurus Infima / Tailwind CSS) so it can be rendered directly on custom pages or inside MDX documentation files.

### 1. Structure & Docusaurus Integration
- **Component Design:** Build a `<TeamMemberCard />` React component that accepts props for: `name`, `role`, `department`, `avatarUrl`, `featuredImgUrl`, `quote`, `bio`, `skills` (array), `workShowcase` (array of 2 image objects with title and url), `youtubeVideoId`, and `contactEmail`.
- **Page Layout:** Create a `<TeamShowcase />` wrapper component with a responsive filter bar (Department tabs + Search input) using Docusaurus design patterns and light/dark theme variables (`var(--ifm-color-...)`).

### 2. Card Layout Specs (Split Design)
- **Left Column (40% width):** 
  - Large featured image styled with rounded corners and Docusaurus shadow utility classes.
  - A overlay button: "Watch Video Intro" that launches a video player modal.
- **Right Column (60% width):**
  - Header with a circular avatar image, active badge, team member name, and role.
  - Featured quote in italics + full bio text using Docusaurus body typography styles.
  - Interactive skill pills/badges.
  - **Work Showcase Grid:** A 2-column thumbnail gallery showcasing two static work preview images with titles and zoom/hover effects.
  - Social & Contact links (Email link, Copy email button with built-in toast notification).

### 3. Key Functionality
- **Video Modal:** A clean React modal component to embed and autoplay the YouTube video (`https://www.youtube.com/embed/{youtubeVideoId}`) when triggered, supporting ESC key to close.
- **Alternating Layouts:** Alternate the split layout (image left/bio right vs. bio left/image right) for even and odd indexed items using CSS flex-direction/grid rules.
- **Dark/Light Mode Ready:** Ensure all background colors, text colors, and borders dynamically adjust to Docusaurus dark mode using Infima CSS variables or dark mode hooks (`useColorMode`).

Provide the code output divided into:
1. `src/components/TeamMemberCard/index.jsx`
2. `src/components/TeamMemberCard/styles.module.css`
3. An example MDX usage snippet (`index.mdx`) demonstrating how to import and render `<TeamShowcase />` with sample data.

# All in one (Vanilla HTML/CSS/JS version)

Design and build a high-end, responsive Team Member Showcase / Bio List web app using modern HTML, CSS (Tailwind CSS preferred), and JavaScript.

### 1. Overall Theme & Aesthetic
- Clean, modern, high-tech corporate/educational portal style with smooth dark green, cyan, slate, and emerald accents.
- Include a sticky header with a brand logo/title ("Digital Tech Team"), dynamic search bar (filters by name, role, skills), and department filter pills ("All", "Software", "UI/UX & Graphics", "Systems", "Data").
- Include a light/dark mode toggle button with smooth background transitions.
- Use clean typography (e.g., Plus Jakarta Sans or Inter font).

### 2. Card Layout (Split Section Design)
Each team member is represented in a distinct, full-width split section card:
- **Left Column (40% width):** 
  - A large, crisp featured portrait/photo with rounded corners and subtle hover zoom.
  - Overlay badges for location/status (e.g., "Masterton, NZ • Active").
  - Quick action buttons overlaid at the bottom: "Watch Video Intro" (opens YouTube video modal) and "Full Profile".
- **Right Column (60% width):** 
  - **Header:** Top row containing a circular avatar illustration with an active status dot, followed by Name, Role Title, and Department Badge.
  - **Bio & Quote:** An inspirational featured quote in italics followed by a detailed bio paragraph.
  - **Skills & Tech Stack:** Interactive skill badges/pills (e.g., HTML, Docker, Python) that highlight on hover.
  - **Work Showcase (Portfolio Grid):** A dedicated 2-column grid showing two static preview thumbnails of projects/work created by the team member, complete with hover overlays and titles (e.g., "App UI Concept", "System Architecture").
  - **Footer Bar:** Metrics stats (e.g., Projects Built, Contributions) alongside quick contact buttons ("Email", "LinkedIn", "Copy Contact Info").

### 3. Alternating Layout & Responsiveness
- On desktop, alternate the split section orientation (Odd items: Large image left / Bio right; Even items: Bio left / Large image right) for visual rhythm.
- On mobile devices, stack the large image on top and the bio section underneath smoothly.

### 4. Interactive Components & Modals
- **YouTube Intro Modal:** Clicking "Watch Video Intro" opens a sleek modal overlay playing an embedded YouTube video with a close button.
- **Interactive Search & Filter:** Typing in the search bar or clicking department filters dynamically hides/shows team cards without page reloads.
- **Copy Notification Toast:** Clicking "Copy Contact Info" triggers a temporary floating toast notification confirming copy success.
