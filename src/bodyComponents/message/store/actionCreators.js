import {constants} from ".";
import axios from 'axios';

const receiveUserList = (userList)=>{
    return {
        type:constants.RECEIVE_USERLIST,
        data:userList
    }
}


export const toggleMessageDrawerAction= (visible)=>{
    return dispatch =>{
        dispatch({
            type:constants.CHANGE_DRAWER_STATUS,
            data:visible
        })
    }
}

//asyc action to get the userList
export const getUserListAction = ()=>{
    return async dispatch=>{
        const response = await axios.get('/userlist');
        const result = response.data;
        console.log(result);
        if(result.code ===1){
            dispatch(receiveUserList(result.data));
        } 
    }
}







