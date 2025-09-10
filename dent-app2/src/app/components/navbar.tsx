// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useAuthStore } from "@/app/store/useAuthStore";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuthStore();

  return (
    <nav className="w-full flex justify-center" style={{ marginTop: 18.89, marginBottom: 28.33 }}>
      <div
        className="flex items-center justify-between px-4"
        style={{
          width: 604.44,
          height: 42.5,
          backgroundColor: "#E6F6FE",
          borderRadius: 4.72,
        }}
      >
        <Image src={logo} alt="Logo" width={53.36} height={16.65} />

        <div className="flex space-x-6 font-medium text-gray-800" style={{ fontSize: 7.56 }}>
          {["Home", "Services", "Blogs", "About", "Contact"].map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="hover:text-blue-600 transition">
              {link}
            </Link>
          ))}
        </div>

        <div>
          {!isLoggedIn ? (
            <Link
              href="/login"
              style={{
                width: 66.33,
                height: 26.17,
                borderRadius: 4.72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 7.56,
              }}
              className="bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          ) : (
            <button
              onClick={logout}
              style={{ width: 66.33, height: 26.17, borderRadius: 4.72, fontSize: 7.56 }}
              className="bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
