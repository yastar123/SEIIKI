import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SloCostPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Biaya SLO TR</h1>
        <p className="mt-2 text-lg text-muted-foreground">Rincian PNBP dan biaya pemeriksaan & pengujian instalasi pemanfaatan tenaga listrik Tegangan Rendah (TR).</p>
      </header>
      <main className="max-w-6xl mx-auto space-y-10">
        <section className="bg-card p-6 md:p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">PP No. 19 Tahun 2025 terkait PNBP</h2>
              <p className="text-muted-foreground mt-1">PNBP atas Penerbitan Nomor Registrasi Sertifikat Laik Operasi (SLO) Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah.</p>
            </div>
            <div>
              <Button asChild>
                <Link href="#">Download PP No. 19 Tahun 2025</Link>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Table>
              <TableCaption>PNBP atas Penerbitan Nomor Registrasi SLO (TR)</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>PNBP (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[ 
                  { no: 1, daya: "~ 900", pnbp: "1,000" },
                  { no: 2, daya: "1.300 - 2.200", pnbp: "3,000" },
                  { no: 3, daya: "3.500 - 197.000", pnbp: "10,000" },
                  { no: 4, daya: "Diatas 197.000", pnbp: "50,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.pnbp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="bg-card p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Biaya Pemeriksaan & Pengujian Instalasi TR</h2>
          <p className="text-muted-foreground mt-1">Berdasarkan Peraturan Menteri ESDM Republik Indonesia Nomor 2 Tahun 2025.</p>

          <div className="mt-6">
            <Table>
              <TableCaption>Tarif tetap berdasarkan daya kecil</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 1, daya: "~450", biaya: "40,000" },
                  { no: 2, daya: "900", biaya: "60,000" },
                  { no: 3, daya: "1300", biaya: "120,000" },
                  { no: 4, daya: "2200", biaya: "135,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 35/VA — Daya tersambung 3.500 VA s.d. 7.700 VA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 5, daya: "3500", biaya: "122,500" },
                  { no: 6, daya: "4400", biaya: "154,000" },
                  { no: 7, daya: "5500", biaya: "192,500" },
                  { no: 8, daya: "6600", biaya: "231,000" },
                  { no: 9, daya: "7700", biaya: "269,500" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 30/VA — Daya tersambung 10.600 VA s.d. 23.000 VA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 10, daya: "10600", biaya: "318,000" },
                  { no: 11, daya: "11000", biaya: "330,000" },
                  { no: 12, daya: "13200", biaya: "396,000" },
                  { no: 13, daya: "16500", biaya: "495,000" },
                  { no: 14, daya: "23000", biaya: "690,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 25/VA — Daya tersambung 33.000 VA s.d. 66.000 VA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 15, daya: "33000", biaya: "825,000" },
                  { no: 16, daya: "41500", biaya: "1,037,500" },
                  { no: 17, daya: "53000", biaya: "1,325,000" },
                  { no: 18, daya: "66000", biaya: "1,650,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 20/VA — Daya tersambung 82.500 VA s.d. 197.000 VA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 19, daya: "82500", biaya: "1,650,000" },
                  { no: 20, daya: "105000", biaya: "2,100,000" },
                  { no: 21, daya: "131000", biaya: "2,620,000" },
                  { no: 22, daya: "147000", biaya: "2,940,000" },
                  { no: 23, daya: "164000", biaya: "3,280,000" },
                  { no: 24, daya: "197000", biaya: "3,940,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 15/VA — Daya tersambung di atas 197 kVA s.d. 1 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 25, daya: "240000", biaya: "3,600,000" },
                  { no: 26, daya: "345000", biaya: "5,175,000" },
                  { no: 27, daya: "415000", biaya: "6,225,000" },
                  { no: 28, daya: "555000", biaya: "8,325,000" },
                  { no: 29, daya: "690000", biaya: "10,350,000" },
                  { no: 30, daya: "725000", biaya: "10,875,000" },
                  { no: 31, daya: "865000", biaya: "12,975,000" },
                  { no: 32, daya: "935000", biaya: "14,025,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 11/VA — Daya tersambung di atas 1 MVA s.d. 2 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 33, daya: "1110000", biaya: "12,210,000" },
                  { no: 36, daya: "1210000", biaya: "13,310,000" },
                  { no: 37, daya: "1385000", biaya: "15,235,000" },
                  { no: 38, daya: "1450000", biaya: "15,950,000" },
                  { no: 39, daya: "1730000", biaya: "19,030,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 9/VA — Daya tersambung di atas 2 MVA s.d. 3 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 40, daya: "2180000", biaya: "19,620,000" },
                  { no: 41, daya: "2258000", biaya: "20,322,000" },
                  { no: 42, daya: "2500000", biaya: "22,500,000" },
                  { no: 43, daya: "2770000", biaya: "24,930,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 7/VA — Daya tersambung di atas 3 MVA s.d. 5 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 44, daya: "3465000", biaya: "24,255,000" },
                  { no: 45, daya: "4330000", biaya: "30,310,000" },
                  { no: 46, daya: "5190000", biaya: "36,330,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 5/VA — Daya tersambung di atas 5 MVA s.d. 12 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 47, daya: "5540000", biaya: "27,700,000" },
                  { no: 48, daya: "6000000", biaya: "30,000,000" },
                  { no: 49, daya: "6055000", biaya: "30,275,000" },
                  { no: 50, daya: "6930000", biaya: "34,650,000" },
                  { no: 51, daya: "8660000", biaya: "43,300,000" },
                  { no: 52, daya: "9660000", biaya: "48,300,000" },
                  { no: 53, daya: "10380000", biaya: "51,900,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Rp. 4/VA — Daya tersambung di atas 12 MVA s.d. 46 MVA</h3>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">No.</TableHead>
                  <TableHead>DAYA (VA)</TableHead>
                  <TableHead>BIAYA (Rp)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: 54, daya: "13800000", biaya: "55,200,000" },
                  { no: 55, daya: "15000000", biaya: "60,000,000" },
                  { no: 56, daya: "15280000", biaya: "61,120,000" },
                  { no: 57, daya: "15588000", biaya: "62,352,000" },
                  { no: 58, daya: "16300000", biaya: "65,200,000" },
                  { no: 59, daya: "18580000", biaya: "74,320,000" },
                  { no: 60, daya: "18705000", biaya: "74,820,000" },
                  { no: 61, daya: "23200000", biaya: "92,800,000" },
                  { no: 62, daya: "24500000", biaya: "98,000,000" },
                  { no: 63, daya: "25000000", biaya: "100,000,000" },
                  { no: 64, daya: "30000000", biaya: "120,000,000" },
                ].map((r) => (
                  <TableRow key={r.no}>
                    <TableCell className="font-medium">{r.no}</TableCell>
                    <TableCell>{r.daya}</TableCell>
                    <TableCell>{r.biaya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
