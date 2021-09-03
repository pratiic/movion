import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Buttons, StyledChatRequest } from "./chat-request.styles";
import { StyledStaticIndicatorIcon } from "../../styles/styles.icons";

import { toggleNotification } from "../../redux/notification/notification.actions";
import { setChatUser } from "../../redux/chat-user/chat-user.actions";
import {
	resetModal,
	setHasOptions,
	setModal,
} from "../../redux/modal/modal.actions";

import {
	acceptChatRequest,
	deleteChatRequest,
} from "../../firebase/firebase.chats.utils";
import { setUserNotification } from "../../firebase/firebase.user-notifications.utils";

import User from "../user/user";
import GenericButton from "../generic-button/generic-button";

const ChatRequest = ({ user, requestID, currentUser }) => {
	const [accepted, setAccepted] = useState(false);
	const [accepting, setAccepting] = useState(false);
	const [rejecting, setRejecting] = useState(false);

	const dispatch = useDispatch();

	const history = useHistory();

	const handleAcceptButtonClick = async () => {
		if (rejecting) {
			return;
		}
		setAccepting(true);
		const result = await acceptChatRequest(user, currentUser, requestID);
		setAccepting(false);
		if (result.message) {
			setAccepted(true);
			dispatch(toggleNotification("chat request accepted"));
			dispatch(setChatUser(user));
			history.push(`/chat/${user.userID}`);
			passUserNotificationInfo("accept");
		}
	};

	const handleRejectButtonClick = () => {
		if (accepting) {
			return;
		}

		dispatch(
			setModal(
				"are you sure you want to reject the chat request ?",
				handleRequestRejection
			)
		);
	};

	const handleRequestRejection = async () => {
		setRejecting(true);
		dispatch(setHasOptions(false));

		const result = await deleteChatRequest(requestID, currentUser);

		setRejecting(false);
		dispatch(resetModal());

		if (result.message) {
			dispatch(toggleNotification("chat request rejected"));
			passUserNotificationInfo("reject");
		}
	};

	const passUserNotificationInfo = (action) => {
		setUserNotification({
			destUserID: user.userID,
			sourceUser: {
				userID: currentUser.id,
				username: currentUser.username,
				photoURL: currentUser.photoURL,
			},
			type: "chat-request",
			action,
		});
	};

	return (
		<StyledChatRequest>
			<User {...user} takeToChats={false} />
			<Buttons>
				<GenericButton handleButtonClick={handleAcceptButtonClick}>
					{accepting ? <StyledStaticIndicatorIcon /> : "accept"}
				</GenericButton>
				<GenericButton
					btnType="outlined"
					color="red"
					handleButtonClick={handleRejectButtonClick}
				>
					reject
				</GenericButton>
			</Buttons>
		</StyledChatRequest>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ChatRequest);
