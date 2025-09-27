import { PencilRuler } from "lucide-react";

export default function ServiceStandardPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Pedoman Standar Layanan</h1>
        <p className="mt-2 text-lg text-muted-foreground">Detail standar pelayanan yang kami tawarkan untuk setiap proses sertifikasi.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <PencilRuler className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Sedang Dalam Penyusunan</h2>
            <p className="text-muted-foreground mt-2">Dokumen lengkap mengenai pedoman standar layanan kami sedang dalam tahap finalisasi dan akan segera tersedia untuk diunduh.</p>
        </div>
      </main>
    </div>
  );
}
