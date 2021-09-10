import { firestore } from "../../firebase/firebase.utils";

import { setChatRequests } from "../../redux/chats/chats.actions";

export const fetchChatRequests = (currentUser, dispatch) => {
	firestore
		.collection("chat-requests")
		.doc(currentUser.id)
		.collection("requests")
		.onSnapshot((snapshot) => {
			// if (snapshot.docs.length === 0) {
			// 	return setChatRequestsMessage("you have no chat requests");
			// }

			dispatch(
				setChatRequests(
					snapshot.docs.map((doc) => {
						return { ...doc.data(), requestID: doc.id };
					})
				)
			);
		});
};
