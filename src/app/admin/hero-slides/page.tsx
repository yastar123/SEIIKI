'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useHeroSlides } from '@/hooks/use-admin-data';

export default function HeroSlidesPage() {
  const { slides, loading, error, refetch } = useHeroSlides();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error: {error}</p>
        <Button onClick={refetch} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

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