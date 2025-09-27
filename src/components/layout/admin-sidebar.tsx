'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FileText, 
  Image, 
  Settings, 
  Users, 
  BarChart3, 
  Phone,
  Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: Home,
  },
  {
    title: 'Hero Slides',
    href: '/admin/hero-slides',
    icon: Monitor,
  },
  {
    title: 'Layanan',
    href: '/admin/services',
    icon: Settings,
  },
  {
    title: 'Konten',
    href: '/admin/content',
    icon: FileText,
  },
  {
    title: 'Galeri',
    href: '/admin/gallery',
    icon: Image,
  },
  {
    title: 'Statistik',
    href: '/admin/statistics',
    icon: BarChart3,
  },
  {
    title: 'Kontak Info',
    href: '/admin/contact-info',
    icon: Phone,
  },
  {
    title: 'User Management',
    href: '/admin/users',
    icon: Users,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin Dashboard
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}