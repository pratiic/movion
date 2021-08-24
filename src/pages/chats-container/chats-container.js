import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ChatsGeneric from "../chats-generic/chats-generic";

const ChatsContainerPage = ({ currentUser, chats, chatsMessage }) => {
	const [searchValue, setSearchValue] = useState("");
	const [chatsToRender, setChatsToRender] = useState([]);

	useEffect(() => {
		document.title = "Chats";
	});

	// useEffect(() => {
	// 	setChatsToRender(
	// 		chats.filter((chat) => {
	// 			const data = chat.data();
	// 			return (
	// 				data.username.toLowerCase().includes(searchValue) ||
	// 				data.email.toLowerCase().includes(searchValue)
	// 			);
	// 		})
	// 	);
	// }, [searchValue, chats]);

	// const handleInputChange = (searchValue) => {
	// 	setSearchValue(searchValue);
	// };

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
