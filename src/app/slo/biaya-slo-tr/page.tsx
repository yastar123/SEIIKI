import { FileText } from "lucide-react";

export default function SloCostPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Biaya SLO</h1>
        <p className="mt-2 text-lg text-muted-foreground">Informasi transparan mengenai biaya sertifikasi laik operasi.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Tabel Biaya Sedang Disiapkan</h2>
            <p className="text-muted-foreground mt-2">Rincian biaya untuk layanan SLO Tegangan Rendah (TR) dan Non-TR akan segera kami tampilkan di sini sesuai dengan peraturan yang berlaku.</p>
        </div>
      </main>
    </div>
  );
}
