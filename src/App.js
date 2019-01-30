import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./publicComponents/header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
