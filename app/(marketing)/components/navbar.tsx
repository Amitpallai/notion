"use client";

import { useConvexAuth } from "convex/react";
import { cn } from "../../../lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "../../../components/mode-toggle";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Spinner } from "../../../components/spinner";
import { Button } from "../../../components/ui/button";
import { useScrollTop } from "../../../hooks/use-scroll-top";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "flex items-center p-6 fixed top-0 w-full z-50 dark:bg-[#1F1F1F] bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center justify-between md:ml-auto md:justify-end w-full gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Notion for free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}