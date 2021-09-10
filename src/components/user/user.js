import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { StyledUser, UserInfo, Username, UserEmail } from "./user.styles";
import { NumberTag } from "../chats-toggler/chats-toggler.styles";

import { setChatUser } from "../../redux/chat-user/chat-user.actions";

import ProfilePicture from "../profile-picture/profile-picture";

const User = ({
	userID,
	username,
	email,
	photoURL,
	createdAt,
	currentUser,
	setChatUser,
	takeToChats = true,
	userChats,
}) => {
	const history = useHistory();
	const location = useLocation();

	const handleUserClick = async () => {
		if (!takeToChats) {
			return;
		}

		setChatUser({ userID, username, email, photoURL, createdAt });

		history.push(`/chat/${userID}`);
	};

	const getChatMessages = () => {
		if (!location.pathname.includes("chats")) {
			return;
		}
		return userChats.find((chat) => chat.chatID === userID).newMessages;
	};

	return (
		<StyledUser onClick={handleUserClick}>
			<ProfilePicture
				username={username}
				photoURL={photoURL}
				size="bigger"
			/>
			<UserInfo>
				<Username>{username}</Username>
				<UserEmail>{email}</UserEmail>
				{getChatMessages() > 0 && (
					<NumberTag>{getChatMessages()}</NumberTag>
				)}
			</UserInfo>
		</StyledUser>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		userChats: state.chats.chats,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setChatUser: (chatUser) => {
			dispatch(setChatUser(chatUser));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
