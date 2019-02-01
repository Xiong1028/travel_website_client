import { fromJS } from "immutable";
import { constants } from ".";

const defaultHeaderState = fromJS({
  isLogin: false
});

export default (state = defaultHeaderState, action) => {
  switch (action.type) {
    case constants.LOG_IN:
      return state.set("isLogin", true);
    default:
      return state;
  }
};
