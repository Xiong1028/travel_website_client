import { constants } from ".";
import { fromJS } from "immutable";
import axios from 'axios';




export const handleOkAction = () => {
  return {
    type: constants.POST_OK
  };
};

export const handleCancelAction = () => {
  return {
    type: constants.POST_CANCEL
  };
};

//TODO: ajax request 
export const handlePostOk = (postData)=>{
  return async dispatch=>{
    axios.post('/post',postData).then(response=>{
      console.log(response);
    })
  }
}






