import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("DODODOD");

  const response = NextResponse.next();
  response.cookies.set({
    name: "P24",
    value: "112344",
    path: "/",
  });

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/p24/",
};
