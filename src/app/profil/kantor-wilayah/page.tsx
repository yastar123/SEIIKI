import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RegionalOfficePage() {
  type Region = {
    no: number;
    provinsi: string;
    wilayah?: string; // optional per input header
    kepalaWilayah: string;
    alamat: string;
    telepon: string; // may contain multiple numbers separated by '/'
  };

  const regions: Region[] = [
    {
      no: 1,
      provinsi: "Nangroe Aceh Darussalam",
      kepalaWilayah: "JAMALUL HAKIM",
      alamat:
        "JL. TENTARA PELAJAR LR DARUSALAM NO 4 MERDUATI BATOH LUENG BATA KOTA BANDA ACEH ACEH",
      telepon: "081360035780",
    },
    {
      no: 2,
      provinsi: "Sumatera Utara",
      kepalaWilayah: "CHARLES E RICHARD",
      alamat:
        "JL.BUNGA MAWAR NO. 61 A ,KEL. PADANG BULAN SELAYANG II,KEC. MEDAN SELAYANG KOTA MEDAN P BULAN SELAYA",
      telepon: "082360089878",
    },
    {
      no: 3,
      provinsi: "Sumatera Barat",
      kepalaWilayah: "BARDI DARWIS",
      alamat:
        "JL. KAMPUNG KALAWI NO. 27, RT 001/005 KEL. LUBUK LINTAH, KEC. KURANJI, PADANG KURANJI HILIR SUNGAI L",
      telepon: "0811661337",
    },
    {
      no: 4,
      provinsi: "Riau",
      kepalaWilayah: "DEFRIZAL",
      alamat: "JL. YOS SUDARSO GG. GELATIK SRI MERANTI RUMBAI",
      telepon: "081266049277",
    },
    {
      no: 5,
      provinsi: "Jambi",
      kepalaWilayah: "SONI PRANATA",
      alamat:
        "JL.SUNAN BONANG RT.18 KELURAHAN, SIMPANG TIGA SIPIN KEC. KOTABARU, KOTA JAMBI SIMPANG TIGA SIPIN KOT",
      telepon: "082186992659 / 085266177999",
    },
    {
      no: 6,
      provinsi: "Sumatera Selatan",
      kepalaWilayah: "MUHAMMAD RIZA YUNUS",
      alamat:
        "JL.PRAJURID NAZARUDDIN RT.01/RW.01, KEL.SRIMULYA, KEC.SEMATANG BORANG SRI MULYA SEMATANG BORANG KOTA",
      telepon: "082281264000",
    },
    {
      no: 7,
      provinsi: "Bengkulu",
      kepalaWilayah: "SYAIFUL KIFLI",
      alamat:
        "JL SUNGAI RUPAT 3 RT 48/07 KEL. PAGER DEWA - KEC. SELEBAR PAGAR DEWA SELEBAR KOTA BENGKULU BENGKULU",
      telepon: "081278773300",
    },
    {
      no: 8,
      provinsi: "Lampung",
      kepalaWilayah: "KUSMEDI SALIM, SE",
      alamat:
        "JL PULAU BURU NO. 37, WAY HALIM PERMAI, WAY HALIM, BANDAR LAMPUNG WAY HALIM PERMAI WAY HALIM KOTA BA",
      telepon: "08121212712",
    },
    {
      no: 9,
      provinsi: "Bangka Belitung",
      kepalaWilayah: "ELFINO",
      alamat:
        "JL. DEPATI AMIR NO. 34 RT/RW. 002/001 KEL. PINTU AIR KEC.RANGKUI PINTU AIR RANGKUI, KOTA PANGKAL PIN",
      telepon: "081379288278",
    },
    {
      no: 10,
      provinsi: "Kepulauan Riau",
      kepalaWilayah: "ANGEL DWINATA SILALAHI",
      alamat:
        "KOMPLEK PERTOKOAN GRAND NIAGA MAS BLOK B NO. 69 KEL. BELIAN KEC. BATAM KOTA - KOTA BATAM",
      telepon: "085271737592",
    },
  ];

  const normalizePhones = (raw: string) =>
    raw
      .split(/[\/,]/)
      .map((s) => s.trim())
      .filter(Boolean);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-6 md:py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Daftar Kantor Wilayah</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
          Informasi kantor wilayah, kepala wilayah, alamat, dan kontak.
        </p>
      </header>

      <div className="bg-card rounded-lg shadow-md p-2 md:p-4">
        <Table>
          <TableCaption>Data kantor wilayah SEIIKI</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">No</TableHead>
              <TableHead>Provinsi</TableHead>
              <TableHead>Wilayah</TableHead>
              <TableHead className="min-w-[200px]">Kepala Wilayah</TableHead>
              <TableHead className="min-w-[320px]">Alamat</TableHead>
              <TableHead>Telepon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {regions.map((r) => (
              <TableRow key={r.no}>
                <TableCell className="font-medium">{r.no}</TableCell>
                <TableCell className="whitespace-nowrap">{r.provinsi}</TableCell>
                <TableCell>{r.wilayah && r.wilayah.trim() !== "" ? r.wilayah : "-"}</TableCell>
                <TableCell className="whitespace-nowrap">{r.kepalaWilayah}</TableCell>
                <TableCell>{r.alamat}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {normalizePhones(r.telepon).map((p, i) => (
                      <a key={i} href={`tel:${p.replace(/\s+/g, "")}`} className="text-primary hover:underline">
                        {p}
                      </a>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
