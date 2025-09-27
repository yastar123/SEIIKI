import { Users } from "lucide-react";

export default function OrganizationalStructurePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Struktur Organisasi</h1>
        <p className="mt-2 text-lg text-muted-foreground">Kenali tim dan struktur yang mendukung operasi kami.</p>
      </header>
      <main className="max-w-5xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <Users className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Bagan Organisasi</h2>
            <p className="text-muted-foreground mt-2">Bagan struktur organisasi perusahaan kami sedang diperbarui dan akan segera ditampilkan di sini.</p>
            <div className="mt-8 w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Placeholder untuk bagan organisasi]</p>
            </div>
        </div>
      </main>
    </div>
  );
}
