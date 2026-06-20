"use client";

interface NewMemberProps {
  onClose: () => void;
}

export default function NewMember({ onClose }: NewMemberProps) {
  return (
    <div className="fixed inset-0 z-[999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          className="
            w-full
            max-w-sm
            bg-white
            rounded-t-[36px]
            px-6
            pt-4
            pb-6
            animate-slideUp
            shadow-2xl
          "
        >
          {/* Handle */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1.5 rounded-full bg-gray-300" />
          </div>

          <h2 className="text-xl font-bold text-[#1F1F3D] mb-4">
            Add new member
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Pradeep Pareek"
                className="w-full mt-2 py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Phone (WhatsApp)
              </label>

              <input
                type="text"
                placeholder="9876544322"
                className="w-full mt-2  py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Membership Type
              </label>

              <select className="w-full mt-2  py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none">
                <option>Gym</option>
                <option>Library</option>
                <option>Both</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Plan Duration
              </label>

              <select className="w-full mt-2  py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none">
                <option>1 months</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>1 Year</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Start Date
              </label>

              <input
                type="date"
                className="w-full mt-2 py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#707090] uppercase">
                Fee (₹)
              </label>

              <input
                type="number"
                placeholder="2000"
                className="w-full mt-2 py-[10px] px-3 rounded-xl border border-[#E5E1F8] bg-[#F7F7FC] outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={onClose}
              className="
                flex-1
               py-2
                rounded-lg
                bg-[#F1F1F6]
                text-[#555]
                font-semibold
              "
            >
              Cancel
            </button>

            <button
              className="
                flex-1
                py-2
                rounded-lg
                bg-[#5B4CF5]
                text-white
                font-semibold
              "
            >
              Add member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}