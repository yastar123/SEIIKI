'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Search, FileText, Image as ImageIcon } from 'lucide-react';

// Mock data
const mockContent = [
  {
    id: '1',
    title: 'Tentang Kami',
    slug: 'tentang-kami',
    description: 'Halaman informasi tentang perusahaan SEIIKI',
    type: 'PAGE',
    status: 'PUBLISHED',
    featured: true,
    order: 1,
    updatedAt: '2025-01-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Visi & Misi',
    slug: 'visi-misi',
    description: 'Visi dan misi perusahaan',
    type: 'PAGE',
    status: 'PUBLISHED',
    featured: false,
    order: 2,
    updatedAt: '2025-01-14T15:20:00Z',
  },
  {
    id: '3',
    title: 'Cara Mendaftar SLO',
    slug: 'cara-mendaftar-slo',
    description: 'Panduan lengkap mendaftar SLO',
    type: 'POST',
    status: 'DRAFT',
    featured: true,
    order: 3,
    updatedAt: '2025-01-13T09:15:00Z',
  },
];

const statusColors = {
  PUBLISHED: 'default',
  DRAFT: 'secondary',
  ARCHIVED: 'outline',
} as const;

const typeIcons = {
  PAGE: FileText,
  POST: FileText,
  SERVICE: FileText,
  GALLERY: ImageIcon,
} as const;

export default function ContentPage() {
  const [content] = useState(mockContent);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Konten</h1>
          <p className="text-muted-foreground">
            Kelola halaman, artikel, dan konten website
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Konten
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari konten..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredContent.map((item) => {
          const IconComponent = typeIcons[item.type as keyof typeof typeIcons];
          
          return (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      {item.title}
                      <Badge variant={statusColors[item.status as keyof typeof statusColors]}>
                        {item.status}
                      </Badge>
                      {item.featured && (
                        <Badge variant="outline">Featured</Badge>
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
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
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex gap-4">
                    <span>Slug: /{item.slug}</span>
                    <span>Type: {item.type}</span>
                    <span>Order: {item.order}</span>
                  </div>
                  <span>
                    Diperbarui: {new Date(item.updatedAt).toLocaleDateString('id-ID')}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold">Tidak ada konten</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Mulai dengan membuat konten pertama Anda.
          </p>
          <div className="mt-6">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Konten
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}