import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";
  const longitude = geo?.longitude || "San Francisco";
  const latitude = geo?.latitude || "CA";

  console.log(country, city, region, longitude, latitude);
}
