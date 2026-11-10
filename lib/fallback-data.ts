import type { Profile, Skill, Experience, Project, Education } from './supabase';

/**
 * Used only when NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
 * aren't configured (e.g. local dev without credentials), so the site still
 * renders instead of crashing. Mirrors supabase/migrations/20260803000000_update_resume_content.sql —
 * keep the two in sync.
 */

export const fallbackProfile: Profile = {
  id: 'local-fallback',
  name: 'Rashid Mehmood',
  title: 'Senior Full Stack Software Engineer',
  email: 'rashidpadda145@gmail.com',
  phone: '+971508343662',
  location: 'Dubai, UAE',
  linkedin: 'linkedin.com/in/rashid-mehmood-522411190',
  github: 'github.com/rashidpadda',
  summary:
    'I build the product a person uses and the service behind it. Right now that is Ibanera: accounts, checkout, crypto purchase, and the admin desk. Before that, staking platforms, a property marketplace, an NFT exchange, and recruitment software.',
};

export const fallbackSkills: Skill[] = [
  {
    id: 'backend',
    category: 'Backend & Architecture',
    skills: ['Node.js', 'NestJS', 'Express.js', '.NET', 'RESTful APIs', 'System Design', 'Microservices', 'API Gateway', 'Event-Driven Architecture', 'Redis', 'RabbitMQ', 'gRPC', 'RBAC', 'OAuth2', 'SSO', 'MongoDB', 'PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Sass', 'Styled Components', 'Tailwind CSS', 'React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Redux Thunk', 'Context API', 'Material-UI', 'Bootstrap', 'Web3.js', 'Jest', 'Enzyme', 'WebSockets', 'SEO', 'SSR'],
  },
  {
    id: 'blockchain',
    category: 'Blockchain & Web3',
    skills: ['dApp Development', 'Smart Contracts', 'Ethereum', 'Wallet Integration', 'NFT Marketplaces', 'DeFi (Staking, Lending, Trading)', 'Meta Webhooks'],
  },
  {
    id: 'integrations',
    category: 'Integrations & DevOps',
    skills: ['Stripe Payments', 'Apple Pay', 'Google Pay', 'Jumio', 'PandaDoc API', 'SignalR', 'CI/CD Pipelines', 'GitHub Actions', 'Docker', 'Real-Time Notifications', 'Analytics & Tracking'],
  },
  {
    id: 'networking',
    category: 'IT Infrastructure & Networking',
    skills: ['Network Administration', 'Shared Network Resources', 'IP PBX / VoIP (Grandstream)', 'FTP Server Administration', 'Email & Domain Configuration', 'Printer/Scanner Deployment', 'IT Troubleshooting & Support'],
  },
  {
    id: 'ai',
    category: 'AI',
    skills: ['AI-driven recruitment products', 'Candidate screening workflows', 'Interview scheduling automation', 'AI product integrations'],
  },
  {
    id: 'practices',
    category: 'Practices',
    skills: ['Agile/Scrum', 'Jira', 'Trello', 'Code Reviews', 'Performance Optimization', 'Debugging', 'Testing', 'Monitoring & Logging'],
  },
];

export const fallbackExperience: Experience[] = [
  {
    id: 'ibanera',
    title: 'Senior Full Stack Software Engineer',
    company: 'Ibanera',
    location: 'United States · Remote',
    start_date: '02/2026',
    end_date: undefined,
    description:
      'Accounts, checkout, crypto purchase, and the admin desk behind them.',
    achievements: [
      'Built the Next.js customer portal for accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding, with Redux and SignalR keeping account and verification state in sync.',
      'Developed the Peptiva checkout widget as an embeddable Next.js payment flow: email and phone verification, shipping, card payment, Apple Pay, and Google Pay.',
      'Shipped the QuickBuy portal in React and Vite, and its .NET API, for crypto purchase, sign-in, multi-currency validation, and order status.',
      'Integrated Jumio across the customer portal, Peptiva, and QuickBuy, including the verification iframe, status checks, and SignalR updates through manual review.',
      'Extended the React admin panel for customer review, approvals, and frozen transactions, and maintained the SQL Server procedures for verification, card lifecycle, and QuickBuy sign-in.',
    ],
    order_index: 1,
  },
  {
    id: 'softbuilders',
    title: 'Senior Full Stack Software Developer',
    company: 'SoftBuilders Software Design LLC',
    location: 'Business Bay, Dubai, UAE',
    start_date: '01/2024',
    end_date: '02/2026',
    description: 'Staking, rewards, and licensing, and the services those products share.',
    achievements: [
      'Built the React.js and NestJS platform and admin dashboard for decentralized staking, rewards, licence management, and machine connectivity.',
      'Designed the NestJS services, REST APIs, and API gateway for routing, authentication, authorization, and rate limiting across staking, rewards, and licensing.',
      'Added Redis, RabbitMQ, webhooks, and batch processing for high-volume transactions, plus RBAC dashboards with multi-level permissions.',
      'Integrated PandaDoc so onboarding includes digital contract signing.',
      'Administered internal IT: shared network resources, a Grandstream IP PBX, FTP, email and domain accounts, and shared printers and scanners.',
    ],
    order_index: 2,
  },
  {
    id: 'aqary',
    title: 'Full Stack Software Developer',
    company: 'Aqary International Group',
    location: 'Abu Dhabi, UAE',
    start_date: '12/2023',
    end_date: '01/2024',
    description: 'Property sales, rentals, and exchanges, on the web and on mobile.',
    achievements: [
      'Built the React Native app end to end, including core screens, navigation, and API integration.',
      'Shipped the Next.js frontend with SSR, SEO, dynamic routing, and advanced search for property listings.',
      'Designed the Node.js APIs for listings, users, search, and transactions, shared by the web app and the mobile app.',
      'Cut page load times by 40% and improved rendering by 2x with code splitting and lazy loading. Engagement rose 25%, conversion 15%, and bounce fell 18%.',
      'Added user behavior tracking and funnel analytics for targeting and conversion.',
    ],
    order_index: 3,
  },
  {
    id: 'bigimmersive',
    title: 'Full Stack Software Developer',
    company: 'Big Immersive',
    location: 'Lahore, Pakistan',
    start_date: '02/2021',
    end_date: '2023',
    description: 'An NFT marketplace, from the contract layer through card checkout.',
    achievements: [
      'Built browsing, trading, and wallet features in the React Native app for the Virtua NFT marketplace.',
      'Integrated Ethereum smart contracts with a Node.js backend and Web3.js. Transaction volume rose 40% and failures fell 30%.',
      'Added single sign-on across the React app and Node.js services.',
      'Integrated Stripe payments, cutting payment errors by 25% and raising successful transactions by 35%.',
    ],
    order_index: 4,
  },
  {
    id: 'intagleo',
    title: 'Software Developer',
    company: 'Intagleo Systems',
    location: 'Lahore, Pakistan',
    start_date: '04/2019',
    end_date: '2021',
    description: 'Screening candidates and booking their interviews.',
    achievements: [
      'Built the React and Node.js product for AI-assisted candidate screening, interview scheduling, and candidate workflows, with Redux for application state.',
      'Implemented real-time chat and notifications with WebSockets and SignalR, reducing response time by 60%.',
    ],
    order_index: 5,
  },
];

export const fallbackProjects: Project[] = [
  {
    id: 'ibanera-customer',
    name: 'Customer portal',
    description:
      'A customer signs in, finishes an identity check, and then sees accounts, cards, wallets, and transfers.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'SignalR', 'Jumio'],
    highlights: [
      'I built the Next.js portal. Redux keeps the account, and SignalR updates it when verification or a balance changes on the server. Jumio sits in sign-in, so that check finishes before the rest of the portal opens.',
    ],
    link: 'https://customer.ibanera.com/',
    order_index: 1,
  },
  {
    id: 'quickbuy',
    name: 'QuickBuy',
    description:
      'A buyer picks a crypto asset, signs in, and pays inside a widget. The .NET API checks the order, the identity status, and the exchange rate.',
    technologies: ['React', 'Vite', 'Redux', '.NET', 'SignalR', 'Jumio'],
    highlights: [
      'I built the React and Vite widget, including Apple Pay and Google Pay, and worked on the API it calls.',
    ],
    link: 'https://portl.ibanera.com/',
    order_index: 2,
  },
  {
    id: 'ibanera-admin',
    name: 'Ibanera Admin',
    description:
      'The desk where staff review customers, approvals, and transactions that have been frozen.',
    technologies: ['React', 'Redux', 'AG Grid', 'SQL Server', 'Jumio'],
    highlights: [
      'I extended the React admin for those queues, and the SQL Server procedures that store Jumio results, card status changes, and QuickBuy sign-in checks.',
    ],
    link: 'https://admin.ibanera.com/',
    order_index: 3,
  },
  {
    id: 'peptiva',
    name: 'Peptiva checkout',
    description:
      'Checkout a merchant can place on their own site. The buyer confirms an email and a phone number, adds shipping, and pays by card, Apple Pay, or Google Pay.',
    technologies: ['Next.js', 'TypeScript', 'SignalR', 'Jumio', 'Apple Pay', 'Google Pay'],
    highlights: [
      'The widget and its API share one verification path. Jumio can stay open during a manual review, and SignalR tells the widget when that review moves.',
    ],
    link: undefined,
    order_index: 4,
  },
  {
    id: 'homnifi',
    name: 'Homnifi',
    description:
      'Staking, rewards, and licensing for connected machines. I designed the NestJS services and the API gateway, with Redis and RabbitMQ on the heavy paths.',
    technologies: ['NestJS', 'MongoDB', 'Redis', 'RabbitMQ', 'React.js'],
    highlights: [],
    link: 'https://homnifi.com',
    order_index: 5,
  },
  {
    id: 'alfarm',
    name: 'AI Farm',
    description:
      'Wallets, staking, referrals, and resale. NestJS services cover balances, swaps, and the buyback path.',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'Smart Contracts'],
    highlights: [],
    link: 'https://app.aifarm.network/auth/login',
    order_index: 6,
  },
  {
    id: 'aqarydash',
    name: 'Aqary',
    description:
      'Listings for sales, rentals, and exchanges. One Node.js API serves the Next.js site and the React Native app. Splitting and lazy loading cut page load by about 40% and made rendering about twice as fast.',
    technologies: ['Node.js', 'Next.js', 'React Native'],
    highlights: [],
    link: 'https://aqaryaid.com/en',
    order_index: 7,
  },
  {
    id: 'virtua',
    name: 'Virtua',
    description:
      'An NFT marketplace for browsing, trading, and wallets. Node.js and Web3.js handle ownership and trades, and Stripe takes the card payment. Transaction volume rose about 40%, and failures fell about 30%.',
    technologies: ['Node.js', 'Web3.js', 'Stripe', 'React.js'],
    highlights: [],
    link: 'https://marketplace.virtua.com',
    order_index: 8,
  },
  {
    id: 'ofish',
    name: 'OFish',
    description:
      'A CRM for companies registering IoT devices. Node.js covers roles and company profiles. The React Native app is how a person controls a device.',
    technologies: ['Node.js', 'React Native', 'React.js'],
    highlights: [],
    link: undefined,
    order_index: 9,
  },
  {
    id: 'intvue',
    name: 'IntVue',
    description:
      'Software that screens candidates and books interviews. I built the Node.js API and the React client. Chat runs on WebSockets and SignalR.',
    technologies: ['Node.js', 'React.js', 'WebSockets', 'SignalR'],
    highlights: [],
    link: 'https://intvue.com/',
    order_index: 10,
  },
  {
    id: 'erp',
    name: 'ERP',
    description:
      'One workspace for a company\'s operations, from HR and finance through manufacturing and logistics. People sign in with an employee ID or a passkey.',
    technologies: [],
    highlights: [
      'Human Resources — Attendance, Leave, Onboarding',
      'PPM — Gantt, Task Board, Milestones',
      'Procurement — MR, RFQ, PO, GRN',
      'Inventory & Store — Stock, Transfers, Barcode',
      'Payroll — Salary, WPS, Tax Slips',
      'Finance GL — Journal, Chart of Accounts',
      'Finance AP — Supplier Invoices, Payments',
      'Finance AR — Customer Invoices, Receipts',
      'Estimation — BOQ, Quotations, AI Validation',
      'IT Management — Assets, Tickets, RDP Access',
      'Transport — Fleet, Trips, Drivers',
      'Geofencing — Site Check-in, Location Rules',
      'Manufacturing — Costing, Lots, Fabrication',
      'Workflow & Approvals — Digital Sign-off, Escalations',
      'Documentation — Drawings, Submittals, Specs',
      'Analytics — KPIs, Dashboards, Reports',
      'Barcode / QR — Asset & Inventory Scanning',
      'Fixed Assets — Depreciation, Tracking',
    ],
    link: 'https://qios.ae/login',
    order_index: 11,
  },
];

export const fallbackEducation: Education[] = [
  {
    id: 'narowal',
    institution: 'University of Narowal',
    degree: 'Bachelor of Computer Science',
    location: 'Narowal, Pakistan',
    start_date: '03/2015',
    end_date: '09/2019',
  },
];
