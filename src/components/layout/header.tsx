'use client';
import Link from 'next/link';
import { MainNav } from './main-nav';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Menu, User, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Profil', href: '/profil/tentang-kami' },
  { name: 'SLO', href: '/slo/informasi' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Karir', href: '/karir' },
  { name: 'Kontak Kami', href: '/kontak' },
  { name: 'Survey', href: '/survei/tr' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isDashboard = pathname.startsWith('/dashboard');
  if (isDashboard) {
    return null;
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isHome && !scrolled ? 'bg-transparent' : 'py-2'
      )}
    >
      <div
        className={cn(
          'transition-all duration-300',
          isHome && !scrolled
            ? 'container mx-auto px-4'
            : 'container mx-auto rounded-lg bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60'
        )}
      >
        <div className="flex h-20 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex flex-1">
            <MainNav />
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
             <Button variant="ghost" size="icon" className="hidden sm:inline-flex rounded-full bg-primary/20 hover:bg-primary/30" asChild>
                <Link href="/login">
                  <User className="h-5 w-5 text-primary" />
                  <span className="sr-only">Profil Pengguna</span>
                </Link>
              </Button>
            <Button asChild className="hidden sm:inline-flex rounded-full">
              <Link href="/slo/pendaftaran">Daftar SLO</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-xs">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <Logo className="h-8 w-auto" />
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Tutup Menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4 mt-8 text-lg font-medium">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-4 space-y-2">
                     <Button variant="outline" className="w-full" asChild>
                        <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
                     </Button>
                     <Button asChild className="w-full">
                        <Link href="/slo/pendaftaran" onClick={() => setIsOpen(false)}>Daftar SLO</Link>
                     </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
