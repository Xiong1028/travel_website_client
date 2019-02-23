import { constants as postConstants } from "../../../bodyComponents/post/store";
import {constants as headerconstants} from '.';
// import { fromJS } from "immutable";

export const showAccessModal = () => {
  return {
    type: postConstants.ACCESS_DENIED_MODAL
  };
};

export const handleLogoutAction =() =>{
  return {
    type:headerconstants.LOG_OUT
  }
}


