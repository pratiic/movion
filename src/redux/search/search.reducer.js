import { searchActionTypes } from "./search.types";

const INITIAL_STATE = {
	searchResults: [],
	fetching: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchActionTypes.FETCH_SEARCH_RESULTS_START:
			return {
				...state,
				fetching: true,
			};
		case searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
			return {
				...state,
				searchResults: [...action.payload.results],
				fetching: false,
			};
		default:
			return state;
	}
};
