import { Handshake } from "lucide-react";

export default function CsrPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Corporate Social Responsibility (CSR)</h1>
        <p className="mt-2 text-lg text-muted-foreground">Komitmen kami untuk memberikan dampak positif bagi masyarakat dan lingkungan.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <Handshake className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Informasi Program CSR</h2>
            <p className="text-muted-foreground mt-2">Halaman ini akan merinci berbagai program tanggung jawab sosial perusahaan yang telah dan akan kami laksanakan. Nantikan pembaruan dari kami.</p>
        </div>
      </main>
    </div>
  );
}
