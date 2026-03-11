import { app } from "./app";
import { connectDatabase } from "./config/db";
import { env } from "./config/env";
import { getRedisClient } from "./config/redis";
import { logger } from "./utils/logger";

async function bootstrap() {
  try {
    if (env.NODE_ENV !== "test") {
      await connectDatabase();
      await getRedisClient().connect().catch(() => null);
    }

    app.listen(env.PORT, () => {
      logger.info(`API listening on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error("Failed to bootstrap API", { error });
    process.exit(1);
  }
}

void bootstrap();
