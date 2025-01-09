"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Logo from "../ui/logo";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="mobilenav">
      <Sheet>
        <SheetTrigger>
          <i className="bi bi-three-dots mobilenav_trigger"></i>
        </SheetTrigger>
        <SheetContent className="mobilenav_content">
          <SheetHeader>
            <SheetTitle className="flex gap-8">
              <Logo />
            </SheetTitle>
            <SheetDescription className="text-left">
              Where innovation meets imagination.
            </SheetDescription>
          </SheetHeader>

          <ul className="mobilenav_elements">
            {navLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`${
                    isActive && "mobilenav_link_active"
                  } mobilenav_element`}
                >
                  <Link className="mobilenav_link" href={link.route}>
                    <i className={link.bicon}></i>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <UserButton showName signInUrl="/" />
        </SheetContent>
      </Sheet>
    </div>
  );
}
