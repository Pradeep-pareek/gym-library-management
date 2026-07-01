export default function ChangePasswordCard() {
  return (
    <div className="bg-white rounded-3xl border border-[#E3E3EF] p-5">

      <h3 className="text-lg font-bold text-[#1F1F3D] mb-4">
        🔒 Change Password
      </h3>

      <div className="space-y-3">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full bg-[#F7F7FC] border border-[#E5E5EF] rounded-2xl px-4 py-3 outline-none focus:border-[#5B4EF7]"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full bg-[#F7F7FC] border border-[#E5E5EF] rounded-2xl px-4 py-3 outline-none focus:border-[#5B4EF7]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full bg-[#F7F7FC] border border-[#E5E5EF] rounded-2xl px-4 py-3 outline-none focus:border-[#5B4EF7]"
        />

        <button className="w-full bg-[#5B4EF7] text-white py-3 rounded-2xl font-semibold cursor-pointer">
          Update Password
        </button>

      </div>
    </div>
  );
}