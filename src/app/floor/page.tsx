import { PageHeader } from "@/components/PageHeader";
import { steps } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Floor",
  description: "How Agentic PLC instantiates and operates companies with agents.",
};

export default function FloorPage() {
  return (
    <>
      <PageHeader
        kicker="The Floor"
        title="A company is a deploy. The Floor is where it stays alive."
        lede="Instantiation is not a metaphor. Day zero, the entity exists, the agents have a charter, and the exception desk is staffed."
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/media/floor.jpg"
            alt="Operations floor at night with live dashboards"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {steps.map((s) => (
            <article key={s.n} className="border-t border-line pt-6">
              <p className="mono text-signal">{s.n}</p>
              <h2 className="mt-3 text-4xl">{s.title}</h2>
              <p className="mt-2 mono text-[11px] uppercase tracking-[0.16em] text-mute">{s.kicker}</p>
              <p className="mt-5 leading-relaxed text-fog">{s.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src="/media/instantiate.jpg"
              alt="A newly instantiated office at dawn, monitors coming online"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="kicker">Day zero</p>
            <h2 className="mt-3 text-4xl">The lights come on before the furniture does.</h2>
            <p className="mt-5 leading-relaxed text-fog">
              Bank, insurance, domain, dispatch, books. Agents do not wait for a hiring plan. A
              director signs the charter. The Floor takes the rest.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
