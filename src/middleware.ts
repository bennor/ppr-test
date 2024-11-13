import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUUID } from "@/lib/uuid";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if the uuid cookie already exists
  if (!request.cookies.has("uuid")) {
    // Generate a new UUID
    const uuid = await getUUID();

    // Set the uuid cookie
    response.cookies.set({
      name: "uuid",
      value: uuid,
      httpOnly: true,
      secure: !!process.env.VERCEL,
      sameSite: "strict",
      path: "/",
    });
  }

  return response;
}

// Optional: Configure on which paths to run the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
