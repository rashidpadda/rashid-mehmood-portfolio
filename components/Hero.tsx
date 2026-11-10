import Image from 'next/image';
import { Profile } from '@/lib/supabase';

interface HeroProps {
  profile: Profile;
}

const services = [
  {
    title: 'Blockchain',
    text: 'Staking and rewards services, wallets, NFT marketplaces, and smart-contract integrations.',
  },
  {
    title: 'Real estate',
    text: 'Listing and search APIs, plus web and mobile apps for sales, rentals, and exchanges.',
  },
  {
    title: 'Banking',
    text: 'Account, card, and wallet services, with customer portals and admin operations.',
  },
  {
    title: 'Payment checkout',
    text: 'Payment APIs and embeddable checkout for cards, Apple Pay, Google Pay, and identity checks.',
  },
];

export default function Hero({ profile }: HeroProps) {
  const [firstName, ...restName] = profile.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr] lg:gap-12">
        <div className="reveal justify-self-center" style={{ animationDelay: '40ms' }}>
          <div className="w-[240px] sm:w-[280px]">
            <Image
              src="/portrait.png"
              alt="Rashid Mehmood"
              width={864}
              height={1152}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="reveal text-center md:text-left" style={{ animationDelay: '120ms' }}>
          <p className="mb-3 text-sm font-semibold text-accent">Hello there</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            I&apos;m {firstName}
            {lastName ? ` ${lastName}` : ''}
          </h1>
          <p className="mt-3 text-lg font-medium text-ink-soft">{profile.title}</p>
          <p className="mx-auto mb-6 mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:mx-0">
            I build the services and the products in front of them. NestJS,
            Node.js, .NET, and SQL Server on the backend. React, Next.js, and
            React Native on the client. API gateways, real-time updates, Web3,
            and payment integrations.
          </p>

          <ul className="mb-6 space-y-1.5 text-sm text-ink-soft">
            {profile.location && <li>{profile.location}</li>}
            <li>{profile.email}</li>
            {profile.phone && <li>{profile.phone}</li>}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a href="#contact" className="btn-primary px-5 py-3 text-sm">
                Get in touch
              </a>
              <a href="#projects" className="btn-ghost px-5 py-3 text-sm">
                View work
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-3 py-3 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
              >
                Download resume
              </a>
            </div>

            <div className="flex items-center gap-2">
              {profile.linkedin && (
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {profile.github && (
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mx-auto mt-16 max-w-6xl" style={{ animationDelay: '220ms' }}>
        <p className="mb-6 text-center text-sm font-semibold text-accent">What I can do</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-line border-l-4 border-l-accent bg-surface px-6 py-5 transition-shadow hover:shadow-[0_16px_34px_-26px_rgba(40,45,69,0.7)]"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
