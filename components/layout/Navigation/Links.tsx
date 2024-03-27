import React from "react";
import classNames from "@/utils/makeClassNames";
import navigation from "../Navigation/navigation";
import Link from "next/link";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

type Props = {
  pageURL: string;
};

export default function Links({ pageURL }: Props) {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item, i) => (
              <li key={item.name} >
                <Link
                  href={item.href}
                  className={
                    (classNames(
                      pageURL === item.href
                        ? "bg-blue-700 text-white"
                        : "text-blue-200 hover:text-white hover:bg-blue-700",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )
                    )
                  }
                >
                  <item.icon
                    className={classNames(
                      pageURL === item.href
                        ? "text-white"
                        : "text-blue-200 group-hover:text-white",
                      "h-6 w-6 shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="mt-auto">
          <Link
            href="#"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-blue-200 hover:bg-blue-700 hover:text-white"
          >
            <Cog6ToothIcon
              className="h-6 w-6 shrink-0 text-blue-200 group-hover:text-white"
              aria-hidden="true"
            />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
