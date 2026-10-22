"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-bold text-white">Nimadir xato ketdi 😕</h1>
      <p className="mt-2 text-slate-400">
        Ma'lumotni yuklab bo'lmadi. Iltimos, qayta urinib ko'ring.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 px-5 py-2 font-medium text-white transition hover:opacity-90"
      >
        Qayta urinish
      </button>
    </div>
  );
}