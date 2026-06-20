export default function MemberRow({
  initials,
  name,
  info,
  badge,
  color,
  expired,
}) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-3 items-center">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold ${color}`}
        >
          {initials}
        </div>

        <div>
          <p className="font-semibold text-[#1F1F3D]">
            {name}
          </p>

          <p className="text-xs text-[#777792]">
            {info}
          </p>
        </div>
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          expired
            ? "bg-red-100 text-red-500"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {badge}
      </span>
    </div>
  );
}