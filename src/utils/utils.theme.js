export const setCurrentTheme = (setTheme) => {
	const localStorage = window.localStorage;
	const localStorageCurrentTheme = localStorage.getItem("currentTheme");
	if (localStorageCurrentTheme) {
		setTheme(localStorageCurrentTheme);
	}
};
