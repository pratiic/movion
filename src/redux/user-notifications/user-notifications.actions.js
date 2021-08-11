export const setUserNotifications = (userNotifications) => {
	return {
		type: "SET_USER_NOTIFICATIONS",
		payload: userNotifications,
	};
};

export const setUserNotificationsMessage = (userNotificationsMessage) => {
	return {
		type: "SET_USER_NOTIFICATIONS_MESSAGE",
		payload: userNotificationsMessage,
	};
};

export const setUserNotificationSeen = (userNotificationID) => {
	return {
		type: "SET_USER_NOTIFICATION_SEEN",
		payload: userNotificationID,
	};
};
