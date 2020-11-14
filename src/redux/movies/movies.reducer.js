import { moviesActionTypes } from "./movies.types";

import { validateForFreshness } from "../redux.utils";

const INITIAL_STATE = {
	popularMovies: [],
	popularMoviesTotalPages: null,
	popularMoviesFetchPage: 1,
	popularMoviesTotalResults: null,
	fetchingMorePopularMovies: false,
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				popularMovies: validateForFreshness(
					state.popularMovies,
					action.payload.results
				),
				fetchingMorePopularMovies: false,
			};
		case moviesActionTypes.INCREMENT_POPULAR_MOVIES_FETCH_PAGE:
			return {
				...state,
				popularMoviesFetchPage: state.popularMoviesFetchPage + 1,
			};
		case moviesActionTypes.FETCH_MORE_POPULAR_MOVIES_START:
			return {
				...state,
				fetchingMorePopularMovies: true,
			};
		default:
			return state;
	}
};
