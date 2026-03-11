import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    travelPackage: { type: Schema.Types.ObjectId, ref: "Package" },
    destination: { type: Schema.Types.ObjectId, ref: "Destination" },
    rating: { type: Number, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true }
);

export const ReviewModel = model("Review", reviewSchema);
