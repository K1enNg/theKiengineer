import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const pathname = req.nextUrl.pathname;

  const isProtected = pathname.startsWith("/author/dashboard");

  // Protected route -> no token -> redirect to login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/author/auth/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
        '/(author)/dashboard/:path*',
    ]
};
