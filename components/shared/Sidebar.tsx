"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
 

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-8">
        <Logo />
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <i
                        className={`${link.bicon} text-[22px] brightness-200`}
                      ></i>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <i
                        className={`${link.bicon} text-[20px] brightness-200`}
                      ></i>
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName signInUrl="/" />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
}
