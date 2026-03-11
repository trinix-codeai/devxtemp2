import { Router } from "express";
import { createPaymentIntent, handleWebhook } from "../controllers/paymentController";

export const paymentRouter = Router();

paymentRouter.post("/intent", createPaymentIntent);
paymentRouter.post("/webhooks/:provider", handleWebhook);
