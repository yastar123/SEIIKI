import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  const galleryImages = placeholderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Galeri Proyek</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Lihat beberapa momen dari pekerjaan kami, mulai dari inspeksi detail hingga keberhasilan sertifikasi.
          </p>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
