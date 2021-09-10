import { firestore } from "../../firebase/firebase.utils";

import { setChatsMessage, setChats } from "../../redux/chats/chats.actions";

export const fetchUserChats = (currentUser, dispatch) => {
	dispatch(setChatsMessage("loading your chats..."));

	const currentUserChatsCollectionRef = firestore
		.collection("chats")
		.doc(currentUser.id)
		.collection("chats");
	// .orderBy("updatedAt", "desc");

	currentUserChatsCollectionRef.onSnapshot((snapshot) => {
		if (snapshot.docs.length === 0) {
			dispatch(setChatsMessage("you have no chats"));
		}

		dispatch(
			setChats(
				snapshot.docs.map((doc) => {
					return { ...doc.data(), chatID: doc.id };
				})
			)
		);
	});
};
