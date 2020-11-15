import { searchActionTypes } from "./search.types";

export const fetchSearchResultsStart = () => {
	return {
		type: searchActionTypes.FETCH_SEARCH_RESULTS_START,
	};
};

export const fetchSearchResultsSuccess = (searchResults) => {
	return {
		type: searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
		payload: searchResults,
	};
};

export const fetchSearchResultsFailure = () => {
	return {
		type: searchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
	};
};
