import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PjtNonTrListPage() {
  type Row = {
    nama: string;
    nik: string;
    subbidang: string;
    jabatan: string;
    level: string;
    sertifikat: string;
  };

  const pemanfaatanTM: Row[] = [
    { nama: "Josua Hasundungan", nik: "32750813******16", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "PJT", level: "3", sertifikat: "Q047.0.14.M032.12.2019" },
    { nama: "Linggom Tambunan", nik: "32750428******13", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "Q044.0.14.M032.12.2019" },
    { nama: "Rahman", nik: "31740909******13", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "Q045.0.14.M032.12.2019" },
    { nama: "Muh Nur", nik: "74710517******02", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0370.0.04.D032.02.2018" },
    { nama: "Krisna Gunawan", nik: "21710903******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0014.0.14.M033.01.2020" },
    { nama: "Timbul Juliman Silalahi", nik: "21711217******03", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "4", sertifikat: "0016.0.14.M034.01.2020" },
    { nama: "Apendi Bin H.Junedi", nik: "36031603******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0850.0.11.M033.08.2020" },
    { nama: "Ferry Mailuhu", nik: "81710213******03", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0851.0.11.M033.08.2020" },
    { nama: "Fitra Basri", nik: "82720208******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0852.0.11.M033.08.2020" },
    { nama: "Ahiruddin. L", nik: "74710727******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0853.0.11.M033.08.2020" },
    { nama: "Bardi Darwis", nik: "32731425******02", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0854.0.11.M033.08.2020" },
    { nama: "Yulianti", nik: "32750157******14", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0841.0.11.M032.08.2020" },
    { nama: "Djemy Royger Hendrik Tampi", nik: "71710819******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0855.0.11.M033.08.2020" },
    { nama: "William Georgen Klisman Waroy", nik: "92021216******07", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0856.0.11.M033.08.2020" },
    { nama: "Saparuddin", nik: "73101017******02", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0857.0.11.M033.08.2020" },
    { nama: "Trio Batavia", nik: "64060218******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0843.0.11.M032.08.2020" },
    { nama: "Bustan", nik: "64080425******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0858.0.11.M033.08.2020" },
    { nama: "Hasbullah", nik: "63030614******03", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0844.0.11.M032.08.2020" },
    { nama: "Muhtadin", nik: "61120901******10", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0845.0.11.M032.08.2020" },
    { nama: "Marianus Rianto Janggor", nik: "53081510******01", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0846.0.11.M032.08.2020" },
    { nama: "Muhammad Azwan Hadi", nik: "52020314******03", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0859.0.11.M033.08.2020" },
    { nama: "Budhi Nur Hidayat", nik: "32770113******20", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "3", sertifikat: "0860.0.11.M033.08.2020" },
    { nama: "Feriyanto", nik: "62710304******06", subbidang: "Pemanfaatan Tenaga Listrik Tegangan Menengah", jabatan: "TT", level: "2", sertifikat: "0847.0.11.M032.08.20" },
  ];

  const pltd: Row[] = [
    { nama: "Andry Stevanus", nik: "32750808******23", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "PJT", level: "3", sertifikat: "Q084.0.14.P032.12.2019" },
    { nama: "Herman Andreas", nik: "51710427******06", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "Q081.0.14.P032.12.2019" },
    { nama: "Mulianto Gultom", nik: "32150314******11", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "2", sertifikat: "Q085.0.14.P032.12.2019" },
    { nama: "Daniel Parulian", nik: "31750208******07", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "Q082.0.14.P032.12.2019" },
    { nama: "Ahmad Farid", nik: "31740313******02", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "Q083.0.14.P032.12.2019" },
    { nama: "Ajat Sudrajat", nik: "36030112******03", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H885.0.12.P013.08.2020" },
    { nama: "Johan Suwondo", nik: "81710213******03", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H888.0.12.P013.08.2020" },
    { nama: "Muhammad Qadri", nik: "82720112******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H887.0.12.P013.08.2020" },
    { nama: "Syaiful Wally", nik: "74720601******03", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H890.0.12.P013.08.2020" },
    { nama: "Sudarwanto", nik: "13711112******07", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H889.0.12.P013.08.2020" },
    { nama: "Linggom Tambunan", nik: "32750428******13", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "2", sertifikat: "H898.0.12.P013.08.2020" },
    { nama: "Jamal", nik: "73080814******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H891.0.12.P013.08.2020" },
    { nama: "Makmur", nik: "18710518******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "2", sertifikat: "H897.0.12.P013.08.2020" },
    { nama: "Zainal Ali", nik: "63031505******04", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "2", sertifikat: "H899.0.12.P013.08.2020" },
    { nama: "Anjur Sitohang", nik: "32160923******14", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H894.0.12.P013.08.2020" },
    { nama: "Heri Darmawan", nik: "32040503******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "2", sertifikat: "H900.0.12.P013.08.2020" },
    { nama: "Ahmad Khaerurrrozikin", nik: "52710508******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H893.0.12.P013.08.2020" },
    { nama: "Lewan Simatupang", nik: "32732011******01", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H895.0.12.P013.08.2020" },
    { nama: "Somitra Total Oswald Akar", nik: "62710307******06", subbidang: "Pembangkit Listrik Tenga Diesel", jabatan: "TT", level: "3", sertifikat: "H896.0.12.P013.08.2020" },
  ];

  const plts: Row[] = [
    { nama: "Daniel Parulian", nik: "31750208******07", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "PJT", level: "3", sertifikat: "Q086.0.14.P032.12.2019" },
    { nama: "Herwan Irmawan", nik: "32740113******10", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "TT", level: "3", sertifikat: "0047.0.12.P023.01.2021" },
    { nama: "Wawan Wahdiana", nik: "32750825******13", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "TT", level: "3", sertifikat: "0048.0.12.P023.01.2021" },
    { nama: "Eben Ezer Limbong", nik: "12711106******02", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "TT", level: "3", sertifikat: "0043.0.12.P023.01.2021" },
    { nama: "Samuel Christian", nik: "31750913******06", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "TT", level: "3", sertifikat: "L334.0.12.P023.12.2020" },
    { nama: "Anjur Sitohang", nik: "32160923******14", subbidang: "Pembangkit Listrik Tenga Surya", jabatan: "TT", level: "3", sertifikat: "L332.0.12.P023.12.2020" },
  ];

  const jaringanTM: Row[] = [
    { nama: "Herman Andreas", nik: "51710427******06", subbidang: "Jaringan Distribusi TM", jabatan: "PJT", level: "3", sertifikat: "Q051.0.14.D032.12.2019" },
    { nama: "Bardi Darwis", nik: "32731425******02", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "3", sertifikat: "1744.0.11.D032.06.2021" },
    { nama: "Muh Nur", nik: "74710517******02", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "2", sertifikat: "0392.0.04.D032.02.2018" },
    { nama: "Ade Renato Manusaway", nik: "92021502******01", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "2", sertifikat: "0355.0.04.D032.02.2018" },
    { nama: "Herwan Irmawan", nik: "32740113******10", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "2", sertifikat: "Q048.0.14.D032.12.2019" },
    { nama: "Wawan Wahdiana", nik: "32750825******13", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "3", sertifikat: "Q049.0.14.D032.12.2019" },
    { nama: "ANDRE SILALAHI, HP", nik: "21711020******02", subbidang: "Jaringan Distribusi TM", jabatan: "TT", level: "3", sertifikat: "3750.0.02.D033.08.2020" },
  ];

  const jaringanTR: Row[] = [
    { nama: "Jhonson Martin", nik: "71020129******01", subbidang: "Jaringan Distribusi TR", jabatan: "PJT", level: "3", sertifikat: "0360.0.14.D033.03.2020" },
    { nama: "Josua Hasundungan", nik: "32750813******16", subbidang: "Jaringan Distribusi TR", jabatan: "TT", level: "3", sertifikat: "Q050.0.14.D032.12.2019" },
    { nama: "Des Rizal", nik: "32160611******07", subbidang: "Jaringan Distribusi TR", jabatan: "TT", level: "2", sertifikat: "Q054.0.14.D032.12.2019" },
    { nama: "Andry Stevanus", nik: "32750808******23", subbidang: "Jaringan Distribusi TR", jabatan: "TT", level: "2", sertifikat: "Q052.0.14.D032.12.2019" },
    { nama: "Bardi Darwis", nik: "32731425******02", subbidang: "Jaringan Distribusi TR", jabatan: "TT", level: "2", sertifikat: "1745.0.11.D032.06.2021" },
  ];

  const Section = ({ title, rows }: { title: string; rows: Row[] }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold font-headline mb-3">{title}</h2>
      <div className="bg-card rounded-lg shadow-md p-2 md:p-4">
        <Table>
          <TableCaption>{title}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead className="min-w-[320px]">Subbidang</TableHead>
              <TableHead>Jabatan</TableHead>
              <TableHead>LEVEL</TableHead>
              <TableHead>No. Sertifikat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={`${r.nama}-${r.nik}-${i}`}>
                <TableCell className="whitespace-nowrap">{r.nama}</TableCell>
                <TableCell className="whitespace-nowrap">{r.nik}</TableCell>
                <TableCell>{r.subbidang}</TableCell>
                <TableCell>{r.jabatan}</TableCell>
                <TableCell>{r.level}</TableCell>
                <TableCell className="whitespace-nowrap">{r.sertifikat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="py-6 md:py-8 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Daftar PJT TT Non TR</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">Ringkasan sertifikasi untuk subbidang Non-TR.</p>
      </header>

      <Section title="Pemanfaatan TM" rows={pemanfaatanTM} />
      <Section title="Pembangkit Listrik Tenaga Diesel" rows={pltd} />
      <Section title="Pembangkit Listrik Tenaga Surya" rows={plts} />
      <Section title="Jaringan Distribusi TM" rows={jaringanTM} />
      <Section title="Jaringan Distribusi TR" rows={jaringanTR} />
    </div>
  );
}
