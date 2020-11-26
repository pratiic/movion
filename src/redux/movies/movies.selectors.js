import { createSelector } from "reselect";

const selectMoviesReducer = (state) => state.movies;

export const selectMovies = createSelector([selectMoviesReducer], (movies) => {
	return movies.movies;
});
