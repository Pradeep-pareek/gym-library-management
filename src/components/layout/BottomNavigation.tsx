"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Wallet,
  Megaphone,
  CircleUser,
} from "lucide-react";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      icon: Home,
      href: "/dashboard",
    },
    {
      label: "Members",
      icon: Users,
      href: "/members",
    },
    {
      label: "Payments",
      icon: Wallet,
      href: "/payments",
    },
    {
      label: "Broadcast",
      icon: Megaphone,
      href: "/broadcast",
    },
    {
      label: "Profile",
      icon: CircleUser,
      href: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded--t-3xl p-2">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex flex-col items-center justify-center py-3 rounded-2xl transition-all duration-300 ${active
                      ? "bg-violet-100"
                      : "hover:bg-gray-100"
                    }`}
                >
                  <Icon
                    size={22}
                    className={`transition-all duration-300 ${active
                        ? "text-violet-600"
                        : "text-gray-500"
                      }`}
                  />
                  <span
                    className={`mt-1 text-[11px] font-medium ${active
                        ? "text-violet-600"
                        : "text-gray-500"
                      }`}
                  >
                    {item.label}
                  </span>

                  {active && (
                    <div className="absolute -top-1 h-1 w-8 rounded-full bg-violet-600" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}