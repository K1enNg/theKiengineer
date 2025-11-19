import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value;

    const url = req.nextUrl.pathname;

    const isAuthPage = url.startsWith("/author/auth");

    const protectedRoutes = ['/author/dashboard'];

    // Protected route -> no token -> redirect to login
    if (protectedRoutes.some(route => url.startsWith(route))) {
        if (!token && !isAuthPage) {
            return NextResponse.redirect(new URL('/author/auth/signin', req.url));
        }
    }

    // Auth page -> already logged in -> redirect to dashboard
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/author/dashboard', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/author/dashboard/:path*',
        '/author/auth/:path*',
    ]
};
