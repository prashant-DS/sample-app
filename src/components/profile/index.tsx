import React from "react";
import { Interface } from "readline";
import style from "./style.module.scss";

interface ProfileProps {
  backgroundURL: string;
  imageURL: string;
  name: string;
  designation: string;
  products: string;
  followers: string;
}

function Profile({
  backgroundURL,
  imageURL,
  name,
  designation,
  products,
  followers,
}: ProfileProps) {
  return (
    <div className={style.container}>
      <div
        className={style.bg}
        style={{ backgroundColor: backgroundURL }}
      ></div>
      <div className={style.imageContainer}>
        <div
          className={style.image}
          style={{ backgroundColor: imageURL }}
        ></div>
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.designation}>{designation}</div>
      <div className={style.moreDetails}>
        <div className={style.options}>
          <div>{products}</div>
          <div>Products</div>
        </div>
        <div className={style.divider}></div>
        <div className={style.options}>
          <div>{followers}</div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
