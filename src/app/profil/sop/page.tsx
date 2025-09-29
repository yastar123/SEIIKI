import { Gavel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SopPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Standar Operasi Prosedur (SOP)</h1>
        <p className="mt-2 text-lg text-muted-foreground">Prosedur kerja standar kami untuk menjamin kualitas dan konsistensi layanan.</p>
      </header>
      <main className="max-w-6xl mx-auto">
        <div className="text-center">
          <Gavel className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold">Daftar SOP</h2>
          <p className="text-muted-foreground mt-2">Berikut adalah contoh kartu SOP dengan tautan dummy dan gambar online.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'SOP Pendaftaran SLO', subtitle: 'Alur dan persyaratan pendaftaran', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', href: '#' },
            { title: 'SOP Pemeriksaan Lapangan', subtitle: 'Tahapan inspeksi on-site', img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop', href: '#' },
            { title: 'SOP Pengujian Instalasi', subtitle: 'Parameter uji dan standar', img: 'https://images.unsplash.com/photo-1581093588401-16c7ff3d83f0?q=80&w=1200&auto=format&fit=crop', href: '#' },
            { title: 'SOP Penerbitan SLO', subtitle: 'Validasi, verifikasi, penerbitan', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop', href: '#' },
            { title: 'SOP Penanganan Keluhan', subtitle: 'Resolusi dan eskalasi', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop', href: '#' },
            { title: 'SOP K3 Inspeksi', subtitle: 'Keselamatan dan kesehatan kerja', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop', href: '#' },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                <div className="mt-4 flex gap-3">
                  <Button asChild variant="outline" size="sm"><Link href={item.href}>Lihat</Link></Button>
                  <Button asChild size="sm"><Link href={item.href}>Unduh</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
