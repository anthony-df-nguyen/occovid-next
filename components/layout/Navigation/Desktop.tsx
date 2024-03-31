import Links from "./Links";
import Image from "next/image";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  pageURL: string;
};

const DesktopBar = ({ pageURL }: Props) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center gap-2">
          <ChartBarSquareIcon fill="white" className="w-10 h-10"/>
          <div className="font-base text-white text-2xl">OCCOVID</div>
        </div>
        <Links pageURL={pageURL} />
      </div>
    </div>
  );
};

export default DesktopBar;
