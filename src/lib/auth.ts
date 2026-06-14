import { cookies } from "next/headers";
import { prisma } from "./prisma";
import crypto from "crypto";

const SESSION_COOKIE_NAME = "efacture_session";
const SESSION_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds

/**
 * Generate a cryptographically secure random token
 */
export function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Get the currently authenticated user from session cookie.
 * Returns null if not authenticated.
 */
export async function getAuthUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return null;

  const user = await prisma.user.findUnique({
    where: { sessionToken },
  });

  return user;
}

/**
 * Set the session cookie after successful authentication
 */
export async function setSessionCookie(sessionToken: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

/**
 * Clear the session cookie (logout)
 */
export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

/**
 * Check if a user has exceeded their free invoice quota.
 * Returns true if the user can still create free invoices.
 */
export async function canCreateFreeInvoice(userId: string): Promise<boolean> {
  const count = await prisma.invoice.count({
    where: { userId },
  });
  return count < 3;
}

/**
 * Get the number of invoices a user has created.
 */
export async function getInvoiceCount(userId: string): Promise<number> {
  return prisma.invoice.count({
    where: { userId },
  });
}
