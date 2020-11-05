import { combineReducers } from "redux";

import { searchModeReducer } from "./search-mode/search-mode.reducer";

export default combineReducers({
	searchMode: searchModeReducer,
});
