import React, { Component } from "react";
import SettingMenu from "./components/SettingMenu";
import SettingBody from "./components/SettingBody";




class Setting extends Component {
  render() {
    return (
      <div className={{marginTop:100}}>
          <SettingMenu />
          <SettingBody />
      </div>
    );
  }
}

export default Setting;
