import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
    const aboutImage = placeholderImages.find(p => p.id === 'about-us');

    const values = [
        { name: "Integritas", description: "Menjunjung tinggi kejujuran dan etika profesional dalam setiap layanan." },
        { name: "Keamanan", description: "Memprioritaskan keselamatan dan kelaikan instalasi listrik." },
        { name: "Profesionalisme", description: "Didukung oleh tim ahli yang kompeten dan bersertifikat." },
        { name: "Pelayanan", description: "Berkomitmen memberikan pelayanan yang cepat, transparan, dan memuaskan." },
    ];

    return (
        <div>
            <section className="bg-secondary">
                <div className="container mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Tentang SEIIKI (PT. SOLUSI ENERGI KELISTRIKAN INDONESIA)</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Mitra terpercaya Anda dalam memastikan keamanan dan kelaikan operasi instalasi tenaga listrik di seluruh Indonesia.
                    </p>
                </div>
            </section>


            {/* Sejarah Singkat */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold font-headline">Sejarah Singkat</h2>
                        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                PT. Serkolinas Aman Nusantara didirikan pada bulan September 2016 dan mendapat Izin Usaha Jasa Penunjang Tenaga Listrik dari Kepala Badan Koordinasi Penanaman Modal tanggal 04 November 2016.
                            </p>
                            <p>
                                Selanjutnya PT. Serkolinas Aman Nusantara pada tanggal 2 Februari 2017 mendapatkan penetapan dari Menteri Energi dan Sumber Daya Mineral sebagai Lembaga Inspeksi Teknik Tegangan Rendah dengan tugas untuk melakukan pemeriksaan dan pengujian instalasi pemanfaatan tenaga listrik tegangan rendah, tegangan menengah, jaringan distribusi serta pembangkit (Rumah, Hotel, Apartemen, Terminal, Mall, Rumah Sakit, genset, trafo, dll) dan menerbitkan Sertifikat Laik Operasi (SLO).
                            </p>
                            <p>
                                Pada tanggal 30 April 2020, PT. Serkolinas Aman Nusantara memperoleh SK Penunjukan nomor 327.K/20/DJL.4/2020 dari Dirjen Ketenagalistrikan sebagai Lembaga Inspeksi Teknik Tenaga Listrik dengan dengan subbidang: a) Pembangkit Listrik Tenaga Diesel (PLTD), b) Pembangkit Listrik Tenaga Energi Baru Lainnya dan Energi Terbarukan Lainnya (PLTS), c) Jaringan Distribusi Tenaga Listrik Tegangan Menengah, d) Instalasi Pemanfaatan Tenaga Listrik Tegangan Menengah.
                            </p>
                            <p>
                                Pada tanggal 19 Agustus 2020, PT. Serkolinas Aman Nusantara memperoleh SK Penunjukan nomor 464.K/20/DJL.4/2020 dari Dirjen Ketenagalistrikan sebagai Lembaga Inspeksi Teknik Tenaga Listrik dengan subbidang Jaringan Distribusi Tenaga Listrik Tegangan Rendah.
                            </p>
                            <p>
                                Kemudian PT. Serkolinas Aman Nusantara memperoleh Akreditasi untuk bidang dan subbidang yang disebutkan sebelumnya sebagai berikut:
                                1) Akreditasi nomor 5.Stf/TL.07/DJL.4/2022 sebagai Lembaga Inspeksi Teknik Tegangan Rendah pada tanggal 2 Februari 2022. 2) Akreditasi nomor 23.Stf/TL.07/DJL.4/2021 sebagai Lembaga Inspeksi Teknik Tenaga Listrik dengan subbidang PLTD dan PLTS serta Pemanfaatan TM pada tanggal 29 Maret 2021. 3) Akreditasi nomor 12.Stf/TL.07/DJL.4/2022 sebagai Lembaga Inspeksi Teknik Tenaga Listrik dengan subbidang Distribusi TM dan Distribusi TR pada tanggal 11 Maret 2022.
                            </p>
                            <p>
                                Komitmen kami untuk memberikan pelayanan SLO secara profesional dengan tenaga teknik pemeriksa instalasi yang kompeten di bidangnya. Kepuasan pelanggan/ konsumen/ pemilik instalasi merupakan komitmen kami. Regulasi pemerintah menjadi acuan kami, PT. PLN (Persero) dan Badan Usaha Kontraktor Listrik menjadi mitra kerja kami.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
                            alt="Infrastruktur kelistrikan Indonesia"
                            className="w-full h-64 md:h-full object-cover rounded-xl shadow-md"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Dasar Hukum */}
            <section className="bg-secondary py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-headline text-center">Dasar Hukum</h2>
                    <p className="mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
                        Landasan regulasi yang menjadi acuan operasional sebagai Lembaga Inspeksi Teknik.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="shadow-sm">
                            <CardHeader>
                                <CardTitle>UURI No. 30 Tahun 2009</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Tentang Ketenagalistrikan.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm">
                            <CardHeader>
                                <CardTitle>PP No. 14 Tahun 2012</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Tentang Kegiatan Usaha Penyediaan Tenaga Listrik.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm">
                            <CardHeader>
                                <CardTitle>Permen ESDM No. 05 Tahun 2014 & No. 38 Tahun 2018</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Tentang Tata Cara Akreditasi dan Sertifikasi Ketenagalistrikan.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm">
                            <CardHeader>
                                <CardTitle>KEPMEN ESDM No. 49 Tahun 2017</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Penetapan PT. Serkolinas Aman Nusantara sebagai LIT-TR.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Dewan Komisaris & Direksi */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold font-headline">Dewan Komisaris & Direksi</h2>
                    <p className="mt-2 text-muted-foreground">Struktur pimpinan perusahaan.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Nama Komisaris', title: 'Komisaris', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
                        { name: 'Nama Direktur Utama', title: 'Direktur Utama', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
                        { name: 'Nama Direktur', title: 'Direktur', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop' },
                    ].map((p) => (
                        <Card key={p.name} className="overflow-hidden shadow-md">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{p.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-muted-foreground">{p.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Dokumen Terkait */}
            <section className="bg-secondary py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold font-headline">Dokumen Terkait</h2>
                        <p className="mt-2 text-muted-foreground">Regulasi dan keputusan terkait ketenagalistrikan.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'PERMEN ESDM No. 39 Tahun 2018', subtitle: 'Pelayanan Perizinan Berusaha Terintegrasi Secara Elektronik Bidang Ketenagalistrikan' },
                            { title: 'PERMEN ESDM No. 38 Tahun 2018', subtitle: 'Tata Cara Akreditasi & Sertifikasi Ketenagalistrikan' },
                            { title: 'KEPMEN ESDM No. 49 Tahun 2017', subtitle: 'Penetapan PT. Serkolinas Aman Nusantara sebagai LIT-TR' },
                            { title: 'UU RI No. 30 Tahun 2009', subtitle: 'Ketenagalistrikan' },
                        ].map((d) => (
                            <Card key={d.title} className="shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg">{d.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground">{d.subtitle}</p>
                                    <div className="mt-4">
                                        <Button variant="outline" size="sm">Lihat Dokumen</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold font-headline">Nilai-Nilai Kami</h2>
                         <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Fondasi yang memandu setiap langkah dan keputusan kami.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <div key={value.name} className="text-center">
                                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-semibold font-headline">{value.name}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
