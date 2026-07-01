"use client";

import { useState } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";

const pendingMembers = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    type: "Gym",
    expiry: "Apr 19",
    amount: "₹2,000",
    bg: "bg-indigo-500",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    type: "Library",
    expiry: "Apr 20",
    amount: "₹800",
    bg: "bg-pink-500",
  },
  {
    initials: "AK",
    name: "Amit Kumar",
    type: "Gym",
    expiry: "Apr 10",
    amount: "₹2,000",
    bg: "bg-orange-500",
  },
  {
    initials: "VK",
    name: "Vikas Jain",
    type: "Gym",
    expiry: "Apr 05",
    amount: "₹1,500",
    bg: "bg-green-500",
  },
  {
    initials: "RP",
    name: "Rohit Patel",
    type: "Library",
    expiry: "Apr 08",
    amount: "₹700",
    bg: "bg-violet-500",
  },
  {
    initials: "SG",
    name: "Sanjay Gupta",
    type: "Gym",
    expiry: "Apr 12",
    amount: "₹2,500",
    bg: "bg-blue-500",
  },
];

export default function PendingPaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = pendingMembers.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-[#F4F3FF] pb-24">

        {/* Header */}
        <div className="sticky top-0 z-40 bg-[#5B4CF5] px-5 pt-5 pb-5">
          <Link href="/payments">
            <button className="text-white">
              <IconArrowLeft size={22} />
            </button>
          </Link>

          <div className="mt-4">
            <h1 className="text-2xl font-bold text-white">
              Pending Payments
            </h1>

            <p className="text-sm text-white/70 mt-1">
              {filteredMembers.length} members awaiting payment
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="px-5 mt-5">
          <div className="bg-[#FFF7E8] border border-[#F3D089] rounded-3xl p-4">
            <p className="text-sm text-[#B96B00]">
              Total outstanding amount
            </p>

            <h2 className="text-3xl font-bold text-[#1F1F3D] mt-1">
              ₹9,500
            </h2>

            <button className="cursor-pointer mt-4 w-full border border-[#E3A92D] text-[#C76E00] rounded-xl py-3 font-semibold">
              Send Reminder to All
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-5 mt-5">
          <div className="bg-white border border-[#E5E1F8] rounded-2xl px-4 py-3 flex items-center gap-2">
            <IconSearch size={18} className="text-gray-400" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search member..."
              className="w-full bg-transparent outline-none text-base text-black"
            />
          </div>
        </div>

        {/* Members List */}
        <div className="px-5 mt-5">
          <div className="bg-white border border-[#E5E1F8] rounded-3xl overflow-hidden">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center justify-between ${
                    index !== filteredMembers.length - 1
                      ? "border-b border-[#F0EEFF]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-12 w-12 rounded-2xl ${member.bg} flex items-center justify-center text-white font-bold`}
                    >
                      {member.initials}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1F1F3D]">
                        {member.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {member.type}
                      </p>

                      <p className="text-sm text-[#9A96B3]">
                        Expired {member.expiry}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <h4 className="font-bold text-xl text-[#1F1F3D]">
                      {member.amount}
                    </h4>

                    <div className="flex justify-end gap-2 mt-2">
                      <button className="px-3 py-1.5 rounded-xl bg-green-100 text-green-700 text-sm font-semibold">
                        Paid
                      </button>

                      <button className="h-9 w-9 rounded-xl border border-[#E5E1F8] flex items-center justify-center">
                        <IconBrandWhatsapp
                          size={18}
                          className="text-green-600"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No member found
              </div>
            )}
          </div>
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
}