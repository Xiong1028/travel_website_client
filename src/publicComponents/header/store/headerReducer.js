import {fromJS} from "immutable";
import {constants} from ".";
import {constants as loginConstants} from "../../../bodyComponents/login/store";


const defaultHeaderState = fromJS({
	isLogin: false
});

export default (state = defaultHeaderState, action) => {
	switch (action.type) {
		case constants.LOG_IN:
			return state.set("isLogin", true);
		case loginConstants.MODIFY_LOGIN_STATUS:
			return state.set("isLogin", true);
		default:
			return state;
	}
};
