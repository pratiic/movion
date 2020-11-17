import { createSelector } from "reselect";

export const selectDetails = (state) => state.details;

export const selectSimilar = createSelector([selectDetails], (details) => {
	return details.similar;
});

export const selectCast = createSelector([selectDetails], (details) => {
	return details.cast;
});

export const selectCrew = createSelector([selectDetails], (details) => {
	return details.crew;
});
