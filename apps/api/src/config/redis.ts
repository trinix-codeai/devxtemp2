import Redis from "ioredis";
import { env } from "./env";

let redis: Redis | null = null;

export function getRedisClient() {
  if (!redis) {
    redis = new Redis(env.REDIS_URL, { lazyConnect: true, maxRetriesPerRequest: 1 });
  }
  return redis;
}
