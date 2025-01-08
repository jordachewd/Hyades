"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Logo from "../ui/logo";

export default function Topbar() {
  const pathname = usePathname();

  return (
    <section className="topbar">
      <nav className="topbar-nav">
        <Logo />
        <SignedIn>
          <ul className="topbar-nav_elements">
            {navLinks.slice(1, 6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li key={link.route} className="topbar-nav_element">
                  <Link
                    className={`topbar-link ${
                      isActive && "topbar-link_active"
                    }`}
                    href={link.route}
                  >
                    <i className={link.bicon}></i>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="topbar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li key={link.route} className="topbar-nav_element">
                  <Link
                    className={`topbar-link ${
                      isActive && "topbar-link_active"
                    }`}
                    href={link.route}
                  >
                    <i className={link.bicon}></i>
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="flex-center">
              <UserButton signInUrl="/" />
            </li>
          </ul>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="topbar-link">
            Login
            <i className="bi bi-box-arrow-in-right"></i>
          </Link>
        </SignedOut>
      </nav>
    </section>
  );
}
