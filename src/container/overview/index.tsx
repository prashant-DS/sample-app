import React from "react";
import SmallDetailCard from "../../components/smallDetailCard";
import style from "./style.module.scss";

interface OverviewProps {
  timePeriod: string;
  value: string;
  change: string;
  moreData?: Array<Record<string, any>>;
}

function Overview({ timePeriod, value, change, moreData = [] }: OverviewProps) {
  return (
    <div className={style.container}>
      <div className={style.data}>
        <div className={style.heading}>Overview</div>
        <SmallDetailCard
          heading={timePeriod}
          value={value}
          percentageChange={change}
          useMinimumSpace
        />
        <div className={style.moreDataContainerWrapper}>
          <div className={style.moreDataContainer}>
            {moreData.map((data) => (
              <div className={style.moreDataCell}>
                <div className={style.moreDataKey}>{Object.keys(data)[0]}</div>
                <div className={style.moreDataValue}>
                  {Object.values(data)[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.graph}></div>
    </div>
  );
}

export default Overview;
