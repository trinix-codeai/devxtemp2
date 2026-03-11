import { Router } from "express";
import { login, oauthStart, refresh, register } from "../controllers/authController";
import { validate } from "../middlewares/validate";
import { loginSchema, registerSchema } from "../validators/authValidators";

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.get("/oauth/:provider", oauthStart);
