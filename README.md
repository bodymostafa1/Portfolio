# Abdelrahman Mostafa Kamal — Portfolio Website

A production-ready, recruiter-first personal portfolio website for **Abdelrahman Mostafa Kamal**, Data Analyst & Data Scientist.

Built around plain-language case studies that a recruiter or hiring manager can understand in under two minutes without reading code.

---

## 🚀 Key Features

- **Recruiter-First Hero**: Immediate value proposition, 3-metric headline outcome strip (76.5% category revenue, 64.93% Bitcoin validation accuracy, 0.85 ROC-AUC), verified certification badges, and immediate CV download.
- **2-Minute Case Studies**: Every featured project follows a strict 5-part executive structure:
  1. *Business Question* (one sentence)
  2. *Data* (source, volume, challenges)
  3. *Approach* (methodology + alternatives considered and rejected)
  4. *Measurable Result* (prominent callout box benchmarked against a baseline)
  5. *Limitations & Next Steps* (honest self-critique + future roadmap)
- **Visual Storytelling**: Interactive category revenue explorer, Bitcoin model vs baseline breakdown, EV charging optimization comparison, and an interactive in-browser **Diabetes Risk Classifier Simulator**.
- **Dark & Light Mode**: Smooth theme toggling with zero flash (anti-FOUC script) defaulting to system preference (`prefers-color-scheme`).
- **Single Source of Truth (`src/data.ts`)**: Edit any bio, metric, link, skill, or project description in one clean TypeScript file without touching any UI component.
- **Privacy & Security**: Email is displayed with click-to-copy convenience; phone number is explicitly withheld from public scrapers per instructions.
- **SEO & Accessibility**: Complete Open Graph, Twitter card tags, semantic HTML, keyboard navigation (`Escape` closes modal, body scroll lock), and 1100px readable content width.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Fonts**: Inter & Plus Jakarta Sans

---

## 📂 Project Structure

```
d:\Portfolio\
├── public/
│   ├── Abdelrahman_Mostafa_CV.pdf    # Direct CV download asset
│   ├── profile.jpg                   # Optimized profile photo
│   ├── profile.webp                  # Modern WebP photo
│   ├── robots.txt                    # Search crawler rules
│   └── sitemap.xml                   # SEO sitemap
├── src/
│   ├── components/
│   │   ├── About.tsx                 # Plain-language bio & quick facts
│   │   ├── CaseStudyModal.tsx        # Accessible 5-section case study modal
│   │   ├── Certifications.tsx        # IBM, DataCamp, Route Academy & Cisco credential badges
│   │   ├── Contact.tsx               # Copyable email, form & social links
│   │   ├── Footer.tsx                # Copyright, links & back-to-top
│   │   ├── Hero.tsx                  # Headline, tagline, 3-metric strip
│   │   ├── InteractiveCharts.tsx     # Visual data breakdown charts
│   │   ├── InteractiveDiabetesDemo.tsx # In-browser MLP risk simulator
│   │   ├── Navbar.tsx                # Sticky navbar & dark mode toggle
│   │   ├── Projects.tsx              # Filterable card grid
│   │   ├── Skills.tsx                # Categorized skill cards (no progress bars)
│   │   ├── SocialIcons.tsx           # GitHub & LinkedIn SVGs
│   │   └── Timeline.tsx              # Vertical experience & education timeline
│   ├── data.ts                       # ⭐ SINGLE SOURCE OF TRUTH (All content)
│   ├── App.tsx                       # Root layout & theme management
│   ├── index.css                     # Tailwind directives & smooth scroll
│   ├── main.tsx                      # Vite React entry point
│   └── vite-env.d.ts                 # TypeScript environment types
├── index.html                        # SEO meta tags, fonts & anti-FOUC script
├── package.json                      # Scripts & dependencies
├── postcss.config.js                 # PostCSS setup
├── tailwind.config.js                # Tailwind theme (1100px max width & colors)
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite build configuration
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Builds the static assets into `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Guides

### Option A: Deploy to Vercel (Recommended)
1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git remote add origin https://github.com/bodymostafa1/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio is live with SSL in ~30 seconds!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com/).
2. Drag and drop the `dist/` folder or link your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.

### Option C: Deploy to GitHub Pages
1. In `vite.config.ts`, set the base path if hosting on `<username>.github.io/<repo>/`:
   ```ts
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   });
   ```
2. Build and push `dist/` to the `gh-pages` branch.

---

## 📝 How to Update Content

You do **not** need to touch React components to edit your portfolio. Simply open:
👉 `src/data.ts`

You can change:
- Your bio, headline, and tagline
- Profile links (LinkedIn, GitHub)
- Case study questions, data sizes, metrics, and limitations
- Skill tags or add new skills
- Experience bullets or dates

---

## ✅ TODO Checklist for Abdelrahman

Here are the items reserved for you to update when ready (all located in `src/data.ts`):

- [ ] **Bitcoin CNN Repository URL**:
  - File: `src/data.ts` -> `caseStudies['bitcoin-cnn-trading'].githubUrl`
  - Current placeholder: links to your GitHub profile; update to repository when public.
- [ ] **EV Charging Optimization Final Result Metric & Paper**:
  - File: `src/data.ts` -> `caseStudies['ev-charging-optimization'].result`
  - Add your specific benchmark delay reduction percentage and IEEE conference paper title / link.
- [ ] **Customer Churn Capstone Final Model Metric**:
  - File: `src/data.ts` -> `caseStudies['telecom-churn-prediction'].result`
  - Add your final DEPI capstone model metric (e.g., ROC-AUC or Recall score).
- [ ] **Power BI Publish-to-Web Iframe or Link**:
  - File: `src/data.ts` -> `caseStudies['customer-behavior-analysis'].demoUrl`
  - Add your public Power BI report link if you wish to enable public web viewing.
- [ ] **Live ML Demo (Streamlit / Hugging Face Spaces)**:
  - File: `src/data.ts` -> `moreProjects['diabetes-risk-classifier'].demoUrl`
  - The built-in client-side interactive simulator is already live on the page! You can also link an external Streamlit or Hugging Face Space here if you host one.
- [ ] **Formspree Endpoint ID (Optional)**:
  - File: `src/components/Contact.tsx`
  - Currently, the form generates a pre-filled `mailto:` email directly in your recruiter's email client. If you want direct web form forwarding without email client opening, sign up at [Formspree](https://formspree.io) and paste your form ID.
