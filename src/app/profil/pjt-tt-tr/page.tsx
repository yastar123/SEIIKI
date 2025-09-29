import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PjtTrListPage() {
  type Entry = {
    wilayah: string;
    area: string;
    nama: string;
    nik: string; // masked as provided
    subBidang: string;
    jabatan: string; // TT
    level: string;
    nomorSertifikat: string;
  };

  const entries: Entry[] = [
    {
      wilayah: "ACEH",
      area: "BANDA ACEH",
      nama: "AWALUDDIN",
      nik: "11060913******02",
      subBidang: "Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah",
      jabatan: "TT",
      level: "Level 2",
      nomorSertifikat: "0750.P.11.M032.04.2023",
    },
    {
      wilayah: "ACEH",
      area: "LANGSA",
      nama: "NUHRIADI",
      nik: "11740310******07",
      subBidang: "Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah",
      jabatan: "TT",
      level: "Level 2",
      nomorSertifikat: "1091.P.11.M032.05.2023",
    },
    {
      wilayah: "ACEH",
      area: "LHOKSEUMAWE",
      nama: "M. KHAIDIR",
      nik: "11730208******05",
      subBidang: "Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah",
      jabatan: "TT",
      level: "Level 2",
      nomorSertifikat: "0751.P.11.M032.04.2023",
    },
    {
      wilayah: "ACEH",
      area: "MEULABOH",
      nama: "ZULFIKAR",
      nik: "11120508******03",
      subBidang: "Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah",
      jabatan: "TT",
      level: "Level 2",
      nomorSertifikat: "3194.P.11.M032.11.2021",
    },
    {
      wilayah: "ACEH",
      area: "SIGLI",
      nama: "SYAHRULLAH",
      nik: "11071403******01",
      subBidang: "Instalasi Pemanfaatan Tenaga Listrik Tegangan Rendah",
      jabatan: "TT",
      level: "Level 2",
      nomorSertifikat: "3191.P.11.M032.10.2022",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-6 md:py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Daftar PJT TT TR</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">Pemanfaatan TR</p>
      </header>

      <div className="bg-card rounded-lg shadow-md p-2 md:p-4">
        <Table>
          <TableCaption>Data PJT TT TR - Pemanfaatan Tegangan Rendah</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Wilayah</TableHead>
              <TableHead>Nama Area</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead className="min-w-[320px]">Sub Bidang</TableHead>
              <TableHead>Jabatan</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Nomor Sertifikat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((e, idx) => (
              <TableRow key={`${e.area}-${e.nama}-${idx}`}>
                <TableCell>{e.wilayah}</TableCell>
                <TableCell className="whitespace-nowrap">{e.area}</TableCell>
                <TableCell className="whitespace-nowrap">{e.nama}</TableCell>
                <TableCell className="whitespace-nowrap">{e.nik}</TableCell>
                <TableCell>{e.subBidang}</TableCell>
                <TableCell>{e.jabatan}</TableCell>
                <TableCell>{e.level}</TableCell>
                <TableCell className="whitespace-nowrap">{e.nomorSertifikat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
