export default function MembersTypeCard() {
  return (
    <div className="bg-white rounded-3xl p-5">
      <h3 className="font-bold text-[#1F1F3D] text-lg mb-5">
        Members by type
      </h3>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-black">Gym</span>
            <span className="text-gray-500">
              89 members
            </span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-[#5B4CF6]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-black">Library</span>
            <span className="text-gray-500">
              53 members
            </span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}