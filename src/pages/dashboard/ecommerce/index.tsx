import React from "react";
import { AiFillDashboard, AiFillPieChart, AiFillProfile } from "react-icons/ai";
import SmallDetailCard from "../../../components/smallDetailCard";
import style from "./style.module.scss";

function Ecommerce() {
  return (
    <div className={style.container}>
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
  );
}

export default Ecommerce;
