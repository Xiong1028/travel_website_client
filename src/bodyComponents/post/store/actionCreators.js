import {constants} from ".";
import {fromJS} from "immutable";
import axios from 'axios';



const renewDiaryCard = (data)=>{
	return{
		type:constants.RENEW_DIRARY_CARD,
		data
	}
}


export const handleOkAction = () => {
	return dispatch =>
		dispatch({
			type: constants.POST_OK
		})
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

//ajax request
export const handlePostOkAction = (postData) => {
	const {title,tags,content,postImgUrl} = postData;
	return dispatch => {
		axios.post('/post',{
			post_title:title,
			post_tags:tags,
			post_content:content,
			post_imgURL:postImgUrl
		}).then(response => {
			console.log(response);
			/**
			 * 
				response.data = {code: 1
				data:
				cover_imgURL: "https://lonelyplanetwp.imgix.net/2015/05/GettyImages_176922550-beijing-moat_cs.jpg"
				post_content: "<p>This is the capital of China, Beijing</p>↵<p></p>↵<img src="https://lonelyplanetwp.imgix.net/2015/05/GettyImages_176922550-beijing-moat_cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748" alt="undefined" style="float:left;height: auto;width: auto"/>↵<p></p>↵"
				post_id: "5c7b4cd70bd3010560da9bf2"
				post_tags: (2) ["Beijing", "China"]
				post_time: 1551584471005
				post_title: "Beijing"
				read_total: 0
				user_id: "5c77433d56910e09468bf5e8"	
				}		 
			* 
			 *  */	
			
			 //TODO
			 //dispatch the postData to some reducers.
			 dispatch()

		})
	}
}