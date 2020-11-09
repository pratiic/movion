import { searchbarActionTypes } from "./searchbar.types";

export const toggleSearchbar = () => {
	return {
		type: searchbarActionTypes.TOGGLE_SEARCHBAR,
	};
};

export let toggleSearchMode = (newSearchMode) => {
	return {
		type: searchbarActionTypes.TOGGLE_SEARCH_MODE,
		payload: newSearchMode,
	};
};
