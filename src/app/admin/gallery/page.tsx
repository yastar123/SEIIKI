'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';

// Mock data
const mockGallery = [
  {
    id: '1',
    title: 'Instalasi SLO TR - Rumah Tinggal',
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4073b?w=400&h=300&fit=crop',
    description: 'Contoh instalasi listrik rumah tangga dengan sertifikat SLO TR',
    category: 'SLO TR',
    order: 1,
  },
  {
    id: '2',
    title: 'Pemeriksaan Instalasi TM',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
    description: 'Proses pemeriksaan instalasi tegangan menengah untuk industri',
    category: 'SLO TM',
    order: 2,
  },
  {
    id: '3',
    title: 'Tim Ahli SEIIKI',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    description: 'Tim ahli listrik bersertifikat melakukan inspeksi',
    category: 'Tim',
    order: 3,
  },
  {
    id: '4',
    title: 'Sertifikat SLO',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    description: 'Contoh sertifikat laik operasi yang telah diterbitkan',
    category: 'Sertifikat',
    order: 4,
  },
];

export default function GalleryPage() {
  const [gallery] = useState(mockGallery);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['SLO TR', 'SLO TM', 'Tim', 'Sertifikat', 'Kantor'];

  const filteredGallery = gallery.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Galeri</h1>
          <p className="text-muted-foreground">
            Kelola gambar dan foto yang ditampilkan di website
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Gambar
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari gambar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-input rounded-md text-sm"
        >
          <option value="">Semua Kategori</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredGallery.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48 bg-muted">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="bg-secondary px-2 py-1 rounded">
                  {item.category}
                </span>
                <span className="text-muted-foreground">#{item.order}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGallery.length === 0 && (
        <div className="text-center py-12">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold">Tidak ada gambar</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload gambar pertama untuk galeri.
          </p>
          <div className="mt-6">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Upload Gambar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}