// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextResponse, NextRequest } from "next/server";

async function handlerData(req: NextResponse, res: NextRequest) {
  await fetch("https://ptbackend.vercel.app/ver", {
    method: "GET",
  });
  const final = await req;
  console.log(final);
}

export default handlerData;
