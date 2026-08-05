/*
  # Fix "Al Farm" Project Name Typo

  The project name was entered as "Al Farm" (capital A, lowercase L) but the
  actual name is "AI Farm" (it lives at app.aifarm.network). Corrects the
  single row so it matches lib/fallback-data.ts.
*/

UPDATE projects SET name = 'AI Farm' WHERE name = 'Al Farm';
