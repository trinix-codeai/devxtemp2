import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { verifyAccessToken } from "../utils/tokens";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: "user" | "admin";
  };
}

export function requireAuth(request: AuthenticatedRequest, _response: Response, next: NextFunction) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new ApiError(401, "Authentication required"));
  }

  const payload = verifyAccessToken(token);
  request.user = { id: payload.sub, role: payload.role };
  return next();
}

export function requireRole(role: "user" | "admin") {
  return (request: AuthenticatedRequest, _response: Response, next: NextFunction) => {
    if (request.user?.role !== role) {
      return next(new ApiError(403, "Forbidden"));
    }
    return next();
  };
}
