import { INavbarNavLink } from "@/interfaces/navbar.interface";

export const defaultNavigationLinks: INavbarNavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    items: [
      {
        href: "/products",
        label: "Special Price",
        description: "Last chance to get an unbelievable price.",
      },
      {
        href: "/products",
        label: "Homecoming denim",
        description: "Effortless style, timeless comfort.",
      },
      {
        href: "/products/sales",
        label: "All Products",
        description: "Discovery all items.",
      },
    ],
  },
  { href: "/about", label: "About" },
  {
    href: "/career",
    label: "Career",
    items: [
      {
        href: "/career",
        label: "Regiter for Affiliate",
        description: "Become our partner.",
      },
      {
        href: "/career",
        label: "Jobs",
        description: "Join our journey.",
      },
    ],
  },
];
