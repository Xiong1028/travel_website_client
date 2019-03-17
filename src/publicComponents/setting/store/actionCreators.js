import axios from 'axios';
import {constants} from ".";
import {fromJS} from "immutable";

const profileUploadMsg = (data) => ({
    type: constants.PROFILE_UPLOAD_MSG,
    data: fromJS(data)
})

export const handleOnClickSaveAction = (formData) => {
    return (dispatch) => {       
        axios.post('/profile', formData).then((res)=>{
			const data = res.data.data;
			dispatch(profileUploadMsg(data));
		}).catch((err)=>{
			console.log(err);
		})
    }
}