import { createSelector } from "reselect";

export const selectTvShows = (state) => state.tvShows;

export const selectPopularTvShows = createSelector(
	[selectTvShows],
	(tvShows) => {
		return tvShows.popularTvShows;
	}
);
