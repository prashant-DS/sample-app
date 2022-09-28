import React from "react";
import { FiFlag, FiSearch, FiSettings } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import style from "./style.module.scss";

interface HeaderProps {
  heading: string;
}

function Header({ heading }: HeaderProps) {
  return (
    <div className={style.headerWrapper}>
      <div className={style.heading}>{heading}</div>
      <div className={style.options}>
        <FiSearch size="1.3rem" />
        <FiFlag size="1.3rem" />
        <RiDashboardLine size="1.3rem" />
        <IoIosNotificationsOutline size="1.3rem" />
        <FiSettings size="1.3rem" />
        <BiUserCircle size="1.3rem" />
      </div>
    </div>
  );
}

export default Header;
