import {fromJS} from "immutable";
import {constants} from ".";


const defaultLoginUser = fromJS({
	username: '',
	email: '',
	registerMsg: ''
})


export default (state = defaultLoginUser, action) => {
	switch (action.type) {
		case constants.REGISTER_FAILURE:
			return state.set('registerMsg', action.data);
		case constants.ERROR_MSG:
			return state.set('registerMsg', action.data);
		case constants.AUTH_SUCCESS:
			return state.merge({
				username: action.data.username,
				email: action.data.email,
				registerMsg: 'Success to register'
			})
		default:
			return state;
	}

}
