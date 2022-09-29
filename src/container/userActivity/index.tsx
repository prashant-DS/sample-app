import React from "react";
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine } from "victory";
import SmallDetailCard from "../../components/smallDetailCard";
import style from "./style.module.scss";

function UserActivity({ period, value }: { period: string; value: string }) {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <div>User Activity</div>
        <div>Weekly</div>
      </div>
      <SmallDetailCard heading={period} value={value} useMinimumSpace />
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id="userActivity_myGradient1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c8e7ff" />
            {/* <stop offset="75%" stopColor="white" /> */}
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="userActivity_myGradient2"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffd7d5" />
            {/* <stop offset="75%" stopColor="white" /> */}
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart padding={{ top: 0, left: 25, bottom: 50, right: 0 }}>
        <VictoryAxis
          dependentAxis
          tickValues={[0, 3, 6, 9, 12]}
          style={{ tickLabels: { fontSize: 6, opacity: 0.5 } }}
        />
        <VictoryArea
          data={Array(6)
            .fill(0)
            .map((e, i) => ({ x: i, y: Math.ceil(Math.random() * 8) + 2 }))}
          interpolation="natural"
          style={{
            data: {
              fill: "url(#userActivity_myGradient1)",
              stroke: "blue",
              strokeWidth: 1.5,
            },
          }}
        ></VictoryArea>
        <VictoryArea
          data={Array(6)
            .fill(0)
            .map((e, i) => ({ x: i, y: Math.ceil(Math.random() * 8) + 2 }))}
          interpolation="natural"
          style={{
            data: {
              fill: "url(#userActivity_myGradient2)",
              stroke: "red",
              strokeWidth: 1.5,
              opacity: 0.5,
            },
          }}
        ></VictoryArea>
      </VictoryChart>
    </div>
  );
}

export default UserActivity;
