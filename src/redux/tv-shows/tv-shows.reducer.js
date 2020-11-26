import { tvShowsActionTypes } from "./tv-shows.types";

import { validateForFreshness } from "../redux.utils";

const INITIAL_STATE = {
	// popularTvShows: [],
	// popularTvShowsTotalPages: null,
	// popularTvShowsFetchPage: 1,
	// fetchingMorePopularTvShows: false,

	tvShows: [],
	fetchingTvShows: false,
	tvShowsTotalPages: null,
	currentTvShowsFetchPage: 1,
	fetchingMoreTvShows: false,
	tvShowsFetchType: "popular",
};

export const tvShowsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case tvShowsActionTypes.FETCH_TV_SHOWS_START:
			return {
				...state,
				fetchingTvShows: true,
			};
		case tvShowsActionTypes.FETCH_TV_SHOWS_SUCCESS:
			return {
				...state,
				tvShows:
					state.currentTvShowsFetchPage === 1
						? action.payload.results
						: validateForFreshness(
								state.tvShows,
								action.payload.results
						  ),
				fetchingMoreTvShows: false,
				fetchingTvShows: false,
				tvShowsTotalPages: action.payload.total_pages,
			};
		case tvShowsActionTypes.INCREMENT_CURRENT_TV_SHOWS_FETCH_PAGE:
			return {
				...state,
				currentTvShowsFetchPage: state.currentTvShowsFetchPage + 1,
			};
		case tvShowsActionTypes.FETCH_MORE_TV_SHOWS_START:
			return {
				...state,
				fetchingMoreTvShows: true,
			};
		case tvShowsActionTypes.CHANGE_TV_SHOWS_FETCH_TYPE:
			return {
				...state,
				tvShowsFetchType: action.payload,
				currentTvShowsFetchPage: 1,
			};
		default:
			return state;
	}
};
