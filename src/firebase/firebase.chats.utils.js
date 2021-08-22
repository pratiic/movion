import firebase from "firebase/app";
import { firestore } from "./firebase.utils";

export const addUserToChats = async (
	chatUser,
	currentUser,
	acknowledged = true
) => {
	const { userID, username, email, photoURL } = chatUser;

	const chatsCollectionRef = firestore
		.collection("chats")
		.doc(currentUser.id)
		.collection("chats");

	const chatDocRef = await chatsCollectionRef.doc(chatUser.userID).get();

	if (!chatDocRef.exists) {
		chatsCollectionRef.doc(chatUser.userID).set({
			user: { userID, username, email, photoURL },
			updatedAt: Date.now(),
			acknowledged,
		});
	}
};

export const sendChatRequest = async (userID, currentUser) => {
	const { id, username, email, photoURL } = currentUser;

	const chatRequestsCollectionRef = firestore
		.collection("chat-requests")
		.doc(userID)
		.collection("requests");

	const chatsCollectionRef = firestore
		.collection("chats")
		.doc(currentUser.id)
		.collection("chats");

	const [requestRef, chatRef] = await Promise.all([
		chatRequestsCollectionRef.doc(id).get(),
		chatsCollectionRef.doc(userID).get(),
	]);

	if (requestRef.exists || chatRef.exists) {
		return;
	}

	chatRequestsCollectionRef.doc(id).set({
		user: { userID: id, username, email, photoURL },
		createdAt: Date.now(),
		acknowledged: false,
	});
};

export const acceptChatRequest = async (chatUser, currentUser, requestID) => {
	try {
		await Promise.all([
			addUserToChats(chatUser, currentUser),
			deleteChatRequest(requestID, currentUser),
		]);

		return {
			message: "accepted",
		};
	} catch (error) {
		return { error: error.message };
	}
};

export const deleteChatRequest = async (requestID, currentUser) => {
	try {
		firestore
			.collection("chat-requests")
			.doc(currentUser.id)
			.collection("requests")
			.doc(requestID)
			.delete();

		return { message: "rejected" };
	} catch (error) {
		return { error: error.message };
	}
};

export const sendChatMessage = async (
	message,
	messagesDocID,
	currentUser,
	chatUser
) => {
	const currentTime = Date.now();

	const chatUserChatRef = firestore
		.collection("chats")
		.doc(chatUser.userID)
		.collection("chats")
		.doc(currentUser.id);

	const currentUserChatRef = firestore
		.collection("chats")
		.doc(currentUser.id)
		.collection("chats")
		.doc(currentUser.id);

	try {
		await Promise.all([
			firestore
				.collection("chat-messages")
				.doc(messagesDocID)
				.collection("messages")
				.doc(`${currentUser.id}${currentTime}`)
				.set({
					text: message,
					createdBy: currentUser,
					createdAt: currentTime,
					mid: `${currentUser.id}${currentTime}`,
					messagesDocID: messagesDocID,
					removedForEveryone: false,
				}),
			chatUserChatRef.update({
				newMessages: firebase.firestore.FieldValue.increment(1),
				updatedAt: currentTime,
			}),
		]);
	} catch (error) {
		return { error: error.message };
	}
};

export const setMessagesAsSeen = async (messages, currentUser, chatUser) => {
	const batch = firestore.batch();

	const chatRef = firestore
		.collection("chats")
		.doc(currentUser.id)
		.collection("chats")
		.doc(chatUser.userID);

	messages.forEach((message) => {
		const data = message.data();
		if (data.createdBy.id !== currentUser.id) {
			batch.update(message.ref, { seen: true });
		}
	});

	await Promise.all([batch.commit(), chatRef.update({ newMessages: 0 })]);
};
