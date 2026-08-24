"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolio, stats, steps, theses } from "@/lib/content";

export function HomeView() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/media/hero-hq.jpg"
          alt="Agentic PLC headquarters on the Thames at night, a lime signal slit running the glass facade"
          fill
          priority
          sizes="100vw"
          className="img-ken object-cover"
        />
        <div className="vignette absolute inset-0" />

        <div className="hud absolute left-5 top-6 hidden md:block md:left-8">
          LONDON · ONE THAMES COURT
          <br />
          FLOOR STATUS NOMINAL
          <br />
          EXCEPTION QUEUE 03
        </div>
        <div className="hud absolute right-5 top-6 hidden text-right md:block md:right-8">
          PLC · ON THE REGISTER
          <br />
          SF DESK AWAKE
          <br />
          00:00 BST
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-28 pt-24 md:px-8 md:pb-20">
          <p className="kicker">Public limited company · autonomous enterprise</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,9vw,7.4rem)] text-ivory">
            Companies that
            <br />
            run themselves.
          </h1>
          <p className="lede mt-6 max-w-xl">
            We incorporate real businesses, instantiate agents to operate them, and keep humans in
            the boardroom — not the queue. A holding company for the post-labor firm.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/portfolio" className="btn btn-primary">
              See the portfolio
            </Link>
            <Link href="/thesis" className="btn btn-ghost">
              Read the thesis
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px border-y border-line bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-void px-6 py-10">
            <p className="display text-4xl text-ivory md:text-5xl">{s.value}</p>
            <p className="mt-3 mono text-[11px] tracking-[0.18em] uppercase text-signal">{s.label}</p>
            <p className="mt-2 text-sm text-mute">{s.hint}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="kicker">Why a PLC</p>
        <h2 className="mt-4 max-w-3xl text-4xl text-ivory md:text-6xl">
          Not a lab. Not a consultancy. A company that owns companies that operate themselves.
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {theses.map((t) => (
            <article key={t.n} className="border-t border-line pt-6">
              <p className="mono text-signal">{t.n}</p>
              <h3 className="mt-4 text-2xl">{t.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-fog">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[64vh] overflow-hidden">
        <Image
          src="/media/floor.jpg"
          alt="The Floor: a night operations room with a wall of live company dashboards"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-void/55" />
        <div className="relative z-10 mx-auto flex min-h-[64vh] max-w-7xl items-end px-5 py-16 md:px-8">
          <div className="max-w-2xl">
            <p className="kicker">The Floor</p>
            <h2 className="mt-4 text-4xl md:text-6xl">A few humans. Every company we own.</h2>
            <p className="lede mt-5">
              Exception desks, not departments. If an agent surprises the charter, a director is
              already on the loop.
            </p>
            <Link href="/floor" className="btn btn-ghost mt-8">
              How instantiation works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Protocol</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Incorporate. Instantiate. Operate. Compound.</h2>
          </div>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <article key={s.n} className="border-t border-line pt-6">
              <p className="mono text-signal">{s.n}</p>
              <h3 className="mt-4 text-3xl">{s.title}</h3>
              <p className="mt-2 mono text-[11px] uppercase tracking-[0.16em] text-mute">{s.kicker}</p>
              <p className="mt-4 text-sm leading-relaxed text-fog">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Portfolio</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Operating companies. Not slideware.</h2>
          </div>
          <Link href="/portfolio" className="btn btn-ghost hidden md:inline-flex">
            Full register
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolio.map((co) => (
            <Link key={co.id} href={co.url} className="group frame overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={co.image}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="kicker">
                  {co.status} · {co.sector}
                </p>
                <h3 className="mt-3 text-3xl">{co.name}</h3>
                <p className="mt-3 text-sm text-fog">{co.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden">
            <Image
              src="/media/boardroom.jpg"
              alt="Empty boardroom with a lime holographic org chart above a black stone table"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="kicker">Governance</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Empty chairs are the point.</h2>
            <p className="mt-5 leading-relaxed text-fog">
              The board meets. The agents do not vote. Fiduciary duty stays human because the law
              still requires a neck to put the necklace on. We built the PLC so that remains true
              after the operating layer is no longer staffed like a factory.
            </p>
            <Link href="/governance" className="btn btn-ghost mt-8">
              How we are held
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="frame relative overflow-hidden px-8 py-16 md:px-16">
          <Image src="/media/lattice.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" />
          <div className="relative z-10 max-w-2xl">
            <p className="kicker">Capital</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Own the stack, not a seat license.</h2>
            <p className="lede mt-5">
              When the PLC is ready to take outside capital, it will be as a company — not as a
              round of tool credits. Write the desk.
            </p>
            <Link href="/capital" className="btn btn-primary mt-8">
              Capital desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
