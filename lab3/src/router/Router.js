import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Blog from "../pages/Blog.js";
import Calc from "../pages/Calculator.js";
import MainPage from '../pages/MainPage.js'
import SignIn from "../pages/SignIn.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/calculator'>
        <Calc/>
      </Route>
      <Route path='/signIn'>
        <SignIn/>
      </Route>
      <Route path='/blog'>
        <Blog/>
      </Route>
      <Route path=''>
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;