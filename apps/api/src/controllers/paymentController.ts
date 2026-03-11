import type { Request, Response } from "express";
import { paymentService } from "../services/paymentService";

export function createPaymentIntent(request: Request, response: Response) {
  const provider = request.body.provider === "paypal" ? "paypal" : "stripe";
  response.status(201).json({
    success: true,
    data: paymentService.createIntent(provider, request.body.amount)
  });
}

export function handleWebhook(request: Request, response: Response) {
  const provider = request.params.provider === "paypal" ? "paypal" : "stripe";
  response.json({
    success: true,
    data: paymentService.handleWebhook(provider, request.body)
  });
}
