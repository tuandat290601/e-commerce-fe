export interface INavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
  items?: {
    href?: string;
    label?: string;
    description?: string;
  }[];
}

export interface INavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: INavbarNavLink[];
}
