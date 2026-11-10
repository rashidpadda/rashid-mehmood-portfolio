import { Profile } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="bg-surface px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Tell me about the product.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Open to senior full-stack roles, full-time or contract. If it needs
            a surface and a service that can carry money, identity, or on-chain
            state, I want to hear about it.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-display text-xl font-semibold tracking-tight text-ink underline decoration-line underline-offset-4 hover:decoration-ink sm:text-2xl"
          >
            {profile.email}
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            {profile.location && <span>{profile.location}</span>}
            {profile.phone && (
              <a href={`tel:${profile.phone}`} className="hover:text-ink">
                {profile.phone}
              </a>
            )}
            {profile.linkedin && (
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                GitHub
              </a>
            )}
            <a href="/resume.pdf" download className="hover:text-ink">
              Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
