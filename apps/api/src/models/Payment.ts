import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    booking: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    provider: { type: String, enum: ["stripe", "paypal"], required: true },
    externalId: { type: String, required: true },
    status: { type: String, enum: ["created", "completed", "failed"], default: "created" },
    amount: { type: Number, required: true }
  },
  { timestamps: true }
);

export const PaymentModel = model("Payment", paymentSchema);
