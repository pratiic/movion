import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectPopularMovies = createSelector([selectMovies], (movies) => {
	return movies.popularMovies;
});
