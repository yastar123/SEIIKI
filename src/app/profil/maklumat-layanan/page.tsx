import { Handshake } from "lucide-react";

export default function ServiceDeclarationPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Maklumat Layanan</h1>
        <p className="mt-2 text-lg text-muted-foreground">Komitmen kami untuk memberikan pelayanan yang profesional dan berintegritas.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="space-y-4 text-center">
            <Handshake className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Maklumat Pelayanan</h2>
            <p className="text-muted-foreground mt-2 text-lg italic">
              "Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
            </p>
        </div>
      </main>
    </div>
  );
}
