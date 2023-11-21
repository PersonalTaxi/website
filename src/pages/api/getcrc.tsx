import { NextApiRequest, NextApiResponse } from "next";

export async function Getcrc(req: NextApiRequest, res: NextApiResponse) {
  console.log("kolo ==" + process.env.CRC);
  res.status(200).json({ data: process.env.CRC });
}

export default Getcrc;
