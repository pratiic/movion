import { notificationActionTypes } from "./notification.types";

const INITIAL_STATE = {
	notificationMessage: "",
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case notificationActionTypes.SHOW_NOTIFICATION:
			return {
				...state,
				notificationMessage: action.payload,
			};
		case notificationActionTypes.CLEAR_NOTIFICATION:
			return {
				...state,
				notificationMessage: "",
			};
		default:
			return state;
	}
};
