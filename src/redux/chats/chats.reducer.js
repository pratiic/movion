const INITIAL_STATE = {
	chats: [],
	chatRequests: [],
	chatsMessage: "",
	messageEditInfo: {
		messageEditMode: false,
		messageID: "",
		messagesDocID: "",
		messageText: "",
	},
};

export const chatsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CHATS":
			return { ...state, chats: action.payload };
		case "SET_CHAT_REQUESTS":
			return { ...state, chatRequests: action.payload };
		case "SET_CHATS_MESSAGE":
			return { ...state, chatsMessage: action.payload };
		case "SET_MESSAGE_EDIT_INFO":
			return { ...state, messageEditInfo: { ...action.payload } };
		default:
			return state;
	}
};
