export const getUnacknowledgedChats = (chats) => {
	return chats.filter((chat) => !chat.acknowledged).length;
};

export const getNewMessages = (chats) => {
	let newMessages = 0;

	chats.forEach((chat) => {
		if (chat.newMessages) {
			newMessages += chat.newMessages;
		}
	});

	return newMessages;
};

export const getNewMessageChats = (chats) => {
	let newMessageChats = 0;

	chats.forEach((chat) => {
		if (chat.newMessages) {
			newMessageChats += 1;
		}
	});

	return newMessageChats;
};

export const getChatMessages = (chats, chatID) => {
	return chats.find((chat) => chat.chatID === chatID).newMessages;
};
