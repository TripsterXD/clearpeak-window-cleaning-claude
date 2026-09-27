import { readQuoteInput, validateQuote } from "@/lib/quote";
import { getSupabaseAdmin } from "@/lib/supabase-server";

const GENERIC_ERROR =
  "Sorry, we couldn’t send your request right now. Please try again, or call us instead.";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const input = readQuoteInput(body as Record<string, unknown>);
  const errors = validateQuote(input);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  try {
    const { error } = await getSupabaseAdmin().from("quote_submissions").insert({
      name: input.name,
      email: input.email,
      phone: input.phone,
      service_type: input.serviceType,
      property_type: input.propertyType,
      project_details: input.details,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Failed to save quote submission:", error.message);
      return Response.json({ error: GENERIC_ERROR }, { status: 500 });
    }
  } catch (error) {
    console.error("Failed to save quote submission:", error);
    return Response.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 201 });
}
