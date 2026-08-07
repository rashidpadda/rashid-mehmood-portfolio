import { SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiMongodb, SiPostgresql, SiEthereum } from 'react-icons/si';
import { Profile } from '@/lib/supabase';

interface HeroProps {
  profile: Profile;
}

const techStack = [
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, label: 'Next.js', color: 'currentColor' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5FA04E' },
  { Icon: SiNestjs, label: 'NestJS', color: '#E0234E' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#00A35C' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiEthereum, label: 'Blockchain', color: '#3C3C3D' },
];

export default function Hero({ profile }: HeroProps) {
  const [firstName, ...restName] = profile.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24 px-6 sm:px-10">
      <div className="absolute inset-0 -z-10 bg-bg-soft mesh-bg dot-grid" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-14 items-center">
        <div className="reveal justify-self-center">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
            <div className="absolute -top-8 -right-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-accent-soft -z-10" />
            <div className="absolute -bottom-6 -left-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent opacity-15 -z-10" />

            <div
              className="relative w-full h-full rounded-[2rem] overflow-hidden glow-shadow ring-1 ring-white/10"
              style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #4338ca 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              <div className="absolute -top-12 -left-10 w-40 h-40 rounded-full bg-white/25 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-extrabold text-accent-ink text-7xl sm:text-8xl lg:text-9xl tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.15)]">
                  RM
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 right-3 sm:-bottom-5 sm:right-4 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface border border-line text-ink text-xs font-semibold shadow-lg whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for hire
            </div>
          </div>
        </div>

        <div className="reveal text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-6">
            Senior Full Stack Software Engineer
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-4 text-wrap-balance">
            <span className="block text-ink">{firstName}</span>
            {lastName && <span className="block gradient-text">{lastName}.</span>}
          </h1>
          <p className="font-display italic text-xl sm:text-2xl text-accent mb-6">
            — Building Scalable Products
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-2.5 rounded-full bg-ink text-accent font-display font-semibold text-sm mb-8 hover:opacity-90 transition-opacity"
          >
            About Me
          </a>
          <p className="text-lg sm:text-xl text-ink-soft max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Building scalable web platforms and full-stack applications with
            React, Next.js, Node.js, and NestJS — backed by microservices, API
            gateways, and cloud-native architecture, with additional experience
            across mobile and Web3 systems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full gradient-brand text-accent-ink font-semibold glow-shadow hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full border-2 border-line text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              View work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 rounded-full border-2 border-line text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Download Resume
            </a>

            <div className="flex gap-4 ml-1">
              {profile.linkedin && (
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {profile.github && (
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="reveal max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        <div className="card col-span-2 p-6 sm:p-7 flex flex-col justify-between">
          <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
            Core stack
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {techStack.map(({ Icon, label, color }) => (
              <span
                key={label}
                title={label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-bg-soft border border-line flex items-center justify-center shrink-0"
              >
                <Icon className="w-5 h-5" style={color !== 'currentColor' ? { color } : { color: 'var(--ink)' }} />
              </span>
            ))}
          </div>
        </div>

        <div className="card p-6 sm:p-7 flex flex-col justify-between">
          <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
            Experience
          </h3>
          <p className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">6+ yrs</p>
        </div>

        <div className="card p-6 sm:p-7 flex flex-col justify-between">
          <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
            Based in
          </h3>
          <p className="font-display text-lg font-bold text-ink">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
