"use client";

import Image from "next/image";
import { NAV_ITEMS } from "@/utils/constants/navigation";
import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-red shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image
            src="/images/header/logo.png"
            alt="Daegu Hip Hop Festival"
            width={60}
            height={40}
            priority
          />

          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((items) => (
              <a
                key={items.label}
                href={items.href}
                target={items.external ? "_blank" : "_self"}
                className="text-gray-700 hover:text-gray-900 px-3 text-sm font-medium"
              >
                {items.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-xl font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
