'use client';

import React from 'react';

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

type InfiniteTestimonialsProps = {
  items: Testimonial[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
};

// Simple infinite marquee without relying on tailwind config
export function InfiniteTestimonials({ items, speed = 60, direction = 'left' }: InfiniteTestimonialsProps) {
  // Duplicate items to create seamless loop
  const content = [...items, ...items];
  const isLeft = direction === 'left';

  // Width is dynamic; we use CSS variable for speed
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" />
      <div className="flex w-max gap-4" style={{
        animation: `${isLeft ? 'marquee-left' : 'marquee-right'} linear infinite`,
        // duration based on speed and approximate card width count
        // We set 40s default; below we override with CSS variable if needed
        animationDuration: '40s',
      }}>
        {content.map((t, idx) => (
          <figure
            key={idx}
            className="min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] rounded-2xl border border-border/60 bg-card text-card-foreground shadow-sm p-5"
          >
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              {t.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.avatarUrl} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold">
                  {t.author.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-medium">{t.author}</div>
                {t.role && <div className="text-xs text-muted-foreground">{t.role}</div>}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function TestimonialSection() {
  const items: Testimonial[] = [
    {
      quote:
        'Pelayanan PT. Solusi Energi Kelistrikan Indonesia sangat profesional. Proses sertifikasi berjalan cepat dan jelas.',
      author: 'Rizky Pratama',
      role: 'Pemilik Toko Elektronik',
    },
    {
      quote:
        'Tim teknisnya responsif dan detail dalam pemeriksaan. Kami merasa aman dan yakin instalasi telah sesuai standar.',
      author: 'Dewi Lestari',
      role: 'Manajer Operasional Pabrik',
    },
    {
      quote:
        'Dokumentasi lengkap, komunikasi transparan, dan hasil yang tepat waktu. Rekomendasi kuat untuk kebutuhan SLO.',
      author: 'Andi Setiawan',
      role: 'Kontraktor Listrik',
    },
    {
      quote:
        'Proses verifikasi SLO menjadi jauh lebih mudah. Platformnya user-friendly dan tim sangat membantu.',
      author: 'Sari Wulandari',
      role: 'Administrator Gedung',
    },
    {
      quote:
        'Standar keselamatan menjadi prioritas. Kami puas dengan audit menyeluruh yang dilakukan oleh PT. SEIKI.',
      author: 'Bima Nugraha',
      role: 'Owner Restoran',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold">Apa Kata Mereka</h2>
          <p className="mt-3 text-muted-foreground">Testimoni seputar layanan PT. Solusi Energi Kelistrikan Indonesia</p>
        </div>
        <div className="mt-10">
          <InfiniteTestimonials items={items} />
        </div>
      </div>
    </section>
  );
}
