import { favoritesActionTypes } from "./favorites.types";

export const fetchFavoritesSuccess = (favorites) => {
	return {
		type: favoritesActionTypes.FETCH_FAVORITES_SUCCESS,
		payload: favorites,
	};
};
