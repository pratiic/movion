import { firestore } from "./firebase.utils";

export const replyToReview = async (reply, reviewRef) => {
	try {
		await reviewRef.collection("replies").add(reply);

		return { message: "reply added" };
	} catch (error) {
		return { error: error.message };
	}
};

export const likeReply = async (replyRef, userID) => {
	try {
		await Promise.all([
			replyRef.collection("liked-by").doc(userID).set({}),
			replyRef.collection("disliked-by").doc(userID).delete(),
		]);

		return { message: "liked" };
	} catch (error) {}
};

export const dislikeReply = async (replyRef, userID) => {
	try {
		await Promise.all([
			replyRef.collection("disliked-by").doc(userID).set({}),
			replyRef.collection("liked-by").doc(userID).delete(),
		]);

		return { message: "disliked" };
	} catch (error) {}
};

export const deleteReply = async (replyRef) => {
	try {
		await replyRef.delete();

		return { message: "deleted" };
	} catch (error) {
		return { error: error.message };
	}
};
