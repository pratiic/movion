import { firestore } from "./firebase.utils";

export const searchUser = async (searchValue, type = "user", currentUserID) => {
	const finalSearchValue = searchValue.trim();
	let colToSearchRef = "",
		firstQuery = "",
		secondQuery = "";

	if (type === "user") {
		colToSearchRef = firestore.collection("users");
		firstQuery = colToSearchRef.where("username", "==", finalSearchValue);
		secondQuery = colToSearchRef.where("email", "==", finalSearchValue);
	} else {
		const collectionOne = type === "chat" ? "chats" : "chat-requests";
		const collectionTwo = type === "chat" ? "chats" : "requests";

		colToSearchRef = firestore
			.collection(collectionOne)
			.doc(currentUserID)
			.collection(collectionTwo);

		firstQuery = colToSearchRef.where(
			"user.username",
			"==",
			finalSearchValue
		);
		secondQuery = colToSearchRef.where(
			"user.email",
			"==",
			finalSearchValue
		);
	}

	try {
		//fetching users based on username and email both
		const [usersOnUsername, usersOnEmail] = await Promise.all([
			firstQuery.get(),
			secondQuery.get(),
		]);

		return { users: [...usersOnUsername.docs, ...usersOnEmail.docs] };
	} catch (error) {
		return { error: error.message };
	}
};
