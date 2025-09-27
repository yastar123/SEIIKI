'use client';

import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { AdminAuthGuard } from '@/components/auth/admin-auth-guard';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthGuard>
      {children}
    </AdminAuthGuard>
  );
}