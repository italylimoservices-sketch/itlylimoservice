# Backup & recovery readiness

This documents what actually exists today and what a real disaster-recovery
posture requires. Nothing below claims a backup job is running unless it
genuinely is — there is currently no automated off-Supabase backup export
configured by this codebase, and that is stated plainly rather than implied
away.

## What already gives you recovery capability

1. **Full schema is reproducible from source control.** Every table, RLS
   policy, function, trigger, and index lives in `supabase/migrations/*.sql`,
   applied in filename order. A brand new Supabase project can be brought to
   the exact current schema by running these migrations in sequence (e.g.
   `supabase db push` against a fresh project, or replaying them via the
   MCP/dashboard SQL editor). This is real and tested — every migration in
   this repo was applied to the live project via the same mechanism during
   development.
2. **Supabase's platform-level backups.** Supabase runs daily backups of the
   Postgres database on all plans, and Point-in-Time Recovery (PITR) on Pro
   and above. This is Supabase's infrastructure, not something this codebase
   configures — check **Project Settings → Database → Backups** in the
   Supabase dashboard to confirm what tier this project is on and what
   retention window applies. This document cannot verify that from the
   codebase; it must be checked directly.
3. **Storage objects** (the `documents` and `public-assets` buckets) are
   *not* covered by Postgres backups — they're a separate object store.
   Supabase Storage itself is durable (replicated), but there's no
   point-in-time restore for individual files today.

## What is genuinely missing

- No scheduled export of the database to a location outside Supabase (e.g.
  a nightly `pg_dump` to S3/R2). If Supabase itself has an outage or the
  project is accidentally deleted, platform-level backups go with it.
- No documented Recovery Point Objective (RPO) or Recovery Time Objective
  (RTO) — i.e. "how much data could we lose" and "how long would restoring
  take" are not defined numbers anywhere.
- No restore drill has ever been performed. An untested restore process is
  not a reliable one — the only way to know a backup is real is to have
  actually restored from it once.
- `document_sequences` (the atomic counters behind invoice/quotation/
  booking/receipt/lead numbers) and `company_settings` are both
  effectively-single-row tables with no history of their own — a bad
  `UPDATE` here has no built-in undo beyond whatever Supabase backup window
  applies.

## Recommended next steps (not yet implemented)

1. Confirm the project's Supabase plan and backup/PITR settings in the
   dashboard; upgrade if daily-only backups aren't enough for the business's
   actual risk tolerance.
2. Set up a scheduled `pg_dump` (or Supabase's `supabase db dump`) to
   external storage on a cron (daily is a reasonable starting point), kept
   for at least 30 days.
3. Write down an actual RPO/RTO target and check it against what the chosen
   backup cadence can deliver.
4. Periodically (e.g. quarterly) actually restore a dump into a scratch
   Supabase project and verify the app boots against it — this is the only
   way "we have backups" becomes a tested claim instead of an assumption.
5. Treat `supabase/migrations/` as the schema's source of truth going
   forward — never hand-edit the schema via the dashboard without also
   committing a matching migration file, or the repo and the live database
   will drift (this already happened once with the `security_hardening`
   migration during Task 1 and was caught and fixed during the Task 2
   audit — see that migration's file header for the full story).
