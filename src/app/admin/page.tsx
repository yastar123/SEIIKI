'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Image, Settings, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Konten',
      value: '24',
      icon: FileText,
      description: 'Halaman dan artikel',
    },
    {
      title: 'Hero Slides',
      value: '5',
      icon: Image,
      description: 'Slide aktif',
    },
    {
      title: 'Layanan',
      value: '3',
      icon: Settings,
      description: 'Layanan utama',
    },
    {
      title: 'Users',
      value: '12',
      icon: Users,
      description: 'Pengguna terdaftar',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
        <p className="text-muted-foreground">
          Kelola konten dan pengaturan website SEIIKI
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Konten "Tentang Kami" diperbarui
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2 jam yang lalu
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Hero slide baru ditambahkan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1 hari yang lalu
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Layanan "SLO TR" diperbarui
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 hari yang lalu
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">+ Tambah Konten Baru</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">+ Tambah Hero Slide</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">+ Tambah Layanan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}