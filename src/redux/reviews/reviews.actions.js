import { reviewsActionTypes } from "./reviews.types";

export const setEditing = (editing) => {
	return {
		type: reviewsActionTypes.SET_EDITING,
		payload: editing,
	};
};

export const setEditedReviewID = (editedReviewID) => {
	return {
		type: reviewsActionTypes.SET_EDITED_REVIEW_ID,
		payload: editedReviewID,
	};
};

export const setEditedReviewText = (editedReviewText) => {
	return {
		type: reviewsActionTypes.SET_EDITED_REVIEW_TEXT,
		payload: editedReviewText,
	};
};
