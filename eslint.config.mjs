import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // lib/supabase/types.ts now holds real generated types (see
    // `generate_typescript_types`), but supabase-js still can't infer a row
    // shape for embedded/joined selects (e.g. `customers(full_name)` inside
    // a `.select()` string) without hand-written per-query types — which
    // would mean a bespoke interface for every admin list/detail query.
    // Every remaining `any` under admin/ and pdf/ is one of those join
    // shapes (or a narrow, commented cast, e.g. the dynamic entity lookup in
    // app/admin/api/lookup/route.ts). Kept as `warn`, not off, so a
    // genuinely new any still shows up in `next lint` for a human to judge.
    files: ["app/admin/**/*.{ts,tsx}", "app/api/cron/**/*.ts", "lib/admin/**/*.ts", "lib/pdf/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    // The system-health and alerts pages measure real elapsed time (DB
    // round-trip latency, hours-since-last-cron-run, whether a snooze has
    // expired) — Date.now() calls are the point of the page, not an
    // accidental side effect. react-hooks/purity exists to protect React
    // Compiler's memoization of client component render output; it doesn't
    // apply to an async Server Component that re-runs fully on every
    // request and is never memoized the way client renders are, so a
    // blanket "impure function" flag here is a false positive for this
    // specific diagnostics use case.
    files: ["app/admin/**/system/page.tsx", "app/admin/**/alerts/page.tsx"],
    rules: {
      "react-hooks/purity": "off",
    },
  },
]);

export default eslintConfig;
