# 🎬 Kino qidiruv

Mashhur filmlarni ko'rish, qidirish va sevimlilarga saqlash uchun Next.js ilovasi. Ma'lumotlar TMDB API'dan olinadi.

**Live demo:** (deploydan keyin qo'shiladi)

## Imkoniyatlar

- Mashhur filmlar ro'yxati (poster, reyting, yil)
- Film nomi bo'yicha qidiruv
- Film sahifasi: tavsif, janrlar, davomiyligi
- Sevimlilar: brauzerda saqlanadi (localStorage)
- Yuklanish skeleti, xato va 404 sahifalari

## Texnologiyalar

Next.js (App Router), TypeScript, Tailwind CSS, TMDB API

## Ishga tushirish

1. `git clone https://github.com/lola66999/kino-qidiruv.git`
2. `npm install`
3. Loyiha ildizida `.env.local` fayl yarating va TMDB tokeningizni yozing: `TMDB_TOKEN=sizning_tokeningiz`
4. `npm run dev`
5. Brauzerda `http://localhost:3000` ni oching

## Nimalarni o'rgandim

- Server component'larda ma'lumot olish va `Suspense` bilan yuklanishni boshqarish
- Dinamik route (`/movie/[id]`) va `searchParams` bilan qidiruv
- Custom hook va `localStorage` bilan sevimlilarni saqlash
- API tokenni `.env.local` da xavfsiz saqlash

Bu mahsulot TMDB API'dan foydalanadi, lekin TMDB tomonidan tasdiqlanmagan va sertifikatlanmagan.