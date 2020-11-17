import { searchActionTypes } from "./search.types";

const INITIAL_STATE = {
	searchResults: [],
	fetchingSearchResults: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchActionTypes.FETCH_SEARCH_RESULTS_START:
			return {
				...state,
				fetchingSearchResults: true,
			};
		case searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
			return {
				...state,
				searchResults: [...action.payload.results],
				fetchingSearchResults: false,
			};
		default:
			return state;
	}
};
