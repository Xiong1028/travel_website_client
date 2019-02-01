import { combineReducers } from "redux-immutable";
import { headerReducer } from "../publicComponents/header/store";

//guarantee the state is immutable
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
