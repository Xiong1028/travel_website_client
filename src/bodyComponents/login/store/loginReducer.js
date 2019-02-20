import{ fromJS }from "immutable";
import { constants } from ".";


const defaultLoginState = fromJS({
    loginMsg:''
})


export default (state = defaultLoginState,action)=>{
    switch(action.type){
        case constants.REGISTER_FAILURE:
            return state.set('loginMsg',action.data.msg);
        default:
            return state;
    }

}
