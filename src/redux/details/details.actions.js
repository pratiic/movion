import { detailsActionTypes } from "./details.types";

export const fetchDetailsStart = () => {
	return {
		type: detailsActionTypes.FETCH_DETAILS_START,
	};
};

export const fetchDetailsSuccess = (details) => {
	return {
		type: detailsActionTypes.FETCH_DETAILS_SUCCESS,
		payload: details,
	};
};

export const fetchDetailsFailure = () => {
	return {
		type: detailsActionTypes.FETCH_DETAILS_FAILURE,
	};
};
