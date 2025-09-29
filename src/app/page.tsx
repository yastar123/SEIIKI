'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TestimonialSection from '@/components/sections/infinite-testimonials';

function HeroSection() {
  // Example online background image (power lines at night from Unsplash)
  const bgUrl =
    'data:image/jpeg;base64,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';

  return (
    <section
      className="relative w-full min-h-[calc(100dvh+5rem)] -mt-20 text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-wider">SEIIKI</h1>
        <div className="mt-4 flex flex-col items-center">
          <div className="w-16 h-1 bg-accent mb-2"></div>
          <p className="text-xl md:text-2xl font-light tracking-widest">AMAN TERPERCAYA</p>
          <p className="mt-2 text-sm md:text-base tracking-widest opacity-90">( PT. SOLUSI ENERGI KELISTRIKAN INDONESIA )</p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/profil/tentang-kami">TENTANG KAMI</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/kontak">KONTAK</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'SLO Tegangan Rendah (TR)',
      description:
        'Sertifikasi untuk instalasi listrik rumah tangga, bisnis kecil, dan fasilitas umum dengan standar keamanan tertinggi.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'SLO Tegangan Menengah (TM)',
      description:
        'Layanan sertifikasi untuk instalasi industri, komersial besar, dan jaringan distribusi dengan keandalan terjamin.',
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'Konsultasi & Uji Petik',
      description:
        'Dukungan ahli untuk perencanaan, pemeliharaan, dan pengujian instalasi listrik Anda agar selalu laik operasi.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Tahun Pengalaman' },
    { value: '15,000+', label: 'Sertifikat Diterbitkan' },
    { value: '25', label: 'Kantor Wilayah' },
    { value: '99%', label: 'Kepuasan Pelanggan' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      {/* About - Tentang Kami */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold">Tentang Kami</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SEIIKI ( PT. SOLUSI ENERGI KELISTRIKAN INDONESIA ) adalah Lembaga Inspeksi Teknik serta penerbit Sertifikat Laik Operasi (SLO) instalasi tenaga listrik untuk Tegangan Rendah, Tegangan Menengah, dan Jaringan Distribusi serta Pembangkit diseluruh nusantara.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Kepuasan pelanggan / konsumen / pemilik instalasi merupakan komitmen kami. Regulasi yang ditetapkan pemerintah menjadi acuan kami, PT. PLN Persero dan Badan Usaha Kontraktor Listrik menjadi mitra kerja kami.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/profil/tentang-kami">Pelajari lebih lanjut</Link>
                </Button>
              </div>
            </div>
            <div>
              {/* Online image placeholder from Unsplash (power infrastructure) */}
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
                alt="Infrastruktur kelistrikan Indonesia"
                className="w-full h-72 md:h-[28rem] object-cover rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards */}
      <section id="awards" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold">Sertifikat & Penghargaan</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Beberapa bukti pengakuan, izin, dan penghargaan yang mendukung kredibilitas SEIIKI.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[ 
              {
                title: 'Akreditasi Lembaga Inspeksi',
                issuer: 'Kementerian Terkait',
                img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Lisensi Sertifikasi SLO',
                issuer: 'Otoritas Kelistrikan',
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Penghargaan Layanan',
                issuer: 'Asosiasi Industri',
                img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Izin Operasional',
                issuer: 'Pemerintah Daerah',
                img: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Kemitraan Resmi',
                issuer: 'PT PLN (Persero)',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Standar Mutu & Keselamatan',
                issuer: 'SNI/ISO',
                img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
              },
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">Penerbit: {item.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Importance of Inspection & Testing */}
      <section id="importance" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-headline font-bold">Pentingnya Pemeriksaan & Pengujian Instalasi Tenaga Listrik Sebelum Dioperasikan/Digunakan</h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground">
                <p>
                  Pemeriksaan dan pengujian instalasi tenaga listrik baik itu instalasi pembangkit, instalasi transmisi, instalasi distribusi dan instalasi bangunan (building) harus dilakukan untuk mengetahui apakah instalasi tersebut sudah memenuhi standar yang dipersyaratkan atau tidak dan apabila sudah memenuhi standar maka untuk instalasi tersebut dikeluarkan Sertifikat Laik Operasi (SLO) oleh Lembaga Inspeksi Teknik.
                </p>
                <p>
                  Komitmen PT. SEIIKI Aman Nusantara dalam memastikan keselamatan, kualitas, dan kepatuhan terhadap standar keselamatan kelistrikan sangatlah penting dalam menciptakan lingkungan yang aman dan handal. PT SEIIKI Aman Nusantara telah menunjukkan profesionalisme tinggi dan integritas yang patut dicontoh. Semoga prestasi ini semakin menginspirasi perusahaan dan seluruh pihak terkait untuk terus menjaga standar keselamatan yang optimal demi keberlanjutan industri kelistrikan yang lebih baik.
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link href="/slo/informasi">Pelajari Proses SLO</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/slo/pendaftaran">Ajukan SLO</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Online illustrative image */}
              <img
                src="https://images.unsplash.com/photo-1518776471440-cc3d1587f008?q=80&w=1600&auto=format&fit=crop"
                alt="Pemeriksaan dan pengujian instalasi listrik"
                className="w-full h-72 md:h-[28rem] object-cover rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling Gallery of Activities */}
      <section id="gallery" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold">Galeri Kegiatan</h2>
            <p className="mt-4 text-lg text-muted-foreground">Dokumentasi kegiatan inspeksi, pengujian, dan operasional SEIIKI.</p>
          </div>

          <div className="mt-10">
            {/* Scroller */}
            <div
              className="relative overflow-hidden"
            >
              <div
                ref={(el) => {
                  // Attach to window for effect below
                  // We use a function ref to store on the element for the effect
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ;(window as any).__seiikiGalleryRef = el;
                }}
                className="flex snap-x snap-mandatory w-full"
                style={{ scrollBehavior: 'smooth', overflowX: 'auto' }}
              >
                {[
                  {
                    title: 'Inspeksi Lapangan',
                    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
                  },
                  {
                    title: 'Pengujian Panel',
                    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop',
                  },
                  {
                    title: 'Audit Keselamatan',
                    img: 'https://images.unsplash.com/photo-1581091870622-7b1c1c56b8eb?q=80&w=1600&auto=format&fit=crop',
                  },
                  {
                    title: 'Pembangkit & Distribusi',
                    img: 'https://images.unsplash.com/photo-1543964194-b7e7c52a36d7?q=80&w=1600&auto=format&fit=crop',
                  },
                  {
                    title: 'Kalibrasi Peralatan',
                    img: 'https://images.unsplash.com/photo-1581090464472-4d3b4caaea8b?q=80&w=1600&auto=format&fit=crop',
                  },
                  {
                    title: 'Pemeriksaan Jaringan',
                    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
                  },
                ].map((item, i) => (
                  <div key={i} className="snap-start shrink-0 w-full">
                    <div className="relative w-full h-64 sm:h-80 md:h-[26rem] overflow-hidden rounded-xl shadow-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="inline-flex rounded-full bg-background/80 px-3 py-1 text-sm shadow">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-advance interval using a side-effect */}
            <script dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  var el = (window).__seiikiGalleryRef;
                  if (!el) return;
                  if (el.__seiikiInterval) return; // guard
                  function advance(){
                    try {
                      var next = el.scrollLeft + el.clientWidth;
                      if (next >= (el.scrollWidth - el.clientWidth - 8)) {
                        el.scrollTo({ left: 0, behavior: 'smooth' });
                      } else {
                        el.scrollTo({ left: next, behavior: 'smooth' });
                      }
                    } catch(e){}
                  }
                  el.__seiikiInterval = setInterval(advance, 3500);
                  window.addEventListener('beforeunload', function(){
                    clearInterval(el.__seiikiInterval);
                  });
                })();
              `
            }} />
          </div>
        </div>
      </section>

      {/* Partners - Infinite Carousel */}
      <section id="partners" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold">Kerjasama Dengan</h2>
            <p className="mt-4 text-lg text-muted-foreground">Mitra strategis yang mendukung layanan dan operasional SEIIKI.</p>
          </div>

          <div className="mt-10 relative overflow-hidden">
            {/* The track is duplicated to create a seamless infinite scroll */}
            <div className="flex items-center gap-10 will-change-transform" style={{ animation: 'seiiki-marquee 28s linear infinite' }}>
              {[
                { title: 'PLN', img: 'https://dummyimage.com/200x80/0ea5e9/ffffff&text=PLN' },
                { title: 'Kementerian ESDM', img: 'https://dummyimage.com/200x80/64748b/ffffff&text=ESDM' },
                { title: 'Kontraktor Listrik', img: 'https://dummyimage.com/200x80/0f172a/ffffff&text=Kontraktor' },
                { title: 'Asosiasi Industri', img: 'https://dummyimage.com/200x80/334155/ffffff&text=Asosiasi' },
                { title: 'Pabrikan Panel', img: 'https://dummyimage.com/200x80/0369a1/ffffff&text=Panel' },
                { title: 'Penyedia Peralatan', img: 'https://dummyimage.com/200x80/0891b2/ffffff&text=Peralatan' },
              ].flatMap((p) => [p, p]) /* duplicate for seamless loop */.map((partner, idx) => (
                <div key={idx} className="shrink-0">
                  <div className="h-16 sm:h-20 md:h-24 w-auto px-6 py-3 rounded-xl bg-secondary/40 ring-1 ring-border/60 flex items-center justify-center">
                    <img
                      src={partner.img}
                      alt={`Logo ${partner.title}`}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
          </div>

          {/* Local styles for marquee animation */}
          <style jsx>{`
            @keyframes seiiki-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* Ensure the track width is 200% so the duplicate set loops seamlessly */
            section#partners .will-change-transform { width: 200%; }
          `}</style>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold">
              Layanan Profesional Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Memberikan pelayanan terbaik dalam penerbitan SLO dengan proses
              yang cepat, akurat, dan sesuai standar nasional (SNI).
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite moving cards */}
      <TestimonialSection />

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline font-bold">Siap Memulai?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Verifikasi status SLO Anda atau ajukan permohonan baru dengan mudah
            melalui platform kami.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/slo/verifikasi">
                Verifikasi SLO Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-muted-foreground">atau</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">Hubungi Tim Ahli Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
