"use client"; // Next.js 13 app router

import { useState } from "react";

const apps = [
  {
    id: 1,
    title: "برنامه مدیریت وام",
    desc: "ابزاری ساده برای مدیریت وام ها.",
    version: "1.0.0",
    category: "مالی",
    imageUrl: "/images/loan.png",
    downloadUrl: "https://github.com/lordwold/my-site/releases/download/v1.0.0/loan.py",
  },
  {
    id: 2,
    title: "مبدل فرمت تصویر",
    desc: "عکس‌ها را بین PNG، JPG و WebP تبدیل کن.",
    version: "2.0.1",
    category: "تصویر",
    downloadUrl: "https://example.com/files/imgconverter.zip",
  },
  {
    id: 3,
    title: "ماشین حساب حرفه‌ای",
    desc: "محاسبات علمی با رابط مدرن.",
    version: "3.0.0",
    category: "علمی",
    downloadUrl: "https://example.com/files/calculator.zip",
  },
];

export default function DownloadsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه");

  // فیلتر برنامه‌ها
  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.title.includes(search) || app.desc.includes(search);
    const matchesCategory = category === "همه" || app.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">📦 دانلود برنامه‌ها</h1>

      {/* جستجو و دسته‌بندی */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="جستجو برنامه..."
          className="border rounded-lg p-2 flex-grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded-lg p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="همه">همه</option>
          <option value="مالی">مالی</option>
          <option value="تصویر">تصویر</option>
          <option value="علمی">علمی</option>
        </select>
      </div>

      {/* کارت‌ها */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {/* تصویر یا placeholder */}
            {app.imageUrl ? (
              <div className="bg-gray-100 flex justify-center items-center p-4">
                <img
                  src={app.imageUrl}
                  alt={app.title}
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            ) : (
              <div className="bg-gray-200 h-40 flex justify-center items-center text-gray-500 text-sm">
                {/* تصویر موجود نیست */}
              </div>
            )}

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold mb-2">{app.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{app.desc}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">نسخه {app.version}</span>
                <a
                  href={app.downloadUrl}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دانلود
                </a>
              </div>
            </div>
          </div>
        ))}

        {filteredApps.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            برنامه‌ای پیدا نشد.
          </p>
        )}
      </div>
    </section>
  );
}
