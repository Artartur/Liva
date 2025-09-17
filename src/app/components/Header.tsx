'use client';

import { useEffect, useState } from "react";
import Image from "next/image"
import Navigation from "./ui/header/Navigation";
import { SocialMedia } from "./ui/header/SocialMedia";
import Sidebar from "./ui/header/Sidebar";
import { MenuButton } from "./ui/utils/Buttons";
import { isClient } from "../utils/isClient";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (isClient) {
      document.body.style.overflow = showSidebar ? 'hidden' : 'unset';
    }

    return () => {
      if (isClient) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [showSidebar])

  return (
    <header className="row h-[84px] w-full bg-white border-b-gray-200 border-b-1 xl:justify-center">
      <div className="flex-center full-size xl:w-[1200px]">
        <div className="row flex-center justify-between w-full px-6">
          <Image
            className="h-auto"
            src="/logo.webp"
            width={81}
            height={32}
            alt="logo da liva"
          />

          <Navigation
            navClassName="hidden xl:flex"
            ulClassName="row space-x-8"
          />

          <SocialMedia />

          <MenuButton
            showSidebar={showSidebar}
            setShowSidebar={() => setShowSidebar(!showSidebar)}
          />
        </div>

        {showSidebar && (
          <Sidebar
            closeSidebar={() => setShowSidebar(false)}
          />
        )}
      </div>
    </header>
  );
}
