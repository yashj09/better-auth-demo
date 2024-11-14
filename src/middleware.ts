import { authMiddleware } from "better-auth/next-js";
import { NextResponse } from "next/server";

export default authMiddleware({
  customRedirect: async (session, request) => {
    const baseURL = request.nextUrl.origin;
    if (request.nextUrl.pathname === "/login" && session) {
      return NextResponse.redirect(new URL("/session", baseURL));
    }
    if (request.nextUrl.pathname === "/session" && !session) {
      return NextResponse.redirect(new URL("/login", baseURL));
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/session", "/login"],
};
