// Central project data store — single source of truth for all 6 projects.
// All cards, detail pages, metadata, and links consume this file.

export type ProjectSection = {
  title: string
  content: string
}

export type ProjectMetric = {
  value: string
  label: string
}

export type Project = {
  slug: string
  name: string
  subtitle: string
  description: string
  featured: boolean
  status: 'completed' | 'in-development'
  technologies: string[]
  highlights?: string[]
  pipeline?: string[]
  metrics?: ProjectMetric[]
  github?: string
  demo?: string
  sections: ProjectSection[]
}

export const projects: Project[] = [
  // ─────────────────────────────────────────
  // FLAGSHIP 1: SENTINEL.GRID
  // ─────────────────────────────────────────
  {
    slug: 'sentinel-grid',
    name: 'SENTINEL.GRID',
    subtitle: 'Federated AI Cyber Defense Platform',
    description:
      'A real-time network intrusion detection and automated cyber-defense platform using a CNN-LSTM deep learning model and a federated learning architecture to protect distributed networks while preserving data locality.',
    featured: true,
    status: 'completed',
    highlights: [
      '98.85% detection accuracy',
      'CNN-LSTM hybrid model',
      '3 federated edge nodes',
      'Flower FedAvg strategy',
      'Differential privacy ε=1.0',
      'CICIDS2017 dataset',
    ],
    pipeline: [
      'Traffic Flow',
      'Feature Extraction',
      'CNN-LSTM Hybrid',
      'Federated Learning',
      'Threat Classification',
      'Automated Response',
    ],
    metrics: [
      { value: '98.85%', label: 'Model Accuracy' },
      { value: '5 Classes', label: 'Traffic Categories' },
      { value: '3 Nodes', label: 'Federated Edge' },
      { value: 'ε = 1.0', label: 'Differential Privacy' },
    ],
    technologies: [
      'PyTorch',
      'CNN-LSTM',
      'Flower',
      'Federated Learning',
      'FastAPI',
      'React',
      'Recharts',
      'NumPy',
      'CICIDS2017',
    ],
    github: undefined,
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'SENTINEL.GRID is a real-time network intrusion detection and automated cyber-defense platform. It combines a CNN-LSTM deep learning model with a federated learning architecture — enabling distributed threat detection across multiple network segments while ensuring raw traffic data never leaves each edge node. The platform achieves 98.85% classification accuracy across five traffic categories on the CICIDS2017 benchmark dataset.',
      },
      {
        title: 'Problem',
        content:
          'Centralised network security systems require aggregating raw traffic data, creating significant privacy risks and single points of failure. As network infrastructure grows more distributed, security solutions must evolve to detect threats in real time across segmented environments — without exposing sensitive packet-level data to a central authority.',
      },
      {
        title: 'Solution',
        content:
          'SENTINEL.GRID implements a federated learning architecture using the Flower framework. Each of three edge nodes trains a local CNN-LSTM model on its own network segment. Only model updates — not raw traffic data — are shared with the central aggregator. The FedAvg strategy merges updates into a global model, with differential privacy (ε=1.0) applied to gradient updates.',
      },
      {
        title: 'ML Model',
        content:
          'The detection model is a CNN-LSTM hybrid architecture. Convolutional layers extract spatial feature patterns from raw network flow statistics. LSTM layers capture temporal dependencies across traffic sequences — critical for detecting multi-stage attacks such as brute-force and DDoS campaigns. Trained on CICIDS2017, the model classifies five traffic categories: DDoS attacks, Port Scans, Brute Force attacks, Web Attacks, and Normal traffic.',
      },
      {
        title: 'Federated Learning',
        content:
          'Federated training is orchestrated using the Flower (flwr) framework across three edge nodes. Each node trains locally on its network segment. The FedAvg aggregation strategy merges model updates without centralising underlying data. Differential privacy with ε=1.0 is applied to gradient updates before transmission.',
      },
      {
        title: 'Threat Detection',
        content:
          'The live detection pipeline continuously evaluates incoming traffic flows, classifying each into one of five categories. Detections are streamed to the React dashboard showing a real-time threat feed, live attack distribution charts, per-node detection statistics, and a federated learning monitoring panel showing training convergence across nodes.',
      },
      {
        title: 'Automated Response',
        content:
          'On confirmed threat detection, SENTINEL.GRID triggers automated responses proportional to the threat category: IP blocking for confirmed DDoS and brute-force sources, rate limiting for suspicious traffic patterns, and honeypot deployment to trap and analyse persistent attackers — all executed without manual operator intervention.',
      },
      {
        title: 'Results',
        content:
          'The CNN-LSTM model achieves 98.85% classification accuracy on the CICIDS2017 benchmark dataset across all five traffic categories, with federated training converging across three distributed edge nodes under differential privacy constraints.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // FLAGSHIP 2: PROJECT 117
  // ─────────────────────────────────────────
  {
    slug: 'project-117',
    name: 'PROJECT 117',
    subtitle: 'Sovereign Industrial Intelligence Platform',
    description:
      'A completed end-to-end industrial intelligence platform combining a deterministic refinery digital twin, multi-agent AI reasoning, hybrid RAG retrieval, topology-aware validation, independent verification, human approval workflows, persistent audit logging, and a companion Android application.',
    featured: true,
    status: 'completed',
    highlights: [
      '58 equipment assets · 224 sensors',
      '60 process connections · 18 process areas',
      'Multi-agent AI orchestration',
      'Hybrid RAG: LanceDB + BM25',
      'Topology-aware validation',
      '368 backend tests passing',
      '0 TypeScript errors',
    ],
    pipeline: [
      'Digital Twin',
      'Sensor Simulation',
      'Incident Generation',
      'RAG Retrieval',
      'Validation',
      'Verification',
      'Human Approval',
      'Audit Trail',
    ],
    metrics: [
      { value: '58 Assets', label: 'Refinery Equipment' },
      { value: '224', label: 'Streaming Sensors' },
      { value: '368 Tests', label: 'Passing Backend Suite' },
      { value: '0 Errors', label: 'TypeScript Compilation' },
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'Kotlin',
      'Jetpack Compose',
      'Ollama',
      'LanceDB',
      'SQLite',
      'Docker',
    ],
    github: undefined,
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'PROJECT 117 is a completed end-to-end industrial intelligence platform built for the oil refinery domain. It combines a deterministic digital twin simulator with multi-agent AI reasoning, federated retrieval, human-in-the-loop approval gates, and persistent audit logging — delivered as a production-quality system with a companion Android application. The platform shipped with 368 backend tests passing and 0 TypeScript compilation errors.',
      },
      {
        title: 'Problem',
        content:
          'Industrial facilities generate continuous data streams from hundreds of interdependent sensors across complex equipment networks. Operators must reason simultaneously across sensor states, historical incident patterns, and domain procedures — a cognitive load that scales poorly as facilities grow. Traditional SCADA systems capture data but lack intelligent reasoning, leaving operators without automated decision support, independent verification of recommendations, or traceable accountability for operational decisions.',
      },
      {
        title: 'Industrial Digital Twin',
        content:
          'The simulation core is a deterministic refinery digital twin comprising 58 equipment assets, 224 sensors, 60 process connections, and 18 distinct process areas. The twin generates fault simulations, event streams, incident reports, and recovery action scenarios — providing a realistic, controllable industrial environment for AI reasoning without requiring access to a live facility.',
      },
      {
        title: 'System Architecture',
        content:
          'PROJECT 117 follows a multi-tier architecture: the simulation layer runs the Python deterministic digital twin engine; the API layer is a FastAPI backend exposing simulation state, incidents, and agent results; the intelligence layer runs the multi-agent AI pipeline; the application layer delivers a Next.js TypeScript web dashboard and a Kotlin/Jetpack Compose Android application; the data layer uses SQLite for persistence and LanceDB for vector retrieval; and Docker containerises the full stack.',
      },
      {
        title: 'AI Agent Pipeline',
        content:
          'The intelligence layer uses multi-agent orchestration powered by Ollama. A primary reasoning agent analyses sensor states, active incidents, and historical patterns. The pipeline flows through: hybrid context retrieval from LanceDB and BM25, topology-aware validation of proposed actions, independent verification by a second agent without access to the primary agent\'s reasoning chain, and a human approval gate before any critical action is executed.',
      },
      {
        title: 'RAG & Retrieval',
        content:
          'The system uses a hybrid retrieval approach: dense vector retrieval via LanceDB embeddings surfaces semantically relevant historical incidents and procedures, while BM25 keyword retrieval ensures precise term matches for specific equipment identifiers and procedure codes. Topology-aware filtering further constrains retrieved context to the affected equipment section of the digital twin.',
      },
      {
        title: 'Validation & Verification',
        content:
          'Every AI-generated recommendation passes through two independent stages before reaching the operator: topology-aware validation confirms that proposed actions are consistent with the current equipment state and process connections; independent verification by a separate agent re-evaluates the recommendation without access to the primary agent\'s reasoning. This staged review is designed to catch hallucinated or contextually inconsistent recommendations before they reach human operators.',
      },
      {
        title: 'Human Approval & Auditability',
        content:
          'Verified recommendations are presented to operators through an explicit human approval interface. Operators must approve before any action is executed. Every decision — agent reasoning, validation outcome, verification result, operator approval, and timestamp — is written to a persistent audit log, providing a complete, queryable history of all operational decisions made through the platform.',
      },
      {
        title: 'Mobile Application',
        content:
          'A companion Android application built with Kotlin and Jetpack Compose provides mobile situational awareness. The app connects to the FastAPI backend to display live equipment status, active incidents, and AI-generated recommendations — designed for operators who need visibility away from fixed workstations.',
      },
      {
        title: 'Testing & Quality',
        content:
          'PROJECT 117 shipped with 368 backend tests passing, 0 TypeScript compilation errors, and a successful production build — reflecting a deliberate focus on verifiability and system correctness from the outset.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // FLAGSHIP 3: ECO-GUARDIAN
  // ─────────────────────────────────────────
  {
    slug: 'eco-guardian',
    name: 'ECO-GUARDIAN',
    subtitle: 'AI Environmental Hazard Reporting System',
    description:
      'An AI-agent environmental reporting system that analyses uploaded environmental hazard images, routes them through a cross-validation pipeline, generates confidence-scored reports, and visualises active incidents on a live 3D Earth.',
    featured: true,
    status: 'completed',
    highlights: [
      'Multi-agent detection pipeline',
      'Vision AI + cross-validation',
      'Confidence-scored reports',
      'Live Three.js 3D Earth',
      'Automated incident routing',
      'Agent health monitoring',
    ],
    pipeline: [
      'Image Upload',
      'Vision AI Detection',
      'Cross-Validation Agent',
      'Confidence Score',
      'Report Generation',
      'Automated Routing',
    ],
    metrics: [
      { value: 'Dual-Agent', label: 'Cross-Validation' },
      { value: 'Real-Time', label: 'Vision AI Inference' },
      { value: '3D Earth', label: 'Three.js Visualizer' },
      { value: 'AWS', label: 'Cloud Architecture' },
    ],
    technologies: [
      'AWS',
      'AI Agents',
      'Vision AI',
      'Generative AI',
      'React',
      'Three.js',
    ],
    github: undefined,
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'ECO-GUARDIAN is an AI-agent environmental hazard reporting system. Users upload environmental hazard photographs; the platform routes them through a multi-agent detection and cross-validation pipeline, generates confidence-scored structured reports using Generative AI, and routes verified reports to the appropriate response channels. Active incidents are displayed in real time on a live 3D Earth visualization built with Three.js.',
      },
      {
        title: 'Problem',
        content:
          'Environmental hazard incidents — industrial pollution, illegal dumping, fire outbreaks, contamination events — are frequently underreported or reported without sufficient structured evidence to act on. Manual review processes create bottlenecks, lack consistent verification, and cannot route reports at scale to the correct response authorities.',
      },
      {
        title: 'AI Workflow',
        content:
          'The multi-agent pipeline processes each submission in five stages: (1) Image Upload — the user submits an environmental photograph; (2) Vision AI Detection — a primary agent analyses the image for hazard indicators; (3) Cross-Validation — a second independent agent validates the detection; (4) Confidence Scoring — a composite confidence score is generated from both agents; (5) Report Generation — a structured hazard report is generated using Generative AI; (6) Automated Routing — verified reports above the confidence threshold are routed to relevant authorities.',
      },
      {
        title: '3D Visualisation & Dashboard',
        content:
          'The React frontend features a live 3D Earth rendered with Three.js showing active incident markers by location, category, and severity. The analytics dashboard provides real-time incident tracking, report volume trends, hazard category breakdowns, routing statistics, and an agent health monitoring panel showing detection pipeline status.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // SUPPORTING 1: PHISHING SITE DETECTION
  // ─────────────────────────────────────────
  {
    slug: 'phishing-site-detection',
    name: 'PHISHING SITE DETECTION',
    subtitle: 'ML-Powered Browser Security Extension',
    description:
      'A browser extension backed by a Flask ML API that evaluates URLs in real time using feature engineering and a layered trust-based and ML detection pipeline to classify sites as phishing or safe.',
    featured: false,
    status: 'completed',
    pipeline: [
      'URL Ingestion',
      'Domain Whitelist Check',
      '8-Feature Extraction',
      'ML Probability Score',
      'Verdict & Confidence',
    ],
    metrics: [
      { value: '8 Features', label: 'Engineered Indicators' },
      { value: '2-Tier', label: 'Trust & ML Defense' },
      { value: 'Flask', label: 'REST API' },
      { value: 'Extension', label: 'Real-Time Browser' },
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Flask',
      'JavaScript',
      'REST API',
      'Feature Engineering',
    ],
    github: 'https://github.com/Het0501/phishing-site-detection.git',
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'A browser extension that evaluates the current page URL in real time through a Flask REST API, applying feature engineering and machine learning to classify URLs as phishing or safe — and returning a confidence-scored prediction to the user.',
      },
      {
        title: 'Detection Pipeline',
        content:
          'When a URL is submitted: the Flask API first validates it against a trusted domain list; if not trusted, eight phishing indicator features are extracted; the ML model evaluates the feature vector and outputs a probability score; URLs above the phishing threshold are classified as phishing, others as safe; a confidence score accompanies every prediction.',
      },
      {
        title: 'Feature Engineering',
        content:
          'Eight features are extracted from each URL: URL length, IP address presence, @ symbol detection, dot count, HTTPS presence, hyphen detection, suspicious keyword patterns, and redirect pattern detection.',
      },
      {
        title: 'Trust & ML Layers',
        content:
          'Trusted exact domains and validated TLD patterns bypass ML evaluation and are immediately classified as safe, reducing false positives for known legitimate sites. URLs that pass the trust layer are evaluated by the ML model, which outputs a probability-based classification with confidence scoring.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // SUPPORTING 2: SMARTSHOP
  // ─────────────────────────────────────────
  {
    slug: 'smartshop',
    name: 'SMARTSHOP',
    subtitle: 'Full-Stack Inventory & Product Management System',
    description:
      'A full-stack admin dashboard for product and inventory management built with React and Spring Boot, featuring JWT authentication, protected routes, and full CRUD operations.',
    featured: false,
    status: 'completed',
    pipeline: [
      'User Authentication',
      'JWT Session Validation',
      'Role-Based Route Guard',
      'Inventory CRUD Actions',
      'MySQL DB Persistence',
    ],
    metrics: [
      { value: 'Full-Stack', label: 'React + Spring Boot' },
      { value: 'JWT Auth', label: 'Stateless Security' },
      { value: 'Full CRUD', label: 'Inventory Lifecycle' },
      { value: 'MySQL', label: 'JPA/Hibernate Persistence' },
    ],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'REST APIs',
      'JPA/Hibernate',
      'MySQL',
    ],
    github: 'https://github.com/Het0501/Smart-Shop.git',
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'A full-stack product management system with a React/Vite frontend and a Spring Boot backend. Users register and log in via a JWT authentication flow; authenticated sessions access a protected admin dashboard providing full product lifecycle management.',
      },
      {
        title: 'Features & Authentication',
        content:
          'Features include user registration and login, JWT-based session management, protected route enforcement on the frontend, and a complete CRUD interface for products — create, view, update, and delete — backed by a Spring Boot REST API with JPA/Hibernate ORM and a MySQL database. Spring Security handles authentication and route protection.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // SUPPORTING 3: APARTMENT MANAGEMENT OS
  // ─────────────────────────────────────────
  {
    slug: 'apartment-management-os',
    name: 'APARTMENT MANAGEMENT OS',
    subtitle: 'Apartment Operations Platform',
    description:
      'A product in active development for independent and mid-sized apartment communities — centralising resident management, maintenance, billing, complaints, and communication.',
    featured: false,
    status: 'in-development',
    pipeline: [
      'Resident Onboarding',
      'Maintenance Ticketing',
      'Billing & Finance',
      'Complaints Resolution',
      'Community Notices',
    ],
    metrics: [
      { value: 'IN DEVELOPMENT', label: 'Active Startup Build' },
      { value: '5 Modules', label: 'Operational Scope' },
      { value: 'Independent', label: 'Community Focus' },
      { value: 'Roadmap', label: 'AI Operations' },
    ],
    technologies: ['In Development'],
    github: undefined,
    demo: undefined,
    sections: [
      {
        title: 'Overview',
        content:
          'An apartment operations platform currently in active development, designed for independent and mid-sized residential communities. The goal is to centralise the fragmented operational workflows that currently run across spreadsheets, WhatsApp groups, and paper-based processes.',
      },
      {
        title: 'Current Scope',
        content:
          'The platform is being built to handle resident management (onboarding, profiles, records), maintenance request submission and tracking, billing and finance records, resident complaint submission and resolution tracking, and community announcements and communication.',
      },
      {
        title: 'Future Direction',
        content:
          'Planned future capabilities include documents and governance management, a verified vendor network and service management layer, a resident-facing services marketplace, and AI-powered operational intelligence for community managers.',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getSupportingProjects(): Project[] {
  return projects.filter((p) => !p.featured)
}

export const projectSlugs = projects.map((p) => p.slug)
