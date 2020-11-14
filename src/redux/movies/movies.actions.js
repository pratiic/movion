import { moviesActionTypes } from "./movies.types";

export const fetchPopularMoviesSuccess = (popularMovies) => {
	return {
		type: moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
		payload: popularMovies,
	};
};

export const fetchPopularMoviesFailure = (error) => {
	return {
		type: moviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
		payload: error,
	};
};

export const incrementPopularMoviesFetchPage = () => {
	return {
		type: moviesActionTypes.INCREMENT_POPULAR_MOVIES_FETCH_PAGE,
	};
};

export const fetchMorePopularMoviesStart = () => {
	return {
		type: moviesActionTypes.FETCH_MORE_POPULAR_MOVIES_START,
	};
};
