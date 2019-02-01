import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./publicComponents/header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./bodyComponents/home/";
import Login from "./bodyComponents/login/";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
