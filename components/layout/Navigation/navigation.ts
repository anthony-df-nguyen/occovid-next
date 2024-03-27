import {
  HomeIcon,
  HeartIcon,
  BugAntIcon,
  BuildingOffice2Icon,
  UserMinusIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

type Pages = {
  name: string;
  href: string;
  icon: any;
};

const pages: Pages[] = [
  { name: "Summary", href: "/", icon: HomeIcon },
  { name: "Cases", href: "/cases", icon: BugAntIcon },
  { name: "Deaths", href: "/deaths", icon: UserMinusIcon },
  { name: "Vaccinations", href: "/vaccinations", icon: BeakerIcon },
  {
    name: "Hospitalization",
    href: "/hospitalizations",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Donate",
    href:"/donate",
    icon: HeartIcon,
  }

];

export default pages;
