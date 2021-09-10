import { firestore } from "../../firebase/firebase.utils";

import {
	setUserNotificationsMessage,
	setUserNotifications,
	setFetched,
} from "../../redux/user-notifications/user-notifications.actions";

export const fetchUserNotifications = (currentUser, dispatch) => {
	const userNotificationsCollection = firestore
		.collection("user-notifications")
		.doc(currentUser.id)
		.collection("notifications");

	dispatch(setUserNotificationsMessage("loading your notifications..."));

	userNotificationsCollection
		.orderBy("createdAt", "desc")
		.onSnapshot((snapshot) => {
			dispatch(setFetched(true));

			const notifications = snapshot.docs.map((doc) => {
				return { ...doc.data(), notificationID: doc.id };
			});

			dispatch(setUserNotifications(notifications));

			if (snapshot.docs.length === 0) {
				dispatch(
					setUserNotificationsMessage("you have no notifications")
				);
			}
		});
};
