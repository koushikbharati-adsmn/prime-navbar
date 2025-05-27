import { Link } from "@tanstack/react-router";
import type { IconType } from "react-icons";
import PrimeGradient from "./PrimeGradient";

interface NavItemProps {
  to: string;
  label: string;
  icon: IconType;
  activeIcon: IconType;
  isActive: boolean;
}
export default function NavItem({
  to,
  label,
  icon: Icon,
  activeIcon: ActiveIcon,
  isActive,
}: NavItemProps) {
  let isBlue = label === "Prime";
  return (
    <Link
      to={to}
      className="relative flex h-full flex-1 flex-col items-center justify-center gap-1 opacity-50 transition-opacity [&.active]:opacity-100"
    >
      {isActive && <PrimeGradient />}

      {isActive ? (
        <ActiveIcon
          data-blue={isBlue || null}
          className="size-6 data-[blue]:fill-sky-600"
        />
      ) : (
        <Icon className="size-6" />
      )}
      <span className="text-[.65rem] font-medium">{label}</span>
    </Link>
  );
}
