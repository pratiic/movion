import { createSelector } from "reselect";

export const selectSearch = (state) => state.search;

export const selectSearchResults = createSelector([selectSearch], (search) => {
	return search.searchResults;
});
