import {
  HomeIcon,
  HeartIcon,
  BugAntIcon,
  BuildingOffice2Icon,
  UserMinusIcon,
  BeakerIcon,QuestionMarkCircleIcon
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
  },{
    name: "Sources/FAQ",
    href: "/faq",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Donate",
    href: "https://www.paypal.com/donate/?business=NNJ52J9FQ8NKW&no_recurring=1&item_name=Thank+you%21+Donations+help+cover+the+costs+of+running+OCCOVID.&currency_code=USD",
    icon: HeartIcon,
  },
];

export default pages;
