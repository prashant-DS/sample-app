import React from "react";
import Badge from "../badge";
import style from "./style.module.scss";

interface SmallDetailCardProps {
  imageComponent?: React.ReactElement;
  imageText?: string;
  heading: string;
  value: string;
  percentageChange: string;
}

function SmallDetailCard({
  imageComponent,
  imageText,
  heading,
  value,
  percentageChange,
}: SmallDetailCardProps) {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {imageComponent && imageComponent}
        {imageText && <span>{imageText}</span>}
      </div>
      <div className={style.mainPart}>
        <div className={style.heading}>{heading}</div>
        <div className={style.value}>{value}</div>
      </div>
      <div className={style.change}>
        <Badge
          text={percentageChange}
          backgroundColor={percentageChange[0] === "+" ? "#ecf6ed" : "#ffeeeb"}
          color={percentageChange[0] === "+" ? "#84b08b" : "#e0a6aa"}
        />
      </div>
    </div>
  );
}

export default SmallDetailCard;
