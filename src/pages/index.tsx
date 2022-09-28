import React, { ReactElement } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import SideBar from "../container/sidebar";

function Pages(): ReactElement {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Route path="/" exact>
          <Redirect to="/dashboards/ecommerce"></Redirect>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
