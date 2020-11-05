import { searchModeActionTypes } from "./search-mode.types";

const INITIAL_STATE = {
	searchMode: "movies",
};

export const searchModeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchModeActionTypes.TOGGLE_SEARCH_MODE:
			return {
				...state,
				searchMode: action.payload,
			};
		default: {
			return state;
		}
	}
};
