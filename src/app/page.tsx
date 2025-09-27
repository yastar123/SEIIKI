'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, FileText, ShieldCheck, Zap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { placeholderImages } from '@/lib/placeholder-images';

function HeroSection() {
  const heroImages = placeholderImages.filter((p) =>
    p.id.startsWith('home-hero-')
  );

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                priority={index === 0}
                data-ai-hint={image.imageHint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 z-10">
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-wider">
          SEIIKI
        </h1>
        <div className="mt-4 flex flex-col items-center">
            <div className="w-16 h-1 bg-accent mb-2"></div>
            <p className="text-xl md:text-2xl font-light tracking-widest">AMAN TERPERCAYA</p>
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
