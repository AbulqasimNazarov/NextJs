"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import logo from "@/assets/images/logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-[#05426C] text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Левая часть */}
        <div className="flex gap-6">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/supplement" className="text-sm tracking-wider hover:text-gray-200">
                  SUPPLEMENT
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/laser" className="text-sm tracking-wider hover:text-gray-200">
                  LASER
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/reviews" className="text-sm tracking-wider hover:text-gray-200">
                  REVIEWS
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>

        {/* Логотип по центру */}
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

        {/* Правая часть */}
        <div className="flex gap-6 items-center">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/support" className="text-sm tracking-wider hover:text-gray-200">
                  HELP & SUPPORT
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/activate" className="text-sm tracking-wider hover:text-gray-200">
                  ACTIVATE
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>

          {/* Кнопка профиля / логина */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-1 rounded text-white hover:bg-red-600"
            >
              Выйти
            </button>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="bg-green-500 px-4 py-1 rounded text-white hover:bg-green-600"
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
