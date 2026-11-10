/*
  # Add Ibanera and update experience to 7+ years

  Adds the current remote role at Ibanera (United States, from 02/2026),
  the customer portal, Peptiva checkout widget, QuickBuy portal, and
  admin / Jumio / SQL Server database projects. Updates the profile summary
  and skill lists to match lib/fallback-data.ts.
*/

UPDATE profile
SET summary = 'Senior Full Stack Software Engineer with 7+ years of experience designing and building scalable enterprise applications, payment and identity platforms, and high-volume systems for global markets. Currently remote with a US fintech company, building the customer portal, embeddable checkout widgets, Jumio identity verification, the admin panel, and the platform database. Strong expertise in Node.js, NestJS, React.js, Next.js, React Native, and TypeScript, with hands-on experience in microservices, RESTful APIs, API gateways, event-driven systems, and real-time updates. Also experienced in Web3, DeFi, and NFT platforms, plus IT infrastructure and VoIP. Comfortable working with distributed, cross-functional, and international teams in Agile/Scrum environments.'
WHERE email = 'rashidpadda145@gmail.com';

UPDATE skills
SET skills = ARRAY['Node.js', 'NestJS', 'Express.js', '.NET', 'RESTful APIs', 'System Design', 'Microservices', 'API Gateway', 'Event-Driven Architecture', 'Redis', 'RabbitMQ', 'gRPC', 'RBAC', 'OAuth2', 'SSO', 'MongoDB', 'PostgreSQL', 'SQL Server', 'MySQL']
WHERE category = 'Backend & Architecture';

UPDATE skills
SET skills = ARRAY['Stripe Payments', 'Apple Pay', 'Google Pay', 'Jumio', 'PandaDoc API', 'SignalR', 'CI/CD Pipelines', 'GitHub Actions', 'Docker', 'Real-Time Notifications', 'Analytics & Tracking']
WHERE category IN ('Integrations & DevOps', 'Integrations & DevOps Tools');

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM experience WHERE company = 'Ibanera') THEN
    UPDATE experience SET order_index = order_index + 1;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM projects WHERE name = 'Ibanera Customer Portal') THEN
    UPDATE projects SET order_index = order_index + 4;
  END IF;
END $$;

INSERT INTO experience (title, company, location, start_date, end_date, description, achievements, order_index)
SELECT
  'Senior Full Stack Software Engineer',
  'Ibanera',
  'United States · Remote',
  '02/2026',
  NULL,
  'US fintech platform for digital banking, cards, payments, and crypto. Remote since February 2026, across the customer portal, checkout widgets, identity verification, admin tools, and the platform database.',
  ARRAY[
    'Built the Next.js customer portal for accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding, with Redux and SignalR keeping account and verification state in sync.',
    'Developed the Peptiva checkout widget in Next.js as an embeddable payment flow: email and phone verification, shipping, identity, card payment, and Apple Pay and Google Pay.',
    'Shipped the QuickBuy portal in React and Vite, and worked on its .NET API, covering crypto purchase, sign-in, multi-currency validation, and order status.',
    'Integrated Jumio identity verification across the customer portal and both widgets, including the verification iframe, status checks, and SignalR updates through manual review.',
    'Extended the React admin panel for customer review, approvals, and frozen transactions, using Redux and AG Grid.',
    'Wrote and maintained SQL Server stored procedures for QuickBuy sign-in, Jumio verification, card lifecycle, and admin customer workflows.'
  ],
  1
WHERE NOT EXISTS (SELECT 1 FROM experience WHERE company = 'Ibanera');

INSERT INTO projects (name, description, technologies, highlights, link, order_index)
SELECT
  'Ibanera Customer Portal',
  'Customer portal for a US digital banking platform: accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding.',
  ARRAY['Next.js', 'React', 'TypeScript', 'Redux', 'SignalR', 'Jumio'],
  ARRAY[
    'Built account, card, funding, and crypto flows, including pay-in, move money, card lifecycle, and transaction history.',
    'Wired Jumio identity checks into sign-in and onboarding so unverified customers finish verification before they use the portal.',
    'Used Redux and SignalR so account state and verification status stay in sync with the backend.'
  ],
  NULL,
  1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE name = 'Ibanera Customer Portal');

INSERT INTO projects (name, description, technologies, highlights, link, order_index)
SELECT
  'Peptiva Checkout Widget',
  'Embeddable Next.js checkout widget for card and wallet payments, with merchant branding and identity verification.',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Jumio', 'Apple Pay', 'Google Pay'],
  ARRAY[
    'Built checkout steps for email and phone verification, shipping, identity, card payment, and a signed embed for merchant sites.',
    'Integrated Jumio through the widget API, including desktop verification and SignalR updates while a manual review is open.',
    'Added Apple Pay and Google Pay so express checkout appears only when the currency and merchant allow it.'
  ],
  NULL,
  2
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE name = 'Peptiva Checkout Widget');

INSERT INTO projects (name, description, technologies, highlights, link, order_index)
SELECT
  'QuickBuy Portal',
  'React widget and .NET API for buying crypto, with sign-in, identity checks, and live order status.',
  ARRAY['React', 'Vite', 'Redux', '.NET', 'SignalR', 'Jumio'],
  ARRAY[
    'Built the QuickBuy flow for sign-in, asset selection, identity checks, and checkout, including Apple Pay and Google Pay.',
    'Worked on the .NET widget API for validation, verification status, currency exchange, and order lookup.'
  ],
  NULL,
  3
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE name = 'QuickBuy Portal');

INSERT INTO projects (name, description, technologies, highlights, link, order_index)
SELECT
  'Admin Panel & Platform Database',
  'Internal admin tools and the SQL Server database behind customer review, approvals, cards, and Jumio verification.',
  ARRAY['React', 'Redux', 'AG Grid', 'SQL Server', 'Jumio'],
  ARRAY[
    'Extended the admin panel for customer records, approval queues, and frozen-transaction review.',
    'Maintained stored procedures for Jumio verification updates, card status changes, and QuickBuy user checks.'
  ],
  NULL,
  4
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE name = 'Admin Panel & Platform Database');
