import { BarChart } from "lucide-react";

export default function NonTrSurveyPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Survey Kepuasan Pelanggan (Non-TR)</h1>
        <p className="mt-2 text-lg text-muted-foreground">Bantu kami meningkatkan layanan untuk instalasi Tegangan Menengah dan Tinggi.</p>
      </header>
      <main className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <BarChart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Survey Segera Tersedia</h2>
            <p className="text-muted-foreground mt-2">Formulir survey kepuasan pelanggan untuk layanan Non-Tegangan Rendah sedang kami siapkan. Terima kasih atas partisipasi Anda nanti.</p>
        </div>
      </main>
    </div>
  );
}
