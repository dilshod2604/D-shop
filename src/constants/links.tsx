import { IconType } from "react-icons";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { SlEarphones } from "react-icons/sl";
import { LuGamepad } from "react-icons/lu";

export const links: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const sideBarLinks: { name: string; href: string }[] = [
  {
    name: "Electronics",
    href: "/electronics",
  },
  {
    name: "Home & Lifestyle",
    href: "/home-lifestyle",
  },
  {
    name: "Medicine",
    href: "/medicine",
  },
  {
    name: "Sports & Outdoor",
    href: "/sports-outdoor",
  },
  {
    name: "Baby's & Toys",
    href: "/baby's-toys",
  },
  {
    name: "Groceries & Pets",
    href: "/groceries-pets",
  },
  {
    name: "Health & Beauty",
    href: "/health-beauty",
  },
];

interface ICategories {
  name: string;
  icon: IconType;
}

export const categories: ICategories[] = [
  {
    name: "Phones",
    icon: GiSmartphone,
  },
  {
    name: "Computers",
    icon: HiOutlineDesktopComputer,
  },
  {
    name: "Smart watch",
    icon: IoWatchOutline,
  },
  {
    name: "Camera",
    icon: FiCamera,
  },
  {
    name: "HeadPhones",
    icon: SlEarphones,
  },
  {
    name: "Caming",
    icon: LuGamepad,
  },
];

export const categoryOptions = [
  {
    value: "phones",
    label: "Phones",
  },
  {
    value: "computers",
    label: "Computers",
  },
  {
    value: "smart watch",
    label: "Smart watch",
  },
  {
    value: "camera",
    label: "Camera",
  },
  {
    value: "headphones",
    label: "HeadPhones",
  },
  {
    value: "gaming",
    label: "Gaming",
  },
];
