import { Schema, model } from "mongoose";

const destinationSchema = new Schema(
  {
    name: { type: String, required: true, text: true },
    slug: { type: String, required: true, unique: true, index: true },
    continent: { type: String, required: true },
    country: { type: String, required: true },
    summary: { type: String, required: true },
    durationDays: Number,
    priceFrom: Number,
    rating: Number,
    coordinates: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }
    }
  },
  { timestamps: true }
);

destinationSchema.index({ coordinates: "2dsphere" });

export const DestinationModel = model("Destination", destinationSchema);
