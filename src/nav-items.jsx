import { HomeIcon, ServerIcon, UsersIcon, PhoneIcon, NewspaperIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import EnzonicHosting from "./pages/EnzonicHosting.jsx";
import News from "./pages/News.jsx";
import RoMine from "./pages/RoMine.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <ServerIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Ro-Mine",
    to: "/ro-mine",
    icon: <ServerIcon className="h-4 w-4" />,
    page: <RoMine />,
  },
  {
    title: "Team",
    to: "/team",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Enzonic Hosting",
    to: "/hosting",
    icon: <ServerIcon className="h-4 w-4" />,
    page: <EnzonicHosting />,
  },
  {
    title: "News",
    to: "/news",
    icon: <NewspaperIcon className="h-4 w-4" />,
    page: <News />,
  },
];
