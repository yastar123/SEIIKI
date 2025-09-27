'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Star } from 'lucide-react';

// Mock data
const mockServices = [
  {
    id: '1',
    title: 'SLO Tegangan Rendah (TR)',
    description: 'Sertifikasi untuk instalasi listrik rumah tangga, bisnis kecil, dan fasilitas umum dengan standar keamanan tertinggi.',
    icon: 'Zap',
    imageUrl: null,
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'SLO Tegangan Menengah (TM)',
    description: 'Layanan sertifikasi untuk instalasi industri, komersial besar, dan jaringan distribusi dengan keandalan terjamin.',
    icon: 'ShieldCheck',
    imageUrl: null,
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Konsultasi & Uji Petik',
    description: 'Dukungan ahli untuk perencanaan, pemeliharaan, dan pengujian instalasi listrik Anda agar selalu laik operasi.',
    icon: 'FileText',
    imageUrl: null,
    featured: true,
    order: 3,
  },
];

export default function ServicesPage() {
  const [services] = useState(mockServices);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Layanan</h1>
          <p className="text-muted-foreground">
            Kelola layanan yang ditampilkan di website
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Layanan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex items-center gap-2">
                  {service.title}
                  {service.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  )}
                </CardTitle>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Icon: {service.icon}</span>
                <span>Order: {service.order}</span>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline">
                  {service.featured ? 'Featured' : 'Regular'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}