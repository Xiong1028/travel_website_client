import React, { Component } from "react";
import SettingMenu from "./components/SettingMenu";
import SettingBody from "./components/SettingBody";
import {SettingMenuWrapper,SettingBodyWrapper} from "./style";
import "./setting.css";


class Setting extends Component {
  render() {
    return (
      <div className="settingWrapper">
          <SettingMenuWrapper>
              <SettingMenu />
          </SettingMenuWrapper>
          <SettingBodyWrapper>
              <SettingBody />
          </SettingBodyWrapper>
      </div>
    );
  }
}

export default Setting;
