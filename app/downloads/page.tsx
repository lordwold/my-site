
const apps = [
  {
    id: 1,
    title: "برنامه مدیریت وام ",
    desc: "ابزاری ساده برای مدیریت وام ها .",
    version: "1.0.0",
    downloadUrl: "https://github.com/lordwold/my-site/releases/download/v1.0.0/loan.py",
  },
  {
    id: 2,
    title: "مبدل فرمت تصویر",
    desc: "عکس‌ها رو بین PNG، JPG و WebP با یک کلیک تبدیل کن.",
    version: "2.0.1",
    downloadUrl: "https://example.com/files/imgconverter.zip",
  },
  {
    id: 3,
    title: "محاسبه‌گر حرفه‌ای",
    desc: "ماشین حساب علمی با رابط کاربری مدرن و تم تاریک.",
    version: "3.0.0",
    downloadUrl: "https://example.com/files/calculator.zip",
  },
];

export default function DownloadsPage() {
  return (
    <section className="p-6 bg-gray-50 flex-grow">
      <h1 className="text-3xl font-bold text-center mb-10">📦 دانلود برنامه‌ها</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
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
        ))}
      </div>
    </section>
  );
}