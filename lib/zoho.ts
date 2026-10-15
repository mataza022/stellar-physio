// Server-side Zoho CRM helper. NEVER import this from a client component.
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID!;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET!;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN!;
const ZOHO_ACCOUNTS_URL =
  process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.com";
const ZOHO_API_DOMAIN =
  process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";

type CachedToken = { token: string; expiresAt: number };
let cachedToken: CachedToken | null = null;

async function getAccessToken(): Promise<string | null> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    refresh_token: ZOHO_REFRESH_TOKEN,
  });

  const res = await fetch(`${ZOHO_ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    console.error("Zoho token refresh HTTP error:", res.status, await res.text());
    return null;
  }

  const body = await res.json();
  if (!body.access_token) {
    console.error("Zoho token refresh returned no access_token:", body);
    return null;
  }

  cachedToken = {
    token: body.access_token,
    expiresAt: Date.now() + 55 * 60 * 1000,
  };
  return body.access_token;
}

/**
 * Normalise a phone number to +254XXXXXXXXX (Kenyan format).
 * Accepts any of these inputs and returns the same output:
 *   0796143845      → +254796143845
 *   796143845       → +254796143845
 *   254796143845    → +254796143845
 *   +254796143845   → +254796143845
 *   +254 796 143845 → +254796143845
 *   (any format with spaces, dashes, parentheses)
 * If the number doesn't look Kenyan, we return the digits with a leading + if present.
 */
function normalizeKenyanPhone(raw: string): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return trimmed;

  // Already has +254 or starts with 254
  if (digits.startsWith("254") && digits.length >= 12) return "+" + digits;

  // 07XXXXXXXX or 01XXXXXXXX (10 digits starting with 0)
  if (digits.startsWith("0") && digits.length === 10) {
    return "+254" + digits.slice(1);
  }

  // 7XXXXXXXX or 1XXXXXXXX (9 digits, no leading 0, no country code)
  if ((digits.startsWith("7") || digits.startsWith("1")) && digits.length === 9) {
    return "+254" + digits;
  }

  // Anything else (foreign numbers) — keep the + prefix if it was there
  return hasPlus ? "+" + digits : digits;
}

export type ZohoLeadInput = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function createZohoLead(
  fields: ZohoLeadInput,
  source: string
): Promise<boolean> {
  const token = await getAccessToken();
  if (!token) return false;

  const lead: Record<string, string> = {
    Last_Name: (fields.name || "").trim() || "Website Lead",
    Company: "StellarPhysio Website",
    Lead_Source: source,
  };
  if (fields.email?.trim()) lead.Email = fields.email.trim();
  if (fields.phone?.trim()) lead.Phone = normalizeKenyanPhone(fields.phone);
  if (fields.message?.trim()) lead.Description = fields.message.trim();

  const res = await fetch(`${ZOHO_API_DOMAIN}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [lead],
      trigger: ["workflow"],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Zoho lead creation failed:", res.status, text);
    if (res.status === 401) cachedToken = null;
    return false;
  }

  return true;
}
