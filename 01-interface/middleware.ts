import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "@/config/routes";

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const pathname = req.nextUrl.pathname;

  const isProtected = pathname.startsWith(ROUTES.DASHBOARD);

  // Protected route -> no token -> redirect to login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL(ROUTES.AUTH.SIGNIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ]
};
