import React from "react";
import {
  RiDashboardLine,
  RiCalendar2Line,
  RiChat3Line,
  RiArchiveDrawerLine,
  RiFolder3Line,
  RiMailLine,
  RiContactsLine,
} from "react-icons/ri";
import { TbFileInvoice, TbWriting } from "react-icons/tb";
import { GoProject } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiCube } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import Badge from "../../components/badge";

export interface MenuOption {
  icon?: React.FunctionComponent;
  name: string;
  badge?: React.FunctionComponent;
  subMenu?: Array<MenuOption>;
}
interface MenuGroupOptions {
  heading: string;
  options?: Array<MenuOption>;
}
export const menuGroups: Array<MenuGroupOptions> = [
  {
    heading: "Menu",
    options: [
      {
        icon: RiDashboardLine,
        name: "Dashboards",
        subMenu: [{ name: "Ecommerce" }, { name: "Saas" }, { name: "Crypto" }],
      },
    ],
  },
  {
    heading: "Applications",
    options: [
      { icon: RiCalendar2Line, name: "Calender" },
      {
        icon: RiChat3Line,
        name: "Chat",
        badge: () =>
          Badge({ text: "Hot", color: "#b1606e", backgroundColor: "#2a0518" }),
      },
      { icon: RiArchiveDrawerLine, name: "File Manager" },
      { icon: RiFolder3Line, name: "Ecommerce", subMenu: [] },
      { icon: RiMailLine, name: "Email", subMenu: [] },
      { icon: TbFileInvoice, name: "Invoices", subMenu: [] },
      { icon: GoProject, name: "Projects", subMenu: [] },
      { icon: RiContactsLine, name: "Contacts", subMenu: [] },
    ],
  },
  { heading: "Layouts" },
  {
    heading: "Pages",
    options: [
      {
        icon: CgProfile,
        name: "Authentication",
        badge: () =>
          Badge({ text: "8", color: "#d6fdff", backgroundColor: "#4dc5e3" }),
      },
      { icon: BiCube, name: "Utility", subMenu: [] },
    ],
  },
  {
    heading: "Components",
    options: [
      { icon: MdOutlineDesignServices, name: "UI Elements", subMenu: [] },
      { icon: TbWriting, name: "Forms", subMenu: [] },
    ],
  },
];
