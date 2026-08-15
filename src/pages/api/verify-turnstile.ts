import type { NextApiRequest, NextApiResponse } from "next";

interface SiteverifyResponse {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean }>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false });
  }

  const { token } = req.body ?? {};

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return res.status(400).json({ success: false });
  }

  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) {
    console.error("TURNSTILE_SECRET is not configured");
    return res.status(500).json({ success: false });
  }

  const remoteip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress;

  let result: SiteverifyResponse;
  try {
    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10_000),
        body: new URLSearchParams({
          secret,
          response: token,
          ...(remoteip ? { remoteip } : {}),
        }),
      },
    );
    if (!r.ok) throw new Error(`siteverify ${r.status}`);
    result = await r.json();
  } catch (err) {
    console.error("Turnstile siteverify request failed", err);
    return res.status(502).json({ success: false });
  }

  if (!result.success) {
    return res.status(403).json({ success: false });
  }

  return res.status(200).json({ success: true });
}
