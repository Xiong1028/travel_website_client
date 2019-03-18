import {fromJS} from "immutable";
import {constants as settingConstants} from ".";

const defaultState = fromJS({
	avatar: "",
	msg: ""
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case settingConstants.RENEW_USER_IMG:
			return state.set("avatar", action.data);
		case settingConstants.RST_SUCCESS:
			return state.set("msg", action.data);
		case settingConstants.ERROR_MSG:
			return state.set("msg", action.data);
		default:
			return state;
	}
}