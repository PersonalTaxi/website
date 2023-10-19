// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function handlerData(req: NextApiRequest, res: NextApiResponse) {
  fetch("https://psbeta.vercel.app/ordering/p24callback");
  const final = await req.body;
  res.status(200).json({ msg: final });
}

export default handlerData;
