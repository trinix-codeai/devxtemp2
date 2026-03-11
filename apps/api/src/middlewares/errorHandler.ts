import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { logger } from "../utils/logger";

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  logger.error(error.message, { stack: error.stack });
  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({ success: false, message: error.message });
  }
  return response.status(500).json({ success: false, message: "Internal server error" });
}
