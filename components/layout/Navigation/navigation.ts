import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";

type Pages = {
  name: string;
  href: string;
  icon: any;
};

const pages: Pages[] = [
  { name: "Summary", href: "/", icon: HomeIcon },
  { name: "Cases", href: "/cases", icon: UsersIcon},
  { name: "Deaths", href: "/deaths", icon: FolderIcon },
  { name: "Hospitalization", href: "/hospitalizations", icon: CalendarIcon },
  { name: "Vaccinations", href: "/vaccinations", icon: DocumentDuplicateIcon},
  { name: "Maps", href: "maps", icon: ChartPieIcon},
];

export default pages;
