const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const DEFAULT_MIN_SCORE = 0.5;

interface SiteVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
}

/**
 * Verifies a reCAPTCHA v3 token server-side. Returns true when:
 * - RECAPTCHA_SECRET_KEY isn't configured (feature not activated — lets the
 *   booking form keep working unmodified if the key is ever removed/unset).
 * - Or Google confirms success, the action matches what the client
 *   requested, and the score clears the configured/default threshold.
 *
 * Never trust a token's presence alone — always call this before accepting
 * the submission it's attached to.
 */
export async function verifyRecaptcha(token: string | undefined, expectedAction: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;

  if (!token) {
    console.error("reCAPTCHA verification failed: no token provided");
    return false;
  }

  let result: SiteVerifyResponse;
  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    result = await res.json();
  } catch (err) {
    console.error("reCAPTCHA verification request failed", err);
    return false;
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE) || DEFAULT_MIN_SCORE;

  if (!result.success) {
    console.error("reCAPTCHA verification rejected", result["error-codes"]);
    return false;
  }
  if (result.action !== expectedAction) {
    console.error(`reCAPTCHA action mismatch: expected "${expectedAction}", got "${result.action}"`);
    return false;
  }
  if (typeof result.score === "number" && result.score < minScore) {
    console.error(`reCAPTCHA score too low: ${result.score} < ${minScore}`);
    return false;
  }

  return true;
}
