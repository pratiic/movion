import { tvShowsActionTypes } from "./tv-shows.types";

import { validateForFreshness } from "../redux.utils";

const INITIAL_STATE = {
	popularTvShows: [],
	popularTvShowsTotalPages: null,
	popularTvShowsFetchPage: 1,
	popularTvShowsTotalResults: null,
	fetchingMorePopularTvShows: false,
};

export const tvShowsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case tvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_SUCCESS:
			return {
				...state,
				popularTvShows: validateForFreshness(
					state.popularTvShows,
					action.payload.results
				),
				fetchingMorePopularTvShows: false,
				popularTvShowsTotalPages: action.payload.total_pages,
			};
		case tvShowsActionTypes.INCREMENT_POPULAR_TV_SHOWS_FETCH_PAGE:
			return {
				...state,
				popularTvShowsFetchPage: state.popularTvShowsFetchPage + 1,
			};
		case tvShowsActionTypes.FETCH_MORE_POPULAR_TV_SHOWS_START:
			return {
				...state,
				fetchingMorePopularTvShows: true,
			};
		default:
			return state;
	}
};
