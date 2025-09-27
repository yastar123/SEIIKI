'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Building,
  FileText,
  Gavel,
  Gem,
  GitBranch,
  Handshake,
  HelpCircle,
  Home,
  Image as ImageIcon,
  Info,
  Map,
  PencilRuler,
  ShieldCheck,
  Siren,
  Users,
  Wrench,
  Briefcase,
  Mail,
  BarChart,
} from 'lucide-react';

const profileComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: 'Tentang Kami',
    href: '/profil/tentang-kami',
    description: 'Sejarah, legalitas, dan nilai-nilai perusahaan kami.',
    icon: <Info className="h-4 w-4" />
  },
  {
    title: 'Visi & Misi',
    href: '/profil/visi-misi',
    description: 'Tujuan dan komitmen kami dalam industri kelistrikan.',
    icon: <Gem className="h-4 w-4" />
  },
  {
    title: 'Struktur Organisasi',
    href: '/profil/struktur-organisasi',
    description: 'Kenali tim profesional di belakang layar kami.',
    icon: <Users className="h-4 w-4" />
  },
  {
    title: 'Buku Digital',
    href: '/profil/buku-digital',
    description: 'Akses publikasi dan materi informatif kami.',
    icon: <FileText className="h-4 w-4" />
  },
  {
    title: 'Dokumen Perijinan',
    href: '/profil/dokumen-perijinan',
    description: 'Lihat akreditasi dan lisensi resmi kami.',
    icon: <ShieldCheck className="h-4 w-4" />
  },
  {
    title: 'Maklumat Layanan',
    href: '/profil/maklumat-layanan',
    description: 'Pernyataan komitmen pelayanan publik kami.',
    icon: <Handshake className="h-4 w-4" />
  },
   {
    title: 'Standar Operasi Prosedur',
    href: '/profil/sop',
    description: 'Prosedur kerja standar untuk semua layanan.',
    icon: <Gavel className="h-4 w-4" />
  },
  {
    title: 'Daftar PJT-TT TR',
    href: '/profil/pjt-tt-tr',
    description: 'Penanggung Jawab Teknik Tegangan Rendah.',
    icon: <Users className="h-4 w-4" />
  },
  {
    title: 'Daftar PJT-TT Non TR',
    href: '/profil/pjt-tt-non-tr',
    description: 'Penanggung Jawab Teknik Non Tegangan Rendah.',
    icon: <Users className="h-4 w-4" />
  },
  {
    title: 'Kantor Wilayah',
    href: '/profil/kantor-wilayah',
    description: 'Temukan lokasi kantor wilayah kami.',
    icon: <Map className="h-4 w-4" />
  },
  {
    title: 'Kantor Area',
    href: '/profil/kantor-area',
    description: 'Temukan lokasi kantor area terdekat.',
    icon: <Map className="h-4 w-4" />
  },
  {
    title: 'Peralatan',
    href: '/profil/peralatan',
    description: 'Peralatan inspeksi dan pengujian berstandar tinggi.',
    icon: <Wrench className="h-4 w-4" />
  },
];

const sloComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: 'Informasi SLO',
        href: '/slo/informasi',
        description: 'Pahami apa itu SLO dan mengapa itu penting.',
        icon: <Info className="h-4 w-4" />
    },
    {
        title: 'Pedoman Standar Layanan',
        href: '/slo/pedoman-standar-layanan',
        description: 'Detail standar pelayanan yang kami tawarkan.',
        icon: <PencilRuler className="h-4 w-4" />
    },
    {
        title: 'CSR',
        href: '/slo/csr',
        description: 'Program tanggung jawab sosial perusahaan kami.',
        icon: <Handshake className="h-4 w-4" />
    },
    {
        title: 'Biaya SLO TR',
        href: '/slo/biaya-slo-tr',
        description: 'Informasi transparan mengenai biaya sertifikasi.',
        icon: <FileText className="h-4 w-4" />
    },
    {
        title: 'Pendaftaran SLO',
        href: '/slo/pendaftaran',
        description: 'Ajukan permohonan sertifikasi baru di sini.',
        icon: <Home className="h-4 w-4" />
    },
    {
        title: 'Verifikasi SLO',
        href: '/slo/verifikasi',
        description: 'Periksa keaslian dan status SLO Anda.',
        icon: <ShieldCheck className="h-4 w-4" />
    },
    {
        title: 'Keluhan Pelanggan',
        href: '/slo/keluhan-pelanggan',
        description: 'Sampaikan masukan atau keluhan Anda.',
        icon: <Siren className="h-4 w-4" />
    },
    {
        title: 'Uji Petik',
        href: '/slo/uji-petik',
        description: 'Informasi mengenai proses uji petik acak.',
        icon: <GitBranch className="h-4 w-4" />
    },
];

const surveyComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: 'Survey TR',
        href: '/survei/tr',
        description: 'Beri masukan untuk layanan Tegangan Rendah.',
        icon: <BarChart className="h-4 w-4" />
    },
    {
        title: 'Survey Non-TR',
        href: '/survei/non-tr',
        description: 'Beri masukan untuk layanan Tegangan Menengah/Tinggi.',
        icon: <BarChart className="h-4 w-4" />
    }
];

export function MainNav() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/'} className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger active={pathname.startsWith('/profil')}>Profil</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {profileComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger active={pathname.startsWith('/slo')}>SLO</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {sloComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/galeri" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/galeri'} className={navigationMenuTriggerStyle()}>
              Galeri
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/karir" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/karir'} className={navigationMenuTriggerStyle()}>
              Karir
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/kontak" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/kontak'} className={navigationMenuTriggerStyle()}>
              Kontak Kami
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger active={pathname.startsWith('/survei')}>Survey</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
              {surveyComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
