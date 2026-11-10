import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {
  getProfile,
  getExperience,
  getProjects,
  getEducation,
} from '@/lib/supabase';

export default async function Home() {
  const [profile, experience, projects, education] = await Promise.all([
    getProfile(),
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
      <Projects projects={projects} />
      <About profile={profile} />
      <Experience experiences={experience} education={education} />
      <Contact profile={profile} />
      <Footer />
    </main>
  );
}
