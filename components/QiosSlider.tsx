'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ImageLightbox } from '@/components/ImagePreview';

export const qiosSlides = [
  {
    src: '/qios-signin.jpg',
    alt: 'QIOS sign-in, with the operation modules beside the workspace login',
    caption: 'Sign-in. Employee ID or a passkey.',
    width: 1024,
    height: 555,
  },
  {
    src: '/qios-workspace.jpg',
    alt: 'QIOS workspace after sign-in, with the personal dashboard and attendance',
    caption: 'The workspace after sign-in.',
    width: 1024,
    height: 555,
  },
  {
    src: '/qios-settings.jpg',
    alt: 'QIOS general settings, with the company currency and the currency shown on screen',
    caption: 'Settings. The company currency, and the currency on screen.',
    width: 1024,
    height: 568,
  },
  {
    src: '/qios-it.jpg',
    alt: 'QIOS IT Management, with asset totals, assets by type, and assets by department',
    caption: 'IT Management. Assets, stock, and open requests.',
    width: 1024,
    height: 568,
  },
];

export default function QiosSlider() {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [preview, setPreview] = useState(false);
  const count = qiosSlides.length;
  const slide = qiosSlides[index];

  function go(next: number) {
    setIndex((next + count) % count);
  }

  function onPointerUp(clientX: number) {
    if (dragStart === null) return;
    const delta = clientX - dragStart;
    if (delta > 40) go(index - 1);
    else if (delta < -40) go(index + 1);
    else setPreview(true);
    setDragStart(null);
  }

  return (
    <figure
      className="mt-10 border border-line bg-bg"
      aria-roledescription="carousel"
      aria-label="QIOS screens"
    >
      <div
        className="relative bg-white"
        onPointerDown={(event) => setDragStart(event.clientX)}
        onPointerUp={(event) => onPointerUp(event.clientX)}
        onPointerCancel={() => setDragStart(null)}
      >
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="h-auto w-full cursor-zoom-in"
          priority={index === 0}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => go(index - 1)}
              aria-label="Previous screen"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-surface text-lg text-ink"
            >
              ←
            </button>
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => go(index + 1)}
              aria-label="Next screen"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-surface text-lg text-ink"
            >
              →
            </button>
          </>
        )}
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3">
        <p className="text-sm text-ink-soft">{slide.caption}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {qiosSlides.map((item, itemIndex) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show screen ${itemIndex + 1}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => setIndex(itemIndex)}
                className={`h-1.5 w-6 ${itemIndex === index ? 'bg-ink' : 'bg-line'}`}
              />
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            {index + 1} / {count}
          </p>
        </div>
      </figcaption>
      <ImageLightbox
        preview={preview ? slide : null}
        onClose={() => setPreview(false)}
      />
    </figure>
  );
}
