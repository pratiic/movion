import { favoritesActionTypes } from "./favorites.types";

import { separateIntoTwo } from "./favorites.utils";

export const fetchFavoritesSuccess = (favorites) => {
	return {
		type: favoritesActionTypes.FETCH_FAVORITES_SUCCESS,
		payload: favorites,
	};
};

export const setFavoriteMovies = (list) => {
	return {
		type: "SET_FAVORITE_MOVIES",
		payload: separateIntoTwo(list, "movie"),
	};
};

export const setFavoriteTvShows = (list) => {
	return {
		type: "SET_FAVORITE_TV_SHOWS",
		payload: separateIntoTwo(list, "tv"),
	};
};

export const setFavorites = (list) => {
	return {
		type: "SET_FAVORITES",
		payload: list,
	};
};
