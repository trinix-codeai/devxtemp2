import mongoose from "mongoose";
import { env } from "./env";
import { logger } from "../utils/logger";

export async function connectDatabase() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error("MongoDB connection failed", { error });
    throw error;
  }
}
