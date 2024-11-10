import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "d43mo5kid80ad2heq28ndiah09dnioawed8q2";
const key = new TextEncoder().encode(secretKey);

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface Payload {
  user: User;
  expires: Date;
}

export async function encrypt(payload: Payload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 minutes")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload & Payload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload as JWTPayload & Payload;
}

export async function login(formData: FormData) {
  const getEmail = formData.get("email");

  if (!getEmail || typeof getEmail !== "string")
    return { error: true, success: false, message: "* Required field" };

  const user: User = {
    name: "John Doe",
    email: getEmail,
    avatar: "/assets/avatars/avatar1.svg",
  };

  const expires = new Date(Date.now() + 600 * 1000);
  const session = await encrypt({ user, expires });

  (await cookies()).set("session", session, { expires, httpOnly: true });

  return {
    error: false,
    success: true,
    message: "Successful Login",
    res: {
      name: user?.name,
      email: user?.email,
      avatar: user?.avatar,
    },
  };
}

export async function logout() {
  (await cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session")?.value;
  if (!session) return null;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 600 * 1000);

  const res = NextResponse.next();

  res.cookies.set({
    name: "session",
    value: await encrypt(parsed as Payload),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
}
