import { sidebarActionTypes } from "./sidebar.types";

export const toggleSidebar = () => {
	return {
		type: sidebarActionTypes.TOGGLE_SIDEBAR,
	};
};

export const closeSidebar = () => {
	return {
		type: sidebarActionTypes.CLOSE_SIDEBAR,
	};
};
