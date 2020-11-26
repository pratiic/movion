import { moviesActionTypes } from "./movies.types";

// export const fetchPopularMoviesSuccess = (popularMovies) => {
// 	return {
// 		type: moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
// 		payload: popularMovies,
// 	};
// };

// export const fetchPopularMoviesFailure = (error) => {
// 	return {
// 		type: moviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
// 		payload: error,
// 	};
// };

// export const incrementPopularMoviesFetchPage = () => {
// 	return {
// 		type: moviesActionTypes.INCREMENT_POPULAR_MOVIES_FETCH_PAGE,
// 	};
// };

// export const fetchMorePopularMoviesStart = () => {
// 	return {
// 		type: moviesActionTypes.FETCH_MORE_POPULAR_MOVIES_START,
// 	};
// };

export const fetchMoviesStart = () => {
	return {
		type: moviesActionTypes.FETCH_MOVIES_START,
	};
};

export const fetchMoviesSuccess = (movies) => {
	return {
		type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
		payload: movies,
	};
};

export const fetchMoviesFailure = (error) => {
	return {
		type: moviesActionTypes.FETCH_MOVIES_FAILURE,
		payload: error,
	};
};

export const incrementCurrentMoviesFetchPage = () => {
	return {
		type: moviesActionTypes.INCREMENT_CURRENT_MOVIES_FETCH_PAGE,
	};
};

export const fetchMoreMoviesStart = () => {
	return {
		type: moviesActionTypes.FETCH_MORE_MOVIES_START,
	};
};

export const changeMoviesFetchType = (newMoviesFetchType) => {
	return {
		type: moviesActionTypes.CHANGE_MOVIES_FETCH_TYPE,
		payload: newMoviesFetchType,
	};
};
