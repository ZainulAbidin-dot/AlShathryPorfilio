import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    const specialSlug = "a-journey-through-technology-brilliance";
    console.log(path, path.includes(specialSlug), path.endsWith(".html"));
    try {
      if (path.includes(specialSlug) || path.endsWith(".html")) {
        const key = `redirected_html:${path}`;
        if (!sessionStorage.getItem(key)) {
          sessionStorage.setItem(key, "1");
          // Force a full reload so the browser requests the static file from the server
          window.location.replace(path);
          return null;
        }
      }
    } catch (e) {
      // ignore sessionStorage errors
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const isSpecialRoute =
    typeof window !== "undefined" &&
    window.location.href.includes("a-journey-through-technology-brilliance");

  useEffect(() => {
    if (isSpecialRoute) return;
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error, isSpecialRoute]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              if (isSpecialRoute) return;
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abdulrahman Al-Shathry — Chairman, CEO, Entrepreneur & Investor" },
      {
        property: "og:title",
        content: "Abdulrahman Al-Shathry — Chairman, CEO, Entrepreneur & Investor",
      },
      {
        name: "twitter:title",
        content: "Abdulrahman Al-Shathry — Chairman, CEO, Entrepreneur & Investor",
      },
      {
        name: "description",
        content:
          "Executive profile of Abdulrahman Al-Shathry — Chairman & CEO of Saudi Controls Ltd., founder of The Al-Shathry Group, with 40+ years of leadership in engineering, technology, and international investment.",
      },
      {
        property: "og:description",
        content:
          "Executive profile of Abdulrahman Al-Shathry — Chairman & CEO of Saudi Controls Ltd., founder of The Al-Shathry Group, with 40+ years of leadership in engineering, technology, and international investment.",
      },
      {
        name: "twitter:description",
        content:
          "Executive profile of Abdulrahman Al-Shathry — Chairman & CEO of Saudi Controls Ltd., founder of The Al-Shathry Group, with 40+ years of leadership in engineering, technology, and international investment.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/2xshjrTdBBdP21nYEnDHLGynkOZ2/social-images/social-1785268227904-about-pic.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/2xshjrTdBBdP21nYEnDHLGynkOZ2/social-images/social-1785268227904-about-pic.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
