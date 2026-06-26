import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // If Supabase env vars are not set, skip auth entirely and let request pass through
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const path = request.nextUrl.pathname;

    // Protect paths based on authentication
    const isAuthRoute = path.startsWith('/login') || path.startsWith('/register');
    const isProtectedRoute = path.startsWith('/teacher') || path.startsWith('/student') || path.startsWith('/admin') || path.startsWith('/onboarding');

    // If user is not logged in and tries to access a protected route, redirect to login
    if (!user && isProtectedRoute) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // If user is logged in, fetch their role from profiles table to enforce RBAC
    if (user) {
      // If they try to go to login while logged in, redirect them to their dashboard
      if (isAuthRoute || path === '/') {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        const role = profile?.role || 'student';
        const url = request.nextUrl.clone();
        url.pathname = `/${role}`;
        return NextResponse.redirect(url);
      }

      // Check RBAC for protected routes
      if (isProtectedRoute) {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        const role = profile?.role;

        // If no profile found (maybe still onboarding?), let them pass to onboarding
        if (!role && !path.startsWith('/onboarding')) {
           const url = request.nextUrl.clone();
           url.pathname = '/onboarding';
           return NextResponse.redirect(url);
        }

        if (role === 'teacher' && path.startsWith('/student')) {
          const url = request.nextUrl.clone();
          url.pathname = '/teacher';
          return NextResponse.redirect(url);
        }
        
        if (role === 'student' && path.startsWith('/teacher')) {
          const url = request.nextUrl.clone();
          url.pathname = '/student';
          return NextResponse.redirect(url);
        }
        
        if (role === 'admin' && (path.startsWith('/teacher') || path.startsWith('/student'))) {
          const url = request.nextUrl.clone();
          url.pathname = '/admin';
          return NextResponse.redirect(url);
        }
      }
    }
  } catch (error) {
    // If Supabase call fails for any reason, let the request pass through
    // This prevents auth errors from breaking public pages
    console.error('[Middleware] Supabase auth error:', error);
    return NextResponse.next({ request });
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - overview (public docs pages, no auth required)
     */
    '/((?!_next/static|_next/image|favicon.ico|overview|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
