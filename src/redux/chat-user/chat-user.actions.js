import { chatUserActionTypes } from "./chat-user.types";

export const setChatUser = (chatUser) => {
	return {
		type: chatUserActionTypes.SET_CHAT_USER,
		payload: chatUser,
	};
};
