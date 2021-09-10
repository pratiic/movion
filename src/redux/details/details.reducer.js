import { detailsActionTypes } from "./details.types";

import { filterRedundant, filterRecurring } from "./details.utils";

const INITIAL_STATE = {
	mainDetails: null,
	fetchingMainDetails: false,
	mainDetailsError: "",
	similar: [],
	fetchingSimilar: false,
	fetchingMoreSimilar: false,
	currentSimilarFetchPage: 1,
	totalSimilarPages: null,
	similarError: "",
	cast: [],
	crew: [],
	fetchingCastAndCrew: false,
	castAndCrewError: "",
};

export const detailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case detailsActionTypes.FETCH_MAIN_DETAILS_START:
			return {
				...state,
				fetchingMainDetails: true,
				mainDetailsError: "",
			};
		case detailsActionTypes.FETCH_MAIN_DETAILS_SUCCESS:
			return {
				...state,
				mainDetails: { ...action.payload },
				fetchingMainDetails: false,
				mainDetailsError: "",
			};
		case detailsActionTypes.FETCH_MAIN_DETAILS_FAILURE:
			return {
				...state,
				mainDetailsError: action.payload,
			};
		case detailsActionTypes.FETCH_SIMILAR_START:
			return {
				...state,
				fetchingSimilar: true,
				similarError: "",
			};
		case detailsActionTypes.FETCH_SIMILAR_SUCCESS:
			return {
				...state,
				similar:
					state.currentSimilarFetchPage > 1
						? filterRecurring(state.similar, action.payload.results)
						: [...action.payload.results],
				totalSimilarPages: action.payload.total_pages,
				fetchingSimilar: false,
				fetchingMoreSimilar: false,
				similarError: "",
			};
		case detailsActionTypes.FETCH_SIMILAR_FAILURE:
			return {
				...state,
				similarError: action.payload,
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
				castAndCrewError: "",
			};
		case detailsActionTypes.FETCH_CAST_AND_CREW_SUCCESS:
			return {
				...state,
				cast: filterRedundant(action.payload.cast),
				crew: filterRedundant(action.payload.crew),
				fetchingCastAndCrew: false,
				castAndCrewError: "",
			};
		case detailsActionTypes.FETCH_CAST_AND_CREW_FAILURE:
			return { ...state, castAndCrewError: action.payload };
		default:
			return state;
	}
};
