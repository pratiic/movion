import { notificationActionTypes } from "./notification.types";

export const showNotification = (notificationMessage, success) => {
	return {
		type: notificationActionTypes.SHOW_NOTIFICATION,
		payload: { notificationMessage, success },
	};
};

export const clearNotification = () => {
	return {
		type: notificationActionTypes.CLEAR_NOTIFICATION,
	};
};

export const toggleNotification = (notificationMessage, success = true) => {
	return (dispatch) => {
		dispatch(showNotification(notificationMessage, success));

		setTimeout(() => {
			dispatch(clearNotification());
		}, 2500);
	};
};
