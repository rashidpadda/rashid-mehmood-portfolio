/*
  # Portfolio voice

  Mirrors lib/fallback-data.ts. Project notes read as product cases,
  and the three Ibanera apps link to their live URLs.
*/

UPDATE profile
SET summary = 'I build the product a person uses and the service behind it. Right now that is Ibanera: accounts, checkout, crypto purchase, and the admin desk. Before that, staking platforms, a property marketplace, an NFT exchange, and recruitment software.'
WHERE name = 'Rashid Mehmood';

UPDATE experience
SET description = 'Accounts, checkout, crypto purchase, and the admin desk behind them.'
WHERE company = 'Ibanera';

UPDATE experience
SET description = 'Staking, rewards, and licensing, and the services those products share.'
WHERE company = 'SoftBuilders Software Design LLC';

UPDATE experience
SET description = 'Property sales, rentals, and exchanges, on the web and on mobile.'
WHERE company = 'Aqary International Group';

UPDATE experience
SET description = 'An NFT marketplace, from the contract layer through card checkout.'
WHERE company = 'Big Immersive';

UPDATE experience
SET description = 'Screening candidates and booking their interviews.'
WHERE company = 'Intagleo Systems';

UPDATE projects
SET
  name = 'Customer portal',
  description = 'A customer signs in, finishes an identity check, and then sees accounts, cards, wallets, and transfers.',
  technologies = ARRAY['Next.js', 'TypeScript', 'Redux', 'SignalR', 'Jumio'],
  highlights = ARRAY[
    'I built the Next.js portal. Redux keeps the account, and SignalR updates it when verification or a balance changes on the server. Jumio sits in sign-in, so that check finishes before the rest of the portal opens.'
  ],
  link = 'https://customer.ibanera.com/',
  order_index = 1
WHERE name IN ('Ibanera Customer Portal', 'Customer portal');

UPDATE projects
SET
  name = 'QuickBuy',
  description = 'A buyer picks a crypto asset, signs in, and pays inside a widget. The .NET API checks the order, the identity status, and the exchange rate.',
  technologies = ARRAY['React', 'Vite', 'Redux', '.NET', 'SignalR', 'Jumio'],
  highlights = ARRAY[
    'I built the React and Vite widget, including Apple Pay and Google Pay, and worked on the API it calls.'
  ],
  link = 'https://portl.ibanera.com/',
  order_index = 2
WHERE name IN ('QuickBuy Portal', 'QuickBuy');

UPDATE projects
SET
  name = 'Ibanera Admin',
  description = 'The desk where staff review customers, approvals, and transactions that have been frozen.',
  technologies = ARRAY['React', 'Redux', 'AG Grid', 'SQL Server', 'Jumio'],
  highlights = ARRAY[
    'I extended the React admin for those queues, and the SQL Server procedures that store Jumio results, card status changes, and QuickBuy sign-in checks.'
  ],
  link = 'https://admin.ibanera.com/',
  order_index = 3
WHERE name IN ('Admin Panel & Platform Database', 'Ibanera Admin');

UPDATE projects
SET
  name = 'Peptiva checkout',
  description = 'Checkout a merchant can place on their own site. The buyer confirms an email and a phone number, adds shipping, and pays by card, Apple Pay, or Google Pay.',
  technologies = ARRAY['Next.js', 'TypeScript', 'SignalR', 'Jumio', 'Apple Pay', 'Google Pay'],
  highlights = ARRAY[
    'The widget and its API share one verification path. Jumio can stay open during a manual review, and SignalR tells the widget when that review moves.'
  ],
  link = NULL,
  order_index = 4
WHERE name IN ('Peptiva Checkout Widget', 'Peptiva checkout');

UPDATE projects
SET
  description = 'Staking, rewards, and licensing for connected machines. I designed the NestJS services and the API gateway, with Redis and RabbitMQ on the heavy paths.',
  technologies = ARRAY['NestJS', 'MongoDB', 'Redis', 'RabbitMQ', 'React.js'],
  highlights = ARRAY[]::text[],
  order_index = 5
WHERE name = 'Homnifi';

UPDATE projects
SET
  description = 'Wallets, staking, referrals, and resale. NestJS services cover balances, swaps, and the buyback path.',
  technologies = ARRAY['NestJS', 'PostgreSQL', 'Docker', 'Smart Contracts'],
  highlights = ARRAY[]::text[],
  order_index = 6
WHERE name = 'AI Farm';

UPDATE projects
SET
  name = 'Aqary',
  description = 'Listings for sales, rentals, and exchanges. One Node.js API serves the Next.js site and the React Native app. Splitting and lazy loading cut page load by about 40% and made rendering about twice as fast.',
  technologies = ARRAY['Node.js', 'Next.js', 'React Native'],
  highlights = ARRAY[]::text[],
  order_index = 7
WHERE name IN ('Aqary Dashboard', 'Aqary');

UPDATE projects
SET
  name = 'Virtua',
  description = 'An NFT marketplace for browsing, trading, and wallets. Node.js and Web3.js handle ownership and trades, and Stripe takes the card payment. Transaction volume rose about 40%, and failures fell about 30%.',
  technologies = ARRAY['Node.js', 'Web3.js', 'Stripe', 'React.js'],
  highlights = ARRAY[]::text[],
  order_index = 8
WHERE name IN ('Virtua Marketplace', 'Virtua');

UPDATE projects
SET
  name = 'OFish',
  description = 'A CRM for companies registering IoT devices. Node.js covers roles and company profiles. The React Native app is how a person controls a device.',
  technologies = ARRAY['Node.js', 'React Native', 'React.js'],
  highlights = ARRAY[]::text[],
  order_index = 9
WHERE name LIKE 'OFish%';

UPDATE projects
SET
  name = 'IntVue',
  description = 'Software that screens candidates and books interviews. I built the Node.js API and the React client. Chat runs on WebSockets and SignalR.',
  technologies = ARRAY['Node.js', 'React.js', 'WebSockets', 'SignalR'],
  highlights = ARRAY[]::text[],
  order_index = 10
WHERE name LIKE 'IntVue%';
