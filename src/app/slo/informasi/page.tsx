import { Info } from "lucide-react";

export default function SloInfoPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Informasi SLO</h1>
        <p className="mt-2 text-lg text-muted-foreground">Pahami apa itu Sertifikat Laik Operasi (SLO) dan mengapa itu penting.</p>
      </header>
       <main className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="space-y-6">
            <div className="text-center">
                <Info className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold">Apa itu SLO?</h2>
            </div>
            <p className="text-muted-foreground">
                Sertifikat Laik Operasi (SLO) adalah bukti pengakuan formal bahwa suatu instalasi tenaga listrik telah berfungsi sebagaimana mestinya dan memenuhi persyaratan keselamatan ketenagalistrikan. Sertifikat ini wajib dimiliki untuk setiap instalasi listrik yang akan dioperasikan, sesuai dengan Undang-Undang No. 30 Tahun 2009 tentang Ketenagalistrikan.
            </p>
            <h3 className="text-xl font-semibold">Mengapa SLO Penting?</h3>
             <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                <li><strong>Keselamatan:</strong> Memastikan instalasi aman dari risiko korsleting, kebakaran, dan bahaya listrik lainnya.</li>
                <li><strong>Kepatuhan Hukum:</strong> Merupakan syarat wajib dari pemerintah dan PLN untuk penyambungan listrik baru atau tambah daya.</li>
                <li><strong>Keandalan:</strong> Menjamin bahwa instalasi dapat beroperasi dengan andal dan efisien.</li>
                <li><strong>Klaim Asuransi:</strong> Menjadi dokumen pendukung penting saat mengajukan klaim asuransi terkait insiden kelistrikan.</li>
            </ul>
        </div>
      </main>
    </div>
  );
}
