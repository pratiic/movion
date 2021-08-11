import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledChatHeader,
	Username,
	HeaderControls,
	UserProfilePreview,
} from "./chat-header.styles";
import { StyledArrowLeftIcon } from "../../styles/styles.icons";

import ProfilePicture from "../profile-picture/profile-picture";
import Logo from "../logo/logo";

const ChatHeader = ({ chatUser }) => {
	const history = useHistory();

	const handleArrowLeftClick = () => {
		history.push("/chats");
	};

	return (
		<StyledChatHeader>
			<HeaderControls>
				<StyledArrowLeftIcon
					$showBackground
					$medium
					onClick={handleArrowLeftClick}
				/>
				<Logo size="smaller" />
			</HeaderControls>
			<UserProfilePreview>
				<ProfilePicture
					username={chatUser.username}
					photoURL={chatUser.photoURL}
				/>
				<Username> {chatUser.username} </Username>
			</UserProfilePreview>
		</StyledChatHeader>
	);
};

const mapStateToProps = (state) => {
	return {
		chatUser: state.chatUser.chatUser,
	};
};

export default connect(mapStateToProps)(ChatHeader);
