import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const user = await getUser(request);
    
    // Redirect to login if not authenticated
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check if user has admin or editor role
    if (user.role !== 'ADMIN' && user.role !== 'EDITOR') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};