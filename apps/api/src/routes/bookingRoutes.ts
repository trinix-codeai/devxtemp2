import { Router } from "express";
import { bookingAnalytics, createBooking, listMyBookings } from "../controllers/bookingController";
import { requireAuth, requireRole } from "../middlewares/auth";
import { validate } from "../middlewares/validate";
import { createBookingSchema } from "../validators/bookingValidators";

export const bookingRouter = Router();

bookingRouter.get("/", requireAuth, listMyBookings);
bookingRouter.post("/", requireAuth, validate(createBookingSchema), createBooking);
bookingRouter.get("/analytics", requireAuth, requireRole("admin"), bookingAnalytics);
