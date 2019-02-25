import {combineReducers} from "redux-immutable";
import {headerReducer} from "../publicComponents/header/store";
import {postReducer} from "../bodyComponents/post/store";
import {loginReducer} from "../bodyComponents/login/store";
import {homeReducer} from "../bodyComponents/home/store";
import {detailReducer} from "../bodyComponents/detail/store";

//guarantee the state is immutable
const reducer = combineReducers({
	header: headerReducer,
	post: postReducer,
	login: loginReducer,
	home: homeReducer,
	detail:detailReducer
});

export default reducer;
