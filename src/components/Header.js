"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/images/ArtusLogo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-transparent text-white">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-20 xl1:w-24" />
          </Link>
        </div>

        <nav className={`hidden lg:flex space-x-8 items-center text-[22px]`}>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-white font-bold"
                : "font-normal text-[#979797] text-sm xl1:text-base 2xl:text-lg transition-all hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/research"
            className={`${
              pathname === "/research"
                ? "text-white font-bold"
                : "font-normal text-[#979797] text-sm xl1:text-base 2xl:text-lg transition-all hover:text-white"
            }`}
          >
            Research
          </Link>
          <Link
            href="/team"
            className={`${
              pathname === "/team"
                ? "text-white font-bold"
                : "font-normal text-[#979797] text-sm xl1:text-base 2xl:text-lg transition-all hover:text-white"
            }`}
          >
            Team
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="bg-[#046EC5] bg-gradient-to-r from-[#6EBAF8] to-[#046EC5] hover:to-[#6EBAF8] transition-all text-sm xl1:text-base 2xl:text-lg flex items-center text-white rounded-full font-semibold min-h-11 leading-none px-5"
          >
            <span className="mb-1">Book a Demo</span>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none bg-[#555555] rounded-md py-1.5 px-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#303030] px-6 py-4 space-y-4 flex flex-col">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-white font-bold"
                : "font-normal text-[#979797] transition-all hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/research"
            className={`${
              pathname === "/research"
                ? "text-white font-bold"
                : "font-normal text-[#979797] transition-all hover:text-white"
            }`}
          >
            Research
          </Link>
          <Link
            href="/team"
            className={`${
              pathname === "/team"
                ? "text-white font-bold"
                : "font-normal text-[#979797] transition-all hover:text-white"
            }`}
          >
            Team
          </Link>
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="block bg-[#046EC5] text-white rounded-full w-max font-semibold px-5 py-2"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
