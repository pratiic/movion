import { notificationActionTypes } from "./notification.types";

export const showNotification = (notificationMessage) => {
	return {
		type: notificationActionTypes.SHOW_NOTIFICATION,
		payload: notificationMessage,
	};
};

export const clearNotification = () => {
	return {
		type: notificationActionTypes.CLEAR_NOTIFICATION,
	};
};

export const toggleNotification = (notificationMessage, notificationType) => {
	return (dispatch) => {
		dispatch(showNotification({ notificationMessage, notificationType }));

		setTimeout(() => {
			dispatch(clearNotification());
		}, 2500);
	};
};
