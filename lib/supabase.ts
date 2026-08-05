import { createClient } from '@supabase/supabase-js';
import {
  fallbackProfile,
  fallbackSkills,
  fallbackExperience,
  fallbackProjects,
  fallbackEducation,
} from './fallback-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Falls back to local resume data (lib/fallback-data.ts) when Supabase isn't
// configured, so the site still renders for local dev without credentials.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Profile {
  id: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  summary?: string;
}

export interface Skill {
  id: string;
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  start_date: string;
  end_date?: string;
  description?: string;
  achievements?: string[];
  order_index: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  order_index: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location?: string;
  start_date?: string;
  end_date?: string;
}

export async function getProfile(): Promise<Profile | null> {
  if (!supabase) return fallbackProfile;

  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .maybeSingle();

  if (error) {
    console.error('Error fetching profile:', error);
    return fallbackProfile;
  }

  return data ?? fallbackProfile;
}

export async function getSkills(): Promise<Skill[]> {
  if (!supabase) return fallbackSkills;

  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching skills:', error);
    return fallbackSkills;
  }

  return data && data.length > 0 ? data : fallbackSkills;
}

export async function getExperience(): Promise<Experience[]> {
  if (!supabase) return fallbackExperience;

  const { data, error } = await supabase
    .from('experience')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching experience:', error);
    return fallbackExperience;
  }

  return data && data.length > 0 ? data : fallbackExperience;
}

export async function getProjects(): Promise<Project[]> {
  if (!supabase) return fallbackProjects;

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching projects:', error);
    return fallbackProjects;
  }

  return data && data.length > 0 ? data : fallbackProjects;
}

export async function getEducation(): Promise<Education[]> {
  if (!supabase) return fallbackEducation;

  const { data, error } = await supabase
    .from('education')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching education:', error);
    return fallbackEducation;
  }

  return data && data.length > 0 ? data : fallbackEducation;
}
