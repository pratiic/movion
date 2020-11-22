import { createSelector } from "reselect";

export const selectFavorites = (state) => state.favorites;

export const selectFavoriteMovies = createSelector(
	[selectFavorites],
	(favorites) => {
		return favorites.favoriteMovies;
	}
);

export const selectFavoriteTvShows = createSelector(
	[selectFavorites],
	(favorites) => {
		return favorites.favoriteTvShows;
	}
);
