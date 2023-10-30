import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../libs/mongodb";
import Order from "../../../models/user";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  await connectMongoDB();
  const orders = await Order.find({ sessionId: req.body });
  const newID = await orders[0]._id;
  await Order.findByIdAndUpdate(newID, { isPayed: true });
  res.status(200).json({ orders });
}

export default POST;
