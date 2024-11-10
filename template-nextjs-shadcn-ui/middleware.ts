import { NextRequest } from "next/server";
import { updateSession } from "@/utils/auth/authOptions";

export async function middleware(req: NextRequest) {
  return await updateSession(req);
}
