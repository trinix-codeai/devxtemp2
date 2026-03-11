import { Schema, model } from "mongoose";

const packageSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    summary: String,
    durationDays: Number,
    price: Number,
    originalPrice: Number,
    rating: Number,
    mealsIncluded: Boolean,
    destination: { type: Schema.Types.ObjectId, ref: "Destination" }
  },
  { timestamps: true }
);

export const PackageModel = model("Package", packageSchema);
