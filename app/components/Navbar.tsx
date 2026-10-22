import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent"
        >
          🎬 Kino
        </Link>
        <div className="flex gap-6 text-sm text-slate-300">
          <Link href="/" className="transition hover:text-white">
            Bosh sahifa
          </Link>
          <Link href="/search" className="transition hover:text-white">
            Qidiruv
          </Link>
          <Link href="/favorites" className="transition hover:text-white">
            Sevimlilar
          </Link>
        </div>
      </nav>
    </header>
  );
}