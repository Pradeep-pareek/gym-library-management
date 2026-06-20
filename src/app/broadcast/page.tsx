import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function Broadcast() {
    return (
        <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
            <div className="w-full max-w-sm pb-18 bg-[#F4F3FF]">
                <Header />

                <div className="p-4 space-y-4">

                    {/* Broadcast Form */}
                    <div className="bg-white rounded-3xl p-5">
                        <h3 className="text-xs font-semibold text-[#7A7A9D] uppercase mb-3">
                            Send To
                        </h3>

                        <div className="flex gap-2 mb-5">
                            <button className="px-4 py-2 rounded-xl bg-[#6C5CE7] text-white text-xs font-medium">
                                All members
                            </button>

                            <button className="px-4 py-2 rounded-xl border border-[#E3E3EF] text-[#6B6B85] text-xs font-medium">
                                Gym only
                            </button>

                            <button className="px-4 py-2 rounded-xl border border-[#E3E3EF] text-[#6B6B85] text-xs font-medium">
                                Library only
                            </button>
                        </div>

                        <h3 className="text-xs font-semibold text-[#7A7A9D] uppercase mb-3">
                            Message
                        </h3>

                        <textarea
                            className="
    w-full
    bg-[#F5F5FB]
    rounded-2xl
    p-4
    text-sm
    outline-none
    border
    border-[#D9D9E8]
    focus:border-[#5B4EF7]
    focus:ring-0
    resize-none outline-none
  "
                            rows={4}
                            placeholder="Type your message..."
                            defaultValue="Aaj gym band rahega — maintenance ke karan subah 6-8 unavailable rahega..."
                        />

                        <button className="w-full mt-3 bg-[#2ECC58] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-1 cursor-pointer">
                            <span><IconBrandWhatsapp stroke={2} /></span>
                            Send via WhatsApp
                        </button>
                    </div>

                    {/* Past Broadcasts */}
                    <div className="bg-white rounded-3xl p-5">
                        <h3 className="text-lg font-bold text-[#1F1F3D] mb-4">
                            Past broadcasts
                        </h3>

                        <div className="space-y-3">

                            <div className="bg-[#F5F5FB] rounded-2xl p-4">
                                <p className="text-xs text-[#8A8AA3] mb-2">
                                    Apr 15 — 10:32 AM
                                </p>

                                <p className="text-sm text-[#1F1F3D] font-medium">
                                    Kal gym 7 baje khulega — staff meeting hai.
                                </p>

                                <p className="text-xs text-[#6C5CE7] font-medium mt-2">
                                    Gym members (89)
                                </p>
                            </div>

                            <div className="bg-[#F5F5FB] rounded-2xl p-4">
                                <p className="text-xs text-[#8A8AA3] mb-2">
                                    Apr 10 — 2:15 PM
                                </p>

                                <p className="text-sm text-[#1F1F3D] font-medium">
                                    Library mein naye books aa gaye hain!
                                </p>

                                <p className="text-xs text-[#6C5CE7] font-medium mt-2">
                                    Library members (53)
                                </p>
                            </div>

                            <div className="bg-[#F5F5FB] rounded-2xl p-4">
                                <p className="text-xs text-[#8A8AA3] mb-2">
                                    Apr 5 — 11:00 AM
                                </p>

                                <p className="text-sm text-[#1F1F3D] font-medium">
                                    April ke fees 10 tarikh se pehle jama karein.
                                </p>

                                <p className="text-xs text-[#6C5CE7] font-medium mt-2">
                                    All members (142)
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                <BottomNavigation />
            </div>
        </div>
    );
}