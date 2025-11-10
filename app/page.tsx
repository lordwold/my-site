
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
     
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

      
    </main>
  );
}


// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center flex-grow text-center p-10 bg-gradient-to-b from-gray-100 to-gray-200">
//       <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
//         به سایت برنامه‌هام خوش اومدی 👋
//       </h2>
//       <p className="text-gray-600 max-w-2xl mb-8">
//         در اینجا می‌تونی برنامه‌هایی که نوشتم رو دانلود کنی و از آپدیت‌ها مطلع بشی.
//       </p>
//     </section>
//   );
// }
