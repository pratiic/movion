import { searchbarActionTypes } from "./searchbar.types";

const INITIAL_STATE = {
	showSearchbarOnSmallScreens: false,
	searchMode: "movies",
};

export const searchbarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchbarActionTypes.TOGGLE_SEARCHBAR:
			return {
				...state,
				showSearchbarOnSmallScreens: !state.showSearchbarOnSmallScreens,
			};
		case searchbarActionTypes.TOGGLE_SEARCH_MODE:
			return {
				...state,
				searchMode: action.payload,
			};
		default:
			return state;
	}
};
