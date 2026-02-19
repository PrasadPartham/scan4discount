"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useParams } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const region = (params?.region as string) || "in";

  // Build a region-aware path
  const r = (path: string) => `/${region}${path === "/" ? "" : path}`;

  // Active link check against region-aware path
  const linkClass = (path: string) =>
    `transition ${
      pathname === r(path)
        ? "text-yellow-400 font-bold"
        : "text-gray-300/50 hover:text-white/80"
    }`;

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-360 mx-auto px-6 py-3 flex items-center justify-between">
        {/* ✅ Logo should also keep region */}
        <Link
          href={r("/")}
          className="flex items-center gap-1 text-3xl font-bold text-white tracking-tight"
        >
          <Image
            src="/logo1.png"
            alt="Scan4Discount Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span>
            Scan<span className="text-yellow-300">4</span>Discount
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-light">
          <Link href={r("/")} className={linkClass("/")}>Home</Link>
          <Link href={r("/features")} className={linkClass("/features")}>Features</Link>
          <Link href={r("/pricing")} className={linkClass("/pricing")}>Pricing</Link>
          <Link href={r("/contact")} className={linkClass("/contact")}>Contact us</Link>
        </div>

        <div className="hidden md:flex gap-3">
          <Link
            href="https://login.scan4discount.com/login"
            className="px-5 py-2 rounded-xl border border-white/50 text-white/80 hover:bg-white/10 transition"
          >
            Sign In
          </Link>

          {/* ✅ region-aware register */}
          <Link
            href={r("/register")}
            className="px-5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-white">
            <Link href={r("/")} onClick={() => setMenuOpen(false)} className={linkClass("/")}>
              Home
            </Link>
            <Link href={r("/features")} onClick={() => setMenuOpen(false)} className={linkClass("/features")}>
              Features
            </Link>
            <Link href={r("/pricing")} onClick={() => setMenuOpen(false)} className={linkClass("/pricing")}>
              Pricing
            </Link>
            <Link href={r("/contact")} onClick={() => setMenuOpen(false)} className={linkClass("/contact")}>
              Contact us
            </Link>

            <hr className="border-white/10" />

            <Link
              href="https://login.scan4discount.com/login"
              className="px-5 py-2 rounded-xl border border-white/50 text-center hover:bg-white/10 transition"
            >
              Sign In
            </Link>

            <Link
              href={r("/register")}
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-center font-semibold transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
