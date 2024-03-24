"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import classNames from "@/utils/makeClassNames";
import DesktopBar from "./Navigation/Desktop";
import Mobile from "./Navigation/Mobile";
import NavDrawer from "./Navigation/NavDrawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  pageURL: string;
  children: any;
};

export default function Shell({ children, pageURL }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Navigation Drawer for Mobile */}
        <NavDrawer sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Mobile pageURL={pageURL} />
        </NavDrawer>

        {/* Static sidebar for desktop */}
        <DesktopBar pageURL={pageURL} />

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            {/* Menu Button */}
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6"></div>
          </div>

          {/* Main Content */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
