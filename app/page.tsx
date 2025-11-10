export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">MySite</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-gray-300">خانه</a>
          <a href="/downloads" className="hover:text-gray-300">دانلودها</a>
          <a href="#" className="hover:text-gray-300">درباره</a>
          <a href="#" className="hover:text-gray-300">تماس</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center p-10 bg-gradient-to-b from-gray-100 to-gray-200">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          به سایت برنامه‌هام خوش اومدی 👋
        </h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          در اینجا می‌تونی برنامه‌هایی که نوشتم رو دانلود کنی، تغییرات نسخه‌ها رو ببینی و از به‌روزرسانی‌ها مطلع بشی.
        </p>
        <a href="/downloads" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          رفتن به بخش دانلودها 🚀
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-4">
        <p>ساخته شده توسط علیرضا غنی زاده</p>
      </footer>
    </main>
  );
}
