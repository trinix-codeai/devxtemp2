import type { Request, Response } from "express";
import { issueAuthTokens } from "../services/authService";

export async function register(request: Request, response: Response) {
  const result = await issueAuthTokens(request.body.email);
  response.status(201).json({ success: true, data: result });
}

export async function login(request: Request, response: Response) {
  const result = await issueAuthTokens(request.body.email);
  response.json({ success: true, data: result });
}

export async function refresh(_request: Request, response: Response) {
  const result = await issueAuthTokens("refresh@example.com");
  response.json({ success: true, data: result });
}

export async function oauthStart(request: Request, response: Response) {
  const provider = request.params.provider;
  if (!["google", "facebook"].includes(provider)) {
    response.status(400).json({ success: false, message: "Unsupported provider" });
    return;
  }
  response.json({
    success: true,
    data: {
      provider,
      authorizationUrl: `https://auth.example.com/${provider}?client_id=configure-me`
    }
  });
}
