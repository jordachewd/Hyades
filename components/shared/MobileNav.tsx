"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/hyades-logo.svg"
          alt="logo"
          width={120}
          height={34}
          priority
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton signInUrl="/" />

          <Sheet>
            <SheetTrigger>
              <i className="bi bi-justify-right text-[28px] text-slate-500"></i>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <SheetTitle className="flex gap-8">
                  <Image
                    src="/assets/images/hyades-logo.svg"
                    alt="logo"
                    width={120}
                    height={34}
                    priority
                  />
                </SheetTitle>
                <SheetDescription className="text-left">
                  Where innovation meets imagination.
                </SheetDescription>
              </SheetHeader>

              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
                        <i className={`${link.bicon} text-[22px]`}></i>

                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
}
