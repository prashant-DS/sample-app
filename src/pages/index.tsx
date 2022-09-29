import React, { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import style from "./pages.module.scss";

import SideBar from "../container/sidebar";
import PageWrapper from "../container/pageWrapper";
import Ecommerce from "./dashboard/ecommerce";

function Pages(): ReactElement {
  return (
    <div className={style.rootPage}>
      <BrowserRouter>
        <SideBar />
        <PageWrapper>
          <Switch>
            <Route path="/dashboards/ecommerce">
              <Ecommerce />
            </Route>
          </Switch>
        </PageWrapper>
        <Route path="/" exact>
          <Redirect to="/dashboards/ecommerce"></Redirect>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
