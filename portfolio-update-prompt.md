# Portfolio Update — Implementation Prompt

Update the portfolio site (React + Vite, running at localhost:5173) with the content and layout changes below. Every fact listed here is final and confirmed — do not invent, embellish, or add anything not explicitly listed. Do not change fonts, colors, spacing system, or component structure beyond what's specified.

---

## 1. HERO SECTION

**Replace current placeholder copy with:**

- Badge: `● Available for work`
- Headline: `Hi, I'm Trishund Kupatkar`
- Role/subhead: `Business Development & Analytics Executive`
- Intro paragraph:
  > Curiosity drives my work. I break down complex problems, explore the data behind them, discover meaningful patterns, and translate those findings into clear business insights.
- Meta line: `📍 Based in Bangalore, India   ⚡ Available Now`
- Buttons: `Hire Me` (unchanged behavior) · `Download CV` → link to `https://drive.google.com/file/d/1yOd7LFGUHpYxLp6W7UYcYPA2gdDXzxho/view?usp=drive_link` (convert to direct-download format, e.g. `https://drive.google.com/uc?export=download&id=1yOd7LFGUHpYxLp6W7UYcYPA2gdDXzxho`)
- Social icons and links:
  - GitHub → https://github.com/Trishund
  - LinkedIn → https://www.linkedin.com/in/trishund-kupatkar-384931227/
  - Kaggle → https://www.kaggle.com/trishundkupatkar (replace the current plain "k" placeholder icon with the actual Kaggle logo)

**Image change:** Replace the current anime-style illustration with a real black-and-white (grayscale) photo of the site owner. Image file will be provided separately — leave a clearly named placeholder (e.g. `hero-photo-bw.jpg`) in the expected asset location until then. Apply a true grayscale filter, not just desaturation, if the photo is provided in color.

---

## 2. ABOUT SECTION

**Rename section heading from "MULTIDISCIPLINARY MINDSET." to "How I Work"**

**Replace body copy with:**
> I believe good analytics starts long before a dashboard is built.
>
> Every project begins with understanding the business problem. From there, I gather and prepare data, explore patterns, validate assumptions, analyze trends, and communicate the findings through dashboards, reports, and automation. My expertise spans the Microsoft Data Analytics ecosystem, including Power BI, SQL, Python, Microsoft Fabric, Azure, and the Power Platform, allowing me to deliver complete, end-to-end analytics solutions.

**Stat cards — replace with:**
| Number | Label |
|---|---|
| 1+ | Years of Experience |
| 15+ | Real-World Projects |
| 7+ | Analytics & BI Tools |

**Layout changes:**
- Remove the "Profile Photo" placeholder box entirely — no image in this section.
- Change section from two-column (text + image) to a single full-width column.
- Set body paragraph text alignment to **justified**.

---

## 3. SKILLS SECTION

Keep existing 3-card structure and progress-bar UI. Replace values with:

**Card 1 — Analytics & Data**
- Python (Pandas, NumPy) — 80%
- SQL / Microsoft SQL Server — 85%
- Data Cleaning & Analysis — 80%
- Statistical Analysis — 80%

**Card 2 — Visualisation & BI**
- Power BI & DAX — 95%
- Microsoft Fabric — 75%
- Matplotlib / Seaborn — 85%

**Card 3 — Automation & Cloud**
- n8n (workflow automation) — 90%
- Azure Fundamentals / Azure IoT — 80%
- Power Platform (Power Apps / Automate) — 95%
- Azure Data Lake / Data Factory — 70%

---

## 4. WHAT I USE (Tools & Technologies)

Replace the current icon grid with the following tools only (remove any not listed: Tableau, GCP, PostgreSQL, Looker, Git, VS Code, Jupyter, Scikit-learn logo tile if not already covered below):

| Tool | Tag |
|---|---|
| Python | Language |
| SQL | Language |
| Microsoft SQL Server | Database |
| Power BI | BI Tool |
| DAX | Language |
| Microsoft Fabric | BI Tool |
| Pandas | Library |
| NumPy | Library |
| Matplotlib | Library |
| Seaborn | Library |
| Scikit-learn | Library |
| Excel | Tool |
| Google Sheets | Tool |
| Azure Fundamentals | Cloud |
| Azure IoT | Cloud |
| Azure Data Lake | Cloud |
| Azure Data Factory | Cloud |
| Power Platform | Low-Code/No-Code |
| Power Connectors | Tool |
| n8n | Tool |
| Claude / Claude Code | Tool |
| Google AI Studio | Tool |

Use consistent icon style across all tiles (all colored brand logos, or all monochrome — do not mix, as the current grid does).

---

## 5. EXPERIENCE SECTION

Replace all three existing fabricated entries (TechCorp Solutions, Analytiq Insights, InnovateX Labs) with the following two real entries, **in this order (most recent/relevant first)**:

### Entry 1 (top)
- **Title:** Freelance QA & Cloud Systems Developer
- **Company:** Clarion (Cosmetics Division, Nikita Container Group)
- **Location:** Chennai (Remote)
- **Type badge:** Freelance
- **Duration:** Jun 2026 – Oct 2026 *(concurrent with the TM Krishiyug role below — note this is not a full-time position)*
- **Bullets:**
  - Building a software system to cut QA turnaround time by 50%, replacing paper-based records with cloud-based data storage
  - Designing the system to keep the company audit-ready year-round (24/7, 365 days), rather than only during scheduled audits
  - Working with Clarion, the cosmetics division of Nikita Container Group, which serves multiple cosmetics-sector clients
  - If successful, the system is planned for rollout across Clarion's other branches, with potential expansion across the wider group
- **Tags:** Cloud Migration · QA Automation · Compliance · Freelance

### Entry 2
- **Title:** Business Development and Analytics Executive
- **Company:** TM Krishiyug Innovatives Pvt. Ltd.
- **Location:** Bilaspur, Chhattisgarh, India · On-site
- **Type badge:** Full-time
- **Duration:** Jun 2026 – Present
- **Bullets:**
  - Built and maintained central lead, sales, and sourcing databases in Excel and Google Sheets, structuring raw records for domestic and export B2B operations
  - Designed Power BI dashboards to track lead pipelines, conversion stages, and sales activity for faster decision-making
  - Ran product-selection analysis for the export business — scoring products on margin, demand, and sourcing feasibility to shortlist entry into UAE, Oman, and EU markets
  - Consolidated supplier and procurement data (pricing, capacity, MOQ, certifications, lead times) to support export catalog development
  - Conducted competitor and market analysis across Amazon, JioMart, IndiaMart, and ONDC to benchmark pricing, positioning, and channel presence
  - Automated LinkedIn and Twitter posting/engagement using n8n and AI tools (Claude, Google AI Studio), reducing manual content work
  - Built email outreach and follow-up automation with Python and n8n for personalized B2B communication at scale
  - Managed B2B lead outreach for a supply network of 6,000+ farmers, FPOs, and SHGs with full pipeline visibility
- **Tags:** Power BI · Python · n8n · Excel · Market Research

---

## 6. PROJECTS SECTION

Replace all 3 existing fabricated project cards with 6 new cards, **in this order**:

1. National Air Quality Intelligence Platform (NAQIP)
   - Tags: Python · SQL · Power BI · Geospatial Analysis
   - Summary: An end-to-end pipeline analyzing air quality across Indian cities — from data cleaning and SQL storage through time-series trends to an interactive Power BI dashboard.

2. India Electricity Collision Point
   - Tags: Python · SQL · Power BI · Time-Series Analysis
   - Summary: Builds on the same data ecosystem as NAQIP with deeper analysis, examining where electricity demand and supply patterns intersect and create pressure points across regions.

3. Where Should India Build Its Next Data Center *(flagship project — consider giving this card slightly more visual weight/size than the others)*
   - Tags: Python · SQL · Power BI · Multi-Source Data Merging
   - Summary: A flagship, multi-source analysis combining power availability, connectivity, land, and climate data to recommend where India's next data center should be built.

4. Hidden Loss Detection in Retail Transactions
   - Tags: Python · Statistics · Benford's Law · SQL
   - Summary: Applies Benford's Law and statistical anomaly detection to retail transaction data, flagging patterns consistent with hidden loss.
   - **This is the only project card that should link to a full case-study page** ("View Case Study →"). The other 5 cards should not have this link yet (no destination page exists for them) — display as static cards, or link to `#` / disabled state.

5. Company Intelligence Platform — Ola Electric 360°
   - Tags: Power BI · SQL · Python · Market Research
   - Summary: A broad, 360° business-intelligence view of Ola Electric, consolidating available financial, market, and sentiment data into a single Power BI dashboard.

6. Agentic AI Data Insights Assistant *(label as "Stretch Goal" or similar badge)*
   - Tags: Python · AI Agents · Power BI · Automation
   - Summary: An experimental AI agent that can query datasets and surface insights automatically — a stretch project exploring agentic AI in analytics workflows.

**No dates on any project card.**

Note: the site's stat card claims "15+ Real-World Projects" (see About section) while only 6 are shown here — this is a known gap the site owner is aware of and will address separately by either adding more project cards before launch or adjusting the stat. No action needed on this from an implementation standpoint; just don't "fix" the discrepancy by changing either number without instruction.

---

## 7. LEADERSHIP & INITIATIVES SECTION

**Rename this section (and its nav label) from "Achievements" to "Leadership & Initiatives."**

Replace all 4 existing fabricated achievement cards (Top Performer, Kaggle Expert, Best Capstone, Hackathon Runner-Up) with the following 4 real entries. Keep tone plain and factual — no inflated verbs like "spearheaded" or "drove impact."

1. **Department Bakery Initiative**
   Operations & Entrepreneurship Lead
   Contributed to launching and managing a university-supported bakery initiative, funded with a ₹2 lakh grant. Helped coordinate raw material procurement, inventory, and day-to-day operations, and supported training students in bread production as part of the department's entrepreneurship program.

2. **Placement Committee**
   Placement Committee Coordinator
   Helped set up and organize the placement committee for the postgraduate department. Coordinated placement-related activities, put together resources for junior batches, and worked to strengthen industry engagement for students.

3. **Family Business**
   Co-Founder & Operations Manager
   Co-founded and helped run a home-based tiffin service for over two years, handling procurement, pricing, customer management, marketing, packaging, and day-to-day order fulfillment.

4. **Class Representative**
   Class Representative, MSc Bioinformatics
   Represented students by coordinating with faculty, helping organize academic activities, and communicating student feedback throughout the postgraduate program.

---

## 8. CERTIFICATIONS SECTION

Replace all 6 existing fabricated certifications with:

1. Microsoft Power BI Data Analyst Professional Certificate — Coursera — Jul 2026
2. Microsoft Data Architecture for Modern Data Stacks Professional Certificate — Coursera — Aug 2026
3. Microsoft Azure Fundamentals (AZ-900) Exam Prep — Coursera — Aug 2026
4. Microsoft Power Platform Fundamentals (PL-900) Exam Prep — Coursera — Jun 2026
5. Complete Data Science, Machine Learning, DL, NLP Bootcamp — Udemy — Mar 2026
6. Complete Data Analyst Bootcamp: From Basics to Advanced — Udemy — May 2026

Leave the "verify credential" external-link icon on each card pointing to `#` for now — actual credential links will be provided later.

---

## 9. EDUCATION SECTION

Replace both existing fabricated entries with:

### MSc Bioinformatics
- Institution: Pondicherry University
- Duration: Jul 2024 – May 2026
- Score: SGPA 9.0 / 10
- Thesis: "Machine Learning-Based QSAR Modeling and Molecular Docking of Natural Compounds as Falcipain-2 Inhibitors for Antimalarial Drug Discovery"
- Relevant Coursework: Data Mining & ML, DBMS, Python Programming, R & Big Data Analytics, Statistics

### BSc Biotechnology
- Institution: Guru Ghasidas Vishwavidyalaya
- Duration: Jun 2021 – May 2024
- Score: CGPA 8.25 / 10
- Thesis: "Targeting Neoantigens in Cancer Immunotherapy: Enhancing the Efficacy of Immune Checkpoint Inhibitors"

---

## 10. CONTACT SECTION

- Email: trishundkupatkar@gmail.com (fix — currently shows an incorrect version with a dot: trishund.kupatkar@gmail.com)
- Location: Bangalore, Karnataka, India (change from Pune, Maharashtra)
- Connect icons/links: same GitHub, LinkedIn, Kaggle links as Hero section

**Footer:**
- Line 1: `Trishund Kupatkar. — Business Development & Analytics Executive · Power BI · Python · SQL`
- Line 2 (unchanged): `Built with ♥ using React + Vite · 2026`

---

## GLOBAL / CROSS-CUTTING FIXES

- **Nav bug:** Fixed/sticky navbar is currently overlapping section content on scroll (visible in the About and Certifications sections). Fix z-index/scroll-margin so content is never hidden behind the nav.
- **Nav label:** Update "Achievements" to "Leadership & Initiatives" in the top nav to match the renamed section.
- **Icon consistency:** Standardize icon style in the Tools & Technologies grid (see Section 4 note above).
- **Kaggle icon:** Replace the plain "k" circle icon (used in Hero, Contact, and Footer) with the actual Kaggle logo, consistently in all three locations.
