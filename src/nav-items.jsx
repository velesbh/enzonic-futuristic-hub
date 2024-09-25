import { HomeIcon, ServerIcon, UsersIcon, PhoneIcon, NewspaperIcon, WrenchIcon, ImageIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import EnzonicHosting from "./pages/EnzonicHosting.jsx";
import News from "./pages/News.jsx";
import EnzonicNetwork from "./pages/RoMine.jsx";
import MCTools from "./pages/MCTools.jsx";
import ImageVideoTools from "./pages/ImageVideoTools.jsx";
import Team from "./pages/Team.jsx";

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
    title: "Enzonic Network",
    to: "/enzonic-network",
    icon: <ServerIcon className="h-4 w-4" />,
    page: <EnzonicNetwork />,
  },
  {
    title: "Team",
    to: "/team",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Team />,
  },
  {
    title: "Contact",
    to: "https://discord.gg/M4Dz3Gj5tR",
    icon: <PhoneIcon className="h-4 w-4" />,
    external: true,
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
  {
    title: "MC Tools",
    to: "/mc-tools",
    icon: <WrenchIcon className="h-4 w-4" />,
    page: <MCTools />,
  },
  {
    title: "Image and Video Tools",
    to: "/image-video-tools",
    icon: <ImageIcon className="h-4 w-4" />,
    page: <ImageVideoTools />,
  },
];
