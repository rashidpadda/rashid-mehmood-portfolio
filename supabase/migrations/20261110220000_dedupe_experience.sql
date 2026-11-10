/*
  # Remove repeated experience bullets

  Mirrors lib/fallback-data.ts. Each role keeps distinct work only.
*/

UPDATE experience
SET
  description = 'Full-stack engineering for Ibanera, a US digital bank covering cards, payments, accounts, and crypto.',
  achievements = ARRAY[
    'Built the Next.js customer portal for accounts, cards, crypto and stablecoin wallets, transfers, approvals, and onboarding, with Redux and SignalR keeping account and verification state in sync.',
    'Developed the Peptiva checkout widget as an embeddable Next.js payment flow: email and phone verification, shipping, card payment, Apple Pay, and Google Pay.',
    'Shipped the QuickBuy portal in React and Vite, and its .NET API, for crypto purchase, sign-in, multi-currency validation, and order status.',
    'Integrated Jumio across the customer portal, Peptiva, and QuickBuy, including the verification iframe, status checks, and SignalR updates through manual review.',
    'Extended the React admin panel for customer review, approvals, and frozen transactions, and maintained the SQL Server procedures for verification, card lifecycle, and QuickBuy sign-in.'
  ]
WHERE company = 'Ibanera';

UPDATE experience
SET
  achievements = ARRAY[
    'Built the React.js and NestJS platform and admin dashboard for decentralized staking, rewards, licence management, and machine connectivity.',
    'Designed the NestJS services, REST APIs, and API gateway for routing, authentication, authorization, and rate limiting across staking, rewards, and licensing.',
    'Added Redis, RabbitMQ, webhooks, and batch processing for high-volume transactions, plus RBAC dashboards with multi-level permissions.',
    'Integrated PandaDoc so onboarding includes digital contract signing.',
    'Administered internal IT: shared network resources, a Grandstream IP PBX, FTP, email and domain accounts, and shared printers and scanners.'
  ]
WHERE company = 'SoftBuilders Software Design LLC';

UPDATE experience
SET
  achievements = ARRAY[
    'Built the React Native app end to end, including core screens, navigation, and API integration.',
    'Shipped the Next.js frontend with SSR, SEO, dynamic routing, and advanced search for property listings.',
    'Designed the Node.js APIs for listings, users, search, and transactions, shared by the web app and the mobile app.',
    'Cut page load times by 40% and improved rendering by 2x with code splitting and lazy loading. Engagement rose 25%, conversion 15%, and bounce fell 18%.',
    'Added user behavior tracking and funnel analytics for targeting and conversion.'
  ]
WHERE company = 'Aqary International Group';

UPDATE experience
SET
  achievements = ARRAY[
    'Built browsing, trading, and wallet features in the React Native app for the Virtua NFT marketplace.',
    'Integrated Ethereum smart contracts with a Node.js backend and Web3.js. Transaction volume rose 40% and failures fell 30%.',
    'Added single sign-on across the React app and Node.js services.',
    'Integrated Stripe payments, cutting payment errors by 25% and raising successful transactions by 35%.'
  ]
WHERE company = 'Big Immersive';

UPDATE experience
SET
  achievements = ARRAY[
    'Built the React and Node.js product for AI-assisted candidate screening, interview scheduling, and candidate workflows, with Redux for application state.',
    'Implemented real-time chat and notifications with WebSockets and SignalR, reducing response time by 60%.'
  ]
WHERE company = 'Intagleo Systems';
