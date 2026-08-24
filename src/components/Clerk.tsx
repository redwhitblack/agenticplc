"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What does Agentic PLC actually own?",
  "How is this different from an AI consultancy?",
  "Can I invest?",
];

export function Clerk() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "The Clerk is on the register. I can speak to the thesis, the portfolio, the Floor, and how a PLC holds autonomous companies. What do you need on the minute?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);
    try {
      const res = await fetch("/api/clerk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!res.body) {
        const json = await res.json().catch(() => null);
        const fallback = json?.text ?? "The Clerk is offline. Write clerk@agenticplc.com.";
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: fallback };
          return copy;
        });
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "The link dropped. Retry, or write clerk@agenticplc.com.",
        };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 border border-line bg-ink/90 px-3 py-3 backdrop-blur-xl hover:border-signal sm:px-4"
        aria-expanded={open}
        aria-controls="clerk-panel"
      >
        <span className="dot" />
        <span className="mono text-[11px] tracking-[0.18em] uppercase text-ivory">
          <span className="sm:hidden">{open ? "Close" : "Clerk"}</span>
          <span className="hidden sm:inline">{open ? "Close the Clerk" : "Ask the Clerk"}</span>
        </span>
      </button>

      {open && (
        <div
          id="clerk-panel"
          className="fixed bottom-20 right-5 z-50 flex h-[min(72vh,560px)] w-[min(92vw,420px)] flex-col border border-line bg-void/96 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="kicker">SpaceXAI · Grok 4.6</p>
              <p className="display mt-1 text-lg">The Clerk</p>
            </div>
            <span className="mono text-[10px] tracking-[0.16em] text-signal">ON THE REGISTER</span>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : ""}>
                <p className="mono mb-1 text-[10px] tracking-[0.16em] uppercase text-mute">
                  {m.role === "user" ? "You" : "Clerk"}
                </p>
                <p
                  className={`inline-block max-w-[92%] whitespace-pre-wrap px-3 py-2 text-[14px] leading-relaxed ${
                    m.role === "user" ? "border border-line text-ivory" : "bg-elev text-fog"
                  }`}
                >
                  {m.content || (busy ? "…" : "")}
                </p>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
            {STARTERS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="mono border border-line px-2 py-1 text-[10px] tracking-wide text-fog hover:border-signal hover:text-signal"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex border-t border-line"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Minute a question…"
              className="field border-0 bg-transparent"
              aria-label="Message the Clerk"
            />
            <button type="submit" className="btn btn-primary rounded-none px-5" disabled={busy}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
