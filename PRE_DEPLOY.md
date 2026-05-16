# Pre-Deploy Checklist

This site deploys as a **Cloudflare Worker** via **Workers Builds**, not Pages.
Full runbook: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

- [ ] Workers Builds connected to `jakesteelman/cardsense-landing` (build command `npm run build`)
- [ ] `RESEND_API_KEY` added as a **Secret** on the Worker (Settings → Variables and Secrets)
- [ ] Custom domain moved from the old Pages project to the Worker
- [ ] Old Pages project `cardsense-landing` deleted / git-disconnected (it keeps failing builds)
