import React from "react";
import style from "./style.module.scss";

function RecentActivity({ details }: { details: Array<Record<string, any>> }) {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <div>Recent Activity</div>
      </div>
      {details.map((detail) => (
        <div className={style.activity}>
          <div className={style.imageContainer}>
            <div className={style.date}>{detail.date}</div>
            <div className={style.month}>{detail.month}</div>
          </div>
          <div className={style.text}>{detail.text}</div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;
