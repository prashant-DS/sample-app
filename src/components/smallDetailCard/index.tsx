import React from "react";
import Badge from "../badge";
import style from "./style.module.scss";

interface SmallDetailCardProps {
  imageComponent?: React.ReactElement;
  imageText?: string;
  heading: string;
  value: string;
  percentageChange?: string;
  useMinimumSpace?: boolean;
}

function SmallDetailCard({
  imageComponent,
  imageText,
  heading,
  value,
  percentageChange,
  useMinimumSpace = false,
}: SmallDetailCardProps) {
  return (
    <div
      className={`${style.container} ${
        useMinimumSpace ? style.minContainer : ""
      }`}
    >
      {(imageComponent || imageText) && (
        <div className={style.imageContainer}>
          {imageComponent && imageComponent}
          {imageText && <span>{imageText}</span>}
        </div>
      )}
      <div className={style.mainPart}>
        <div className={style.heading}>{heading}</div>
        <div className={style.value}>{value}</div>
      </div>
      {percentageChange && (
        <div className={style.change}>
          <Badge
            text={percentageChange}
            backgroundColor={
              percentageChange[0] === "+"
                ? "#ecf6ed"
                : percentageChange[0] === "-"
                ? "#ffeeeb"
                : "#f6f7fa"
            }
            color={
              percentageChange[0] === "+"
                ? "#84b08b"
                : percentageChange[0] === "-"
                ? "#e0a6aa"
                : "#494a52"
            }
          />
        </div>
      )}
    </div>
  );
}

export default SmallDetailCard;
