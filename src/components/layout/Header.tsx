import Image from "next/image";
import { NAV_ITEMS } from "@/utils/constants/navigation";

export default function Header() {
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
        </div>
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((items) => (
            <a
              key={items.label}
              href={items.href}
              target={items.external ? "_blank" : "_self"}
              className="text-gray-700 hover:text-gray-900 px-3 text-sm font-medium"
            >
              {items.label}{" "}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
