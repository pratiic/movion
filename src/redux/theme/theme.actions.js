import { themeActionTypes } from "./theme.types";

export const toggleTheme = () => {
	return {
		type: themeActionTypes.TOGGLE_THEME,
	};
};

export const setTheme = (theme) => {
	return {
		type: themeActionTypes.SET_THEME,
		payload: theme,
	};
};
