import { NextRequest, NextResponse } from "next/server";

/**
 * Rewrites legacy `?ref=X` query parameters to standard UTM parameters so that
 * Vercel Analytics' UTM Parameters tab picks them up.
 *
 * Examples:
 *   /?ref=cv               → /?utm_source=cv&utm_medium=resume
 *   /?ref=linkedin-contact → /?utm_source=linkedin-contact&utm_medium=linkedin
 *   /?ref=github           → /?utm_source=github&utm_medium=github
 *   /?ref=email            → /?utm_source=email&utm_medium=email
 *
 * Any unrecognised prefix falls back to medium="link".
 */

const MEDIUM_BY_PREFIX: Array<[RegExp, string]> = [
  [/^cv\b/, "resume"],
  [/^linkedin/, "linkedin"],
  [/^github/, "github"],
  [/^twitter|^x\b/, "social"],
  [/^email/, "email"],
  [/^slack/, "social"],
  [/^discord/, "social"],
  [/^wellfound|^angellist/, "jobboard"],
  [/^stackoverflow/, "community"],
  [/^devto|^hashnode|^medium/, "blog"],
  [/^readcv/, "social"],
];

function inferMedium(ref: string): string {
  for (const [pattern, medium] of MEDIUM_BY_PREFIX) {
    if (pattern.test(ref)) return medium;
  }
  return "link";
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const ref = url.searchParams.get("ref");

  // Only act when ?ref=X is present and utm_source isn't already set.
  if (!ref || url.searchParams.has("utm_source")) {
    return NextResponse.next();
  }

  const rewritten = url.clone();
  rewritten.searchParams.delete("ref");
  rewritten.searchParams.set("utm_source", ref);
  rewritten.searchParams.set("utm_medium", inferMedium(ref));

  return NextResponse.redirect(rewritten, 307);
}

// Run on every page route, but skip Next internals + API + static files.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.svg|opengraph-image|robots.txt|sitemap.xml|cv.pdf|portrait.jpeg|avatar.svg).*)",
  ],
};
