import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    try {
      // Get token from cookie
      const token = request.cookies.get('auth-token');
      
      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      // Lightweight JWT verification without bcrypt
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        console.error('JWT_SECRET is not configured');
        return NextResponse.redirect(new URL('/login', request.url));
      }
      
      const secret = new TextEncoder().encode(jwtSecret);
      const { payload } = await jwtVerify(token.value, secret);
      
      // Check if user has admin or editor role
      if (!payload.role || (payload.role !== 'ADMIN' && payload.role !== 'EDITOR')) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};