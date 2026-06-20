import MemberRow from "./MemberRow";

import Link from "next/link";


export default function ExpiringMembersCard() {
  return (
    <div className="bg-white rounded-3xl p-5">
      <h3 className="font-bold text-[#1F1F3D] text-lg mb-4">
        Expiring soon
      </h3>

      <div className="space-y-4">
        <MemberRow
          name="Rahul Sharma"
          status="2 days"
        />

        <MemberRow
          name="Priya Singh"
          status="3 days"
        />

        <MemberRow
          name="Amit Kumar"
          status="Expired"
        />
      </div>

 <Link
        href="/members"
        className="cursor-pointer"
      >
      <button className="mt-6 w-full cursor-pointer bg-[#F2EEFF] py-3 rounded-2xl font-semibold text-[#5B4CF6]">
        View all members →
      </button>
      </Link>
    </div>
  );
}