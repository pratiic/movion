import { createSelector } from "reselect";

export const selectDetails = (state) => state.details;

export const selectSimilar = createSelector([selectDetails], (details) => {
	return details.similar;
});
