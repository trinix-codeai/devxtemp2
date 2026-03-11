import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { env } from "./config/env";
import { openApiDocument } from "./docs/openapi";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFound";
import { apiRateLimiter } from "./middlewares/rateLimiter";
import { apiRouter } from "./routes";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("combined"));
app.use(apiRateLimiter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use("/api", apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);
