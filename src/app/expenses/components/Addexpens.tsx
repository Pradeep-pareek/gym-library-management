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
import { IconChevronLeft, IconChevronRight, } from "@tabler/icons-react";
import {IconCheck } from "@tabler/icons-react";
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

  const [raw, setRaw] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 7);
    setRaw(digits);
  };

  const formatINR = (val: string) => {
    if (!val) return "";
    return parseInt(val).toLocaleString("en-IN");
  };



  // Date picker ......... 

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [viewMonth, setViewMonth] = useState(new Date());

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return { firstDay, totalDays };
  };

  const prevMonth = () => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1));
  const nextMonth = () => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1));

  const { firstDay, totalDays } = getDaysInMonth(viewMonth);
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];



  const [paymentMethod, setPaymentMethod] = useState("Cash");
const [showDropdown, setShowDropdown] = useState(false);

const methods = ["Cash", "Online"];

  return (
    <div className="fixed inset-0 z-[999] w-full max-w-sm min-h-screen mx-auto">
      {/* Overlay */}
      <div
        onClick={closeSheet}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${animate
          ? "opacity-100"
          : "opacity-0"
          }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#151515] rounded-t-3xl transition-all duration-300 ease-out ${animate
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
          {/* <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Amount
            </label>

            <input
              type="number"
              placeholder="₹ 0"
              className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white outline-none"
            />
          </div> */}
          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">Amount</label>
            <div className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center gap-2">
              <span className="text-gray-400 text-lg">₹</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={formatINR(raw)}
                onChange={handleChange}
                className="bg-transparent text-white text-xl font-semibold outline-none w-full tracking-wide"
              />
            </div>
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
                    className={`h-12 cursor-pointer rounded-lg border flex items-center justify-center gap-2 text-sm font-medium transition-all ${category === item.label
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
          {/* <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Date
            </label>

            <button className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white">
              <span>June 30, 2026</span>
              <IconCalendar size={18} />
            </button>
          </div> */}


          <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">Date</label>

            <button
              className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white"
              onClick={() => setShowPicker(!showPicker)}
            >
              <span>{formatDate(selectedDate)}</span>
              <IconCalendar size={18} />
            </button>

            {showPicker && (
              <div className="mt-2 bg-[#232323] border border-[#3A3A3A] rounded-lg p-4">
                {/* Month nav */}
                <div className="flex items-center justify-between mb-3">
                  <button onClick={prevMonth} className="text-gray-400 hover:text-white p-1">
                    <IconChevronLeft size={18} />
                  </button>
                  <span className="text-white text-sm font-medium">
                    {viewMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                  </span>
                  <button onClick={nextMonth} className="text-gray-400 hover:text-white p-1">
                    <IconChevronRight size={18} />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-1">
                  {days.map((d) => (
                    <span key={d} className="text-center text-xs text-gray-500 py-1">{d}</span>
                  ))}
                </div>

                {/* Dates */}
                <div className="grid grid-cols-7 gap-y-1">
                  {Array.from({ length: firstDay }).map((_, i) => <span key={i} />)}

                  {Array.from({ length: totalDays }).map((_, i) => {
                    const day = i + 1;
                    const thisDate = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
                    const isSelected = thisDate.toDateString() === selectedDate.toDateString();
                    const isToday = thisDate.toDateString() === new Date().toDateString();

                    return (
                      <button
                        key={day}
                        onClick={() => { setSelectedDate(thisDate); setShowPicker(false); }}
                        className={`text-sm py-1.5 rounded-lg text-center transition-colors
                ${isSelected ? "bg-[#5B4FE0] text-white font-semibold" : ""}
                ${isToday && !isSelected ? "text-[#7C6FE0] font-semibold" : ""}
                ${!isSelected && !isToday ? "text-gray-300 hover:bg-[#2e2e2e]" : ""}
              `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          {/* <div className="mb-4">
            <label className="text-xs text-gray-300 block mb-2">
              Payment method
            </label>

            <button className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white">
              <span>Cash</span>
              <IconChevronDown size={18} />
            </button>
          </div> */}


          <div className="mb-4">
  <label className="text-xs text-gray-300 block mb-2">Payment method</label>

  <div className="relative">
    <button
      className="w-full bg-[#232323] border border-[#3A3A3A] rounded-lg px-4 py-3 flex items-center justify-between text-white"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <span>{paymentMethod}</span>
      <IconChevronDown
        size={18}
        className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
      />
    </button>

    {showDropdown && (
      <div className="absolute top-full left-0 w-full mt-1 bg-[#232323] border border-[#3A3A3A] rounded-lg overflow-hidden z-10">
        {methods.map((method) => (
          <button
            key={method}
            onClick={() => { setPaymentMethod(method); setShowDropdown(false); }}
            className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors
              ${paymentMethod === method ? "text-[#7C6FE0] bg-[#2a2a3a]" : "text-white hover:bg-[#2e2e2e]"}
            `}
          >
            <span>{method}</span>
            {paymentMethod === method && <IconCheck size={16} />}
          </button>
        ))}
      </div>
    )}
  </div>
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