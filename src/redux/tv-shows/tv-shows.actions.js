import { tvShowsActionTypes } from "./tv-shows.types";

export const fetchTvShowsStart = () => {
	return {
		type: tvShowsActionTypes.FETCH_TV_SHOWS_START,
	};
};

export const fetchTvShowsSuccess = (tvShows) => {
	return {
		type: tvShowsActionTypes.FETCH_TV_SHOWS_SUCCESS,
		payload: tvShows,
	};
};

export const fetchTvShowsFailure = (error) => {
	return {
		type: tvShowsActionTypes.FETCH_TV_SHOWS_FAILURE,
		payload: error,
	};
};

export const incrementCurrentTvShowsFetchPage = () => {
	return {
		type: tvShowsActionTypes.INCREMENT_CURRENT_TV_SHOWS_FETCH_PAGE,
	};
};

export const fetchMoreTvShowsStart = () => {
	return {
		type: tvShowsActionTypes.FETCH_MORE_TV_SHOWS_START,
	};
};

export const changeTvShowsFetchType = (newFetchType) => {
	return {
		type: tvShowsActionTypes.CHANGE_TV_SHOWS_FETCH_TYPE,
		payload: newFetchType,
	};
};
