import { FileText } from "lucide-react";

export default function DigitalBookPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Buku Digital</h1>
        <p className="mt-2 text-lg text-muted-foreground">Akses publikasi dan materi informatif kami dalam format digital.</p>
      </header>
      <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Segera Hadir</h2>
            <p className="text-muted-foreground mt-2">Kami sedang menyiapkan koleksi buku digital, panduan, dan materi lainnya. Silakan periksa kembali nanti.</p>
        </div>
      </main>
    </div>
  );
}
