export const setChats = (chats) => {
	return {
		type: "SET_CHATS",
		payload: chats,
	};
};

export const setChatRequests = (chatRequests) => {
	return {
		type: "SET_CHAT_REQUESTS",
		payload: chatRequests,
	};
};

export const setChatToTop = (chatID, chats) => {
	return (dispatch) => {
		const chat = chats.find((chat) => chat.chatID === chatID);
		const filteredChats = chats.filter((chat) => chat.chatID !== chatID);

		dispatch(setChats([chat, ...filteredChats]));
	};
};

export const setChatsMessage = (chatsMessage) => {
	return {
		type: "SET_CHATS_MESSAGE",
		payload: chatsMessage,
	};
};
