const INITIAL_STATE = {
	chats: [],
	chatRequests: [],
	chatsMessage: "",
};

export const chatsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CHATS":
			return { ...state, chats: action.payload };
		case "SET_CHAT_REQUESTS":
			return { ...state, chatRequests: action.payload };
		case "SET_CHATS_MESSAGE":
			return { ...state, chatsMessage: action.payload };
		default:
			return state;
	}
};
