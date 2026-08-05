/*
  # Sync Portfolio Content With Updated Resume

  Replaces profile/skills/experience/projects/education rows with the latest
  resume content: adds React Native mobile work to SoftBuilders, Aqary,
  Big Immersive and OFish, adds the SoftBuilders IT/networking achievements,
  and adds an "IT Infrastructure & Networking" skill category.

  NOTE: This truncates and re-inserts skills/experience/projects/education,
  and upserts the single profile row by email. If you made manual edits
  directly in the Supabase dashboard that aren't reflected in the resume,
  back them up before running this.
*/

-- PROFILE (replace the single row)
TRUNCATE profile;

INSERT INTO profile (name, title, email, phone, location, linkedin, github, summary)
VALUES (
  'Rashid Mehmood',
  'Senior Full Stack Software Engineer',
  'rashidpadda145@gmail.com',
  '+971508343662',
  'Dubai, UAE',
  'linkedin.com/in/rashid-mehmood-522411190',
  'github.com/rashidpadda',
  'Senior Full Stack Software Engineer with 6+ years of experience designing and building scalable enterprise applications, high-volume data systems, and integrated platforms for global markets. Strong expertise in Node.js, NestJS, React.js, Next.js, React Native, and TypeScript, with hands-on experience in microservices architecture, RESTful API design, API gateways, event-driven systems, data pipelines, and real-time processing. Proven track record designing system integrations, caching and messaging layers, and production-grade CI/CD pipelines for large-scale transactional and distributed systems. Experienced in Web3, DeFi, NFT platforms, and smart contract integrations, as well as IT infrastructure, network administration, and VoIP telephony systems. Comfortable working with distributed, cross-functional, and international teams in Agile/Scrum environments.'
);

-- SKILLS (replace all)
TRUNCATE skills;

INSERT INTO skills (category, skills) VALUES
('Frontend Development', ARRAY['HTML5','CSS3','Sass','CSS-in-JS (Styled Components)','Tailwind CSS','React.js','Next.js','React Native','TypeScript','JavaScript','Redux','Redux Thunk','Context API','Material-UI','Bootstrap','Web3.js','Jest','Enzyme','WebSockets','DOM Manipulation','SEO Optimization','SSR']),
('Backend & Architecture', ARRAY['Node.js','NestJS','Express.js','RESTful APIs','Microservices Architecture','API Gateway','Event-Driven Architecture','Redis','RabbitMQ','gRPC','Server-Side Rendering (SSR)','RBAC','OAuth2','SSO','MongoDB','PostgreSQL']),
('Blockchain & Web3', ARRAY['dApp Development','Smart Contracts','Ethereum','Wallet Integration','NFT Marketplaces','DeFi (Staking, Lending, Trading)','Meta Webhooks']),
('Integrations & DevOps Tools', ARRAY['Stripe Payments','PandaDoc API','CI/CD Pipelines','GitHub Actions','Docker','Real-Time Notifications','Analytics & Tracking']),
('IT Infrastructure & Networking', ARRAY['Network Administration','Shared Network Resource Configuration','IP PBX / VoIP Telephony (Grandstream)','FTP Server Administration','Email & Domain Configuration','Printer/Scanner Deployment & Management','IT Troubleshooting & Technical Support']),
('Development Practices', ARRAY['Monitoring & Logging','Agile/Scrum','Jira','Trello','Code Reviews','Performance Optimization','Debugging','Testing']);

-- EXPERIENCE (replace all)
TRUNCATE experience;

INSERT INTO experience (title, company, location, start_date, end_date, description, achievements, order_index) VALUES
(
  'Senior Full Stack Software Developer',
  'SoftBuilders Software Design LLC',
  'Business Bay, Dubai, UAE',
  '01/2024',
  NULL,
  'Web3-based staking and rewards platform built with React.js, Node.js, and MongoDB, supporting decentralized licensing, machine connectivity, and high-volume user activity.',
  ARRAY[
    'Architected and developed the core platform and admin dashboard using React.js and Node.js, supporting decentralized staking, rewards generation, and licence management.',
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
    'Provided ongoing troubleshooting and support for network connectivity, telephony, and peripheral devices, minimizing downtime for end users.'
  ],
  1
),
(
  'Full Stack Software Developer',
  'Aqary International Group',
  'Abu Dhabi, UAE',
  '12/2023',
  '01/2024',
  'Enterprise-scale proptech platform supporting property sales, rentals, and exchanges across 10+ international markets.',
  ARRAY[
    'Built core screens, navigation, and API integration for the Aqary mobile app using React Native, working largely independently to ship features end-to-end.',
    'Built a responsive, SEO-optimized web frontend using Next.js, reducing page load times by 40% and improving rendering performance by 2x.',
    'Implemented dynamic routing, advanced search, and responsive UI components for property listings, applying SSR and SEO best practices across the platform.',
    'Designed and implemented scalable Node.js REST APIs for property listings, user management, search, and transactional workflows, shared across the Next.js web app and the React Native mobile app.',
    'Increased user engagement by 25% and conversion rates by 15% through performance and UX improvements.',
    'Applied code splitting and lazy loading techniques, reducing bounce rates by 18% and increasing average session duration.',
    'Integrated user behavior tracking and funnel analytics to enable data-driven targeting and conversion optimization.'
  ],
  2
),
(
  'Full Stack Software Developer',
  'Big Immersive',
  'Lahore, Pakistan',
  '02/2021',
  '2023',
  'NFT marketplace and Web3 dashboard managing 10,000+ users and 50,000+ blockchain transactions per month.',
  ARRAY[
    'Contributed to a React Native mobile app for the Virtua NFT marketplace, building browsing, trading, and wallet features as part of a cross-functional team.',
    'Developed secure Web3 trading features by integrating Ethereum smart contracts with a Node.js backend and Web3.js.',
    'Increased transaction volume by 40% while reducing transaction failures by 30%.',
    'Implemented Single Sign-On (SSO) across React frontend and Node.js services for seamless multi-platform authentication.',
    'Integrated Stripe payment processing, reducing payment errors by 25% and increasing successful transactions by 35%.',
    'Optimized frontend performance and enhanced UI scalability for NFT drops and high-traffic events.'
  ],
  3
),
(
  'Software Developer',
  'Intagleo Systems',
  'Lahore, Pakistan',
  '04/2019',
  '2021',
  'AI-driven recruitment solution automating candidate screening and interview scheduling.',
  ARRAY[
    'Built responsive, cross-browser-compatible user interfaces using React.js.',
    'Developed and integrated Node.js RESTful APIs supporting interview scheduling and candidate data workflows.',
    'Managed application state using Redux and Redux Thunk for predictable and scalable state management.',
    'Implemented real-time chat and notification systems using WebSockets and SignalR, reducing response time by 60%.',
    'Collaborated in Agile teams, participating in sprint planning, daily stand-ups, and code reviews.'
  ],
  4
);

-- PROJECTS (replace all)
TRUNCATE projects;

INSERT INTO projects (name, description, technologies, highlights, link, order_index) VALUES
(
  'Homnifi',
  'Enterprise-grade Web3 and DeFi ecosystem delivering staking, rewards, licensing, and machine-integrated blockchain services.',
  ARRAY['React.js','Node.js','MongoDB','Microservices','Redis','RabbitMQ'],
  ARRAY[
    'Led end-to-end development of a scalable Full Stack architecture using React.js, Node.js, MongoDB, and microservices.',
    'Designed and implemented staking, rewards, and license-based incentive modules tightly integrated with blockchain smart contracts.',
    'Built and maintained a centralized API Gateway handling authentication, authorization, routing, throttling, and service orchestration.',
    'Developed secure wallet, user, and token management services with role-based access control (RBAC).',
    'Optimized backend performance to support high user concurrency using Redis caching, RabbitMQ messaging, and batch processing.',
    'Delivered real-time admin dashboards for monitoring users, rewards, system health, and blockchain activity.'
  ],
  'https://homnifi.com',
  1
),
(
  'Al Farm',
  'Decentralized Web3 platform enabling wallet operations, staking, referrals, and asset resale through smart contracts.',
  ARRAY['Node.js','PostgreSQL','Docker','Smart Contracts'],
  ARRAY[
    'Designed and deployed scalable microservices using Node.js, PostgreSQL, and Docker to support wallet, staking, and reward workflows.',
    'Implemented secure wallet features including debit, credit, token swaps, and real-time balance updates.',
    'Built referral-based incentive and buyback systems with smart contract integration for secondary marketplace reselling.',
    'Developed a comprehensive admin panel for managing users, wallets, products, referrals, and permissions.',
    'Established CI/CD pipelines and enforced clean-code practices to ensure reliability, security, and maintainability.'
  ],
  'https://app.aifarm.network/auth/login',
  2
),
(
  'Aqary Dashboard',
  'Large-scale proptech platform supporting property sales, rentals, financing, and user management across global markets.',
  ARRAY['Next.js','Node.js','SSR','SEO'],
  ARRAY[
    'Developed and optimized a high-performance frontend using Next.js with SSR and SEO best practices.',
    'Implemented dynamic routing, advanced search, and responsive UI components for property listings.',
    'Integrated frontend with Node.js REST APIs supporting listings, user profiles, transactions, and analytics.',
    'Improved page load speed, SEO rankings, and user engagement through code splitting and lazy loading.'
  ],
  'https://aqaryaid.com/en',
  3
),
(
  'Virtua Marketplace',
  'NFT marketplace and digital asset trading platform supporting high-volume blockchain transactions.',
  ARRAY['React.js','Node.js','Web3.js','Stripe'],
  ARRAY[
    'Built Full-Stack features using React.js, Node.js, and Web3.js to support NFT drops, trading, and user profiles.',
    'Integrated Ethereum-based smart contracts ensuring secure ownership, traceability, and dispute reduction.',
    'Implemented Stripe payment processing for fiat-to-crypto transactions and digital asset purchases.',
    'Optimized frontend and backend performance to support peak traffic during NFT launches.'
  ],
  'https://marketplace.virtua.com',
  4
),
(
  'OFish - CRM-Based Admin & Accounts Web Client Portal',
  'CRM platform for managing end-users, business users, IoT device registrations, and company profiles across an Admin Portal and Accounts Web Portal.',
  ARRAY['React.js','React Native','Node.js','IoT'],
  ARRAY[
    'Built a React Native app for end-user IoT device control, plus account management features for the web portals.',
    'Developed and enhanced CRM modules for user, business entity, and role-based access management.',
    'Implemented IoT device registration and management workflows across multiple organizations.',
    'Built account and profile management features for web portals and mobile-connected systems.',
    'Developed APIs and workflows for IoT device control and environment management.',
    'Improved usability and customer workflows across device and organization management systems.'
  ],
  NULL,
  5
),
(
  'IntVue - Automated Recruitment Software',
  'AI-driven recruitment platform automating candidate screening and interview scheduling.',
  ARRAY['React.js','Node.js','WebSockets','SignalR'],
  ARRAY[
    'Developed responsive React.js interfaces ensuring cross-browser compatibility and modern UX standards.',
    'Built Node.js RESTful APIs for candidate management, scheduling workflows, and system integrations.',
    'Implemented real-time chat and notification systems using WebSockets and SignalR.',
    'Improved platform responsiveness, maintainability, and scalability through iterative optimization and testing.'
  ],
  'https://intvue.com/',
  6
);

-- EDUCATION (replace all)
TRUNCATE education;

INSERT INTO education (institution, degree, location, start_date, end_date) VALUES
('University of Narowal', 'Bachelor of Computer Science', 'Narowal, Pakistan', '03/2015', '09/2019');
