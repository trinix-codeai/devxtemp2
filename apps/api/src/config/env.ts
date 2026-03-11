import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(5000),
  CLIENT_URL: z.string().default("http://localhost:5173"),
  MONGODB_URI: z.string().default("mongodb://localhost:27017/trinix"),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  JWT_ACCESS_SECRET: z.string().default("change-me-access"),
  JWT_REFRESH_SECRET: z.string().default("change-me-refresh"),
  JWT_ACCESS_TTL: z.string().default("15m"),
  JWT_REFRESH_TTL: z.string().default("7d")
});

export const env = envSchema.parse(process.env);
