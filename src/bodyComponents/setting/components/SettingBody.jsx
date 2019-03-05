import React, {Component, Fragment} from 'react';
import {Switch,Route} from "react-router-dom";
import UploadAvatar from "./UploadAvatar";
import Reset from "./Reset";
import DeleteUser from "./DeleteUser";

class SettingBody extends Component {
	render() {
		return (
			<Fragment>
				<Route path="/setting" exact component={UploadAvatar}/>
				<Route path="/reset" exact component={Reset}/>
				<Route path="/deleteuser" exact component={DeleteUser}/>
			</Fragment>
		)
	}
}

export default SettingBody;