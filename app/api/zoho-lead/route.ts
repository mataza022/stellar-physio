import { NextRequest, NextResponse } from "next/server";
import { createZohoLead } from "@/lib/zoho";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, source } = body ?? {};

    if (!source || typeof source !== "string") {
      return NextResponse.json(
        { ok: false, error: "source required" },
        { status: 400 }
      );
    }

    const ok = await createZohoLead(
      {
        name: typeof name === "string" ? name : "",
        email: typeof email === "string" ? email : "",
        phone: typeof phone === "string" ? phone : "",
        message: typeof message === "string" ? message : "",
      },
      source
    );

    return NextResponse.json({ ok });
  } catch (err) {
    console.error("zoho-lead route error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
