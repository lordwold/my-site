"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">MySite</Link>
        </h1>

        {/* منو دسکتاپ */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300">خانه</Link>
          <Link href="/downloads" className="hover:text-gray-300">دانلودها</Link>
          <Link href="/about" className="hover:text-gray-300">درباره</Link>
          <Link href="/contact" className="hover:text-gray-300">تماس با ما</Link>
        </nav>

        {/* منو موبایل */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* منو موبایل بازشو */}
      {open && (
        <nav className="flex flex-col gap-4 p-4 bg-gray-800 md:hidden">
          <Link href="/" className="hover:text-gray-300" onClick={() => setOpen(false)}>خانه</Link>
          <Link href="/downloads" className="hover:text-gray-300" onClick={() => setOpen(false)}>دانلودها</Link>
          <Link href="/about" className="hover:text-gray-300" onClick={() => setOpen(false)}>درباره</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setOpen(false)}>تماس با ما</Link>
        </nav>
      )}
    </header>
  );
}
