import { themeActionTypes } from "./theme.types";

const INITIAL_STATE = {
	currentTheme: "dark",
};

export const themeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case themeActionTypes.TOGGLE_THEME:
			return {
				...state,
				currentTheme: state.currentTheme === "light" ? "dark" : "light",
			};
		case themeActionTypes.SET_THEME:
			return {
				...state,
				currentTheme: action.payload,
			};
		default:
			return state;
	}
};
