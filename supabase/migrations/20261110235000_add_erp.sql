/*
  # Add the ERP

  Mirrors lib/fallback-data.ts. Live sign-in is https://qios.ae/login.
  Module names match the sign-in screen.
*/

INSERT INTO projects (name, description, technologies, highlights, link, order_index)
SELECT
  'ERP',
  'One workspace for a company''s operations, from HR and finance through manufacturing and logistics. People sign in with an employee ID or a passkey.',
  ARRAY[]::text[],
  ARRAY[
    'Human Resources — Attendance, Leave, Onboarding',
    'PPM — Gantt, Task Board, Milestones',
    'Procurement — MR, RFQ, PO, GRN',
    'Inventory & Store — Stock, Transfers, Barcode',
    'Payroll — Salary, WPS, Tax Slips',
    'Finance GL — Journal, Chart of Accounts',
    'Finance AP — Supplier Invoices, Payments',
    'Finance AR — Customer Invoices, Receipts',
    'Estimation — BOQ, Quotations, AI Validation',
    'IT Management — Assets, Tickets, RDP Access',
    'Transport — Fleet, Trips, Drivers',
    'Geofencing — Site Check-in, Location Rules',
    'Manufacturing — Costing, Lots, Fabrication',
    'Workflow & Approvals — Digital Sign-off, Escalations',
    'Documentation — Drawings, Submittals, Specs',
    'Analytics — KPIs, Dashboards, Reports',
    'Barcode / QR — Asset & Inventory Scanning',
    'Fixed Assets — Depreciation, Tracking'
  ],
  'https://qios.ae/login',
  11
WHERE NOT EXISTS (
  SELECT 1 FROM projects WHERE name = 'ERP'
);

UPDATE projects
SET
  description = 'One workspace for a company''s operations, from HR and finance through manufacturing and logistics. People sign in with an employee ID or a passkey.',
  technologies = ARRAY[]::text[],
  highlights = ARRAY[
    'Human Resources — Attendance, Leave, Onboarding',
    'PPM — Gantt, Task Board, Milestones',
    'Procurement — MR, RFQ, PO, GRN',
    'Inventory & Store — Stock, Transfers, Barcode',
    'Payroll — Salary, WPS, Tax Slips',
    'Finance GL — Journal, Chart of Accounts',
    'Finance AP — Supplier Invoices, Payments',
    'Finance AR — Customer Invoices, Receipts',
    'Estimation — BOQ, Quotations, AI Validation',
    'IT Management — Assets, Tickets, RDP Access',
    'Transport — Fleet, Trips, Drivers',
    'Geofencing — Site Check-in, Location Rules',
    'Manufacturing — Costing, Lots, Fabrication',
    'Workflow & Approvals — Digital Sign-off, Escalations',
    'Documentation — Drawings, Submittals, Specs',
    'Analytics — KPIs, Dashboards, Reports',
    'Barcode / QR — Asset & Inventory Scanning',
    'Fixed Assets — Depreciation, Tracking'
  ],
  name = 'ERP',
  link = 'https://qios.ae/login',
  order_index = 11
WHERE name = 'ERP';

UPDATE projects SET order_index = 2 WHERE name IN ('QuickBuy Portal', 'QuickBuy');
UPDATE projects SET order_index = 3 WHERE name IN ('Admin Panel & Platform Database', 'Ibanera Admin');
UPDATE projects SET order_index = 4 WHERE name IN ('Peptiva Checkout Widget', 'Peptiva checkout');
UPDATE projects SET order_index = 5 WHERE name = 'Homnifi';
UPDATE projects SET order_index = 6 WHERE name = 'AI Farm';
UPDATE projects SET order_index = 7 WHERE name IN ('Aqary Dashboard', 'Aqary');
UPDATE projects SET order_index = 8 WHERE name IN ('Virtua Marketplace', 'Virtua');
UPDATE projects SET order_index = 9 WHERE name LIKE 'OFish%';
UPDATE projects SET order_index = 10 WHERE name LIKE 'IntVue%';
