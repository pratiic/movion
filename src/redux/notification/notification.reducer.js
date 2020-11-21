import { notificationActionTypes } from "./notification.types";

const INITIAL_STATE = {
	notificationMessage: "",
	notificationType: "",
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case notificationActionTypes.SHOW_NOTIFICATION:
			return {
				...state,
				notificationMessage: action.payload.notificationMessage,
				notificationType: action.payload.notificationType,
			};
		case notificationActionTypes.CLEAR_NOTIFICATION:
			return {
				...state,
				notificationMessage: "",
				notificationType: "",
			};
		default:
			return state;
	}
};
