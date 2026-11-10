/*
  # Balance project cards toward full stack

  Mirrors lib/fallback-data.ts. Each card names the service or data work
  alongside the client.
*/

UPDATE projects
SET
  description = 'Customer portal for Ibanera, a US digital bank, kept in sync with account, card, wallet, and verification services.',
  technologies = ARRAY['SignalR', 'Jumio', 'Next.js', 'TypeScript', 'Redux'],
  highlights = ARRAY[
    'Connected the portal to account, card, funding, and crypto services, including pay-in, move money, card lifecycle, and transaction history.',
    'Wired Jumio into sign-in and onboarding so unverified customers finish verification before they use the portal.',
    'Kept account and verification state in sync through Redux and SignalR updates from the backend.'
  ]
WHERE name = 'Ibanera Customer Portal';

UPDATE projects
SET
  description = 'Embeddable checkout widget and widget API for card and wallet payments, with merchant branding and identity verification.',
  technologies = ARRAY['SignalR', 'Jumio', 'Apple Pay', 'Google Pay', 'Next.js', 'TypeScript'],
  highlights = ARRAY[
    'Integrated Jumio through the widget API, including desktop verification and SignalR updates while a manual review is open.',
    'Built the checkout flow for email and phone verification, shipping, identity, card payment, and a signed embed for merchant sites.',
    'Added Apple Pay and Google Pay so express checkout appears only when the currency and merchant allow it.'
  ]
WHERE name = 'Peptiva Checkout Widget';

UPDATE projects
SET
  technologies = ARRAY['.NET', 'SignalR', 'Jumio', 'React', 'Vite', 'Redux'],
  highlights = ARRAY[
    'Worked on the .NET widget API for validation, verification status, currency exchange, and order lookup.',
    'Built the QuickBuy flow for sign-in, asset selection, identity checks, and checkout, including Apple Pay and Google Pay.'
  ]
WHERE name = 'QuickBuy Portal';

UPDATE projects
SET
  technologies = ARRAY['SQL Server', 'Jumio', 'React', 'Redux', 'AG Grid'],
  highlights = ARRAY[
    'Maintained stored procedures for Jumio verification updates, card status changes, and QuickBuy user checks.',
    'Extended the admin panel for customer records, approval queues, and frozen-transaction review.'
  ]
WHERE name = 'Admin Panel & Platform Database';

UPDATE projects
SET technologies = ARRAY['NestJS', 'MongoDB', 'Redis', 'RabbitMQ', 'Microservices', 'React.js']
WHERE name = 'Homnifi';

UPDATE projects
SET
  technologies = ARRAY['Node.js', 'Next.js', 'SSR', 'SEO'],
  highlights = ARRAY[
    'Designed Node.js REST APIs for listings, users, search, and transactions, shared by the web app and the mobile app.',
    'Built the Next.js frontend with SSR, SEO, dynamic routing, and advanced search, and cut load time with code splitting and lazy loading.'
  ]
WHERE name = 'Aqary Dashboard';

UPDATE projects
SET
  technologies = ARRAY['Node.js', 'Web3.js', 'Stripe', 'React.js'],
  highlights = ARRAY[
    'Integrated Ethereum smart contracts with the Node.js backend and Web3.js for ownership and trading.',
    'Added Stripe for fiat-to-crypto checkout and tuned the service for peak NFT launch traffic.'
  ]
WHERE name = 'Virtua Marketplace';

UPDATE projects
SET
  technologies = ARRAY['Node.js', 'React Native', 'React.js', 'IoT'],
  highlights = ARRAY[
    'Built Node.js CRM modules for role-based access, company profiles, and multi-organization IoT device registration.',
    'Shipped the React Native app for end-user IoT device control.'
  ]
WHERE name LIKE 'OFish%';

UPDATE projects
SET
  technologies = ARRAY['Node.js', 'SignalR', 'WebSockets', 'React.js', 'AI workflows'],
  highlights = ARRAY[
    'Built Node.js APIs and the React client for AI-assisted screening, interview booking, and candidate handoff.',
    'Added real-time chat with WebSockets and SignalR.'
  ]
WHERE name LIKE 'IntVue%';
