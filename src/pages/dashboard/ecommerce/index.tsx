import React from "react";
import { AiFillDashboard, AiFillPieChart, AiFillProfile } from "react-icons/ai";
import Profile from "../../../components/profile";
import SmallDetailCard from "../../../components/smallDetailCard";
import OrderStats from "../../../container/orderStats";
import Overview from "../../../container/overview";
import TopProducts from "../../../container/topProducts";
import UserActivity from "../../../container/userActivity";
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
              { Order_2: 5563 },
              { Order_3: 1263 },
              { Order_4: 6573 },
              { Order_5: 233 },
              { Order_6: 6963 },
            ]}
          />
        </div>
        <div className={style.smallCards}>
          <UserActivity period="This Month" value="34,123" />
          <OrderStats
            orderDetails={[
              { Completed: 5463 },
              { Pending: 5563 },
              { Cancel: 1263 },
            ]}
          />
          <TopProducts
            itemList={[
              { name: "Shirt", price: "$15", count: "4.2k" },
              { name: "Jeans", price: "$18", count: "3.8k" },
              { name: "SmartPhones", price: "$1000", count: "2.2k" },
              { name: "Speakers", price: "$500", count: "1.2k" },
              { name: "Headphones", price: "$50", count: "1k" },
            ]}
          />
        </div>
      </div>
      <div className={style.profileSection}>
        <Profile
          imageURL="#c8e7ff"
          backgroundURL="#ffd7d5"
          name="Prashant Kumar"
          designation="Software Engineer"
          products="1,250"
          followers="2.2k"
        />
      </div>
    </div>
  );
}

export default Ecommerce;
