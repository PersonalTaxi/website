// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextResponse, NextRequest } from "next/server";

async function handlerData(req: NextResponse, res: NextRequest) {
  let data = await fetch("https://ptbackend.vercel.app/ver", {
    method: "GET",
  });
  const final = await data;
  console.log(final);
  return final;
}

export default handlerData;
