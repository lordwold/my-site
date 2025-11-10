"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // هنگام بارگذاری صفحه، تم ذخیره شده را اعمال کن
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  // این تابع toggleTheme را همینجا تعریف می‌کنیم
  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">MySite</Link>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300">خانه</Link>
          <Link href="/downloads" className="hover:text-gray-300">دانلودها</Link>
          <Link href="/about" className="hover:text-gray-300">درباره</Link>
          <Link href="/contact" className="hover:text-gray-300">تماس با ما</Link>
        </nav>

        {/* دکمه تغییر تم */}
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* منو موبایل */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">☰</button>
        </div>
      </div>

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
