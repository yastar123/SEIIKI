import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  if (isDashboard) {
    return null;
  }
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              PT. SOLUSI ENERGI KELISTRIKAN INDONESIA. Lembaga Inspeksi Teknik Terakreditasi untuk Sertifikat Laik Operasi (SLO) Instalasi Tenaga Listrik.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-headline">Jelajahi</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/profil/tentang-kami" className="text-muted-foreground hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="/slo/informasi" className="text-muted-foreground hover:text-primary">Layanan SLO</Link></li>
              <li><Link href="/galeri" className="text-muted-foreground hover:text-primary">Galeri</Link></li>
              <li><Link href="/karir" className="text-muted-foreground hover:text-primary">Karir</Link></li>
              <li><Link href="/kontak" className="text-muted-foreground hover:text-primary">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold font-headline">Dukungan</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/slo/verifikasi" className="text-muted-foreground hover:text-primary">Verifikasi SLO</Link></li>
              <li><Link href="/slo/keluhan-pelanggan" className="text-muted-foreground hover:text-primary">Keluhan Pelanggan</Link></li>
              <li><Link href="/profil/sop" className="text-muted-foreground hover:text-primary">Standar Prosedur</Link></li>
              <li><Link href="/survei/tr" className="text-muted-foreground hover:text-primary">Survey Pelanggan</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold font-headline">Langganan Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Dapatkan berita dan pembaruan terbaru dari kami.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Email Anda" className="bg-background" />
              <Button type="submit" variant="default">Kirim</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SEIIKI. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
