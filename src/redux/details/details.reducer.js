import { detailsActionTypes } from "./details.types";

const INITIAL_STATE = {
	details: null,
	fetching: false,
};

export const detailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case detailsActionTypes.FETCH_DETAILS_START:
			return {
				...state,
				fetching: true,
			};
		case detailsActionTypes.FETCH_DETAILS_SUCCESS:
			return {
				...state,
				details: { ...action.payload },
				fetching: false,
			};
		default:
			return state;
	}
};
