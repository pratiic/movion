export const setFetched = () => {
	return {
		type: "SET_FETCHED",
	};
};

export const setUserNotifications = (userNotifications, firstFetch) => {
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
