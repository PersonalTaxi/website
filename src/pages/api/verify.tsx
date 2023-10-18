// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   status: number;
//   name: any;
//   res: any;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getAnswers = async () => {
    let data = await fetch("https://psbeta.vercel.app/ordering/verify");
    console.log(await data);
  };

  getAnswers();
}
