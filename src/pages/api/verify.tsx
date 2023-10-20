// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function handlerData(req: NextApiRequest, res: NextApiResponse) {
  let data = await fetch("https://ptbackend.vercel.app/ver", {
    method: "GET",
  });

  const final = await data;
  console.log(final);
  return final;
}

export default handlerData;
