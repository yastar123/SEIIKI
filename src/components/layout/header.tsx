'use client';
import Link from 'next/link';
import { MainNav, profileComponents, sloComponents, surveyComponents } from './main-nav';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Menu, User, X, Home, Folder, ShieldCheck, Image as ImageIcon, Briefcase, Mail, BarChart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  const defaultAccordion = React.useMemo(() => {
    if (pathname.startsWith('/profil')) return 'profil';
    if (pathname.startsWith('/slo')) return 'slo';
    if (pathname.startsWith('/survei')) return 'survey';
    return undefined;
  }, [pathname]);

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
        'sticky z-50 w-full transition-all duration-300',
        // Keep the header flush at the very top initially, add a little offset when scrolled
        scrolled ? 'top-4' : 'top-0',
        isHome && !scrolled ? 'bg-transparent' : ''
      )}
    >
      <div
        className={cn(
          'transition-all duration-300',
          // Initial: full-width transparent container
          isHome && !scrolled
            ? 'container mx-auto px-4'
            : [
                // Scrolled: centered capsule with blur, ring, and shadow
                'mx-auto max-w-6xl px-2 sm:px-3',
                'rounded-full bg-background/80 shadow-lg ring-1 ring-black/5',
                'backdrop-blur supports-[backdrop-filter]:bg-background/60'
              ].join(' ')
        )}
      >
        <div className={cn('flex items-center', scrolled ? 'h-14' : 'h-20')}>
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
              <SheetContent side="left" className="w-full sm:max-w-xs p-0">
                <div className="flex flex-col h-full">
                  {/* Brand header */}
                  <div className="flex items-center gap-3 px-4 py-4 border-b bg-background/95 backdrop-blur">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                      <Logo className="h-8 w-auto" />
                      <span className="font-semibold">PT. SOLUSI ENERGI KELISTRIKAN INDONESIA</span>
                    </Link>
                    {/* Close button removed to avoid duplicate with default close in SheetContent */}
                  </div>
                  <nav className="mt-6 space-y-2 overflow-y-auto">
                    <div className="px-2 py-2">
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary border-b border-border/60',
                          pathname === '/' && 'bg-primary text-primary-foreground'
                        )}
                      >
                        <Home className="h-5 w-5" />
                        Home
                      </Link>
                    </div>

                    <Accordion type="single" collapsible className="w-full" defaultValue={defaultAccordion}>
                      <AccordionItem value="profil">
                        <AccordionTrigger className="text-base px-2 rounded-lg hover:bg-primary/10 hover:text-primary border-b border-border/60">
                          <span className="flex items-center gap-3"><Folder className="h-5 w-5" /> Profil</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-2 space-y-1 divide-y divide-border/50">
                            {profileComponents.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent',
                                    pathname === item.href && 'bg-primary text-primary-foreground hover:text-primary-foreground border-primary'
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="slo">
                        <AccordionTrigger className="text-base px-2 rounded-lg hover:bg-primary/10 hover:text-primary border-b border-border/60">
                          <span className="flex items-center gap-3"><ShieldCheck className="h-5 w-5" /> SLO</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-2 space-y-1 divide-y divide-border/50">
                            {sloComponents.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent',
                                    pathname === item.href && 'bg-primary text-primary-foreground hover:text-primary-foreground border-primary'
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="survey">
                        <AccordionTrigger className="text-base px-2 rounded-lg hover:bg-primary/10 hover:text-primary border-b border-border/60">
                          <span className="flex items-center gap-3"><BarChart className="h-5 w-5" /> Survey</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-2 space-y-1 divide-y divide-border/50">
                            {surveyComponents.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent',
                                    pathname === item.href && 'bg-primary text-primary-foreground hover:text-primary-foreground border-primary'
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="px-2 py-2 space-y-2">
                      <Link
                        href="/galeri"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary border-b border-border/60',
                          pathname === '/galeri' && 'bg-primary text-primary-foreground'
                        )}
                      >
                        <ImageIcon className="h-5 w-5" />
                        Galeri
                      </Link>
                      <Link
                        href="/karir"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary border-b border-border/60',
                          pathname === '/karir' && 'bg-primary text-primary-foreground'
                        )}
                      >
                        <Briefcase className="h-5 w-5" />
                        Karir
                      </Link>
                      <Link
                        href="/kontak"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary border-b border-border/60',
                          pathname === '/kontak' && 'bg-primary text-primary-foreground'
                        )}
                      >
                        <Mail className="h-5 w-5" />
                        Kontak Kami
                      </Link>
                    </div>
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
