import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";

import StatCard from "@/components/dashboard/StatCard";
import MembersTypeCard from "@/components/dashboard/MembersTypeCard";
import ExpiringMembersCard from "@/components/dashboard/ExpiringMembersCard";
import { IconCalendarWeekFilled } from '@tabler/icons-react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#DCD7F7] flex justify-center">
            <div className="w-full max-w-sm pb-18 bg-[#F4F3FF]">
                <Header />
                <div className="p-4 space-y-4">

                    <div className="bg-white rounded-3xl p-5">
                        <div className="py-3 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-[#1F1F3D] mb-0">
                                    June 2026
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    This Month's Insights
                                </p>
                            </div>

                            <div className="bg-white p-1 border border-[#000]/20 rounded-lg">
                                <IconCalendarWeekFilled className="text-gray-500" size={24} stroke={0.5} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <StatCard
                                title="TOTAL MEMBERS"
                                value="142"
                                badge="+8 this month"
                                badgeColor="bg-green-100 text-green-600"
                            />

                            <StatCard
                                title="REVENUE"
                                value="₹1,18,500"
                                badge="↑ 12%"
                                badgeColor="bg-green-100 text-green-600"
                            />

                            <StatCard
                                title="PENDING FEES"
                                value="₹24,000"
                                badge="18 members"
                                badgeColor="bg-red-100 text-red-500"
                            />

                            <StatCard
                                title="EXPENSES"
                                value="₹32,000"
                                badge="This month"
                                badgeColor="bg-yellow-100 text-yellow-600"
                            />
                        </div>
                    </div>


                    <MembersTypeCard />

                    <ExpiringMembersCard />
                </div>

                <BottomNavigation />
            </div>
        </div>
    );
}