import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <p className="mt-2 text-slate-400">Bunday sahifa yoki film topilmadi.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2 text-slate-200 transition hover:bg-white/10"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
