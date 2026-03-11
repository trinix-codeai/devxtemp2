import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Package" }],
    socialProviders: {
      googleId: String,
      facebookId: String
    }
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);
