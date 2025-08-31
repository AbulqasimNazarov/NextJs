// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  return (
    <nav
      className="w-full flex justify-center"
      style={{ marginTop: "18.89px", marginBottom: "28.33px" }}
    >
      <div
        className="flex items-center justify-between px-4"
        style={{
          width: "604.44px",
          height: "42.5px",
          backgroundColor: "#E6F6FE",
          borderRadius: "4.72px",
        }}
      >
        {/* Логотип слева */}
        <Image src={logo} alt="Logo" width={53.36} height={16.65} />

        {/* Навигационные ссылки по центру */}
        <div className="flex space-x-6 font-medium text-gray-800">
          {["Home", "Services", "Blogs", "About", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{ fontSize: "7.56px" }}
              className="hover:text-blue-600 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Кнопка Book Now справа */}
        <Link
          href="/login"
          style={{
            width: "66.33px",
            height: "26.17px",
            borderRadius: "4.72px",
            fontSize: "7.56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
