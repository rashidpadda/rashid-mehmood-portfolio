/*
  # Ibanera as a US digital bank, fintech title, and AI experience

  Mirrors lib/fallback-data.ts.
*/

UPDATE profile
SET
  title = 'Senior Full Stack Software Engineer',
  summary = 'Senior Full Stack Software Engineer with 7+ years of experience designing and building scalable enterprise applications, high-volume data systems, and integrated platforms for global markets. Strong expertise in Node.js, NestJS, React.js, Next.js, React Native, and TypeScript, with hands-on experience in microservices, RESTful APIs, API gateways, event-driven systems, and real-time processing. Experienced in Web3, DeFi, NFT platforms, and smart contract integrations, plus AI-assisted recruitment products and IT infrastructure. Currently remote with Ibanera, a US digital bank. Comfortable working with distributed, cross-functional, and international teams in Agile/Scrum environments.'
WHERE email = 'rashidpadda145@gmail.com';

UPDATE experience
SET
  title = 'Senior Full Stack Software Engineer',
  description = 'Full-stack fintech work for Ibanera, a US digital bank covering cards, payments, accounts, and crypto. Remote since February 2026, across the customer portal, checkout widgets, identity verification, admin tools, and the platform database.',
  achievements = ARRAY[
    'Built the Next.js customer banking portal for accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding, with Redux and SignalR keeping account and verification state in sync.',
    'Developed the Peptiva checkout widget in Next.js as an embeddable payment flow: email and phone verification, shipping, identity, card payment, and Apple Pay and Google Pay.',
    'Shipped the QuickBuy portal in React and Vite, and worked on its .NET API, covering crypto purchase, sign-in, multi-currency validation, and order status.',
    'Integrated Jumio identity verification across the customer portal and both widgets, including the verification iframe, status checks, and SignalR updates through manual review.',
    'Extended the React admin panel for customer review, approvals, and frozen transactions, using Redux and AG Grid.',
    'Wrote and maintained SQL Server stored procedures for QuickBuy sign-in, Jumio verification, card lifecycle, and admin customer workflows.'
  ]
WHERE company = 'Ibanera';

UPDATE experience
SET
  description = 'AI-driven recruitment product that automated candidate screening and interview scheduling.',
  achievements = ARRAY[
    'Built the React and Node.js product around AI-assisted candidate screening, interview scheduling, and candidate data workflows.',
    'Built responsive, cross-browser-compatible user interfaces using React.js.',
    'Developed and integrated Node.js RESTful APIs supporting interview scheduling and candidate data workflows.',
    'Managed application state using Redux and Redux Thunk for predictable and scalable state management.',
    'Implemented real-time chat and notification systems using WebSockets and SignalR, reducing response time by 60%.',
    'Collaborated in Agile teams, participating in sprint planning, daily stand-ups, and code reviews.'
  ]
WHERE company = 'Intagleo Systems';

UPDATE projects
SET description = 'Customer portal for Ibanera, a US digital bank: accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding.'
WHERE name = 'Ibanera Customer Portal';

UPDATE projects
SET
  technologies = ARRAY['React.js', 'Node.js', 'WebSockets', 'SignalR', 'AI workflows'],
  highlights = ARRAY[
    'Built the candidate and scheduling experience for an AI-driven recruitment product, including screening handoff, interview booking, and real-time chat via WebSockets and SignalR.'
  ]
WHERE name LIKE 'IntVue%';

INSERT INTO skills (category, skills)
SELECT 'AI', ARRAY['AI-driven recruitment products', 'Candidate screening workflows', 'Interview scheduling automation', 'AI product integrations']
WHERE NOT EXISTS (SELECT 1 FROM skills WHERE category = 'AI');
