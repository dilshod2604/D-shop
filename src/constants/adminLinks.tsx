import { RxDashboard } from "react-icons/rx";
import { GrAnalytics } from "react-icons/gr";
import { PiSealPercentFill } from "react-icons/pi";
import { IconType } from "react-icons";
import { HiUsers } from "react-icons/hi2";
import { MdShoppingCart } from "react-icons/md";
export const menu: { name: string; icon: IconType; href: string }[] = [
  {
    name: "Dasboard",
    icon: RxDashboard,
    href: "/admin",
  },
  {
    name: "Analytics",
    icon: GrAnalytics,
    href: "/admin/analytics",
  },
  {
    name: "Sales",
    icon: PiSealPercentFill,
    href: "/admin/sales",
  },
];

export const management: { name: string; icon: IconType; href: string }[] = [
  {
    name: "Profucts",
    icon: MdShoppingCart,
    href: "/admin/products",
  },
  {
    name: "Costomers",
    icon: HiUsers,
    href: "/admin/costomers",
  },
];
