import React, { useEffect } from "react";
import { connect } from "react-redux";

import ChatsGeneric from "../chats-generic/chats-generic";

const ChatRequests = ({ currentUser, chatRequests }) => {
	useEffect(() => {
		document.title = "Chat requests";
	});

	return (
		<ChatsGeneric
			displayList={chatRequests}
			title="chat requests"
			message="you have no chat requests"
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		chatRequests: state.chats.chatRequests,
	};
};

export default connect(mapStateToProps)(ChatRequests);
