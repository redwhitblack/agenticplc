import { PageHeader } from "@/components/PageHeader";
import { theses } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thesis",
  description: "Why Agentic PLC exists: agents operate, humans direct, the public owns.",
};

export default function ThesisPage() {
  return (
    <>
      <PageHeader
        kicker="Thesis"
        title="The last scarce input in a company is no longer capital. It is attention."
        lede="We built a holding company that treats operating attention as a deployable system — and keeps the law pointed at people."
      />
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative mb-20 min-h-[380px] overflow-hidden">
          <Image
            src="/media/lattice.jpg"
            alt="A lime lattice in the shape of a living organizational chart"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="grid gap-16 md:grid-cols-3">
          {theses.map((t) => (
            <article key={t.n}>
              <p className="mono text-signal">{t.n}</p>
              <h2 className="mt-4 text-3xl">{t.title}</h2>
              <p className="mt-4 leading-relaxed text-fog">{t.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-24 grid gap-10 border-t border-line pt-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl">What we are not</h2>
            <ul className="mt-6 space-y-4 text-fog">
              <li>A chatbot vendor selling seats to other people’s firms.</li>
              <li>A research lab with a waitlist and no P&amp;L.</li>
              <li>A staffing company with a model in the middle.</li>
              <li>A DAO. Directors are named. Liability is not a meme.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl">What we are</h2>
            <p className="mt-6 leading-relaxed text-fog">
              A PLC that founds operating companies, runs them with agents, and compounds the
              cash and the learning at the holding layer. Humanoid Movers moves houses. QuantumLyte
              runs a health ledger. The Floor watches both. The Clerk keeps the register.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
