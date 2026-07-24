# 📊 Data Analyst Portfolio — Complete Blueprint

> A full reference guide for building a professional, recruiter-ready data portfolio using React + Tailwind CSS. Pure frontend, no backend, no database.

---

## Table of Contents

1. [Project Goals & Philosophy](#1-project-goals--philosophy)
2. [Tech Stack](#2-tech-stack)
3. [Visual Design System](#3-visual-design-system)
4. [Folder Structure](#4-folder-structure)
5. [Site Architecture & Pages](#5-site-architecture--pages)
6. [Home Page — All Sections](#6-home-page--all-sections)
7. [Project Detail Page — All Sections](#7-project-detail-page--all-sections)
8. [Data File Structure](#8-data-file-structure---projectsjs)
9. [Component Breakdown](#9-component-breakdown)
10. [Routing](#10-routing)
11. [Animations](#11-animations)
12. [External Links Strategy](#12-external-links-strategy)
13. [Deployment](#13-deployment)
14. [Build Order](#14-build-order)
15. [Checklist Before Going Live](#15-checklist-before-going-live)

---

## 1. Project Goals & Philosophy

### What this portfolio must do
- Convince a recruiter or hiring manager in **10 seconds** that you are worth interviewing
- Show **depth of thinking**, not just technical skills — problem → data → insight → business impact
- Work as a **case study portfolio**, not just a project list
- Be **easy to maintain** — adding a new project should take minutes, not hours
- Be **100% static** — no backend, no database, no server costs, ever

### Core principles
- Every project card shows a **real number** (e.g. "Reduced churn by 23%")
- Every project page tells a **complete story** from business problem to recommendation
- All data, dashboards, and code live on **external platforms** (GitHub, Kaggle, Power BI Public) — the portfolio only links to them
- The portfolio itself is just **React + one data file + screenshots**

---

## 2. Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | React.js | Component reuse, routing, ecosystem |
| Styling | Tailwind CSS | Fast, responsive, utility-first |
| Routing | React Router DOM v6 | Clean URL navigation between pages |
| Animations | Framer Motion | Scroll reveals, hover effects, page transitions |
| Icons | Lucide React | Clean, consistent, lightweight |
| Hosting | Vercel | Free, auto-deploy from GitHub, fast CDN |
| Content | `projects.js` | Single source of truth for all project data |
| Images | `/public/images/` | Static PNGs — screenshots and charts only |

### What is NOT needed
- No Node.js backend
- No Express / Flask / Django
- No database (MongoDB, PostgreSQL, etc.)
- No Firebase or Supabase
- No Redux or Zustand (React state is enough)
- No API calls at runtime

### Package versions (install these)
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3. Visual Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Background | `#0A0E1A` | Page background, deepest dark |
| Surface | `#111827` | Cards, sections, containers |
| Surface Light | `#1F2937` | Hover states, borders, dividers |
| Primary Accent | `#6366F1` | Buttons, links, highlights (indigo) |
| Secondary Accent | `#22D3EE` | Charts, data elements, tags (cyan) |
| Success / Metric | `#10B981` | Key metrics, positive numbers (green) |
| Text Primary | `#F9FAFB` | Headings, important text |
| Text Secondary | `#D1D5DB` | Body text, descriptions |
| Text Muted | `#9CA3AF` | Labels, captions, metadata |
| Border | `#374151` | Card borders, dividers |

### Typography

| Role | Font | Import |
|---|---|---|
| Headings / Display | `Space Grotesk` | Google Fonts |
| Body / UI | `Inter` | Google Fonts |
| Code / Tech Badges | `JetBrains Mono` | Google Fonts |

Add to your `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale (Tailwind classes)
```
Hero Title:        text-5xl md:text-7xl font-bold (Space Grotesk)
Section Heading:   text-3xl md:text-4xl font-bold (Space Grotesk)
Card Title:        text-xl font-semibold (Space Grotesk)
Body Text:         text-base font-normal (Inter)
Caption / Label:   text-sm font-medium (JetBrains Mono)
```

### Signature Design Element
A **subtle animated dot-grid** on the hero section background — represents data points, gives the "analytical" feeling visually without being distracting. Use CSS radial-gradient pattern + a gentle pulse animation.

```css
.hero-bg {
  background-color: #0A0E1A;
  background-image: radial-gradient(#6366F120 1px, transparent 1px);
  background-size: 30px 30px;
}
```

### Component Patterns

**Tech Stack Badge:**
```
bg-[#1F2937] border border-[#374151] text-[#22D3EE] 
font-mono text-xs px-3 py-1 rounded-full
```

**Key Metric Chip:**
```
bg-[#10B98120] border border-[#10B981] text-[#10B981] 
text-sm font-semibold px-3 py-1 rounded-md
```

**Primary Button:**
```
bg-[#6366F1] hover:bg-[#4F46E5] text-white 
font-semibold px-6 py-3 rounded-lg transition-all
```

**Outline Button:**
```
border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F110]
font-semibold px-6 py-3 rounded-lg transition-all
```

**Card:**
```
bg-[#111827] border border-[#374151] hover:border-[#6366F1]
rounded-xl p-6 transition-all duration-300
```

---

## 4. Folder Structure

```
portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile.jpg                  ← your photo
│   │   ├── project1-overview.png        ← project thumbnail
│   │   ├── project1-chart1.png          ← EDA chart screenshot
│   │   ├── project1-chart2.png
│   │   ├── project1-dashboard.png       ← dashboard fallback screenshot
│   │   ├── project2-overview.png
│   │   └── ...                          ← repeat for each project
│   └── resume.pdf                       ← your downloadable resume
│
├── src/
│   ├── data/
│   │   └── projects.js                  ← ALL project content lives here
│   │
│   ├── components/                      ← reusable UI pieces
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Tools.jsx
│   │   ├── Experience.jsx
│   │   ├── ProjectCard.jsx              ← used 6+ times on home page
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/                           ← full page views
│   │   ├── Home.jsx                     ← assembles all components
│   │   └── ProjectDetail.jsx            ← one template, renders any project
│   │
│   ├── App.jsx                          ← routing setup
│   ├── main.jsx                         ← React entry point
│   └── index.css                        ← Tailwind directives + global styles
│
├── tailwind.config.js
├── vite.config.js
├── package.json
└── index.html
```

---

## 5. Site Architecture & Pages

### Two pages only

```
/ (Home)              → full scrolling page with all sections
/project/:id          → individual project detail page
```

**Examples:**
- `/` — Home
- `/project/retail-sales-analysis`
- `/project/hr-attrition-dashboard`
- `/project/supply-chain-optimization`

The `:id` matches the `id` field in your `projects.js` data. React Router reads the URL, finds the matching project object, and renders the `ProjectDetail` template with that project's data.

---

## 6. Home Page — All Sections

Sections appear in this order on the single scrolling home page:

---

### 6.1 Navbar
- Fixed to top, blurs background on scroll (`backdrop-blur`)
- Logo / your name on the left
- Navigation links on the right: About, Skills, Experience, Projects, Contact
- Smooth scroll to each section on click
- "Download Resume" button (links to `/resume.pdf`)
- Hamburger menu on mobile

---

### 6.2 Hero Section
- Full viewport height (`min-h-screen`)
- Dot-grid animated background
- Your name in large display type
- Your title: e.g. "Data Analyst · Business Intelligence · Python · SQL"
- One-line tagline: e.g. "I turn raw data into decisions that drive revenue"
- Two CTA buttons: "View My Work" (scrolls to projects) + "Download Resume"
- Subtle scroll indicator arrow at the bottom

---

### 6.3 About Me
- Two-column layout: photo on left, text on right (stacks on mobile)
- 3–4 sentences about your background, approach, and what you care about
- 3 highlight stat cards below (e.g. "6+ Projects", "3 Years Experience", "5 Tools")
- Keep it personal and specific — not generic "I am passionate about data"

---

### 6.4 Skills
- Visual skill bars or hexagonal grid
- Grouped into categories:
  - **Analytics**: Exploratory Data Analysis, Statistical Analysis, Data Wrangling
  - **Visualization**: Dashboard Design, Data Storytelling, Report Building
  - **Business**: Stakeholder Communication, Problem Framing, Insight Presentation
- Use icons from Lucide React next to each skill

---

### 6.5 Tools & Technologies
- Icon grid layout (4–6 columns)
- Each tool shows: icon + name + proficiency level (Beginner / Intermediate / Advanced / Expert)
- Tools to include: Python, SQL, Power BI, Tableau, Excel, Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Git, VS Code
- Color-coded by category (language, visualization, database, etc.)

---

### 6.6 Experience
- Vertical timeline layout
- Each entry: Company · Role · Duration · 3–4 bullet points of impact
- Use numbers wherever possible ("Analyzed 50K+ rows", "Built dashboard used by 3 departments")
- Timeline line connects entries visually

---

### 6.7 Featured Projects
- Section heading + subtitle ("Deep-dive case studies — from raw data to business impact")
- Grid of project cards (2 columns on desktop, 1 on mobile)
- Each `ProjectCard` shows:
  - Project thumbnail image
  - Project name
  - One-line summary
  - Tech stack badges (Python, SQL, Power BI, etc.)
  - Key metric chip (e.g. "↑ 23% revenue identified")
  - "View Case Study →" button

**Clicking the card or button navigates to `/project/:id`**

---

### 6.8 Achievements
- Clean card grid
- Each card: icon + achievement title + brief description + date/organization
- Examples: hackathon wins, competition rankings, recognition from employer, etc.

---

### 6.9 Certifications
- Card or badge layout
- Each certification: logo/icon + name + issuer + date + "Verify →" link (to Credly / Coursera / LinkedIn)
- Examples: Google Data Analytics, Microsoft PL-300, IBM Data Analyst, etc.

---

### 6.10 Education
- Simple clean cards
- Each entry: institution logo + degree + field + year + CGPA (if good)
- Any relevant coursework or thesis can be listed as tags

---

### 6.11 Resume
- Full-width CTA section with contrast background
- Headline: "Want the full picture?"
- Subheading: "Download my resume for a complete view of my experience and skills"
- Large "Download Resume PDF" button

---

### 6.12 Contact
- Simple two-column layout
- Left: "Let's work together" heading + short paragraph + your email + LinkedIn + GitHub
- Right: Contact form (Name, Email, Message, Send button)
- Note: since there's no backend, use [Formspree](https://formspree.io) — free, no backend needed, emails you directly when someone submits

---

### 6.13 Footer
- Your name + tagline
- Quick links (same as navbar)
- Social icons: GitHub, LinkedIn, Kaggle
- Copyright line

---

## 7. Project Detail Page — All Sections

URL: `/project/:id`

All content comes from the matching object in `projects.js`. Sections render in this order:

---

### 7.1 Breadcrumb + Back Navigation
```
Home → Projects → Retail Sales Analysis
```

---

### 7.2 Project Header
- Large project title
- One-line summary
- Tech stack badges
- Key metric chip
- Date completed
- Row of 4 quick-link buttons: GitHub · Dataset · Dashboard · Report PDF

---

### 7.3 Project Overview
- 2–3 paragraph summary of the entire project
- What was done, what was found, what was recommended

---

### 7.4 Problem Statement & Business Context
- **Problem Statement**: What was the exact business problem?
- **Business Objective**: What outcome was expected from the analysis?
- **Why This Analysis Was Needed**: Context — what was happening in the business?
- **Stakeholders**: Who requested this? Who uses the output?

---

### 7.5 Dataset Information
- Source (Kaggle, internal, UCI, etc.)
- Rows, Columns, Time Period
- Feature list (column names and what they mean)
- Data quality issues found (missing values %, duplicates, format problems)

---

### 7.6 Data Cleaning Process
- Missing Values: how many, which columns, how handled (drop/impute/flag)
- Duplicates: how many found, how removed
- Outliers: detection method used, what was done
- Transformations: date parsing, encoding, scaling, feature creation

---

### 7.7 Exploratory Data Analysis (EDA)
- Key findings in bullet points
- 4–6 chart screenshots (your actual charts from Python/Excel)
- Each chart has a caption explaining what it shows and why it matters

---

### 7.8 Dashboard

This is the most impressive section of the project page — prioritize making it feel interactive and live.

**Primary approach — Embed the dashboard directly (best experience)**

If you're using Power BI "Publish to Web" or Tableau Public, embed the live dashboard as an `iframe` right inside the project detail page. The recruiter sees the real, interactive dashboard without ever leaving your portfolio. This is the default approach and the most impactful one.

```jsx
// In ProjectDetail.jsx — render this when dashboard.embedUrl exists
{project.dashboard.embedUrl && (
  <div className="relative w-full rounded-xl overflow-hidden border border-[#374151]"
       style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
    <iframe
      src={project.dashboard.embedUrl}
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allowFullScreen
      title={`${project.title} Dashboard`}
    />
  </div>
)}
```

**How to get the embed URL:**

- **Power BI**: File → Publish to Web → Create embed code → copy the `src` value from the `<iframe>` snippet it generates. Paste that URL into `dashboard.embedUrl` in `projects.js`.
- **Tableau Public**: On your published viz page → Share → Embed Code → copy the `src` value from the `<iframe>` tag.
- **Google Looker Studio**: File → Share → Embed report → copy the iframe `src`.

**Fallback — Screenshot only**

If the dashboard is internal, unpublished, or you prefer not to embed it (e.g. sensitive data), show a static screenshot instead. Always have at least one screenshot even if the embed exists, so the section never appears empty during load.

```jsx
// Fallback: show screenshot if no embed URL, or as a thumbnail above the iframe
{!project.dashboard.embedUrl && project.dashboard.screenshots.map((img, i) => (
  <img key={i} src={img} alt="Dashboard screenshot"
       className="w-full rounded-xl border border-[#374151]" />
))}
```

**Layout pattern for this section:**

```
┌─────────────────────────────────────────────┐
│  Section label: "📊 Live Dashboard"          │
│  Description text (1–2 sentences)            │
├─────────────────────────────────────────────┤
│                                             │
│         [ EMBEDDED IFRAME — 16:9 ]          │
│         (interactive Power BI / Tableau)    │
│                                             │
├─────────────────────────────────────────────┤
│  "Open in full screen →"  (links to         │
│   dashboard.embedUrl or dashboard link)     │
└─────────────────────────────────────────────┘
```

Add a small label above the iframe so recruiters know it's live:

```jsx
<div className="flex items-center gap-2 mb-3">
  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
  <span className="text-sm font-mono text-[#10B981]">Live Interactive Dashboard</span>
</div>
```

---

### 7.9 Data Storytelling
- **Insights**: What did the data reveal that wasn't obvious before?
- **Patterns**: What recurring trends or anomalies were found?
- **Recommendations**: What should the business actually do based on this?

---

### 7.10 Business Impact
- **Revenue Opportunity**: What revenue could be gained or protected?
- **Cost Reduction**: What costs could be cut?
- **Process Improvement**: What operational changes are recommended?
- Use specific numbers wherever possible

---

### 7.11 Tech Stack Used
- Icon grid showing only the tools used in this specific project
- Brief note on why each tool was chosen

---

### 7.12 Files & Resources
- Four buttons:
  - `GitHub Repository →` (your code, notebooks, SQL queries)
  - `View Dataset →` (Kaggle / UCI / Google Drive)
  - `Live Dashboard →` (Power BI Public / Tableau Public)
  - `Download Report →` (PDF on Google Drive)

---

### 7.13 Key Learnings
- What technical challenge was most difficult and how was it solved?
- What would you do differently next time?
- What new skill or insight did this project give you?

---

### 7.14 Previous / Next Project Navigation
```
← Previous Project    |    Next Project →
```
Allows recruiters to browse all projects without going back to home.

---

## 8. Data File Structure — `projects.js`

This is the only "database" in the entire portfolio. All project content is written here once. The UI reads from it automatically.

```javascript
// src/data/projects.js

export const projects = [
  {
    // ── Identity ──────────────────────────────────────────
    id: "retail-sales-analysis",           // Used in URL: /project/retail-sales-analysis
    title: "Retail Sales Analysis",
    summary: "Identified $2.3M revenue opportunity across 5 store regions",
    keyMetric: "↑ 23% revenue identified",
    thumbnail: "/images/project1-overview.png",
    date: "March 2024",
    techStack: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
    tags: ["Sales", "EDA", "Dashboard", "Retail"],

    // ── Overview ──────────────────────────────────────────
    overview: "A comprehensive analysis of 50,000+ retail transactions across 5 store regions to identify revenue gaps and seasonal patterns...",

    // ── Problem & Context ─────────────────────────────────
    problemStatement: "Sales had declined 18% YoY across the eastern region with no clear root cause identified by the sales team.",
    businessObjective: "Identify the primary drivers of revenue decline and surface actionable recommendations for the Q3 strategy review.",
    whyNeeded: "The company was planning budget cuts but lacked data-backed evidence of where to focus or cut.",
    stakeholders: ["VP of Sales", "Regional Store Managers", "Finance Team"],

    // ── Dataset ───────────────────────────────────────────
    dataset: {
      source: "Internal POS System Export",
      sourceUrl: "https://kaggle.com/...",
      rows: "52,400",
      columns: 18,
      timePeriod: "Jan 2022 – Dec 2023",
      features: [
        "transaction_id", "date", "store_id", "region",
        "product_category", "units_sold", "revenue",
        "discount_pct", "customer_id", "payment_method"
      ],
      qualityIssues: [
        "14% missing values in discount_pct column",
        "3 stores had duplicate transaction IDs for the same day",
        "revenue values had 2 negative entries (refunds not flagged)"
      ]
    },

    // ── Cleaning ──────────────────────────────────────────
    cleaning: {
      missingValues: "Imputed discount_pct nulls with median per product category. Dropped 12 rows where both revenue and units_sold were null.",
      duplicates: "Found 847 duplicate transaction IDs. Kept first occurrence after confirming amounts matched.",
      outliers: "Used IQR method on revenue column. Capped 23 extreme values above Q3 + 3*IQR as likely data entry errors.",
      transformations: "Parsed date to datetime, extracted month/quarter/year. One-hot encoded region and payment_method. Created revenue_per_unit derived column."
    },

    // ── EDA ───────────────────────────────────────────────
    eda: {
      keyFindings: [
        "Friday generates 31% more revenue than Monday — staffing doesn't reflect this",
        "Eastern region discount rate is 2.4x higher than other regions — margin erosion",
        "Product category C has highest volume but lowest margin — pricing issue",
        "Top 20% of customers generate 68% of revenue — classic Pareto pattern"
      ],
      charts: [
        { image: "/images/project1-chart1.png", caption: "Weekly revenue pattern — Friday spike visible across all regions" },
        { image: "/images/project1-chart2.png", caption: "Discount rate by region — Eastern region outlier at 34% avg discount" },
        { image: "/images/project1-chart3.png", caption: "Revenue vs margin by product category" },
        { image: "/images/project1-chart4.png", caption: "Customer revenue distribution — Pareto analysis" }
      ]
    },

    // ── Dashboard ─────────────────────────────────────────
    dashboard: {
      screenshots: ["/images/project1-dashboard.png"],  // Always include at least one screenshot
      embedUrl: "https://app.powerbi.com/view?r=...",   // Power BI / Tableau / Looker Studio embed src
                                                         // Leave as empty string "" if not publishing publicly
      description: "Interactive Power BI dashboard showing regional performance, discount impact, and product category breakdown. Used by store managers weekly."
    },

    // ── Storytelling ──────────────────────────────────────
    storytelling: {
      insights: "The eastern region decline is not a demand problem — it's a discounting problem. Revenue volume is similar to other regions, but margins are compressed by excessive promotional discounts applied without consistent rules.",
      patterns: "Discounts above 20% consistently show negative correlation with repeat purchase rate, suggesting they attract one-time buyers rather than loyal customers.",
      recommendations: "Cap promotional discounts at 15% for the eastern region. Shift Friday staffing +20% to match demand. Review pricing strategy for Category C with the product team."
    },

    // ── Business Impact ───────────────────────────────────
    businessImpact: {
      revenueOpportunity: "Capturing the Friday demand gap with proper staffing could add est. $180K/year in eastern region alone.",
      costReduction: "Reducing average discount from 34% to 15% in eastern region projects $2.1M margin improvement annually.",
      processImprovement: "Establishing a discount governance policy prevents ad-hoc discounting by store managers — currently the primary margin leak."
    },

    // ── Resources ─────────────────────────────────────────
    links: {
      github: "https://github.com/yourname/retail-sales-analysis",
      dataset: "https://kaggle.com/datasets/...",
      dashboard: "https://app.powerbi.com/view?r=...",
      report: "https://drive.google.com/file/d/..."
    },

    // ── Learnings ─────────────────────────────────────────
    keyLearnings: "Learned the importance of segmenting before aggregating — the overall numbers looked fine, masking a serious regional issue. Also first time using Power BI bookmarks for dynamic report filtering.",
    challenges: "Handling the discount_pct missing values required domain knowledge (not just statistical imputation) — had to consult with the sales team to understand when discounts were legitimately not applied vs. data entry gaps."
  },

  // Add more projects following the same structure...
];
```

---

## 9. Component Breakdown

### `ProjectCard.jsx`
Receives a single project object as a prop. Displays thumbnail, title, summary, tech badges, key metric, and "View Case Study" button. On click, navigates to `/project/${project.id}`.

### `ProjectDetail.jsx`
Uses `useParams()` from React Router to get the `id` from the URL. Finds the matching project with `projects.find(p => p.id === id)`. Renders all sections from the project data.

The dashboard section logic inside `ProjectDetail.jsx` should handle both embed and screenshot modes:

```jsx
// Dashboard section in ProjectDetail.jsx
<section>
  <h2>📊 Live Dashboard</h2>
  <p>{project.dashboard.description}</p>

  {project.dashboard.embedUrl ? (
    <>
      {/* Live indicator */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span className="text-sm font-mono text-[#10B981]">Live Interactive Dashboard</span>
      </div>

      {/* Embedded iframe */}
      <div className="relative w-full rounded-xl overflow-hidden border border-[#374151]"
           style={{ paddingTop: '56.25%' }}>
        <iframe
          src={project.dashboard.embedUrl}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          title={`${project.title} Dashboard`}
        />
      </div>

      {/* Full screen link */}
      <a href={project.dashboard.embedUrl} target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center gap-2 mt-3 text-sm text-[#6366F1] hover:underline">
        Open in full screen →
      </a>
    </>
  ) : (
    /* Fallback: static screenshot */
    project.dashboard.screenshots.map((img, i) => (
      <img key={i} src={img} alt="Dashboard screenshot"
           className="w-full rounded-xl border border-[#374151]" />
    ))
  )}
</section>
```

### `Navbar.jsx`
Uses `useState` for mobile menu toggle. Uses `useEffect` + scroll listener for blur-on-scroll effect. Uses `useLocation` from React Router to detect if on home page (for smooth scroll vs. navigate).

### `Hero.jsx`
Dot-grid background via CSS. Framer Motion for text entrance animation. No props needed — content is hardcoded (it's always about you).

### `Contact.jsx`
Uses Formspree action URL in the form. Free tier allows 50 submissions/month. Replace `YOUR_FORM_ID`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 10. Routing

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Add to `vite.config.js` for Vercel SPA routing:
```js
export default {
  build: { outDir: 'dist' }
}
```

Add `vercel.json` to root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 11. Animations

Use Framer Motion for these specific moments only (don't overdo it):

| Element | Animation |
|---|---|
| Hero text | Fade in + slide up on load |
| Section headings | Fade in when scrolled into view |
| Project cards | Stagger fade-in (cards appear one by one) |
| Page transition | Fade in when navigating to project detail |
| Skill bars | Width animates from 0 to value when scrolled into view |
| Card hover | Slight scale up (`scale: 1.02`) + border color change |

```jsx
// Scroll-triggered reveal — use this pattern for sections
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* section content */}
</motion.div>
```

---

## 12. External Links Strategy

You host **nothing** except screenshots. All actual work lives externally:

| Asset | Where to host it | Cost |
|---|---|---|
| Code & notebooks | GitHub (public repo) | Free |
| Datasets | Kaggle / Google Drive | Free |
| Power BI Dashboard | Power BI "Publish to Web" | Free |
| Tableau Dashboard | Tableau Public | Free |
| Report PDF | Google Drive (share link) | Free |
| Resume PDF | `/public/resume.pdf` in your repo | Free |

For Power BI embedding, use "File → Publish to Web" → copy the `src` URL from the iframe code it gives you → paste into `dashboard.embedUrl` in `projects.js`.

---

## 13. Deployment

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourname/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click "Add New Project" → Import your portfolio repo
3. Framework: Vite (auto-detected)
4. Click "Deploy"

Your portfolio is live at `yourname.vercel.app` in under 2 minutes.

### Step 3: Custom Domain (optional)
Buy `yourname.dev` or `yourname.me` (~$10–15/year on Namecheap). Add it in Vercel dashboard → Domains. Vercel handles the SSL certificate automatically.

### Auto-deploy
Every `git push` to `main` triggers a new Vercel deploy automatically. No manual steps needed ever again.

---

## 14. Build Order

Follow this exact sequence to avoid rework:

```
Phase 1 — Foundation
  ✅ Set up React + Vite + Tailwind
  ✅ Set up React Router
  ✅ Define color palette in tailwind.config.js
  ✅ Add Google Fonts to index.html
  ✅ Create projects.js with 2–3 placeholder projects

Phase 2 — Core Templates
  ✅ Build ProjectCard.jsx (the card used on home page)
  ✅ Build ProjectDetail.jsx (the full case study page)
  ✅ Test routing: home → project detail → back

Phase 3 — Home Page Sections
  ✅ Navbar
  ✅ Hero
  ✅ About
  ✅ Skills
  ✅ Tools
  ✅ Experience
  ✅ Projects grid (using ProjectCard)
  ✅ Achievements
  ✅ Certifications
  ✅ Education
  ✅ Resume CTA
  ✅ Contact (Formspree)
  ✅ Footer

Phase 4 — Polish
  ✅ Add Framer Motion animations
  ✅ Test full mobile responsiveness
  ✅ Add all real project data to projects.js
  ✅ Drop all screenshots into /public/images/

Phase 5 — Launch
  ✅ Deploy to Vercel
  ✅ Test all external links open correctly
  ✅ Test contact form submits
  ✅ Share link on LinkedIn
```

---

## 15. Checklist Before Going Live

### Content
- [ ] Profile photo added and cropped well
- [ ] Resume PDF is up to date and downloadable
- [ ] All 6+ projects have real content (not Lorem Ipsum)
- [ ] Every project has at least one key metric with a number
- [ ] All GitHub links open to real public repos
- [ ] All dataset links open to real datasets
- [ ] Dashboard links open to live Power BI / Tableau dashboards
- [ ] Report PDF links open to Google Drive PDFs

### Design
- [ ] All sections visible on mobile (375px width)
- [ ] No text overflow or broken layouts on mobile
- [ ] All images load (correct paths in /public/images/)
- [ ] Color contrast is readable (light text on dark backgrounds)
- [ ] Hover effects work on all project cards

### Technical
- [ ] Contact form submits and you receive the email
- [ ] All page routes work (`/`, `/project/:id`)
- [ ] No console errors in browser DevTools
- [ ] Page loads in under 3 seconds
- [ ] `vercel.json` present for SPA routing
- [ ] Dashboard iframes load correctly (test Power BI / Tableau embed URLs)
- [ ] Projects without an embedUrl fall back to screenshot gracefully

### Professional
- [ ] Your name, title, and email are correct everywhere
- [ ] LinkedIn URL is correct
- [ ] GitHub username is consistent across the site
- [ ] No spelling mistakes in project summaries or About section

---

*Last updated: June 2025*
*Stack: React + Tailwind CSS + Framer Motion + Vercel*
