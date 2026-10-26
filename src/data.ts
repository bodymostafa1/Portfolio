export interface CaseStudy {
  id: string;
  title: string;
  category: 'Data Analysis & BI' | 'Machine Learning & AI' | 'Operations Research & Optimization';
  featured: boolean;
  question: string;
  data: {
    summary: string;
    source: string;
    size: string;
    challenges: string;
  };
  approach: {
    description: string;
    rejectedAlternatives: string;
  };
  result: {
    headline: string;
    description: string;
    baseline: string;
    comparison: string;
  };
  limitations: {
    description: string;
    nextSteps: string[];
  };
  techTags: string[];
  githubUrl: string; // supporting evidence, not primary
  demoUrl?: string; // e.g. Hugging Face Spaces or Streamlit or Power BI
  chartType: 'retail' | 'bitcoin' | 'ev' | 'churn';
}

export interface SmallProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  metrics: string;
  techTags: string[];
  githubUrl: string;
  hasInteractiveDemo?: boolean;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  roleType: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
  isEducation?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  details?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    tagline: string;
    location: string;
    email: string;
    phoneNote: string; // Explicitly kept private per instructions
    github: string;
    linkedin: string;
    cvPath: string;
    languages: { language: string; level: string }[];
    bio: string;
    quickFacts: { label: string; value: string }[];
  };
  heroMetrics: {
    stat: string;
    label: string;
    context: string;
  }[];
  heroBadges: string[];
  skills: SkillCategory[];
  caseStudies: CaseStudy[];
  moreProjects: SmallProject[];
  timeline: ExperienceItem[];
  certifications: Certification[];
  todos: {
    field: string;
    location: string;
    description: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Abdelrahman Mostafa Kamal",
    headline: "Data Analyst / Data Scientist",
    tagline: "I turn operational data into dashboards, decisions, and machine learning models.",
    location: "Cairo, Egypt",
    email: "AbdelrahmanMostafa1172@outlook.com",
    phoneNote: "Protected for privacy (available on direct request / CV)",
    github: "https://github.com/bodymostafa1",
    linkedin: "https://www.linkedin.com/in/abdelrahman-mostafa-913368261/",
    cvPath: `${import.meta.env.BASE_URL}Abdelrahman_Mostafa_CV.pdf`,
    languages: [
      { language: "Arabic", level: "Native" },
      { language: "English", level: "C1 Advanced" },
    ],
    bio: "Computers and AI graduate from Cairo University with hands-on experience in both data analysis and data science. I turn operational data into dashboards and decisions with SQL, Power BI, and Python, and I build machine learning models, including during an in-office healthcare analytics internship. I'm looking for a data analyst or data scientist role where I can build practical experience.",
    quickFacts: [
      { label: "Location", value: "Cairo, Egypt" },
      { label: "Education", value: "B.Sc. Computers & AI, Cairo University" },
      { label: "Specialization", value: "Operations Research & Decision Support" },
      { label: "Languages", value: "Arabic (Native), English (C1 Advanced)" },
      { label: "Availability", value: "Open for Full-time & Entry-level Roles" },
    ],
  },

  heroMetrics: [
    {
      stat: "76.5%",
      label: "Revenue from Two Categories",
      context: "Customer Behavior Analysis: Clothing & Accessories drive $178.4K of $233.1K total retail spend.",
    },
    {
      stat: "64.93%",
      label: "Peak Validation Accuracy",
      context: "Bitcoin CNN Trading Engine: ~15% above random-walk baseline, filtering 40% false positives.",
    },
    {
      stat: "0.85",
      label: "ROC-AUC Score",
      context: "Diabetes Risk Classifier: MLP pipeline on clinical & lifestyle data with confusion matrix validation.",
    },
  ],

  heroBadges: [
    "IBM Data Scientist Professional Certificate",
    "DataCamp Associate Data Scientist (Python)",
  ],

  skills: [
    {
      title: "Languages & Query",
      skills: ["Python", "SQL (SQL Server, MySQL)"],
      icon: "Code2",
    },
    {
      title: "Data Analysis & BI",
      skills: [
        "Power BI",
        "Excel",
        "pandas",
        "Data Cleaning & Preprocessing",
        "Data Visualization",
        "Trend Analysis",
      ],
      icon: "BarChart3",
    },
    {
      title: "Machine Learning",
      skills: [
        "scikit-learn",
        "TensorFlow / Keras",
        "Neural Networks",
        "Model Evaluation",
        "MLflow",
        "Hugging Face",
      ],
      icon: "BrainCircuit",
    },
    {
      title: "Web Development",
      skills: ["Node.js", "Express.js", "React", "MongoDB", "TypeScript", "REST APIs", "FastAPI"],
      icon: "Layers",
    },
  ],

  caseStudies: [
    {
      id: "customer-behavior-analysis",
      title: "Customer Shopping Behavior Analysis",
      category: "Data Analysis & BI",
      featured: true,
      question: "How can a retailer use consumer shopping data to identify trends, improve customer engagement, and optimize marketing and product strategy?",
      data: {
        summary: "Analyzed 3,900 customer purchase transactions across all 50 US states with $233,081 in total revenue.",
        source: "Retail transaction dataset covering 3,900 unique customer purchases across 4 core product categories.",
        size: "3,900 records, 18 initial features cleaned and shaped into snake_case schema.",
        challenges: "Single cross-sectional snapshot with no longitudinal timestamp field; 37 missing review scores (imputed using category medians); derived age cohorts and frequency day encodings to enable segment clustering.",
      },
      approach: {
        description: "Carried out data cleaning and exploratory analysis in Python (pandas), formulated ten targeted business questions solved in MySQL using Common Table Expressions (CTEs), conditional aggregation, and window functions, and delivered a production 4-page Power BI dashboard (Trends, Customer Engagement, Marketing, Product Strategies).",
        rejectedAlternatives: "Considered writing custom Python visualization scripts only, but rejected this because retail stakeholders require self-service interactive slicing by demographic and category in Power BI. Also rejected blanket price reductions across all categories because margin impact would be devastating without proven elasticity.",
      },
      result: {
        headline: "76.5% of revenue is concentrated in Clothing and Accessories; discounts and subscriptions yielded 0% spend lift.",
        description: "Clothing alone accounts for 44.7% ($104,264) of total sales, and combined with Accessories reaches 76.5% ($178,382). Subscribers ($59.49) did not outspend non-subscribers ($59.87). Purchases with a discount averaged $59.28 vs $60.13 without a discount.",
        baseline: "Baseline retail assumption that discounts increase basket size and subscriptions drive premium revenue.",
        comparison: "Both assumptions failed: basket sizes remained virtually identical ($59.28 vs $60.13), demonstrating that blanket discounts erode margin without driving incremental volume. Recommended shifting from blanket promos to controlled targeted promotions.",
      },
      limitations: {
        description: "Single cross-sectional snapshot means growth over time cannot be tracked; each customer appears once so true Customer Lifetime Value (CLV) is unmeasured; data reveals correlations rather than proven causal mechanisms.",
        nextSteps: [
          "Deploy controlled A/B testing with a holdout control group before launching seasonal discounts",
          "Train a predictive classification model (logistic regression / gradient boosting) for high-value spenders",
          "Ingest timestamped multi-purchase transaction logs to track cohort retention and lifetime value",
        ],
      },
      techTags: ["Python", "pandas", "MySQL", "Power BI", "Data Cleaning", "CTEs", "Window Functions"],
      githubUrl: "https://github.com/bodymostafa1/customer-behavior-analysis",
      demoUrl: "https://github.com/bodymostafa1/customer-behavior-analysis", // Power BI publish-to-web slot
      chartType: "retail",
    },
    {
      id: "bitcoin-cnn-trading",
      title: "ML-Powered Algorithmic Trading (Computer Vision)",
      category: "Machine Learning & AI",
      featured: true,
      question: "Can a Convolutional Neural Network (CNN) trained on graphical chart images improve pattern-based Bitcoin trade signals?",
      data: {
        summary: "1,000,000+ minutes of high-frequency Bitcoin OHLCV market data converted into 100×100 normalized 2D heatmap images.",
        source: "Granular historical Bitcoin price and volume feeds spanning multiple market cycles.",
        size: "Over 1,000,000 minute candles rendered into 100×100 visual intensity matrices.",
        challenges: "Severe non-stationarity of crypto markets, high noise-to-signal ratio, and preventing lookahead bias / data leakage across sliding temporal windows.",
      },
      approach: {
        description: "Engineered a hybrid trading engine combining rule-based technical pattern scanning with a 4-layer 2D Convolutional Neural Network (TensorFlow/Keras, Batch Normalization, Dropout, He-normal initialization) that treats chart patterns as visual textures.",
        rejectedAlternatives: "Considered 1D sequential LSTMs and tabular gradient boosted trees on technical indicators, but rejected them because 1D tabular series struggled to capture 2D geometric candlestick formations and support/resistance geometry across multiple candle spans. Also rejected unvalidated indicator thresholding due to excessive whipsaw false positives.",
      },
      result: {
        headline: "64.93% peak validation accuracy — ~15% higher than random-walk baseline, eliminating 40% of false positives.",
        description: "The hybrid model reached 64.93% peak validation accuracy and successfully filtered out 40% of false-positive trade signals compared to the rule-based scanner alone. (Important note: this metric represents peak validation accuracy under historical splits, not live execution performance).",
        baseline: "50.0% random-walk financial market baseline for directional trade classification.",
        comparison: "The CNN validator provided a +14.93% accuracy improvement over random chance and reduced false-positive rate by 40%, saving capital during sideways consolidation.",
      },
      limitations: {
        description: "Evaluated on stationary historical validation splits. Real-world trading faces exchange slippage, maker/taker fee friction, latency, and sudden market regime shifts.",
        nextSteps: [
          "Perform strict rolling walk-forward out-of-sample backtesting across bear and bull regimes",
          "Incorporate fee and slippage models into the net PnL execution engine",
          "Ingest order book depth (L2/L3 tick data) alongside candlestick heatmaps",
        ],
      },
      techTags: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Time Series", "NumPy"],
      githubUrl: "https://github.com/bodymostafa1/ML-Powered-Algorithmic-Trading-System-Computer-Vision-", // [TODO: Update with specific repo link when public]
      demoUrl: undefined,
      chartType: "bitcoin",
    },
    {
      id: "ev-charging-optimization",
      title: "EV Charging Optimization & Management System",
      category: "Operations Research & Optimization",
      featured: true,
      question: "How can electric vehicle charging allocation and routing be planned and managed efficiently for the Egyptian market?",
      data: {
        summary: "Real Greater Cairo geospatial road networks, Egyptian charging tariff structures (7.67 EGP/kWh DC vs 3.97 EGP/kWh AC), and multi-vehicle EV battery consumption models.",
        source: "Geospatial coordinate data, station capacity parameters, and battery discharge curves for the Egyptian transport landscape.",
        size: "Multi-station urban network with realistic commuter charging demand matrices.",
        challenges: "Simultaneously balancing individual driver travel time, charging duration, AC/DC tariff costs, and physical station queue constraints.",
      },
      approach: {
        description: "Formulated a Binary Integer Programming (BIP) optimization model to minimize total travel time, queue delay, and charging cost. Built a FastAPI REST backend with Jinja2 / Mapbox GL JS frontend for live telemetry, and co-authored an IEEE-format conference paper analyzing the mathematical model on real datasets. (Team of 5; my primary focus: mathematical formulation, simulation engine, and IEEE conference paper empirical analysis).",
        rejectedAlternatives: "Considered a naive greedy nearest-station routing heuristic, but rejected it because it caused severe bottlenecking at high-density stations, high queue times, and uncoordinated electrical grid strain.",
      },
      result: {
        headline: "Mathematically balanced charging load, preventing station bottlenecking while accounting for Egyptian tariffs.",
        description: "The Binary Integer Programming model successfully balanced charging allocations across AC (3.97 EGP/kWh) and DC (7.67 EGP/kWh) facilities, avoiding station overload during peak commuting hours. Full benchmark metrics and IEEE paper results: [TODO: Add IEEE paper link & exact percentage delay reduction].",
        baseline: "Uncoordinated nearest-station greedy routing (high queue times and localized grid overload).",
        comparison: "BIP formulation systematically distributed vehicles across stations, maintaining optimal battery state-of-charge while minimizing overall commuter time and cost.",
      },
      limitations: {
        description: "Optimization relied on static demand snapshots rather than live IoT charger telemetry; road transit times based on standard Mapbox estimates rather than dynamic Cairo traffic surges.",
        nextSteps: [
          "Integrate real-time OCPP (Open Charge Point Protocol) charger telemetry into the FastAPI dispatcher",
          "Incorporate dynamic surge electricity tariffs based on real-time grid load",
          "Publish IEEE conference paper findings and expand coverage to inter-city highway corridors",
        ],
      },
      techTags: ["Operations Research", "Binary Integer Programming", "FastAPI", "Python", "Mapbox GL JS", "IEEE Conference Paper"],
      githubUrl: "https://github.com/bodymostafa1/graduation_project",
      demoUrl: "https://graduation-project-nine-phi.vercel.app/",
      chartType: "ev",
    },
    {
      id: "telecom-churn-prediction",
      title: "Customer Churn Prediction for Telecom Companies",
      category: "Machine Learning & AI",
      featured: true,
      question: "Which telecommunication customers are likely to churn so a retention team can reach them before contract cancellation?",
      data: {
        summary: "Comprehensive telecom customer profile dataset spanning contract types, payment methods, monthly charges, tenure, and churn status.",
        source: "IBM / DEPI capstone project dataset reflecting realistic subscriber behavior.",
        size: "Thousands of subscriber records across multi-service subscriptions.",
        challenges: "Imbalanced churn class distribution (~26% churn rate), collinear tenure features, and the necessity of transparent risk scoring for marketing intervention.",
      },
      approach: {
        description: "Engineered an end-to-end scikit-learn machine learning pipeline with stratified sampling, one-hot encoding, and feature scaling. Evaluated Logistic Regression, Tree Ensembles (Random Forest / Gradient Boosting), and Neural Networks. Managed experiment tracking, metrics, and models using MLflow and Hugging Face tooling.",
        rejectedAlternatives: "Considered training standard classifiers with default 0.5 decision thresholds, but rejected this because false negatives (missing an actual churner) are substantially more costly than false positives in retention economics.",
      },
      result: {
        headline: "Identified high-risk churn indicators (month-to-month contracts, fiber support) enabling proactive retention.",
        description: "Trained classification pipeline comparing baseline linear models against ensemble architectures with MLflow tracking. Detailed model metrics and final ROC-AUC: [TODO: Add final capstone model metric, e.g. ROC-AUC / Recall score].",
        baseline: "Heuristic churn rules and unweighted baseline classification.",
        comparison: "Pipeline achieved superior sensitivity on high-value churners, allowing marketing teams to target retention campaigns proactively.",
      },
      limitations: {
        description: "Relies on historical billing snapshots rather than real-time customer service interaction transcripts or app engagement telemetry.",
        nextSteps: [
          "Connect live CRM webhook listeners to trigger retention outreach automatically upon risk threshold breach",
          "Incorporate NLP sentiment analysis on customer support chat logs into feature pipelines",
          "Set up automated model drift monitoring using MLflow in production",
        ],
      },
      techTags: ["Python", "scikit-learn", "MLflow", "Hugging Face", "Pipelines", "Model Evaluation"],
      githubUrl: "https://github.com/bodymostafa1/Customer_Churn",
      demoUrl: undefined, // [TODO: Optional Streamlit or Hugging Face Space link]
      chartType: "churn",
    },
  ],

  moreProjects: [
    {
      id: "student-pass-fail",
      title: "Student Pass/Fail Classifier",
      category: "Machine Learning (Comparative Study)",
      summary: "Predicts student academic outcomes (pass = final grade ≥ 10) on the UCI Student Performance dataset. Compared a Multi-Layer Perceptron (hidden layers: 64, 32) against an RBF-kernel SVM using 10-fold cross-validation, ROC-AUC, accuracy, precision, recall, and F1-score. The MLP outperformed the SVM by capturing non-linear interactions across social, personal, and academic factors.",
      metrics: "MLP Outperformed SVM | 10-Fold Cross-Validation | UCI Dataset",
      techTags: ["Python", "scikit-learn", "MLP Neural Network", "SVM (RBF Kernel)", "10-Fold CV", "ROC-AUC"],
      githubUrl: "https://github.com/bodymostafa1/Pass-fail-Classifier",
      hasInteractiveDemo: false,
    },
    {
      id: "diabetes-risk-classifier",
      title: "Diabetes Risk Classifier",
      category: "Healthcare Machine Learning",
      summary: "Trained an MLP classifier on clinical and lifestyle indicators using scikit-learn preprocessing pipelines (categorical encoding, StandardScaler). Evaluated with ROC-AUC (0.85) and confusion matrix cost analysis.",
      metrics: "ROC-AUC 0.85 | Scikit-learn Pipeline | Confusion Matrix Validated",
      techTags: ["Python", "scikit-learn", "MLP Classifier", "Pipelines", "StandardScaler", "ROC-AUC 0.85"],
      githubUrl: "https://github.com/bodymostafa1/DiaRisk-diabetes-risk-classifier", // [TODO: Add specific repo link]
      hasInteractiveDemo: false,
      demoUrl: undefined, // [TODO: Hugging Face Spaces / Streamlit link slot]
    },
  ],

  timeline: [
    {
      id: "andalusia-health",
      title: "Data Analyst Intern (In-Office)",
      roleType: "Professional Internship",
      organization: "Andalusia Health Egypt",
      location: "Cairo, Egypt",
      period: "Feb 2025 – May 2025",
      bullets: [
        "Tracked the cross-functional performance of the Medical, Business Development, and Non-Medical departments to support executive management decision-making.",
        "Turned complex patient and operational hospital data into actionable insights and executive visuals to streamline hospital workflows and optimize healthcare staffing.",
        "Analyzed historical data trends and engineered monthly productivity and target-tracking sheets for ongoing operational performance monitoring.",
      ],
      stack: ["Python (Data Cleaning)", "Excel", "Power BI", "SQL"],
    },
    {
      id: "depi-ibm",
      title: "DEPI Trainee (IBM Data Scientist Track)",
      roleType: "Professional Fellowship",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Cairo, Egypt",
      period: "Nov 2025 – Jul 2026",
      bullets: [
        "Completed the rigorous IBM Data Scientist Professional Certificate curriculum covering Python, SQL, machine learning algorithms, data visualization, prompt engineering, and MLOps tooling.",
        "Gained practical experience with enterprise production ML tools including MLflow for experiment tracking and Hugging Face for model evaluation and deployment.",
        "Delivered comprehensive capstone project applying machine learning pipelines to predict customer churn in telecommunications.",
      ],
      stack: ["Python", "SQL", "Machine Learning", "MLflow", "Hugging Face", "Prompt Engineering"],
    },
    {
      id: "route-academy",
      title: "Fullstack Web Development Diploma (MERN)",
      roleType: "Professional Diploma",
      organization: "Route Academy",
      location: "Cairo, Egypt",
      period: "May 2023 – Oct 2024",
      bullets: [
        "Completed comprehensive intensive diploma in modern fullstack web development across the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Engineered scalable client applications with React and TypeScript, structured RESTful API microservices, and implemented robust database modeling in MongoDB.",
        "Built and deployed end-to-end web applications with user authentication, secure JWT sessions, and state management.",
      ],
      stack: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript / TypeScript", "REST APIs"],
    },
    {
      id: "cairo-university",
      title: "B.Sc. in Computers and Artificial Intelligence",
      roleType: "Undergraduate Degree",
      organization: "Cairo University",
      location: "Giza / Cairo, Egypt",
      period: "Sep 2022 – Jul 2026",
      bullets: [
        "Specialized in Operations Research and Decision Support, focusing on mathematical optimization models, statistical analysis, and applied artificial intelligence.",
        "Graduation Project: EV Charging Optimization and Management System — Binary Integer Programming model, FastAPI backend, Mapbox GL JS frontend, and IEEE conference paper with real dataset analysis.",
        "Solid foundations in algorithmic thinking, data structures, relational database design, and discrete optimization.",
      ],
      stack: ["Operations Research", "Machine Learning", "Algorithms", "Mathematics & Statistics"],
      isEducation: true,
    },
  ],

  certifications: [
    {
      id: "ibm-data-scientist",
      title: "IBM Data Scientist Professional Certificate",
      issuer: "IBM (via DEPI)",
      period: "2025 – 2026",
      details: "Comprehensive professional credential covering Python, SQL, statistical modeling, machine learning pipelines, data visualization, and MLOps.",
      badge: "Professional Certificate",
    },
    {
      id: "datacamp-associate",
      title: "Associate Data Scientist in Python",
      issuer: "DataCamp",
      period: "Feb 2025 – Oct 2025",
      details: "Rigorous verified certification covering data manipulation with pandas, exploratory data analysis, statistical experiment design, and machine learning fundamentals.",
      badge: "Industry Certified",
    },
    {
      id: "route-mern-diploma",
      title: "Fullstack Web Development Diploma (MERN)",
      issuer: "Route Academy",
      period: "May 2023 – Oct 2024",
      details: "Comprehensive diploma covering modern fullstack development: MongoDB, Express.js, React, Node.js, TypeScript, RESTful API architecture, and database design.",
      badge: "Professional Diploma",
    },
    {
      id: "cisco-data-analytics",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      details: "Foundational data analytics techniques, data exploration workflows, visualization best practices, and data-driven decision frameworks.",
      badge: "Verified Credential",
    },
    {
      id: "cisco-intro-ds",
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      details: "Principles of data science lifecycles, machine learning taxonomy, statistical thinking, and real-world analytics applications.",
      badge: "Verified Credential",
    },
  ],

  todos: [
    {
      field: "Bitcoin CNN Repo",
      location: "src/data.ts -> caseStudies['bitcoin-cnn-trading'].githubUrl",
      description: "Replace the placeholder with your specific public GitHub repository URL when published.",
    },
    {
      field: "EV Project Result Metric & Paper Link",
      location: "src/data.ts -> caseStudies['ev-charging-optimization'].result",
      description: "Add your final benchmark metric percentage and IEEE paper publication link or title.",
    },
    {
      field: "Telecom Churn Final Metric",
      location: "src/data.ts -> caseStudies['telecom-churn-prediction'].result",
      description: "Add your final DEPI capstone model metric (e.g. ROC-AUC or Recall score).",
    },
    {
      field: "Live Demo Links (Hugging Face / Streamlit)",
      location: "src/data.ts -> caseStudies & moreProjects demoUrl slots",
      description: "Add your deployed Streamlit Community Cloud or Hugging Face Space URLs if deployed.",
    },
    {
      field: "Power BI Publish-to-Web Iframe",
      location: "src/data.ts -> caseStudies['customer-behavior-analysis'].demoUrl",
      description: "Embed your Power BI public share link if you choose to enable publish-to-web.",
    },
    {
      field: "Formspree Endpoint ID",
      location: "src/components/Contact.tsx",
      description: "Replace 'your-form-id' with your free Formspree form ID to receive emails directly, or leave mailto active.",
    },
  ],
};
