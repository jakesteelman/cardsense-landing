const AUDIENCE_ID = "a65e9b88-c6b5-409f-9c51-e5e6363522c4";

interface Env {
  RATE_LIMITER: RateLimit;
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";

  const { success } = await env.RATE_LIMITER.limit({ key: ip });
  if (!success) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  let email: string;
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    }
  );

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return Response.json({ error: "Failed to join waitlist" }, { status: 500 });
  }

  return Response.json({ ok: true });
};
