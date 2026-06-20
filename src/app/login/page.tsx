"use client";

import { useState } from "react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("admin");

  return (
    <div className="min-h-screen bg-[#D9D6F5] flex items-center justify-center">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#5B4CF6] to-[#4A3CF0] p-6">
        <div className="bg-white rounded-[32px] p-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-[#5B4CF6] flex items-center justify-center">
              <span className="text-white text-4xl font-bold">F</span>
            </div>

            <h1 className="mt-6 md:text-3xl text-2xl font-bold text-[#10123A]">
              FitLib Pro
            </h1>

            <p className="text-gray-500 md:text-lg text-base">
              Gym + Library Management
            </p>
          </div>

          {/* Tabs */}
          <div className="lg:mt-4 mt-2 bg-gray-100 rounded-2xl p-1 flex">
            <button
              type="button"
              onClick={() => setActiveTab("admin")}
              className={`flex-1 py-2 rounded-xl font-semibold transition cursor-pointer ${
                activeTab === "admin"
                  ? "bg-[#5B4CF6] text-white"
                  : "text-gray-500"
              }`}
            >
              Admin
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("member")}
              className={`flex-1 py-2 rounded-xl font-semibold transition cursor-pointer ${
                activeTab === "member"
                  ? "bg-[#5B4CF6] text-white"
                  : "text-gray-500"
              }`}
            >
              Employee
            </button>
          </div>

          <form>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm tracking-wider text-gray-500 mb-2">
                  Mobile Number
                </label>

                <input
                  type="number"
                  placeholder="+91 9079813762"
                  className="w-full text-black rounded-lg border border-gray-200 bg-gray-50 px-4 text-base py-2 outline-none focus:ring-1 focus:ring-[#5B4CF6]"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wider text-gray-500 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full text-black rounded-lg border border-gray-200 bg-gray-50 px-4 text-base py-2 outline-none focus:ring-1 focus:ring-[#5B4CF6]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#5B4CF6] text-white lg:text-base text-base font-medium hover:bg-[#4F40F4] transition py-[10px] mt-6 cursor-pointer"
            >
              {activeTab === "admin"
                ? "Admin Sign In"
                : "Employee Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}