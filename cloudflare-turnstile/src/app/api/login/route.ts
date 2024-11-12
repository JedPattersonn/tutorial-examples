import { NextRequest, NextResponse } from "next/server";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

export async function POST(req: NextRequest) {
  const { token, email, password } = await req.json();

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    // Optional: Add an idempotency key to prevent token reuse
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return NextResponse.json({ message: "Invalid token" }, { status: 400 });
  }

  // Handle login

  return NextResponse.json({ message: "Login successful" });
}
