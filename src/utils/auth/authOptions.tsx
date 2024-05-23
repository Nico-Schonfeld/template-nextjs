import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "d43mo5kid80ad2heq28ndiah09dnioawed8q2";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 minutes")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  const getEmail = formData.get("email");

  if (!getEmail || typeof getEmail !== "string")
    return { error: true, success: false, message: "* Required field" };

  const user = {
    name: "John Doe",
    email: getEmail,
    avatar: "/assets/avatars/avatar1.svg",
  };

  const expires = new Date(Date.now() + 600 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });

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
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
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
    name: session,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
}
