'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Preview = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function ImageLightbox({ preview, onClose }: { preview: Preview | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (preview && !dialog.open) {
      setClosing(false);
      dialog.showModal();
    }
  }, [preview]);

  function requestClose() {
    const dialog = dialogRef.current;
    if (!dialog?.open || closing) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      dialog.close();
      return;
    }
    setClosing(true);
    window.setTimeout(() => dialog.close(), 170);
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={() => {
        setClosing(false);
        onClose();
      }}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
      aria-label={preview?.caption || preview?.alt || 'Image preview'}
      className={`image-preview fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center border-0 bg-transparent p-4 ${preview ? 'preview-open' : 'preview-closed'} ${closing ? 'is-closing' : ''}`}
    >
      {preview && (
        <div
          className={`image-preview-panel w-[min(1100px,100%)] border border-line bg-bg ${closing ? 'is-closing' : ''}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-end border-b border-line px-3 py-2">
            <button
              type="button"
              onClick={requestClose}
              className="border border-line bg-surface px-3 py-1.5 text-sm text-ink"
            >
              Close
            </button>
          </div>
          <div className="bg-white">
            <Image
              src={preview.src}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              sizes="(min-width: 1100px) 1100px, 92vw"
              className="mx-auto h-auto max-h-[78vh] w-full object-contain"
            />
          </div>
          {preview.caption && (
            <p className="border-t border-line px-4 py-3 text-sm text-ink-soft">{preview.caption}</p>
          )}
        </div>
      )}
    </dialog>
  );
}

export function PreviewImage({
  src,
  alt,
  caption,
  width,
  height,
  sizes,
  className,
}: Preview & { sizes?: string; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Preview: ${caption || alt}`}
        className="block w-full cursor-zoom-in bg-transparent p-0 text-left"
      >
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={className} />
      </button>
      <ImageLightbox
        preview={open ? { src, alt, caption, width, height } : null}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
