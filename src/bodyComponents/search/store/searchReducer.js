import {fromJS} from "immutable";


const defaultSearchState = fromJS({

})

export default (state = defaultSearchState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

