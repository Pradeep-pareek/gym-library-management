interface StatCardProps {
  title: string;
  value: string;
  badge: string;
  badgeColor: string;
}

export default function StatCard({
  title,
  value,
  badge,
  badgeColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-3xl p-4 border border-[#000]/20">
      <p className="text-xs font-bold text-gray-500">
        {title}
      </p>
      <h3 className="text-xl font-bold mt-2 text-[#1F1F3D]">
        {value}
      </h3>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}
      >
        {badge}
      </span>
    </div>
  );
}