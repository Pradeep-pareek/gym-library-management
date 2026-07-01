"use client";

import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";


import ReminderCard from "./components/ReminderCard";
import ChangePasswordCard from "./components/ChangePasswordCard";


export default function RemindersPage() {
  return (
    <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
      <div className="w-full max-w-sm bg-[#F4F3FF] pb-20">
        <Header />

        <div className="p-4 space-y-4">

          <ReminderCard
            title="⚡ Expiry reminders"
            description="Auto-send WhatsApp 3 days before membership expiry"
            enabled={false}
            showMembers
          />

          <ReminderCard
            title="💳 Fee reminders"
            description="Auto-send payment reminder every 5th of the month to pending members"
            enabled={false}
          />

          <ReminderCard
            title="🎂 Birthday wishes"
            description="Send birthday greetings automatically via WhatsApp"
            enabled={true}
          />

          <ChangePasswordCard />

        </div>

        <BottomNavigation />
      </div>
    </div>
  );
}