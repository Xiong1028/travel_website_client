import {constants} from ".";
import axios from 'axios';

//sync the producer
const errMsg = (msg) => ({
	type: constants.ERROR_MSG,
	data: msg
})

const modifyLoginStatus = () => ({
	type: constants.MODIFY_LOGIN_STATUS,
	data: true
})

const authSucess = (user) => ({
	type: constants.AUTH_SUCCESS,
	data: user
})


export const handleRegisterAction = (user) => {
	const {username, password1, password2, email} = user;
	//
	return dispatch => {
		if (!username) {
			dispatch(errMsg('username can not be empty'));
		} else if (password1 != password2) {
			dispatch(errMsg('passwords are not matched'));
		} else {
			axios.post('/register', {
				username: username,
				password: password1,
				email: email
			}).then((res) => {
				const result = res.data;
				console.log(result);
				if (result.code) {
					dispatch(authSucess(result.data));
					dispatch(modifyLoginStatus());
				} else {
					dispatch(errMsg(result.registerMsg));
				}
			})
		}
	}
}