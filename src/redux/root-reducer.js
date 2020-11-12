import { combineReducers } from "redux";

import { sidebarReducer } from "./sidebar/sidebar.reducer";
import { searchbarReducer } from "./searchbar/searchbar.reducer";
import { themeReducer } from "./theme/theme.reducer";

export default combineReducers({
	sidebar: sidebarReducer,
	searchbar: searchbarReducer,
	theme: themeReducer,
});
