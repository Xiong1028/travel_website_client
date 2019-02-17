import { constants } from "../../../bodyComponents/post/store";
// import { fromJS } from "immutable";

export const handleOkAction = () => {
  return {
    type: constants.REGISTER_OK
  };
};

export const handleCancelAction = () => {
  return {
    type: constants.REGISTER_CANCEL
  };
};
