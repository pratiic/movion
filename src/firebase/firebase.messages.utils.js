import { firestore } from "./firebase.utils";

export const deleteMessage = async (messageID, messagesDocID) => {
	try {
		await getMessageDocRef(messageID, messagesDocID).update({ text: "" });

		return { message: "deleted" };
	} catch (error) {
		return { error: error.message };
	}
};

export const editMessage = async (messageID, messagesDocID, message) => {
	try {
		await getMessageDocRef(messageID, messagesDocID).update({
			text: message,
			edited: true,
		});

		return { message: "edited" };
	} catch (error) {
		return { error: error.message };
	}
};

export const getMessageDocRef = (messageID, messagesDocID) => {
	return firestore
		.collection("chat-messages")
		.doc(messagesDocID)
		.collection("messages")
		.doc(messageID);
};
