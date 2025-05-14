"use client";
import React from "react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { Spinner } from "../../components/spinner";
import { SearchCommand } from "../../components/search-command";
import { CoverImageModal } from "../../components/modals/cover-image-modal";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full absolute inset-0 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="h-[100vh] flex dark:[#1F1F1F]">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
        <CoverImageModal />
      </main>
    </div>
  );
};

export default MainLayout;
