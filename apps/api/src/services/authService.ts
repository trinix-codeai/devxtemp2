import bcrypt from "bcryptjs";
import { signAccessToken, signRefreshToken } from "../utils/tokens";

export async function issueAuthTokens(email: string, role: "user" | "admin" = "user") {
  const userId = Buffer.from(email).toString("base64url");
  return {
    accessToken: signAccessToken({ sub: userId, role }),
    refreshToken: signRefreshToken({ sub: userId, role }),
    user: {
      id: userId,
      email,
      role
    }
  };
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}
