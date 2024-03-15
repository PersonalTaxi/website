import { NextApiRequest, NextApiResponse } from "next";

export async function Getcrc(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: process.env.CRC_PROD });
}

export default Getcrc;
