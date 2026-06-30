"use client";

import { useEffect, useState } from "react";
import {
  IconCalendar,
  IconChevronDown,
  IconReceipt,
  IconUsers,
  IconBolt,
  IconTools,
  IconDots,
  IconX,
} from "@tabler/icons-react";

interface AddExpensProps {
  onClose: () => void;
}

export default function AddExpens({
  onClose,
}: AddExpensProps) {
  const [animate, setAnimate] = useState(false);
  const [category, setCategory] =
    useState("Staff Salary");

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  }, []);

  const closeSheet = () => {
    setAnimate(false);

    setTimeout(() => {
      onClose();
    }, 250);
  };

  const categories = [
    {
      label: "Staff Salary",
      icon: IconUsers,
    },
    {
      label: "Utilities",
      icon: IconBolt,
    },
    {
      label: "Maintenance",
      icon: IconTools,
    },
    {
      label: "Other",
      icon: IconDots,
    },
  ];

  return (
    <div className="fixed inset-0 z-[999] w-full max-w-sm min-h-screen mx-auto">
      {/* Overlay */}
      <div
        onClick={closeSheet}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          animate
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#151515] rounded-t-3xl transition-all duration-300 ease-out ${
          animate
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#5B4CF5] rounded-t-3xl px-5 py-4 flex items-center gap-3">
          <button
            onClick={closeSheet}
            className="text-white"
          >
            <IconX size={20} />
          </button>

          <h2 className="text-white font-semibold text-lg">
            Add expense
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 pb-8 max-h-[85vh] overflow-y-auto no-scrollbar">
          {/* Title */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Title
            </label>

            <input
              type="text"
              placeholder="Electricity bill"
              className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white outline-none"
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Amount
            </label>

            <input
              type="number"
              placeholder="₹ 0"
              className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white outline-none"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Category
            </label>

            <div className="grid grid-cols-2 gap-2">
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    onClick={() =>
                      setCategory(item.label)
                    }
                    className={`h-12 rounded-lg border flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                      category === item.label
                        ? "bg-[#0A3D7A] border-[#0D5BD1] text-white"
                        : "bg-transparent border-[#4A4A4A] text-white"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Date
            </label>

            <button className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white">
              <span>June 30, 2026</span>

              <IconCalendar size={18} />
            </button>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Payment method
            </label>

            <button className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white">
              <span>Cash</span>

              <IconChevronDown size={18} />
            </button>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Notes (optional)
            </label>

            <textarea
              rows={4}
              placeholder="Add a note about this expense"
              className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white outline-none resize-none"
            />
          </div>

          {/* Upload Receipt */}
          <button className="w-full h-14 border border-dashed border-[#4A4A4A] rounded-xl flex items-center justify-center gap-2 text-gray-300 mb-5">
            <IconReceipt size={18} />
            Attach receipt
          </button>

          {/* Save Button */}
          <button className="w-full h-12 rounded-xl bg-[#5B4CF5] text-white font-semibold shadow-lg">
            Save expense
          </button>
        </div>
      </div>
    </div>
  );
}