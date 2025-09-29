import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Target } from "lucide-react";
export default function VisionMissionPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto p-4 md:p-8">
        <header className="py-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-primary">Visi Misi &amp; Motto</h1>
          <p className="mt-2 text-lg text-muted-foreground">SEIIKI (PT. SOLUSI ENERGI KELISTRIKAN INDONESIA)</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Gem className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4 text-3xl font-headline">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  Sebagai Lembaga Inspeksi Teknik Tegangan Rendah (LIT-TR), Tegangan Menengah (TM), Distribusi / Jaringan Tegangan Rendah, Menengah, Pembangkit yang terkemuka, unggul dan terpercaya.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4 text-3xl font-headline">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  Pembawa keselamatan ketenagalistrikan guna mewujudkan instalasi tenaga listrik yang terpasang sudah sesuai dengan standar yang dipersyaratkan dengan memberikan pelayanan yang profesional.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="mt-4 text-3xl font-headline">Motto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-semibold">Aman Terpercaya</p>
              </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
