import { ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LicensingDocumentsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Dokumen Perijinan</h1>
        <p className="mt-2 text-lg text-muted-foreground">Legalitas dan akreditasi resmi dari lembaga yang berwenang.</p>
      </header>
      <main className="max-w-6xl mx-auto">
        <div className="text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold">Daftar Dokumen</h2>
          <p className="text-muted-foreground mt-2">Berikut adalah contoh dokumen perijinan dan akreditasi. Tautan dan pratinjau bersifat dummy.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Izin Usaha Jasa Penunjang Tenaga Listrik',
              subtitle: 'Keputusan BKPM 04 Nov 2016',
              img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
            {
              title: 'Penetapan LIT-TR',
              subtitle: 'SK Menteri ESDM 02 Feb 2017',
              img: 'https://images.unsplash.com/photo-1530143311094-34d807799e7a?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
            {
              title: 'SK Penunjukan LIT Tenaga Listrik',
              subtitle: 'No. 327.K/20/DJL.4/2020',
              img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
            {
              title: 'SK Penunjukan Jaringan TR',
              subtitle: 'No. 464.K/20/DJL.4/2020',
              img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
            {
              title: 'Akreditasi LIT-TR',
              subtitle: 'No. 5.Stf/TL.07/DJL.4/2022',
              img: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
            {
              title: 'Akreditasi PLTD & PLTS, Pemanfaatan TM',
              subtitle: 'No. 23.Stf/TL.07/DJL.4/2021',
              img: 'https://images.unsplash.com/photo-1516503412384-a87d4714500e?q=80&w=1200&auto=format&fit=crop',
              href: '#',
            },
          ].map((doc, i) => (
            <Card key={i} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={doc.img} alt={doc.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">{doc.subtitle}</p>
                <div className="mt-4 flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href={doc.href}>Pratinjau</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={doc.href}>Unduh</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
