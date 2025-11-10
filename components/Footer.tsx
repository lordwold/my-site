export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        <p>a.ghanizadeh ساخته شده توسط </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">توییتر</a>
          <a href="#" className="hover:text-white">اینستاگرام</a>
          <a href="#" className="hover:text-white">گیت‌هاب</a>
        </div>
      </div>
    </footer>
  );
}
