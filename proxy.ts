import { NextRequest, NextResponse } from "next/server";

function getPrefix(country?: string | null) {
  if (country === "IN") return "in";
  if (country === "US") return "us";
  return "in"; // default fallback
}

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Skip internal/static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // If already region-based, allow
  if (pathname === "/us" || pathname.startsWith("/us/")) return NextResponse.next();
  if (pathname === "/in" || pathname.startsWith("/in/")) return NextResponse.next();

  // Try detecting country from headers
  const country =
    req.headers.get("x-vercel-ip-country") || // Vercel
    req.headers.get("cf-ipcountry") ||        // Cloudflare
    null;

  const prefix = getPrefix(country);

  const url = req.nextUrl.clone();
  url.pathname = `/${prefix}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
