import { BsApple } from "react-icons/bs";
import image1 from "../assets/iPhone-16-si-16-Pro-Max-1.webp";
import image2 from "../assets/iphone-16-pro-desert-roundup-header-1.webp";
import image3 from "../assets/iphone-16.webp";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
export const carousel: {
  name: string;
  title: string;
  icon: IconType;
  image: StaticImageData;   
}[] = [
  {
    name: "iPhone 16  Series ",
    title: "Up to 10% off Voucher",
    icon: BsApple,
    image: image1,
  },
  {
    name: "iPhone 16  Series ",
    title: "Up to 10% off Voucher",
    icon: BsApple,
    image: image2,
  },
  {
    name: "iPhone 16  Series ",
    title: "Up to 10% off Voucher",
    icon: BsApple,
    image: image3,
  },
];
