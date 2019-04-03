import {fromJS} from "immutable";
import {constants} from ".";

const defaultMessageState = fromJS({
	visible:false,
	userList:[]
})


export default (state = defaultMessageState, action) => {
	switch (action.type) {
		case constants.CHANGE_DRAWER_STATUS:
			return state.set('visiable',action.data);
		case constants.RECEIVE_USERLIST:
			return state.set('userList',action.data);
		default:
			return state;
	}
}