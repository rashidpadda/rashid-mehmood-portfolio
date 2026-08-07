/*
  # Add NestJS and System Design experience

  Homnifi and AI Farm were built with NestJS, and system design work on
  those platforms wasn't reflected. Updates:
    - skills: add "System Design" to the Backend & Architecture category
    - experience (softbuilders row): add a system design achievement
    - projects (Homnifi, AI Farm): swap Node.js -> NestJS in technologies,
      add NestJS-related highlights
  Mirrors lib/fallback-data.ts — keep the two in sync.
*/

UPDATE skills
SET skills = ARRAY['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'System Design', 'Microservices', 'API Gateway', 'Event-Driven Architecture', 'Redis', 'RabbitMQ', 'gRPC', 'RBAC', 'OAuth2', 'SSO', 'MongoDB', 'PostgreSQL']
WHERE category = 'Backend & Architecture';

UPDATE experience
SET achievements = achievements[1:1]
  || ARRAY['Owned system design for the platform''s NestJS-based microservices, defining service boundaries, data flow, and scalability strategy across staking, rewards, and licensing services.']
  || achievements[2:array_length(achievements, 1)]
WHERE company = 'SoftBuilders Software Design LLC';

UPDATE projects
SET
  technologies = ARRAY['React.js', 'NestJS', 'MongoDB', 'Microservices', 'Redis', 'RabbitMQ'],
  highlights = ARRAY[
    'Led end-to-end development of a scalable Full Stack architecture with a centralized API Gateway handling auth, routing, throttling, and service orchestration.',
    'Owned system design for the platform — defining service boundaries, data flow, and scalability strategy across staking, rewards, and licensing microservices.',
    'Designed staking, rewards, and license-based incentive modules tightly integrated with blockchain smart contracts.',
    'Optimized backend performance for high user concurrency using Redis caching, RabbitMQ messaging, and batch processing.'
  ]
WHERE name = 'Homnifi';

UPDATE projects
SET
  technologies = ARRAY['NestJS', 'PostgreSQL', 'Docker', 'Smart Contracts'],
  highlights = ARRAY[
    'Designed and deployed scalable microservices using NestJS to support wallet, staking, and reward workflows, including debit, credit, token swaps, and real-time balance updates.',
    'Applied NestJS''s modular, dependency-injection-based architecture to keep wallet, staking, and referral services independently testable and maintainable.',
    'Built referral-based incentive and buyback systems with smart contract integration for secondary marketplace reselling.'
  ]
WHERE name = 'AI Farm';
