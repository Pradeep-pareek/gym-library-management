"use client";

import { useState } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import NewMember from "./components/Newmember";

const members = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    date: "Apr 19",
    phone: "+91 98765 43210",
    type: "Gym",
    status: "Expiring",
    color: "bg-indigo-500",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    date: "Apr 20",
    phone: "+91 87654 32109",
    type: "Library",
    status: "Expiring",
    color: "bg-pink-600",
  },
  {
    initials: "AK",
    name: "Amit Kumar",
    date: "Apr 10",
    phone: "+91 76543 21098",
    type: "Gym",
    status: "Expired",
    color: "bg-orange-500",
  },
  {
    initials: "NK",
    name: "Neha Khatri",
    date: "Apr 25",
    phone: "+91 65432 10987",
    type: "Library",
    status: "Active",
    color: "bg-teal-600",
  },
  {
    initials: "VJ",
    name: "Vikram Joshi",
    date: "May 5",
    phone: "+91 54321 09876",
    type: "Gym",
    status: "Active",
    color: "bg-blue-600",
  },
  {
    initials: "SM",
    name: "Suman Mehta",
    date: "May 12",
    phone: "+91 43210 98765",
    type: "Library",
    status: "Active",
    color: "bg-violet-600",
  },
];

export default function MembersPage() {
  const [showNewMember, setShowNewMember] = useState(false);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "Expired":
        return "bg-red-100 text-red-500";
      default:
        return "bg-yellow-100 text-yellow-600";
    }
  };

  return (

    <>
    <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-[#F4F3FF] pb-24">
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 z-40 bg-[#5B4CF5] p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">
                All Members
              </h1>

              <button
                onClick={() => setShowNewMember(true)}
                className="h-11 w-11 rounded-2xl bg-white border border-[#E5E1F8] flex items-center justify-center cursor-pointer"
              >
                <IconPlus
                  size={22}
                  className="text-[#5B4CF5]"
                />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-5 overflow-x-auto no-scrollbar">
              <button className="px-4 py-2 rounded-full bg-[#EEEAFE] text-[#5B4CF5] text-sm font-medium whitespace-nowrap">
                All (142)
              </button>

              <button className="px-4 py-2 rounded-full bg-white border border-[#E5E1F8] text-[#666] text-sm whitespace-nowrap">
                Gym (89)
              </button>

              <button className="px-4 py-2 rounded-full bg-white border border-[#E5E1F8] text-[#666] text-sm whitespace-nowrap">
                Library (53)
              </button>

              <button className="px-4 py-2 rounded-full bg-white border border-[#E5E1F8] text-[#666] text-sm whitespace-nowrap">
                Expiring (5)
              </button>
            </div>

            {/* Search */}
            <div className="mt-4 bg-white border border-[#E5E1F8] rounded-2xl px-4 py-3 flex items-center gap-3">
              <IconSearch
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search member..."
                className="w-full outline-none text-sm text-black bg-transparent"
              />
            </div>
          </div>

          {/* Member List */}
          <div className="px-5 mt-4 space-y-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 border border-[#E5E1F8] flex justify-between items-center"
              >
                <div className="flex gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold ${member.color}`}
                  >
                    {member.initials}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1F1F3D]">
                      {member.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {member.date} • {member.phone}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EEEAFE] text-[#5B4CF5]">
                    {member.type}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      member.status
                    )}`}
                  >
                    {member.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Add Button */}
          <button
            onClick={() => setShowNewMember(true)}
            className="
              fixed
              bottom-24
              left-1/2
              z-50
              h-14
              w-14
              rounded-2xl
              bg-[#5B4CF5]
              text-white
              shadow-[0_10px_25px_rgba(91,76,245,0.35)]
              flex
              items-center
              justify-center
              cursor-pointer
              transition-all
              duration-300
            "
            style={{
              transform: "translateX(120px)",
            }}
          >
            <IconPlus size={28} stroke={2.5} />
          </button>

          

          <BottomNavigation />
        </div>
      </div>
    </div>

    {/* New Member Bottom Sheet */}
          {showNewMember && (
            <NewMember
              onClose={() => setShowNewMember(false)}
            />
          )}

</>
  );
}