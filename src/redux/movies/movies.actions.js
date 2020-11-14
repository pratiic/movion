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
