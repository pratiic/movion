import { detailsActionTypes } from "./details.types";

const INITIAL_STATE = {
	mainDetails: null,
	fetchingMainDetails: false,
	similar: [],
	fetchingSimilar: false,
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
			};
		case detailsActionTypes.FETCH_SIMILAR_SUCCESS:
			return {
				...state,
				similar: [...action.payload.results],
				fetchingSimilar: false,
			};
		default:
			return state;
	}
};
