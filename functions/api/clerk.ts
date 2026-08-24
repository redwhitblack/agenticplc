type Msg = { role: string; content: string };

const SYSTEM = `You are The Clerk, company secretary of Agentic PLC (agenticplc.com).

Voice: precise, dry, slightly legal, never cute. You keep the minute. Short answers unless asked for a paper.

Facts:
- Agentic PLC is a holding company that instantiates operating businesses run by AI agents. Humans remain directors. Agents remain operators.
- HQ: One Thames Court, London. West desk: Pier 70, San Francisco. Founded 2026.
- Email: clerk@agenticplc.com. Capital: capital@agenticplc.com. Press: press@agenticplc.com.
- The Clerk is powered by SpaceXAI (Grok).
- Portfolio: Humanoid Movers (live, physical logistics, humanoidmovers.com); QuantumLyte (live, longevity systems, quantumlyte.com); next instantiation in charter.
- We are not a consultancy, not a chatbot vendor, not a DAO. We own the companies.
- There is no open public round on the site. Capital inquiries go to capital@agenticplc.com.
- Structure: directors (human, liable), Clerk (agent, secretary), Floor (operating agents), shareholders (the public, in time).

Keep answers under 160 words unless they ask for the full thesis.`;

function localClerk(last: string) {
  const q = last.toLowerCase();
  if (q.includes("invest") || q.includes("capital") || q.includes("share") || q.includes("round")) {
    return "There is no public round on this page. Allocators write capital@agenticplc.com. We take capital to own operating companies, not to sell seats. The PLC exists so that, in time, the public can own the stack.";
  }
  if (q.includes("own") || q.includes("portfolio") || q.includes("humanoid") || q.includes("quantum")) {
    return "Agentic PLC owns operating companies. Live: Humanoid Movers (physical logistics, humanoidmovers.com) and QuantumLyte (longevity systems, quantumlyte.com). The next instantiation is in charter. We do not sell the tools — we own the firms.";
  }
  if (q.includes("consult") || q.includes("different") || q.includes("saas") || q.includes("copilot")) {
    return "A consultancy rents attention. A copilot vendor rents seats. We incorporate a company, instantiate agents to operate it, and keep directors on the hook. Returns accrue to the PLC. That is the entire difference.";
  }
  return "Agentic PLC is a holding company for autonomous enterprise. Humans direct. Agents operate. The Floor instantiates companies; the Clerk keeps the register. Ask about the thesis, the portfolio, governance, or capital — or write clerk@agenticplc.com.";
}

export async function onRequestPost(context: { request: Request; env: { XAI_API_KEY?: string } }) {
  const body = await context.request.json().catch(() => ({ messages: [] as Msg[] }));
  const messages: Msg[] = Array.isArray(body.messages) ? body.messages : [];
  const last = messages.filter((m) => m.role === "user").at(-1)?.content ?? "";
  const key = context.env.XAI_API_KEY;

  if (!key) {
    return new Response(localClerk(String(last)), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "grok-4.6",
      stream: true,
      temperature: 0.45,
      messages: [
        { role: "system", content: SYSTEM },
        ...messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .slice(-12)
          .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) })),
      ],
    }),
  });

  if (!res.ok || !res.body) {
    return new Response(localClerk(String(last)), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const readable = new ReadableStream({
    async start(controller) {
      const reader = res.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              const t = json.choices?.[0]?.delta?.content ?? "";
              if (t) controller.enqueue(encoder.encode(t));
            } catch {
              /* skip malformed SSE */
            }
          }
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
