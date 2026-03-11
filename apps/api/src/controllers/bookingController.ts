import type { Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth";
import { analyticsService } from "../services/analyticsService";

export function createBooking(request: AuthenticatedRequest, response: Response) {
  response.status(201).json({
    success: true,
    data: {
      id: `booking_${Date.now()}`,
      userId: request.user?.id,
      ...request.body
    }
  });
}

export function listMyBookings(request: AuthenticatedRequest, response: Response) {
  response.json({
    success: true,
    data: [
      {
        id: "booking_1",
        userId: request.user?.id,
        packageName: "Maldives Overwater Escape",
        status: "paid"
      }
    ]
  });
}

export function bookingAnalytics(_request: AuthenticatedRequest, response: Response) {
  response.json({ success: true, data: analyticsService.bookingOverview() });
}
