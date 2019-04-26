import axios from 'axios';
import {constants} from ".";
import {fromJS} from "immutable";


const renewDiaryCardList = (data)=>({
	type:constants.RENEW_DIARY_CARD_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/9)
})

const renewPhotoSlideList = (data)=>({
	type: constants.RENEW_PHOTO_SLIDE_LIST,
	data
})

export const handleGetCardsAction = ()=>{
	return (dispatch) =>{
		// axios.get('api/diaryCard.json').then((res)=>{
		// 	const data = res.data.data;
		// 	console.log(data);
		// 	dispatch(renewDiaryCardList(data));
		// }).catch((err)=>{
		// 	console.log(err);
		// })
		axios.get('/fetchAll').then((res)=>{
			const data = res.data.data;
			dispatch(renewDiaryCardList(data));
			// console.log(data);
			// dispatch(renewPhotoSlideList([data[0],data[1],data[2]]));
			
		}).catch((err)=>{
			console.log(err);
		})
	}
}

export const pageChangeAction = (page)=>{
	return{
		type:constants.RENEW_PAGE,
		data:page
	}
}

export const handleGetSlideAction = () => {
	return (dispatch) =>{
		axios.get('/slides').then((res)=>{
			const data = res.data.data;
			dispatch(renewPhotoSlideList(data));
		}).catch((err)=>{
			console.log(err);
		})
	}
}

export const handleSaveArticleAction = (post_id, user_id) => {
	return (dispatch) => {
		axios.post("/savearticle", {
			post_id: post_id,
			user_id: user_id
		}).then ((res)=>{
			const data = res.data;
			console.log(data);
		})
	}
}
