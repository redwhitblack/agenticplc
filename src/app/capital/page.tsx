import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Capital",
  description: "How to write Agentic PLC about capital, charters, and the next instantiation.",
};

export default function CapitalPage() {
  return (
    <>
      <PageHeader
        kicker="Capital desk"
        title="When we take capital, it will be to own more companies — not to rent more seats."
        lede="There is no public round on this page. There is a desk. If you allocate to autonomous enterprise, or you have a market that still runs like 1998, write."
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-2 md:px-8">
        <div className="relative min-h-[380px] overflow-hidden">
          <Image
            src="/media/pulse.jpg"
            alt="A lime holographic node pulsing on a black stone table"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div className="border border-line p-6">
            <p className="kicker">Allocators</p>
            <p className="mt-3 text-fog">
              Family offices, funds, and principals who want exposure to operating companies run
              by agents — not to another copilot SKU.
            </p>
            <a href={`mailto:${company.capital}`} className="mt-4 inline-block text-signal">
              {company.capital}
            </a>
          </div>
          <div className="border border-line p-6">
            <p className="kicker">Charters</p>
            <p className="mt-3 text-fog">
              If you have a business that is still a building full of queues, the Floor may
              instantiate it. We own what we run.
            </p>
            <a href={`mailto:${company.email}`} className="mt-4 inline-block text-signal">
              {company.email}
            </a>
          </div>
          <div className="border border-line p-6">
            <p className="kicker">Press</p>
            <a href={`mailto:${company.press}`} className="mt-3 inline-block text-ivory hover:text-signal">
              {company.press}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
