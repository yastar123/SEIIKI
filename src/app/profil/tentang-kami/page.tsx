import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

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
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Tentang SLO Center</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Mitra terpercaya Anda dalam memastikan keamanan dan kelaikan operasi instalasi tenaga listrik di seluruh Indonesia.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-last">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                width={1200}
                                height={800}
                                className="rounded-lg shadow-lg"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline">Sejarah &amp; Komitmen Kami</h2>
                        <p className="mt-4 text-muted-foreground">
                            Berdiri sejak tahun 2010, SLO Center telah mendedikasikan diri sebagai Lembaga Inspeksi Teknik (LIT) yang berfokus pada penerbitan Sertifikat Laik Operasi (SLO). Kami beroperasi di bawah pengawasan Direktorat Jenderal Ketenagalistrikan dan telah terakreditasi oleh Komite Akreditasi Nasional (KAN).
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Komitmen kami adalah untuk memastikan bahwa setiap instalasi listrik, mulai dari skala rumah tangga hingga industri besar, memenuhi standar keamanan tertinggi sesuai dengan Persyaratan Umum Instalasi Listrik (PUIL) dan Standar Nasional Indonesia (SNI).
                        </p>
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
