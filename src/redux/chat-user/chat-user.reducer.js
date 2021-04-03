import { chatUserActionTypes } from "./chat-user.types";

const INITIAL_STATE = {
	chatUser: {},
};

export const chatUserReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case chatUserActionTypes.SET_CHAT_USER:
			return { ...state, chatUser: action.payload };
		default:
			return state;
	}
};
