"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useAuthStore } from "../store/useAuthStore";

const links = [
  { label: "Home", href: "/" },          // Home ведёт на /
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

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
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{ fontSize: "7.56px" }}
              className="hover:text-blue-600 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Кнопка Book Now справа — показываем, только если НЕ авторизован */}
        {!isAuthenticated && (
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
        )}
      </div>
    </nav>
  );
}
