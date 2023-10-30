import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  From: String,
  To: String,
  distance: String,
  firstName: String,
  lastName: String,
  email: String,
  description: String,
  country: String,
  amount: String,
  currency: String,
  merchantId: String,
  posId: String,
  sessionId: String,
  orderId: String,
  sign: String,
  isPayed: { type: Boolean, default: false },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;
