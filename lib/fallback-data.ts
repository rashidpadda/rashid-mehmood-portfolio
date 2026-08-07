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
    'Senior Full Stack Software Engineer with 6+ years of experience designing and building scalable enterprise applications, high-volume data systems, and integrated platforms for global markets. Strong expertise in Node.js, NestJS, React.js, Next.js, React Native, and TypeScript, with hands-on experience in microservices architecture, RESTful API design, API gateways, event-driven systems, data pipelines, and real-time processing. Proven track record designing system integrations, caching and messaging layers, and production-grade CI/CD pipelines for large-scale transactional and distributed systems. Experienced in Web3, DeFi, NFT platforms, and smart contract integrations, as well as IT infrastructure, network administration, and VoIP telephony systems. Comfortable working with distributed, cross-functional, and international teams in Agile/Scrum environments.',
};

export const fallbackSkills: Skill[] = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Sass', 'Styled Components', 'Tailwind CSS', 'React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Redux Thunk', 'Context API', 'Material-UI', 'Bootstrap', 'Web3.js', 'Jest', 'Enzyme', 'WebSockets', 'SEO', 'SSR'],
  },
  {
    id: 'backend',
    category: 'Backend & Architecture',
    skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'System Design', 'Microservices', 'API Gateway', 'Event-Driven Architecture', 'Redis', 'RabbitMQ', 'gRPC', 'RBAC', 'OAuth2', 'SSO', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'blockchain',
    category: 'Blockchain & Web3',
    skills: ['dApp Development', 'Smart Contracts', 'Ethereum', 'Wallet Integration', 'NFT Marketplaces', 'DeFi (Staking, Lending, Trading)', 'Meta Webhooks'],
  },
  {
    id: 'integrations',
    category: 'Integrations & DevOps',
    skills: ['Stripe Payments', 'PandaDoc API', 'CI/CD Pipelines', 'GitHub Actions', 'Docker', 'Real-Time Notifications', 'Analytics & Tracking'],
  },
  {
    id: 'networking',
    category: 'IT Infrastructure & Networking',
    skills: ['Network Administration', 'Shared Network Resources', 'IP PBX / VoIP (Grandstream)', 'FTP Server Administration', 'Email & Domain Configuration', 'Printer/Scanner Deployment', 'IT Troubleshooting & Support'],
  },
  {
    id: 'practices',
    category: 'Practices',
    skills: ['Agile/Scrum', 'Jira', 'Trello', 'Code Reviews', 'Performance Optimization', 'Debugging', 'Testing', 'Monitoring & Logging'],
  },
];

export const fallbackExperience: Experience[] = [
  {
    id: 'softbuilders',
    title: 'Senior Full Stack Software Developer',
    company: 'SoftBuilders Software Design LLC',
    location: 'Business Bay, Dubai, UAE',
    start_date: '01/2024',
    end_date: undefined,
    description: 'Web3-based staking and rewards platform built with React.js, Node.js, and MongoDB, supporting decentralized licensing, machine connectivity, and high-volume user activity.',
    achievements: [
      'Architected and developed the core platform and admin dashboard using React.js and Node.js, supporting decentralized staking, rewards generation, and licence management.',
      "Owned system design for the platform's NestJS-based microservices, defining service boundaries, data flow, and scalability strategy across staking, rewards, and licensing services.",
      'Gained experience building enterprise asset-centric platforms involving equipment management, licensing, machine connectivity, and operational workflows.',
      'Designed and implemented RESTful APIs and microservices that manage assets, users, permissions, workflows, and system events, aligning with Maximo-style backend architectures.',
      'Designed and maintained a centralized API Gateway for routing, authentication, authorization, and rate limiting across distributed microservices.',
      'Built scalable microservices for high-volume data processing and real-time workflows, improving system reliability and performance under high user concurrency.',
      'Designed and implemented data processing pipelines for handling large-scale transactional data, including validation, transformation, and integration across services.',
      'Developed modular React UI components for enterprise, asset-centric dashboards.',
      'Implemented Redis caching, RabbitMQ messaging, webhooks, and batch processing to support millions of transactions and users.',
      'Developed role-based access control (RBAC) dashboards with real-time data visualization and multi-level permissions.',
      'Integrated PandaDoc API to automate user onboarding and digital contract signing workflows.',
      'Configured ESLint and Prettier to enforce code quality and maintainability.',
      'Configured and maintained shared network resources across internal computers, enabling seamless file sharing and centralized resource access for all staff.',
      'Set up and administered an internal IP PBX telephony system using Grandstream, enabling reliable internal and external voice communication across the organization.',
      'Deployed and managed networked printers and scanners, configuring shared access for multiple departments and reducing hardware duplication costs.',
      'Configured and maintained FTP server access for internal users, enabling secure file transfer and centralized document storage across teams.',
      'Set up and managed email accounts and configurations for internal users, ensuring reliable communication and proper mailbox/domain configuration.',
      'Provided ongoing troubleshooting and support for network connectivity, telephony, and peripheral devices, minimizing downtime for end users.',
    ],
    order_index: 1,
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
      'Built core screens, navigation, and API integration for the Aqary mobile app using React Native, working largely independently to ship features end-to-end.',
      'Built a responsive, SEO-optimized web frontend using Next.js, reducing page load times by 40% and improving rendering performance by 2x.',
      'Implemented dynamic routing, advanced search, and responsive UI components for property listings, applying SSR and SEO best practices across the platform.',
      'Designed and implemented scalable Node.js REST APIs for property listings, user management, search, and transactional workflows, shared across the Next.js web app and the React Native mobile app.',
      'Increased user engagement by 25% and conversion rates by 15% through performance and UX improvements.',
      'Applied code splitting and lazy loading techniques, reducing bounce rates by 18% and increasing average session duration.',
      'Integrated user behavior tracking and funnel analytics to enable data-driven targeting and conversion optimization.',
    ],
    order_index: 2,
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
      'Contributed to a React Native mobile app for the Virtua NFT marketplace, building browsing, trading, and wallet features as part of a cross-functional team.',
      'Developed secure Web3 trading features by integrating Ethereum smart contracts with a Node.js backend and Web3.js.',
      'Increased transaction volume by 40% while reducing transaction failures by 30%.',
      'Implemented Single Sign-On (SSO) across React frontend and Node.js services for seamless multi-platform authentication.',
      'Integrated Stripe payment processing, reducing payment errors by 25% and increasing successful transactions by 35%.',
      'Optimized frontend performance and enhanced UI scalability for NFT drops and high-traffic events.',
    ],
    order_index: 3,
  },
  {
    id: 'intagleo',
    title: 'Software Developer',
    company: 'Intagleo Systems',
    location: 'Lahore, Pakistan',
    start_date: '04/2019',
    end_date: '2021',
    description: 'AI-driven recruitment solution automating candidate screening and interview scheduling.',
    achievements: [
      'Built responsive, cross-browser-compatible user interfaces using React.js.',
      'Developed and integrated Node.js RESTful APIs supporting interview scheduling and candidate data workflows.',
      'Managed application state using Redux and Redux Thunk for predictable and scalable state management.',
      'Implemented real-time chat and notification systems using WebSockets and SignalR, reducing response time by 60%.',
      'Collaborated in Agile teams, participating in sprint planning, daily stand-ups, and code reviews.',
    ],
    order_index: 4,
  },
];

export const fallbackProjects: Project[] = [
  {
    id: 'homnifi',
    name: 'Homnifi',
    description: 'Enterprise-grade Web3 and DeFi ecosystem delivering staking, rewards, licensing, and machine-integrated blockchain services.',
    technologies: ['React.js', 'NestJS', 'MongoDB', 'Microservices', 'Redis', 'RabbitMQ'],
    highlights: [
      'Led end-to-end development of a scalable Full Stack architecture with a centralized API Gateway handling auth, routing, throttling, and service orchestration.',
      "Owned system design for the platform — defining service boundaries, data flow, and scalability strategy across staking, rewards, and licensing microservices.",
      'Designed staking, rewards, and license-based incentive modules tightly integrated with blockchain smart contracts.',
      'Optimized backend performance for high user concurrency using Redis caching, RabbitMQ messaging, and batch processing.',
    ],
    link: 'https://homnifi.com',
    order_index: 1,
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
    order_index: 2,
  },
  {
    id: 'aqarydash',
    name: 'Aqary Dashboard',
    description: 'Large-scale proptech platform supporting property sales, rentals, financing, and user management across global markets.',
    technologies: ['Next.js', 'SSR', 'SEO', 'Node.js'],
    highlights: [
      'Developed and optimized a high-performance frontend using Next.js with SSR and SEO best practices, plus dynamic routing and advanced search.',
      'Improved page load speed, SEO rankings, and user engagement through code splitting and lazy loading.',
    ],
    link: 'https://aqaryaid.com/en',
    order_index: 3,
  },
  {
    id: 'virtua',
    name: 'Virtua Marketplace',
    description: 'NFT marketplace and digital asset trading platform supporting high-volume blockchain transactions.',
    technologies: ['React.js', 'Node.js', 'Web3.js', 'Stripe'],
    highlights: [
      'Integrated Ethereum-based smart contracts ensuring secure ownership, traceability, and dispute reduction.',
      'Implemented Stripe payment processing for fiat-to-crypto transactions and optimized performance for peak NFT launch traffic.',
    ],
    link: 'https://marketplace.virtua.com',
    order_index: 4,
  },
  {
    id: 'ofish',
    name: 'OFish — CRM Admin & Accounts Portal',
    description: 'CRM platform managing end-users, business users, IoT device registrations, and company profiles.',
    technologies: ['React.js', 'React Native', 'Node.js', 'IoT'],
    highlights: [
      'Built a React Native app for end-user IoT device control, plus CRM modules for role-based access and multi-organization IoT device management.',
    ],
    link: undefined,
    order_index: 5,
  },
  {
    id: 'intvue',
    name: 'IntVue — Automated Recruitment Software',
    description: 'AI-driven recruitment platform automating candidate screening and interview scheduling.',
    technologies: ['React.js', 'Node.js', 'WebSockets', 'SignalR'],
    highlights: [
      'Built responsive React.js interfaces and Node.js RESTful APIs for candidate management and scheduling, with real-time chat via WebSockets and SignalR.',
    ],
    link: 'https://intvue.com/',
    order_index: 6,
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
