import { useLocation } from "@tanstack/react-router";

import {
  HiArrowDownTray,
  HiMagnifyingGlass,
  HiMiniCheckCircle,
  HiMiniHome,
  HiMiniSquaresPlus,
  HiOutlineArrowDownTray,
  HiOutlineCheckCircle,
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineSquaresPlus,
} from "react-icons/hi2";

import NavItem from "./NavItem";

const items = [
  { to: "/", label: "Home", icon: HiOutlineHome, activeIcon: HiMiniHome },
  {
    to: "/prime",
    label: "Prime",
    icon: HiOutlineCheckCircle,
    activeIcon: HiMiniCheckCircle,
  },
  {
    to: "/subscriptions",
    label: "Subscriptions",
    icon: HiOutlineSquaresPlus,
    activeIcon: HiMiniSquaresPlus,
  },
  {
    to: "/downloads",
    label: "Downloads",
    icon: HiOutlineArrowDownTray,
    activeIcon: HiArrowDownTray,
  },
  {
    to: "/search",
    label: "Search",
    icon: HiOutlineMagnifyingGlass,
    activeIcon: HiMagnifyingGlass,
  },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex h-16 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {items.map((item) => (
        <NavItem
          key={item.to}
          to={item.to}
          label={item.label}
          icon={item.icon}
          activeIcon={item.activeIcon}
          isActive={pathname === item.to}
        />
      ))}
    </nav>
  );
}
