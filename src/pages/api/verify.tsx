// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextResponse, NextRequest } from "next/server";

async function handlerData(req: NextResponse, res: NextRequest) {
  await fetch("https://ptbackend.vercel.app", {
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization:
    //     "Basic Mjc0MDc6MWI2NDdjYTJjYjRkZGI0ZmFmY2Q3NjgzZmM0MGZiYTY=",
    // },
  });
  const final = await req;
  console.log(final);
}

export default handlerData;
