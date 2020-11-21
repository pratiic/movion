import { sidebarActionTypes } from "./sidebar.types";

const INITIAL_STATE = {
	showSidebar: false,
};

export const sidebarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case sidebarActionTypes.TOGGLE_SIDEBAR:
			return {
				...state,
				showSidebar: !state.showSidebar,
			};
		case sidebarActionTypes.CLOSE_SIDEBAR:
			return {
				...state,
				showSidebar: false,
			};
		default:
			return state;
	}
};
