import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') return NextResponse.next();
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|images|blogs-image|css|pdf|team_images|favicon.ico).*)'],
};
