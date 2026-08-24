import { PageHeader } from "@/components/PageHeader";
import { portfolio } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Operating companies owned by Agentic PLC.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        kicker="The register"
        title="We do not invest in tools. We own the firms that no longer need a floor of managers."
        lede="Each name below is an operating company with customers, a ledger, and agents on the desk. Click through. They are live."
      />
      <div className="mx-auto max-w-7xl space-y-24 px-5 pb-24 md:px-8">
        {portfolio.map((co) => (
          <article key={co.id} className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden">
              <Image src={co.image} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <p className="kicker">
                {co.status} · {co.sector}
              </p>
              <h2 className="mt-3 text-5xl">{co.name}</h2>
              <p className="mt-5 leading-relaxed text-fog">{co.summary}</p>
              <p className="mt-5 mono text-[11px] uppercase tracking-[0.16em] text-signal">
                {co.metrics.join(" · ")}
              </p>
              <Link
                href={co.url}
                className="btn btn-ghost mt-8"
                target={co.url.startsWith("http") ? "_blank" : undefined}
                rel={co.url.startsWith("http") ? "noreferrer" : undefined}
              >
                {co.url.startsWith("http") ? "Open company" : "Inquire"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
