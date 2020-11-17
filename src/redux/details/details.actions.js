import { detailsActionTypes } from "./details.types";

export const fetchMainDetailsStart = () => {
	return {
		type: detailsActionTypes.FETCH_MAIN_DETAILS_START,
	};
};

export const fetchMainDetailsSuccess = (details) => {
	return {
		type: detailsActionTypes.FETCH_MAIN_DETAILS_SUCCESS,
		payload: details,
	};
};

export const fetchMainDetailsFailure = () => {
	return {
		type: detailsActionTypes.FETCH_MAIN_DETAILS_FAILURE,
	};
};

export const fetchSimilarStart = () => {
	return {
		type: detailsActionTypes.FETCH_SIMILAR_START,
	};
};

export const fetchSimilarSuccess = (similarList) => {
	return {
		type: detailsActionTypes.FETCH_SIMILAR_SUCCESS,
		payload: similarList,
	};
};

export const fetchSimilarFailure = () => {
	return {
		type: detailsActionTypes.FETCH_SIMILAR_FAILURE,
	};
};

export const fetchCastAndCrewStart = () => {
	return {
		type: detailsActionTypes.FETCH_CAST_AND_CREW_START,
	};
};

export const fetchCastAndCrewSuccess = (castAndCrew) => {
	return {
		type: detailsActionTypes.FETCH_CAST_AND_CREW_SUCCESS,
		payload: { cast: castAndCrew.cast, crew: castAndCrew.crew },
	};
};

export const fetchCastAndCrewFailure = () => {
	return {
		type: detailsActionTypes.FETCH_CAST_AND_CREW_FAILURE,
	};
};
