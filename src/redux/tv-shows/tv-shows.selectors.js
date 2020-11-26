import { createSelector } from "reselect";

export const selectTvShowsReducer = (state) => state.tvShows;

export const selectTvShows = createSelector(
	[selectTvShowsReducer],
	(tvShows) => {
		return tvShows.tvShows;
	}
);
