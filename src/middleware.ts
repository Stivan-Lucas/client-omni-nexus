import {
  NextResponse,
  type NextRequest,
  type MiddlewareConfig,
} from "next/server";

const IS_AUTHENTICATED = "/";
const NOT_AUTHENTICATED = "/sign-in";

const publicRoutes = [
  { path: "/sign-in", isAuthenticated: "redirect" },
  { path: "/sign-up", isAuthenticated: "redirect" },
  { path: "/forgot-password", isAuthenticated: "redirect" },
  { path: "/not-found", isAuthenticated: "next" },
  { path: "/terms", isAuthenticated: "next" },
] as const;

export function middleware(request: NextRequest) {
  const pathURL = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === pathURL);
  const token = request.cookies.get("token")?.value;

  // Se não está autenticado e é uma rota publica -> acesso liberado
  if (!token && publicRoute) return NextResponse.next();

  // Se não está autenticado e a rota é privada -> redireciono para login
  if (!token && !publicRoute) {
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectURL);
  }

  // Se está autenticado e a rota é publica e esta como redirect -> redireciono para dashboard
  if (token && publicRoute && publicRoute.isAuthenticated === "redirect") {
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = IS_AUTHENTICATED;
    return NextResponse.redirect(redirectURL);
  }

  if (token && !publicRoute) {
    /*
    Validar se o token não está expirado
    Se sim redireciona para login
    */
    return NextResponse.next();
  }
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)",
  ],
};
