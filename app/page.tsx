import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {
  getProfile,
  getSkills,
  getExperience,
  getProjects,
  getEducation,
} from '@/lib/supabase';

export default async function Home() {
  const [profile, skills, experience, projects, education] = await Promise.all([
    getProfile(),
    getSkills(),
    getExperience(),
    getProjects(),
    getEducation(),
  ]);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <p className="text-xl text-ink-soft">
          Failed to load portfolio data
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience experiences={experience} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact profile={profile} />
      <Footer />
    </main>
  );
}
