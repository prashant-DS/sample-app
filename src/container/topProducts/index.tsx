import React from "react";
import SmallDetailCard from "../../components/smallDetailCard";
import style from "./style.module.scss";

interface TopProductsProps {
  itemList: { name: string; price: string; count: string }[];
}

function TopProducts({ itemList }: TopProductsProps) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.heading}>
          <div>Top Products</div>
          <div>Monthly</div>
        </div>
        {itemList.map((item, idx) => (
          <SmallDetailCard
            imageText={`#${idx + 1}`}
            heading={item.name}
            value={item.price}
            percentageChange={item.count}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
