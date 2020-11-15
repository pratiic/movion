import { combineReducers } from "redux";

import { sidebarReducer } from "./sidebar/sidebar.reducer";
import { searchbarReducer } from "./searchbar/searchbar.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { moviesReducer } from "./movies/movies.reducer";
import { tvShowsReducer } from "./tv-shows/tv-shows.reducer";
import { searchReducer } from "./search/search.reducer";

export default combineReducers({
	sidebar: sidebarReducer,
	searchbar: searchbarReducer,
	theme: themeReducer,
	movies: moviesReducer,
	tvShows: tvShowsReducer,
	search: searchReducer,
});
