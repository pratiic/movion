import { firestore } from "./firebase.utils";

export const setUserNotification = (notificationInfo) => {
	const colRef = getNotificationsCollectionRef(notificationInfo.destUserID);

	try {
		colRef.add({
			...notificationInfo,
			createdAt: Date.now(),
			seen: false,
		});
	} catch (error) {}
};

export const getUserNotifications = async (userID) => {
	try {
		const colRef = getNotificationsCollectionRef(userID);

		const notifications = await colRef.get();

		return {
			notifications: notifications.docs.map((doc) => {
				return { ...doc.data(), notificationID: doc.id };
			}),
		};
	} catch (error) {
		return { error: error.message };
	}
};

export const setUserNotificationSeen = async (notificationID, userID) => {
	try {
		const colRef = getNotificationsCollectionRef(userID);

		colRef.doc(notificationID).update({ seen: true });
	} catch (error) {
		console.log(error);
	}
};

export const deleteUserNotification = async (notificationID, userID) => {
	try {
		const colRef = getNotificationsCollectionRef(userID);

		await colRef.doc(notificationID).delete();

		return { message: "deleted" };
	} catch (error) {
		return { error: error.message };
	}
};

export const getNotificationsCollectionRef = (userID) => {
	return firestore
		.collection("user-notifications")
		.doc(userID)
		.collection("notifications");
};
