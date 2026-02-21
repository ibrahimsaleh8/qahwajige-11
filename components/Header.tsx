"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "./Logo";
const navItems = [
  { label: "معلومات عنا", href: "#about-us" },
  { label: "خدماتنا", href: "#our-services" },
  { label: "باقاتنا", href: "#our-packages" },
  { label: "تواصل معنا", href: "#contact-us" },
];
export default function Header({ brandName }: { brandName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <Logo brandName={brandName} theme="dark" />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative hover:text-primary transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          {isOpen ? (
            <XIcon className="w-6 h-6 text-neutral-900" />
          ) : (
            <MenuIcon className="w-6 h-6 text-neutral-900" />
          )}
        </button>

        {/* CTA for Desktop */}
        <Link
          href="#contact"
          className="hidden md:inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow hover:scale-105 hover:bg-primary/90 transition">
          احجز موعدك
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 p-4 text-neutral-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-base font-medium py-2 px-3 rounded hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#book"
                className="block text-center bg-primary text-white font-semibold rounded-full py-2 px-4 hover:bg-primary/90 transition"
                onClick={() => setIsOpen(false)}>
                احجز موعدك
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
