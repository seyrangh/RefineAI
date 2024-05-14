import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);

export default clerkMiddleware((auth, req) => {
  const publicRoutes = ["/api/webhooks/clerk"];

  if (!publicRoutes.includes(req.nextUrl.pathname) && isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
