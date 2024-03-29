import { separateIntoTwo } from "./favorites.utils";

const INITIAL_STATE = {
	favoriteMovies: [],
	favoriteTvShows: [],
};

export const favoritesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_FAVORITES":
			return {
				...state,
				favoriteMovies: separateIntoTwo(action.payload, "movie"),
				favoriteTvShows: separateIntoTwo(action.payload, "tv"),
			};
		default:
			return state;
	}
};
