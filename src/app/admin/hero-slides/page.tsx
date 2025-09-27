'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

// Mock data - akan diganti dengan data dari database
const mockSlides = [
  {
    id: '1',
    title: 'SEIIKI',
    subtitle: 'AMAN TERPERCAYA',
    description: 'Pusat Layanan Sertifikat Laik Operasi Instalasi Tenaga Listrik',
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4073b?w=1080&h=720&fit=crop',
    buttonText: 'TENTANG KAMI',
    buttonUrl: '/profil/tentang-kami',
    order: 1,
    active: true,
  },
  {
    id: '2',
    title: 'Layanan Profesional',
    subtitle: 'SLO Tegangan Rendah & Menengah',
    description: 'Sertifikasi instalasi listrik dengan standar keamanan tertinggi',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1080&h=720&fit=crop',
    buttonText: 'LAYANAN KAMI',
    buttonUrl: '/slo',
    order: 2,
    active: true,
  },
];

export default function HeroSlidesPage() {
  const [slides] = useState(mockSlides);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hero Slides</h1>
          <p className="text-muted-foreground">
            Kelola slide banner utama website
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Slide
        </Button>
      </div>

      <div className="grid gap-6">
        {slides.map((slide) => (
          <Card key={slide.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {slide.title}
                    <Badge variant={slide.active ? 'default' : 'secondary'}>
                      {slide.active ? 'Aktif' : 'Nonaktif'}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    {slide.active ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <p className="text-sm">{slide.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Order: {slide.order}</span>
                    <span>Button: {slide.buttonText}</span>
                    <span>URL: {slide.buttonUrl}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}