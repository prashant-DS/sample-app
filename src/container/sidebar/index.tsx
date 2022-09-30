import { List, ListItem } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { menuGroups, MenuOption } from "./constant";

import style from "./style.module.scss";

function SideBar(): ReactElement {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const renderMenuOption = (obj: MenuOption, isSubOption = false) => {
    let split = location.pathname.split("/");
    const isMenuActive = !isSubOption
      ? split[1] === obj.name.toLowerCase()
      : split[2] === obj.name.toLowerCase();
    return (
      <div
        className={`${
          isMenuActive
            ? style.menuOptionContainerActive
            : style.menuOptionContainerInactive
        }`}
      >
        <div className={style.mainOption}>
          {obj.icon && <obj.icon />}
          <div className={style.menuOptionName}>{obj.name}</div>
          {obj.badge && <obj.badge />}
          {obj.subMenu && (isMenuActive ? <MdExpandLess /> : <MdExpandMore />)}
        </div>
        {obj.subMenu && isMenuActive && (
          <List disablePadding>
            {obj.subMenu.map((opt) => (
              <ListItem key={opt.name} className={style.subMenuOption}>
                {renderMenuOption(opt, true)}
              </ListItem>
            ))}
          </List>
        )}
      </div>
    );
  };

  return (
    <div
      className={`${style.sideBar} ${
        show ? style["sideBar-show"] : style["sideBar-hide"]
      }`}
    >
      <div
        className={style.collapseSidebarBtn}
        onClick={() => setShow((pre) => !pre)}
      >
        <GiHamburgerMenu />
      </div>
      <List>
        {menuGroups.map((group) => (
          <div key={group.heading}>
            <div className={style.menuGroupHeading}>{group.heading}</div>
            {group.options?.map((option) => (
              <React.Fragment key={option.name}>
                {renderMenuOption(option)}
              </React.Fragment>
            ))}
          </div>
        ))}
      </List>
    </div>
  );
}

export default SideBar;
