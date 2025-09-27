import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Target } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto p-4 md:p-8">
        <header className="py-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-primary">Visi &amp; Misi</h1>
          <p className="mt-2 text-lg text-muted-foreground">Arah dan tujuan yang menjadi pemandu langkah kami.</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <Gem className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="mt-4 text-3xl font-headline">Visi</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-muted-foreground">
                        Menjadi lembaga inspeksi teknik terkemuka dan terpercaya di Indonesia yang berperan aktif dalam mewujudkan ekosistem ketenagalistrikan yang aman, andal, dan berstandar internasional.
                    </p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <Target className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="mt-4 text-3xl font-headline">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                        <li>Menyelenggarakan pelayanan inspeksi dan sertifikasi laik operasi secara profesional, independen, dan tidak memihak.</li>
                        <li>Mengembangkan kompetensi sumber daya manusia secara berkelanjutan untuk menghasilkan tenaga ahli yang unggul.</li>
                        <li>Mengimplementasikan teknologi digital untuk meningkatkan efisiensi dan transparansi layanan.</li>
                        <li>Memberikan edukasi kepada masyarakat mengenai pentingnya keselamatan ketenagalistrikan.</li>
                    </ul>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
