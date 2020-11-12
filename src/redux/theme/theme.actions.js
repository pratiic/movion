import { themeActionTypes } from "./theme.types";

export const toggleTheme = () => {
	return {
		type: themeActionTypes.TOGGLE_THEME,
	};
};
