import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <p className="kicker">404 · not on the register</p>
      <h1 className="mt-4 text-5xl md:text-7xl">This entity has not been instantiated.</h1>
      <p className="lede mt-6">The Clerk has no minute for this URL.</p>
      <Link href="/" className="btn btn-primary mt-10">
        Return to the PLC
      </Link>
    </div>
  );
}
