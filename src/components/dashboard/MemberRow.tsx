interface MemberRowProps {
  name: string;
  status: string;
}

export default function MemberRow({
  name,
  status,
}: MemberRowProps) {
  const expired = status === "Expired";

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
      <span className="font-medium text-[#1F1F3D]">
        {name}
      </span>

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          expired
            ? "bg-red-100 text-red-500"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}