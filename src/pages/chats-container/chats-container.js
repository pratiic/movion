import React, { useEffect } from "react";
import { connect } from "react-redux";

import ChatsGeneric from "../chats-generic/chats-generic";

const ChatsContainerPage = ({ currentUser, chats, chatsMessage }) => {
	useEffect(() => {
		document.title = "Chats";
	});

	return (
		<ChatsGeneric
			displayList={chats.map((chat) => chat.user)}
			title="your chats"
			message={chatsMessage}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		chats: state.chats.chats,
		chatsMessage: state.chats.chatsMessage,
	};
};

export default connect(mapStateToProps)(ChatsContainerPage);
