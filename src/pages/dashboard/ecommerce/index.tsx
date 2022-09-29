import React from "react";
import { AiFillDashboard, AiFillPieChart, AiFillProfile } from "react-icons/ai";
import SmallDetailCard from "../../../components/smallDetailCard";
import Overview from "../../../container/overview";
import style from "./style.module.scss";

function Ecommerce() {
  return (
    <div className={style.container}>
      <div className={style.dataSection}>
        <div className={style.smallCards}>
          <SmallDetailCard
            imageComponent={<AiFillPieChart />}
            heading="Revenue"
            value="$21,456"
            percentageChange="+2.65%"
          />
          <SmallDetailCard
            imageComponent={<AiFillDashboard />}
            heading="Orders"
            value="5463"
            percentageChange="-0.82%"
          />
          <SmallDetailCard
            imageComponent={<AiFillProfile />}
            heading="Customers"
            value="45,254"
            percentageChange="-1.04%"
          />
        </div>
        <div className={style.overviewWrapper}>
          <Overview
            timePeriod="This Month"
            value="$24,456"
            change="+2.15%"
            moreData={[
              { Order_1: 5463 },
              { Order_2: 5463 },
              { Order_3: 5463 },
              { Order_4: 5463 },
              { Order_5: 5463 },
              { Order_6: 5463 },
            ]}
          />
        </div>
      </div>
      <div className={style.profileSection}></div>
    </div>
  );
}

export default Ecommerce;
