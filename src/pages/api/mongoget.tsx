import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../libs/mongodb";
import Order from "../../../models/taxi";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  await connectMongoDB();
  const Taxi = await Order.find({ sessionId: req.body });
  const newID = await Taxi[0]._id;
  await Order.findByIdAndUpdate(newID, { isPayed: true });
  res.status(200).json({ Taxi });
}

export default POST;
