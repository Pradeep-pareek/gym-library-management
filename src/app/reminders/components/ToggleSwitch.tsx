"use client";

import { useState } from "react";

export default function ToggleSwitch({ defaultValue = false }) {
  const [enabled, setEnabled] = useState(defaultValue);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative w-12 h-7 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${
        enabled ? "bg-[#5B4EF7]" : "bg-[#E5E5EF]"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}