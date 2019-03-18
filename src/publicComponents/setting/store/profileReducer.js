import {fromJS} from "immutable";
import {constants as profileConstants} from ".";

const defaultProfileState = fromJS({
	avatar: ""
})

export default (state = defaultProfileState, action) => {
	switch (action.type) {
		case profileConstants.RENEW_USER_IMG:
			return state.set("avatar", action.data);
		default:
			return state;
	}
}