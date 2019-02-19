import { constants } from "../../../bodyComponents/post/store";
// import { fromJS } from "immutable";

export const showAccessModal = () => {
  return {
    type: constants.ACCESS_DENIED_MODAL
  };
};
