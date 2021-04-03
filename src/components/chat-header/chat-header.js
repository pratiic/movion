import React from "react";
import { connect } from "react-redux";

import { StyledChatHeader, Username } from "./chat-header.styles";

import ProfilePicture from "../profile-picture/profile-picture";

const ChatHeader = ({ chatUser }) => {
	return (
		<StyledChatHeader>
			<ProfilePicture
				username={chatUser.username}
				photoURL={chatUser.photoURL}
				size="smaller"
			/>
			<Username> {chatUser.username} </Username>
		</StyledChatHeader>
	);
};

const mapStateToProps = (state) => {
	return {
		chatUser: state.chatUser.chatUser,
	};
};

export default connect(mapStateToProps)(ChatHeader);
