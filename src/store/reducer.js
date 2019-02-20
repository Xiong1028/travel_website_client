import { combineReducers } from "redux-immutable";
import { headerReducer } from "../publicComponents/header/store";
import { postReducer } from "../bodyComponents/post/store";
import {loginReducer} from  "../bodyComponents/login/store";


//guarantee the state is immutable
const reducer = combineReducers({
  header: headerReducer,
  post: postReducer,
  login:loginReducer
});

export default reducer;
