import { combineReducers } from "redux-immutable";
import { headerReducer } from "../publicComponents/header/store";
import { postReducer } from "../bodyComponents/post/store";

//guarantee the state is immutable
const reducer = combineReducers({
  header: headerReducer,
  post: postReducer
});

export default reducer;
