import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value;

    const protectedRoutes = ['/dashboard']

    const url = req.nextUrl.pathname;

    // if route is protected and no token found -> redirect to login page
    if (protectedRoutes.some(route => url.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    if (token && (url === '/login')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/login'
    ]
}