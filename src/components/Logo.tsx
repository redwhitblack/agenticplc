import Link from "next/link";

export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="2" fill="none" stroke="#ece7dc" strokeWidth="1.4" />
      <rect x="14.2" y="6" width="3.6" height="20" rx="1.2" fill="#c8f542" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Agentic PLC home">
      <Mark />
      <span className="display text-[17px] tracking-[-0.02em] text-ivory">
        Agentic
        <span className="ml-1.5 font-normal text-fog group-hover:text-signal transition-colors">PLC</span>
      </span>
    </Link>
  );
}
