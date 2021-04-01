import { reviewsActionTypes } from "./reviews.types";

const INITIAL_STATE = {
	editing: false,
	editedReviewID: "",
	editedReviewText: "",
};

export const reviewsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case reviewsActionTypes.SET_EDITING:
			return { ...state, editing: action.payload };
		case reviewsActionTypes.SET_EDITED_REVIEW_ID:
			return { ...state, editedReviewID: action.payload };
		case reviewsActionTypes.SET_EDITED_REVIEW_TEXT:
			return { ...state, editedReviewText: action.payload };
		default:
			return state;
	}
};
