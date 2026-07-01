"use client";

import { useState } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AddExpens from "./components/Addexpens";

import {
  IconArrowLeft,
  IconBolt,
  IconCurrencyRupee,
  IconHammer,
  IconPlus,
  IconUsers,
  IconCalendarWeekFilled,
} from "@tabler/icons-react";

const expenses = [
    {
        title: "Trainer Salaries",
        date: "June 28",
        category: "Staff Salary",
        amount: "₹18,000",
        icon: IconUsers,
        bg: "bg-blue-100",
        color: "text-blue-600",
    },
    {
        title: "Electricity Bill",
        date: "June 22",
        category: "Utilities",
        amount: "₹4,200",
        icon: IconBolt,
        bg: "bg-yellow-100",
        color: "text-yellow-600",
    },
    {
        title: "Treadmill Repair",
        date: "June 18",
        category: "Maintenance",
        amount: "₹3,000",
        icon: IconHammer,
        bg: "bg-red-100",
        color: "text-red-500",
    },
    {
        title: "Water & Cleaning",
        date: "June 10",
        category: "Utilities",
        amount: "₹2,300",
        icon: IconBolt,
        bg: "bg-yellow-100",
        color: "text-yellow-600",
    },
];

export default function ExpensesPage() {
  const [showAddExpense, setShowAddExpense] = useState(false);

  return (
    <>
    
        <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
            <div className="w-full max-w-sm min-h-screen bg-[#F4F3FF] pb-24 relative">
                {/* Header */}
                <div className="sticky top-0 z-40 bg-[#5B4CF5] px-5 pt-5 pb-4">
                    <button className="text-white">
                        <IconArrowLeft size={22} />
                    </button>

                    <div className="py-3 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white mt-4">
                                Expenses
                            </h1>
                            <p className="text-sm text-white/70">
                                June 2026
                            </p></div>
                        <div className="bg-white p-1 border border-[#000]/20 rounded-lg">
                            <IconCalendarWeekFilled className="text-gray-500" size={24} stroke={0.5} />
                        </div>
                    </div>

                </div>

                {/* Total Expense Card */}
                <div className="px-5 mt-6 relative z-10">
                    <div className="bg-white border border-[#E5E1F8] rounded-3xl p-5 shadow-sm">
                        <p className="text-xs text-gray-500 font-medium">
                            Total expenses this month
                        </p>

                        <div className="flex items-center justify-between mt-2">
                            <h2 className="text-3xl font-bold text-[#1F1F3D]">
                                ₹32,000
                            </h2>

                            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                                ↑ 6% vs May
                            </span>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="px-5 mt-6">
                    <h3 className="text-sm font-semibold text-[#1F1F3D] mb-3">
                        By Category
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-[#E5E1F8] rounded-3xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <IconUsers
                                    size={16}
                                    className="text-blue-600"
                                />
                                <span className="text-xs text-gray-500">
                                    Staff Salary
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#1F1F3D]">
                                ₹18,000
                            </h3>
                        </div>

                        <div className="bg-white border border-[#E5E1F8] rounded-3xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <IconBolt
                                    size={16}
                                    className="text-yellow-600"
                                />
                                <span className="text-xs text-gray-500">
                                    Utilities
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#1F1F3D]">
                                ₹6,500
                            </h3>
                        </div>

                        <div className="bg-white border border-[#E5E1F8] rounded-3xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <IconHammer
                                    size={16}
                                    className="text-red-500"
                                />
                                <span className="text-xs text-gray-500">
                                    Maintenance
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#1F1F3D]">
                                ₹4,500
                            </h3>
                        </div>

                        <div className="bg-white border border-[#E5E1F8] rounded-3xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <IconCurrencyRupee
                                    size={16}
                                    className="text-violet-600"
                                />
                                <span className="text-xs text-gray-500">
                                    Other
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#1F1F3D]">
                                ₹3,000
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Recent Entries */}
                <div className="px-5 mt-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-[#1F1F3D]">
                            Recent Entries
                        </h3>

                        <button
                            onClick={() => setShowAddExpense(true)}
                            className=" cursor-pointer bg-white border border-[#E5E1F8] rounded-xl px-3 py-2 text-xs font-medium text-[#5B4CF5] flex items-center gap-1"
                        >
                            <IconPlus size={14} />
                            Add Expense
                        </button>
                    </div>

                    <div className="space-y-3">
                        {expenses.map((expense, index) => {
                            const Icon = expense.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-[#E5E1F8] rounded-3xl p-4 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`h-12 w-12 rounded-2xl flex items-center justify-center ${expense.bg}`}
                                        >
                                            <Icon
                                                size={20}
                                                className={expense.color}
                                            />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#1F1F3D]">
                                                {expense.title}
                                            </h4>

                                            <p className="text-xs text-gray-500 mt-1">
                                                {expense.date} • {expense.category}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="font-bold text-[#1F1F3D]">
                                        {expense.amount}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <BottomNavigation />

{showAddExpense && (
  <AddExpens
    onClose={() => setShowAddExpense(false)}
  />
)}
    </div>
        </div>
          </>
          
    );
}