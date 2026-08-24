export const runtime = "nodejs";

export function GET() {
  return Response.json({ ok: true, service: "agenticplc", ts: Date.now() });
}
