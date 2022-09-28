import React from "react";
import style from "./style.module.scss";

interface BadgeProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

function Badge({ text, color = "red", backgroundColor = "white" }: BadgeProps) {
  return (
    <div
      className={style.badge}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      <div className={style.text}>{text}</div>
    </div>
  );
}

export default Badge;
