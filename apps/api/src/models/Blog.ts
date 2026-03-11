import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true, text: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    excerpt: String,
    content: String,
    publishedAt: Date
  },
  { timestamps: true }
);

export const BlogModel = model("Blog", blogSchema);
