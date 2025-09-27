import { Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CustomerComplaintPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Keluhan Pelanggan</h1>
        <p className="mt-2 text-lg text-muted-foreground">Sampaikan masukan, saran, atau keluhan Anda untuk membantu kami menjadi lebih baik.</p>
      </header>
       <main className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
            <Siren className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Formulir Keluhan</h2>
        </div>
        <form className="space-y-4">
            <Input placeholder="Nomor Registrasi SLO (jika ada)" />
            <Input placeholder="Nama Anda" required />
            <Input type="email" placeholder="Email Anda" required />
            <Input placeholder="Subjek Keluhan" required />
            <Textarea placeholder="Jelaskan keluhan Anda secara rinci" rows={5} required />
            <Button type="submit" className="w-full">Kirim Keluhan</Button>
        </form>
      </main>
    </div>
  );
}
