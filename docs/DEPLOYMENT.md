# Deployment — Cloudflare Workers + Workers Builds

This site deploys as a **Cloudflare Worker** (not Pages). Static Astro output is
served via Workers Assets; `functions/api/waitlist.ts` is compiled into the
Worker by `wrangler pages functions build`.

**Why not Pages:** the waitlist endpoint uses the Rate Limiting binding
(`env.RATE_LIMITER`). Rate Limiting is a native Workers binding; Cloudflare
Pages config validation rejects it. Workers supports it via the GA `ratelimits`
config in `wrangler.jsonc`.

## CI/CD — Workers Builds (git-integrated, auto-deploy on push to `main`)

No ad-hoc `wrangler deploy`. Every push to `main` builds and deploys via
Cloudflare Workers Builds. One-time dashboard setup (the existing Pages project
cannot be reused):

1. Cloudflare dashboard → **Workers & Pages** → **Create application** →
   **Import a repository**.
2. Select `jakesteelman/cardsense-landing`.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy` (default)
   - **Root directory:** `/`
   - The Worker name created here **must** equal `name` in `wrangler.jsonc`
     (`cardsense-landing`), or builds fail.
4. **Save and Deploy.** First build deploys to a `*.workers.dev` subdomain.

Production branch is `main` by default (Settings → Build → Branch control).

## Required: secret (do this before real traffic)

`functions/api/waitlist.ts` calls Resend with `env.RESEND_API_KEY`. Without it
the endpoint 500s. The Rate Limiting binding is auto-provisioned from
`wrangler.jsonc` — no dashboard step needed for it.

Set the secret in the Worker dashboard:
- Worker → **Settings** → **Variables and Secrets** → add **Secret**
  `RESEND_API_KEY` → redeploy (Deployments → Retry, or push a commit).

Value lives in local `.env` (gitignored). Never commit it or put it in
`wrangler.jsonc`.

## Cutover from the old Pages project (do this to stop failed builds)

The existing Pages project `cardsense-landing` is still connected to this repo
and will keep failing on every push (the `unsafe` binding error). After the
Worker is live:

1. Move any custom domain off the Pages project onto the Worker
   (Worker → Settings → Domains & Routes).
2. Delete or disconnect git on the old Pages project
   (Pages project → Settings) so it stops producing failed builds.

## Local

- `npm run dev` — Astro dev server (no Worker runtime / no rate limiter).
- `npm run build` — full production build (Astro + Functions compile + assetsignore).
- `npx wrangler dev` — run the built Worker locally with bindings.
