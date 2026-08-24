import { company, portfolio } from "@/lib/content";
import OpenAI from "openai";

export const runtime = "nodejs";

const SYSTEM = `You are The Clerk, company secretary of Agentic PLC (agenticplc.com).

Voice: precise, dry, slightly legal, never cute. You keep the minute. Short answers unless asked for a paper.

Facts:
- Agentic PLC is a holding company that instantiates operating businesses run by AI agents. Humans remain directors. Agents remain operators.
- HQ: ${company.hq}. West desk: ${company.west}. Founded ${company.founded}.
- Email: ${company.email}. Capital: ${company.capital}. Press: ${company.press}.
- The Clerk is powered by SpaceXAI (Grok).
- Portfolio: ${portfolio
  .map((p) => `${p.name} (${p.status}, ${p.sector}${p.url.startsWith("http") ? ", " + p.url : ""})`)
  .join("; ")}.
- Humanoid Movers is a live commercial humanoid moving fleet (humanoidmovers.com). QuantumLyte is a live longevity/health operating system (quantumlyte.com).
- We are not a consultancy, not a chatbot vendor, not a DAO. We own the companies.
- There is no open public round on the site. Capital inquiries go to ${company.capital}.
- Structure: directors (human, liable), Clerk (agent, secretary), Floor (operating agents), shareholders (the public, in time).

Keep answers under 160 words unless they ask for the full thesis.`;

function localClerk(last: string) {
  const q = last.toLowerCase();
  if (q.includes("invest") || q.includes("capital") || q.includes("share") || q.includes("round")) {
    return `There is no public round on this page. Allocators write ${company.capital}. We take capital to own operating companies, not to sell seats. The PLC exists so that, in time, the public can own the stack.`;
  }
  if (q.includes("own") || q.includes("portfolio") || q.includes("humanoid") || q.includes("quantum")) {
    return `Agentic PLC owns operating companies. Live: Humanoid Movers (physical logistics, humanoidmovers.com) and QuantumLyte (longevity systems, quantumlyte.com). The next instantiation is in charter. We do not sell the tools — we own the firms.`;
  }
  if (q.includes("consult") || q.includes("different") || q.includes("saas") || q.includes("copilot")) {
    return `A consultancy rents attention. A copilot vendor rents seats. We incorporate a company, instantiate agents to operate it, and keep directors on the hook. Returns accrue to the PLC. That is the entire difference.`;
  }
  return `Agentic PLC is a holding company for autonomous enterprise. Humans direct. Agents operate. The Floor instantiates companies; the Clerk keeps the register. Ask about the thesis, the portfolio, governance, or capital — or write ${company.email}.`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({ messages: [] }));
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const last = messages.filter((m: { role: string }) => m.role === "user").at(-1)?.content ?? "";

  const key = process.env.XAI_API_KEY;
  if (!key) {
    return new Response(localClerk(String(last)), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const client = new OpenAI({ apiKey: key, baseURL: "https://api.x.ai/v1" });
  const stream = await client.chat.completions.create({
    model: "grok-4.6",
    stream: true,
    temperature: 0.45,
    messages: [
      { role: "system", content: SYSTEM },
      ...messages
        .filter((m: { role: string }) => m.role === "user" || m.role === "assistant")
        .slice(-12)
        .map((m: { role: "user" | "assistant"; content: string }) => ({
          role: m.role,
          content: String(m.content).slice(0, 4000),
        })),
    ],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const t = chunk.choices[0]?.delta?.content ?? "";
          if (t) controller.enqueue(encoder.encode(t));
        }
      } catch {
        controller.enqueue(encoder.encode(localClerk(String(last))));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
