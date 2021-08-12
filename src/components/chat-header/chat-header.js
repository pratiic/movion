import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledChatHeader, HeaderControls } from "./chat-header.styles";
import { StyledArrowLeftIcon } from "../../styles/styles.icons";

import Logo from "../logo/logo";
import ProfilePreview from "../profile-preview/profile-preview";

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
			<ProfilePreview
				username={chatUser.username}
				photoURL={chatUser.photoURL}
				size="bigger"
			/>
		</StyledChatHeader>
	);
};

const mapStateToProps = (state) => {
	return {
		chatUser: state.chatUser.chatUser,
	};
};

export default connect(mapStateToProps)(ChatHeader);
