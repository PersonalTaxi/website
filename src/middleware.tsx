import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo.country || "US";
  const city = geo.city || "San Francisco";
  const region = geo.region || "CA";

  console.log(country, city, region);
}
