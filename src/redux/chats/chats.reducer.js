const INITIAL_STATE = {
	chats: [],
	chatRequests: [],
};

export const chatsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CHATS":
			return { ...state, chats: action.payload };
		case "SET_CHAT_REQUESTS":
			return { ...state, chatRequests: action.payload };
		default:
			return state;
	}
};
