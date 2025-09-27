import { ShieldCheck } from "lucide-react";

export default function LicensingDocumentsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Dokumen Perijinan</h1>
        <p className="mt-2 text-lg text-muted-foreground">Legalitas dan akreditasi resmi dari lembaga yang berwenang.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <ShieldCheck className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Konten Dalam Persiapan</h2>
            <p className="text-muted-foreground mt-2">Halaman ini akan menampilkan daftar lengkap dokumen perijinan dan akreditasi kami. Silakan kunjungi kembali.</p>
        </div>
      </main>
    </div>
  );
}
