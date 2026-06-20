import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";
import {
  IconDots,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function PaymentsPage() {
  const pendingPayments = [
    {
      initials: "RS",
      name: "Rahul Sharma",
      plan: "Gym",
      expiry: "expires Apr 19",
      amount: "₹2,000",
      color: "bg-indigo-500",
    },
    {
      initials: "PS",
      name: "Priya Singh",
      plan: "Library",
      expiry: "expires Apr 20",
      amount: "₹800",
      color: "bg-pink-500",
    },
    {
      initials: "AK",
      name: "Amit Kumar",
      plan: "Gym",
      expiry: "expired Apr 10",
      amount: "₹2,000",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
      <div className="w-full max-w-sm bg-[#F4F3FF] pb-20">
      
           <div className="p-5 bg-[#5B4CF5] sticky top-0 z-50">
               {/* Page Header */}
          <div className="flex items-center justify-between ">
            <h1 className="text-xl font-bold text-[#fff]">
              Payments
            </h1>

            <button className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
              <IconDots size={18} color="#000" />
            </button>
          </div>
           </div>


        <div className="p-4 space-y-4 ">
          

          {/* Reminder Banner */}
          <div className="bg-[#FFF6D8] border border-[#F3C54D] rounded-3xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#9A5B00]">
                3 members have pending payment WhatsApp reminders sent automatically
                {/* 3 Payment Follow-ups */}
              </p>
            </div>

            <button className="px-3 py-2 text-sm font-semibold rounded-xl border border-[#F3C54D] text-[#D97706] bg-white whitespace-nowrap">
              Send again
            </button>
          </div>

          {/* Pending Payments */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="font-bold text-[#1F1F3D]">
                Pending payments
              </h2>
            </div>

            {pendingPayments.map((member, index) => (
              <div
                key={index}
                className={`p-5 flex items-center justify-between ${
                  index !== pendingPayments.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-11 h-11 rounded-xl ${member.color} text-white font-bold flex items-center justify-center`}
                  >
                    {member.initials}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1F1F3D] leading-tight">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {member.plan}
                    </p>

                    <p className="text-sm text-gray-400">
                      {member.expiry}
                    </p>
                  </div>
                </div>

                <div className="items-center gap-2">
                  <p className="font-bold text-lg text-[#1F1F3D] text-end">
                    {member.amount}
                  </p>


                  <div className="flex gap-2 items-center">
                        <button className="px-3 py-1 rounded-xl bg-green-100 border border-green-500 text-green-700 text-sm font-semibold">
                    Paid!
                  </button>

                  <button className="w-11 h-9 rounded-xl border border-gray-200 flex items-center justify-center">
                    <IconBrandWhatsapp
                      size={18}
                      className="text-green-600"
                    />
                  </button>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-3xl p-5">
            <h2 className="font-bold text-[#1F1F3D] mb-5">
              This month summary
            </h2>

            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Collected</span>

              <span className="font-bold text-green-600">
                ₹1,18,500
              </span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Pending</span>

              <span className="font-bold text-red-500">
                ₹24,000
              </span>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
}