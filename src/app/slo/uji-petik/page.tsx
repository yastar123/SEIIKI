import { GitBranch } from "lucide-react";

export default function SamplingTestPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Uji Petik</h1>
        <p className="mt-2 text-lg text-muted-foreground">Informasi mengenai proses uji petik acak oleh Direktorat Jenderal Ketenagalistrikan.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <GitBranch className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Proses Uji Petik</h2>
            <p className="text-muted-foreground mt-2">Uji petik adalah proses verifikasi ulang yang dilakukan secara acak oleh pemerintah terhadap SLO yang telah diterbitkan untuk memastikan konsistensi dan kualitas kerja Lembaga Inspeksi Teknik. Kami mendukung penuh program ini sebagai bagian dari komitmen kami terhadap standar tertinggi.</p>
        </div>
      </main>
    </div>
  );
}
