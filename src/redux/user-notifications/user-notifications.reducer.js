const INITIAL_STATE = {
	userNotifications: [],
	userNotificationsMessage: "",
	fetched: false,
};

export const userNotificationsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_USER_NOTIFICATIONS":
			return { ...state, userNotifications: action.payload };
		case "SET_USER_NOTIFICATIONS_MESSAGE":
			return { ...state, userNotificationsMessage: action.payload };
		case "SET_USER_NOTIFICAION_SEEN":
			return {
				...state,
				userNotifications: state.userNotifications.map(
					(userNotification) => {
						if (
							userNotification.notificationID === action.payload
						) {
							return { ...userNotification, seen: true };
						}
						return userNotification;
					}
				),
			};
		case "SET_FETCHED":
			return {
				...state,
				fetched: true,
			};
		default:
			return state;
	}
};
