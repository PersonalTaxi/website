import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../libs/mongodb";
import Travel from "../../../models/taxi";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("data");
  await connectMongoDB();
  await Travel.create(req.body);
  res.status(200).json({ msg: "Order was created" });
}

export default POST;
