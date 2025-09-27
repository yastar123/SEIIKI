import { Gavel } from "lucide-react";

export default function SopPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Standar Operasi Prosedur (SOP)</h1>
        <p className="mt-2 text-lg text-muted-foreground">Prosedur kerja standar kami untuk menjamin kualitas dan konsistensi layanan.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <Gavel className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Konten Segera Tersedia</h2>
            <p className="text-muted-foreground mt-2">Dokumentasi lengkap mengenai Standar Operasi Prosedur (SOP) kami untuk setiap layanan akan segera dipublikasikan di sini.</p>
        </div>
      </main>
    </div>
  );
}
