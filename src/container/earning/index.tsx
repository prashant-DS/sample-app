import React from "react";
import Badge from "../../components/badge";
import style from "./style.module.scss";

function Earning({
  percentage,
  total,
  change,
}: {
  percentage: number;
  total: string;
  change: string;
}) {
  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <div className={style.heading}>
          <div>Earning</div>
          <div>ⓘ</div>
        </div>
        <div className={style.mainContent}>
          <div className={style.wheelWrapper}>
            <div
              className={style.wheel}
              style={{ rotate: `${-45 + percentage * 1.8}deg` }}
            ></div>
            <div className={style.text}>{percentage}%</div>
          </div>
          <div className={style.total}>{total}</div>
          <div className={style.description}>Earning this month</div>
          <div className={style.change}>
            <Badge
              text={change}
              backgroundColor={change[0] === "+" ? "#ecf6ed" : "#ffeeeb"}
              color={change[0] === "+" ? "#84b08b" : "#e0a6aa"}
            />
            <div className={style.description}>From previous period</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earning;
