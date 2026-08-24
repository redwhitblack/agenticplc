import { PageHeader } from "@/components/PageHeader";
import { board, company } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Governance",
  description: "How Agentic PLC keeps humans as directors and agents as operators.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        kicker="Governance"
        title="Agents operate. Directors answer. That is the entire point of a PLC."
        lede="We did not invent a new legal wrapper to dodge responsibility. We used the oldest one that still works — a public limited company — so the operating layer can change."
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-2 md:px-8">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/media/governance.jpg"
            alt="Fiduciary office with legal books, rain on London windows, a lime indicator on the desk"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/media/boardroom.jpg"
            alt="Empty boardroom and holographic org chart"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {board.map((b) => (
            <article key={b.role} className="border-t border-line pt-6">
              <h2 className="text-3xl">{b.role}</h2>
              <p className="mt-4 leading-relaxed text-fog">{b.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-fog">
          Registered desk: {company.hq}. West desk: {company.west}. The Clerk is the company
          secretary. Write {company.email}.
        </p>
      </div>
    </>
  );
}
