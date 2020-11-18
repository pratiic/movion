import { detailsActionTypes } from "./details.types";

import { filterRedundant } from "./details.utils";

const INITIAL_STATE = {
	mainDetails: null,
	fetchingMainDetails: false,
	similar: [],
	fetchingSimilar: false,
	fetchingMoreSimilar: false,
	currentSimilarFetchPage: 1,
	totalSimilarPages: null,
	cast: [],
	crew: [],
	fetchingCastAndCrew: false,
};

export const detailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case detailsActionTypes.FETCH_MAIN_DETAILS_START:
			return {
				...state,
				fetchingMainDetails: true,
			};
		case detailsActionTypes.FETCH_MAIN_DETAILS_SUCCESS:
			return {
				...state,
				mainDetails: { ...action.payload },
				fetchingMainDetails: false,
			};
		case detailsActionTypes.FETCH_SIMILAR_START:
			return {
				...state,
				fetchingSimilar: true,
				fetchingMoreSimilar: false,
			};
		case detailsActionTypes.FETCH_SIMILAR_SUCCESS:
			return {
				...state,
				similar:
					state.currentSimilarFetchPage > 1
						? [...state.similar, ...action.payload.results]
						: [...action.payload.results],
				totalSimilarPages: action.payload.total_pages,
				fetchingSimilar: false,
			};
		case detailsActionTypes.FETCH_MORE_SIMILAR_START:
			return {
				...state,
				fetchingMoreSimilar: true,
			};
		case detailsActionTypes.INCREMENT_SIMILAR_FETCH_PAGE:
			return {
				...state,
				currentSimilarFetchPage: state.currentSimilarFetchPage + 1,
			};
		case detailsActionTypes.RESET_SIMILAR_FETCH_PAGE:
			return {
				...state,
				currentSimilarFetchPage: 1,
			};
		case detailsActionTypes.FETCH_CAST_AND_CREW_START:
			return {
				...state,
				fetchingCastAndCrew: true,
			};
		case detailsActionTypes.FETCH_CAST_AND_CREW_SUCCESS:
			return {
				...state,
				cast: filterRedundant(action.payload.cast),
				crew: filterRedundant(action.payload.crew),
				fetchingCastAndCrew: false,
			};
		default:
			return state;
	}
};
