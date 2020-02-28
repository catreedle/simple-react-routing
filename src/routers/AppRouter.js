import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import PortfolioItem from "../components/PortfolioItem";
import Contact from "../components/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:item" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
