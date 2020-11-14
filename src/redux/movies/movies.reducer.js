import { moviesActionTypes } from "./movies.types";

const INITIAL_STATE = {
	popularMovies: [],
	popularMoviesTotalPages: null,
	popularMoviesFetchPage: 1,
	popularMoviesTotalResults: null,
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				popularMovies: [
					...state.popularMovies,
					...action.payload.results,
				],
				popularMoviesTotalPages: action.payload.total_pages,
				popularMoviesTotalResults: action.payload.total_results,
			};
		case moviesActionTypes.INCREMENT_FETCH_PAGE:
			return {
				...state,
				popularMoviesFetchPage: state.popularMoviesFetchPage + 1,
			};
		default:
			return state;
	}
};
