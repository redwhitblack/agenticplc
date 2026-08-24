export async function onRequestGet() {
  return Response.json({ ok: true, service: "agenticplc", ts: Date.now() });
}
