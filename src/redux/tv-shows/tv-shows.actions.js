import { tvShowsActionTypes } from "./tv-shows.types";

export const fetchPopularTvShowsSuccess = (popularTvShows) => {
	return {
		type: tvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_SUCCESS,
		payload: popularTvShows,
	};
};

export const fetchPopularTvShowsFailure = (error) => {
	return {
		type: tvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_FAILURE,
		payload: error,
	};
};

export const incrementPopularTvShowsFetchPage = () => {
	return {
		type: tvShowsActionTypes.INCREMENT_POPULAR_TV_SHOWS_FETCH_PAGE,
	};
};

export const fetchMorePopularTvShowsStart = () => {
	return {
		type: tvShowsActionTypes.FETCH_MORE_POPULAR_TV_SHOWS_START,
	};
};
