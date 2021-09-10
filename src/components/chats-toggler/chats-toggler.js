import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
	NumberTag,
	StyledChatsToggler,
	ToggleOption,
} from "./chats-toggler.styles";

import { getNewMessageChats } from "../../utils/utils.chats";

const ChatsToggler = ({ chatRequests, userChats }) => {
	const [newMessageChats, setNewMessageChats] = useState(0);

	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		setNewMessageChats(getNewMessageChats(userChats));
	}, [userChats]);

	return (
		<StyledChatsToggler>
			<ToggleOption
				active={location.pathname.includes("chats")}
				onClick={() => history.push("/chats")}
			>
				chats
				{newMessageChats > 0 && (
					<NumberTag>{newMessageChats}</NumberTag>
				)}
			</ToggleOption>
			<ToggleOption
				active={location.pathname.includes("chat-requests")}
				onClick={() => history.push("/chat-requests")}
			>
				chat requests
				{chatRequests.length > 0 && (
					<NumberTag>{chatRequests.length}</NumberTag>
				)}
			</ToggleOption>
		</StyledChatsToggler>
	);
};

const mapStateToProps = (state) => {
	return {
		chatRequests: state.chats.chatRequests,
		userChats: state.chats.chats,
	};
};

export default connect(mapStateToProps)(ChatsToggler);
