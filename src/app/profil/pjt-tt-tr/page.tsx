import { Users } from "lucide-react";

export default function PjtTrListPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Daftar PJT-TT TR</h1>
        <p className="mt-2 text-lg text-muted-foreground">Penanggung Jawab Teknik untuk Tegangan Rendah.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="text-center">
            <Users className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Data Sedang Diperbarui</h2>
            <p className="text-muted-foreground mt-2">Daftar Penanggung Jawab Teknik (PJT) untuk instalasi Tegangan Rendah sedang dalam proses pembaruan dan akan segera tersedia.</p>
        </div>
      </main>
    </div>
  );
}
