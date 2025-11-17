/*
  # Portfolio Database Schema
  
  1. New Tables
    - `profile`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `linkedin` (text)
      - `github` (text)
      - `summary` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `skills`
      - `id` (uuid, primary key)
      - `category` (text) - Frontend, Backend, Blockchain, etc.
      - `skills` (text[]) - Array of skill names
      - `created_at` (timestamptz)
    
    - `experience`
      - `id` (uuid, primary key)
      - `title` (text)
      - `company` (text)
      - `location` (text)
      - `start_date` (text)
      - `end_date` (text)
      - `description` (text)
      - `achievements` (text[])
      - `order_index` (integer) - For display ordering
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `technologies` (text[])
      - `highlights` (text[])
      - `link` (text, nullable)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `education`
      - `id` (uuid, primary key)
      - `institution` (text)
      - `degree` (text)
      - `location` (text)
      - `start_date` (text)
      - `end_date` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is public)
*/

-- Profile Table
CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  linkedin text,
  github text,
  summary text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to profile"
  ON profile FOR SELECT
  TO anon
  USING (true);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  skills text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to skills"
  ON skills FOR SELECT
  TO anon
  USING (true);

-- Experience Table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  location text,
  start_date text NOT NULL,
  end_date text,
  description text,
  achievements text[] DEFAULT '{}',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to experience"
  ON experience FOR SELECT
  TO anon
  USING (true);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  technologies text[] DEFAULT '{}',
  highlights text[] DEFAULT '{}',
  link text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

-- Education Table
CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution text NOT NULL,
  degree text NOT NULL,
  location text,
  start_date text,
  end_date text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE education ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to education"
  ON education FOR SELECT
  TO anon
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_experience_order ON experience(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);