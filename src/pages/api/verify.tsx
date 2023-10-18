// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function handlerData(req: NextApiRequest, res: NextApiResponse) {
  let data = await fetch("https://psbeta.vercel.app/ordering/verifyData");
  const final = await data.json();
  res.status(200).json({ msg: final });
}

export default handlerData;
