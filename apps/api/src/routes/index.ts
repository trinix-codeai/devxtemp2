import { Router } from "express";
import { authRouter } from "./authRoutes";
import { bookingRouter } from "./bookingRoutes";
import { catalogRouter } from "./catalogRoutes";
import { paymentRouter } from "./paymentRoutes";

export const apiRouter = Router();

apiRouter.get("/health", (_request, response) => {
  response.json({ success: true, data: { status: "ok" } });
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/", catalogRouter);
apiRouter.use("/bookings", bookingRouter);
apiRouter.use("/payments", paymentRouter);
