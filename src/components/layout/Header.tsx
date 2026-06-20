export default function Header() {
  return (
    <div className="bg-[#5B4CF5]  shadow-sm sticky top-0 z-50 ">
      <div className="flex items-start justify-between p-5">
        <div>
          <h1 className="text-xl font-bold text-[#fff]">
            FitLib Pro
          </h1>

          <p className="text-white text-sm">
           Welcome back, VS Fitclub 👋
          </p>
        </div>

        <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-white">
          🔔
        </button>
      </div>
    </div>
  );
}