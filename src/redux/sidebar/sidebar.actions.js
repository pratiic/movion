import { sidebarActionTypes } from "./sidebar.types";

export const toggleSidebar = () => {
	return {
		type: sidebarActionTypes.TOGGLE_SIDEBAR,
	};
};
