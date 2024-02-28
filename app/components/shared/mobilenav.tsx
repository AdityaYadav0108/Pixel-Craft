"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={160}
          height={25}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="logo"
                width={32}
                height={32}
              ></Image>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <>
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={152}
                    height={20}
                  />
                  <ul className="header-nav_elements">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname;

                      return (
                        <li
                          key={link.route}
                          className={`$isActive && "text-gradient" p-18 whitespace-nowrap text-dark-700`}
                        >
                          <Link href={link.route} className="sidebar-link">
                            <Image
                              src={link.icon}
                              alt="logo"
                              width="24"
                              height="24"
                            />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              </SheetHeader>
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
};

export default MobileNav;
