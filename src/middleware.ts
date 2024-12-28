import { NextRequest } from "next/server";
import { updateSession } from "@/utils/auth/authJWTOptions";

export async function middleware(req: NextRequest) {
  return await updateSession(req);
}
