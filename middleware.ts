// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('firebaseToken')?.value;

  // Если токен отсутствует, перенаправляем пользователя на страницу "Not Authorized"
  if (!token && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/not-authorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/protected/:path*', '/profile', '/dashboard'],
};