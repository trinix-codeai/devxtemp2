import type { Request, Response } from "express";
import { catalogService } from "../services/catalogService";
import { ApiError } from "../utils/ApiError";

export function listDestinations(_request: Request, response: Response) {
  response.json({ success: true, data: catalogService.listDestinations() });
}

export function getDestination(request: Request, response: Response) {
  const result = catalogService.getDestinationBySlug(request.params.slug);
  if (!result) {
    throw new ApiError(404, "Destination not found");
  }
  response.json({ success: true, data: result });
}

export function listPackages(_request: Request, response: Response) {
  response.json({ success: true, data: catalogService.listPackages() });
}

export function getPackage(request: Request, response: Response) {
  const result = catalogService.getPackageBySlug(request.params.slug);
  if (!result) {
    throw new ApiError(404, "Package not found");
  }
  response.json({ success: true, data: result });
}

export function listBlogs(_request: Request, response: Response) {
  response.json({ success: true, data: catalogService.listBlogs() });
}

export function getBlog(request: Request, response: Response) {
  const result = catalogService.getBlogBySlug(request.params.slug);
  if (!result) {
    throw new ApiError(404, "Blog not found");
  }
  response.json({ success: true, data: result });
}
