import { searchModeActionTypes } from "./search-mode.types";

export let toggleSearchMode = (newSearchMode) => {
	return {
		type: searchModeActionTypes.TOGGLE_SEARCH_MODE,
		payload: newSearchMode,
	};
};
