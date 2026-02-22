import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";
const TOKEN_VALUE = "admin";

function getSecret() {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 16) throw new Error("AUTH_SECRET must be set (min 16 chars)");
  return s;
}

function sign(val: string) {
  return createHmac("sha256", getSecret()).update(val).digest("hex");
}

export function createSession() {
  return sign(TOKEN_VALUE);
}

export function verifyToken(token: string): boolean {
  try {
    const expected = sign(TOKEN_VALUE);
    return token.length === expected.length && timingSafeEqual(Buffer.from(token, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

export async function isAdmin(): Promise<boolean> {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  return !!token && verifyToken(token);
}

export async function setSessionCookie() {
  const c = await cookies();
  c.set(COOKIE_NAME, createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function clearSessionCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}
