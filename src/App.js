import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
// import logo from "./logo.svg";
import {ToastContainer} from 'react-toastify';
import HomePage from "./components/homepage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
        <ToastContainer />
        <main>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/resume" component={ResumePage} /> */}
            <Route path="/" component={HomePage} />
            <Redirect exact from="/" to="/" />
            <Redirect to="/not-found"/>
          </Switch>
        </BrowserRouter>
        </main>
      </React.Fragment>
  );
}

export default App;
