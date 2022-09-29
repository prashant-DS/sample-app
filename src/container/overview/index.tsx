import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from "victory";
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
      <div className={style.graph}>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="myGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bab9bd" />
              <stop offset="75%" stopColor="white" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
            <linearGradient id="myGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4c83ee" />
              <stop offset="75%" stopColor="white" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart
          padding={{ top: 0, left: 50, bottom: 25, right: 25 }}
          domainPadding={30}
          height={200}
        >
          <VictoryAxis style={{ tickLabels: { fontSize: 6, opacity: 0.5 } }} />
          <VictoryAxis
            dependentAxis
            tickValues={[0, 10000, 20000, 30000, 40000]}
            tickFormat={(x) => `${x / 1000}k`}
            style={{ tickLabels: { fontSize: 6, opacity: 0.5 } }}
            domain={[0, 40000]}
          />
          <VictoryGroup offset={8}>
            <VictoryBar
              style={{ data: { fill: "url(#myGradient1)" } }}
              barWidth={8}
              cornerRadius={3}
              alignment="middle"
              data={[
                { x: "Jan", y: 15000 },
                { x: "Feb", y: 25000 },
                { x: "Mar", y: 18000 },
                { x: "Apr", y: 20000 },
                { x: "May", y: 10000 },
                { x: "Jun", y: 15000 },
                { x: "Jul", y: 25000 },
                { x: "Aug", y: 22000 },
                { x: "Sep", y: 20000 },
              ]}
            />
            <VictoryBar
              style={{ data: { fill: "url(#myGradient2)" } }}
              cornerRadius={3}
              barWidth={8}
              alignment="middle"
              data={[
                { x: "Jan", y: 20000 },
                { x: "Feb", y: 35000 },
                { x: "Mar", y: 28000 },
                { x: "Apr", y: 25000 },
                { x: "May", y: 15000 },
                { x: "Jun", y: 25000 },
                { x: "Jul", y: 35000 },
                { x: "Aug", y: 23000 },
                { x: "Sep", y: 30000 },
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    </div>
  );
}

export default Overview;
