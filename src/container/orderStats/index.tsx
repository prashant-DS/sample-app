import React from "react";
import { VictoryPie } from "victory";
import SmallDetailCard from "../../components/smallDetailCard";
import style from "./style.module.scss";

function OrderStats({
  orderDetails,
}: {
  orderDetails: Array<Record<string, number>>;
}) {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <div>Order Stats</div>
        <div>...</div>
      </div>

      <div className={style.pieContainer}>
        <VictoryPie
          padding={0}
          padAngle={1}
          innerRadius={110}
          width={1000}
          colorScale={["#417de1", "#f17e7e", "#f3f4f9"]}
          data={orderDetails.map((order) => ({
            x: Object.keys(order)[0],
            y: Object.values(order)[0],
          }))}
          labels={[]}
        />
      </div>

      <div className={style.details}>
        {orderDetails.map((order) => (
          <SmallDetailCard
            heading={Object.keys(order)[0]}
            value={Object.values(order)[0].toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderStats;
