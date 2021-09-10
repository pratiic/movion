import { moviesActionTypes } from "./movies.types";

import { validateForFreshness } from "../redux.utils";

const INITIAL_STATE = {
	movies: [],
	fetchingMovies: false,
	moviesTotalPages: null,
	currentMoviesFetchPage: 1,
	fetchingMoreMovies: false,
	moviesFetchType: "popular",
	moviesError: "",
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case moviesActionTypes.FETCH_MOVIES_START:
			return {
				...state,
				fetchingMovies: true,
				moviesError: "",
			};
		case moviesActionTypes.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies:
					state.currentMoviesFetchPage === 1
						? action.payload.results
						: validateForFreshness(
								state.movies,
								action.payload.results
						  ),
				fetchingMoreMovies: false,
				fetchingMovies: false,
				moviesTotalPages: action.payload.total_pages,
				moviesError: "",
			};
		case moviesActionTypes.FETCH_MOVIES_FAILURE:
			return {
				...state,
				moviesError: action.payload,
			};
		case moviesActionTypes.INCREMENT_CURRENT_MOVIES_FETCH_PAGE:
			return {
				...state,
				currentMoviesFetchPage: state.currentMoviesFetchPage + 1,
			};
		case moviesActionTypes.FETCH_MORE_MOVIES_START:
			return {
				...state,
				fetchingMoreMovies: true,
			};
		case moviesActionTypes.CHANGE_MOVIES_FETCH_TYPE:
			return {
				...state,
				moviesFetchType: action.payload,
				currentMoviesFetchPage: 1,
			};
		default:
			return state;
	}
};
