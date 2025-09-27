import { Map } from "lucide-react";

export default function AreaOfficePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Kantor Area</h1>
        <p className="mt-2 text-lg text-muted-foreground">Jaringan kantor area kami yang tersebar untuk melayani Anda lebih dekat.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <Map className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Segera Diperbarui</h2>
            <p className="text-muted-foreground mt-2">Kami sedang memperbarui daftar dan detail kontak kantor area kami. Terima kasih atas kesabaran Anda.</p>
        </div>
      </main>
    </div>
  );
}
