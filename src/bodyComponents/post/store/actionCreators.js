import {constants} from ".";
import {fromJS} from "immutable";
import axios from 'axios';


export const handleOk= () => {
	return {
		type: constants.POST_OK
	};
};

export const handleCancelAction = () => {
	return {
		type: constants.POST_CANCEL
	};
};


export const handleRenewTagsListAction = (tags) => {
	return dispatch =>
		dispatch({
			type: constants.RENEW_TAGSLIST,
			data: tags
		})
}

//TODO: ajax request 
export const handlePostOk = (postData) => {
	return dispatch => {
		axios.post('/post', postData).then(response => {
			console.log(response);
		})
	}
}






