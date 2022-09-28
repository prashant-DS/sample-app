import React, { ReactElement } from "react";
import Header from "../header";
import style from "./style.module.scss";

function PageWrapper({ children }: { children: ReactElement }) {
  return (
    <div className={style.pageWrapper}>
      <>
        <Header heading="Dashboard" />
        {children}
      </>
    </div>
  );
}

export default PageWrapper;
