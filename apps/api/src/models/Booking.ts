import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    travelPackage: { type: Schema.Types.ObjectId, ref: "Package", required: true },
    travelers: { type: Number, required: true },
    startDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "paid", "cancelled"], default: "pending" }
  },
  { timestamps: true }
);

export const BookingModel = model("Booking", bookingSchema);
