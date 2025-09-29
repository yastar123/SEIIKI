import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SloInfoPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Sertifikat Laik Operasi</h1>
        <p className="mt-2 text-lg text-muted-foreground">Informasi lengkap mengenai SLO, persyaratan dokumen, dan alur penerbitan.</p>
      </header>
      <main className="max-w-5xl mx-auto">
        <section className="bg-card p-6 md:p-8 rounded-lg shadow-md">
          <div className="text-center">
            <Info className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold">Apa itu Sertifikat Laik Operasi (SLO)?</h2>
          </div>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sertifikat Laik Operasi (SLO) adalah sertifikat yang dikeluarkan oleh PT. Serkolinas Aman Nusantara sebagai lembaga inspeksi teknik yang melakukan pengujian dan pemeriksaan instalasi pemanfaatan tenaga listrik tegangan rendah.
            </p>
            <p>
              Sesuai dengan Undang-Undang No 30 tahun 2009 tentang Ketenagalistrikan Pasal 44 ayat 4 yang berbunyi “Setiap instalasi tenaga listrik yang beroperasi wajib memiliki Sertifikat Laik Operasi” lebih lanjut lagi dalam Undang-undang dijelaskan sanksi pelanggaran bagi instalasi listrik yang beroperasi tanpa Sertifikat Laik Operasi.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Dokumen yang Dibutuhkan</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
              <li>KTP Calon Pelanggan</li>
              <li>Mengisi Formulir Pendaftaran</li>
              <li>Menyertakan gambar instalasi listrik yang telah terpasang</li>
            </ul>
          </div>

          <div className="mt-8 text-muted-foreground">
            <p>
              Pemeriksaan dan pengujian instalasi pemanfaatan listrik tegangan rendah termasuk penerbitan Sertifikat Laik Operasi (SLO) dilaksanakan paling lama 3 (tiga) hari kerja sejak permohonan diterima secara lengkap dan benar.
              Proses permohonan hingga penerbitan SLO terdapat pada gambar alur penerbitan SLO di bawah.
            </p>
          </div>

          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop"
              alt="Ilustrasi alur/flow proses penerbitan SLO"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">Ilustrasi alur penerbitan SLO (gambar contoh)</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/slo/pendaftaran">Ajukan SLO Sekarang</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
