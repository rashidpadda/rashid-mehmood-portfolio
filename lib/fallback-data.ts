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
    'Senior Full Stack Software Engineer with 7+ years of experience designing and building scalable enterprise applications, high-volume data systems, and integrated platforms for global markets. Strong expertise in Node.js, NestJS, React.js, Next.js, React Native, and TypeScript, with hands-on experience in microservices, RESTful APIs, API gateways, event-driven systems, and real-time processing. Experienced in Web3, DeFi, NFT platforms, and smart contract integrations, plus AI-assisted recruitment products and IT infrastructure. Currently remote with Ibanera, a US digital bank. Comfortable working with distributed, cross-functional, and international teams in Agile/Scrum environments.',
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
      'Full-stack engineering for Ibanera, a US digital bank covering cards, payments, accounts, and crypto.',
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
    end_date: undefined,
    description: 'Web3-based staking and rewards platform built with React.js, NestJS, and MongoDB, supporting decentralized licensing, machine connectivity, and high-volume user activity.',
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
    description: 'Enterprise-scale proptech platform supporting property sales, rentals, and exchanges across 10+ international markets.',
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
    description: 'NFT marketplace and Web3 dashboard managing 10,000+ users and 50,000+ blockchain transactions per month.',
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
    description: 'AI-driven recruitment product that automated candidate screening and interview scheduling.',
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
    name: 'Ibanera Customer Portal',
    description:
      'Customer portal for Ibanera, a US digital bank, kept in sync with account, card, wallet, and verification services.',
    technologies: ['SignalR', 'Jumio', 'Next.js', 'TypeScript', 'Redux'],
    highlights: [
      'Connected the portal to account, card, funding, and crypto services, including pay-in, move money, card lifecycle, and transaction history.',
      'Wired Jumio into sign-in and onboarding so unverified customers finish verification before they use the portal.',
      'Kept account and verification state in sync through Redux and SignalR updates from the backend.',
    ],
    link: undefined,
    order_index: 1,
  },
  {
    id: 'peptiva',
    name: 'Peptiva Checkout Widget',
    description:
      'Embeddable checkout widget and widget API for card and wallet payments, with merchant branding and identity verification.',
    technologies: ['SignalR', 'Jumio', 'Apple Pay', 'Google Pay', 'Next.js', 'TypeScript'],
    highlights: [
      'Integrated Jumio through the widget API, including desktop verification and SignalR updates while a manual review is open.',
      'Built the checkout flow for email and phone verification, shipping, identity, card payment, and a signed embed for merchant sites.',
      'Added Apple Pay and Google Pay so express checkout appears only when the currency and merchant allow it.',
    ],
    link: undefined,
    order_index: 2,
  },
  {
    id: 'quickbuy',
    name: 'QuickBuy Portal',
    description:
      'React widget and .NET API for buying crypto, with sign-in, identity checks, and live order status.',
    technologies: ['.NET', 'SignalR', 'Jumio', 'React', 'Vite', 'Redux'],
    highlights: [
      'Worked on the .NET widget API for validation, verification status, currency exchange, and order lookup.',
      'Built the QuickBuy flow for sign-in, asset selection, identity checks, and checkout, including Apple Pay and Google Pay.',
    ],
    link: undefined,
    order_index: 3,
  },
  {
    id: 'ibanera-admin',
    name: 'Admin Panel & Platform Database',
    description:
      'Internal admin tools and the SQL Server database behind customer review, approvals, cards, and Jumio verification.',
    technologies: ['SQL Server', 'Jumio', 'React', 'Redux', 'AG Grid'],
    highlights: [
      'Maintained stored procedures for Jumio verification updates, card status changes, and QuickBuy user checks.',
      'Extended the admin panel for customer records, approval queues, and frozen-transaction review.',
    ],
    link: undefined,
    order_index: 4,
  },
  {
    id: 'homnifi',
    name: 'Homnifi',
    description: 'Enterprise-grade Web3 and DeFi ecosystem delivering staking, rewards, licensing, and machine-integrated blockchain services.',
    technologies: ['NestJS', 'MongoDB', 'Redis', 'RabbitMQ', 'Microservices', 'React.js'],
    highlights: [
      'Led end-to-end development of a scalable Full Stack architecture with a centralized API Gateway handling auth, routing, throttling, and service orchestration.',
      "Owned system design for the platform — defining service boundaries, data flow, and scalability strategy across staking, rewards, and licensing microservices.",
      'Designed staking, rewards, and license-based incentive modules tightly integrated with blockchain smart contracts.',
      'Optimized backend performance for high user concurrency using Redis caching, RabbitMQ messaging, and batch processing.',
    ],
    link: 'https://homnifi.com',
    order_index: 5,
  },
  {
    id: 'alfarm',
    name: 'AI Farm',
    description: 'Decentralized Web3 platform enabling wallet operations, staking, referrals, and asset resale through smart contracts.',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'Smart Contracts'],
    highlights: [
      'Designed and deployed scalable microservices using NestJS to support wallet, staking, and reward workflows, including debit, credit, token swaps, and real-time balance updates.',
      "Applied NestJS's modular, dependency-injection-based architecture to keep wallet, staking, and referral services independently testable and maintainable.",
      'Built referral-based incentive and buyback systems with smart contract integration for secondary marketplace reselling.',
    ],
    link: 'https://app.aifarm.network/auth/login',
    order_index: 6,
  },
  {
    id: 'aqarydash',
    name: 'Aqary Dashboard',
    description: 'Large-scale proptech platform supporting property sales, rentals, financing, and user management across global markets.',
    technologies: ['Node.js', 'Next.js', 'SSR', 'SEO'],
    highlights: [
      'Designed Node.js REST APIs for listings, users, search, and transactions, shared by the web app and the mobile app.',
      'Built the Next.js frontend with SSR, SEO, dynamic routing, and advanced search, and cut load time with code splitting and lazy loading.',
    ],
    link: 'https://aqaryaid.com/en',
    order_index: 7,
  },
  {
    id: 'virtua',
    name: 'Virtua Marketplace',
    description: 'NFT marketplace and digital asset trading platform supporting high-volume blockchain transactions.',
    technologies: ['Node.js', 'Web3.js', 'Stripe', 'React.js'],
    highlights: [
      'Integrated Ethereum smart contracts with the Node.js backend and Web3.js for ownership and trading.',
      'Added Stripe for fiat-to-crypto checkout and tuned the service for peak NFT launch traffic.',
    ],
    link: 'https://marketplace.virtua.com',
    order_index: 8,
  },
  {
    id: 'ofish',
    name: 'OFish — CRM Admin & Accounts Portal',
    description: 'CRM platform managing end-users, business users, IoT device registrations, and company profiles.',
    technologies: ['Node.js', 'React Native', 'React.js', 'IoT'],
    highlights: [
      'Built Node.js CRM modules for role-based access, company profiles, and multi-organization IoT device registration.',
      'Shipped the React Native app for end-user IoT device control.',
    ],
    link: undefined,
    order_index: 9,
  },
  {
    id: 'intvue',
    name: 'IntVue — Automated Recruitment Software',
    description: 'AI-driven recruitment platform automating candidate screening and interview scheduling.',
    technologies: ['Node.js', 'SignalR', 'WebSockets', 'React.js', 'AI workflows'],
    highlights: [
      'Built Node.js APIs and the React client for AI-assisted screening, interview booking, and candidate handoff.',
      'Added real-time chat with WebSockets and SignalR.',
    ],
    link: 'https://intvue.com/',
    order_index: 10,
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
