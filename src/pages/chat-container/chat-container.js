import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
	StyledChatContainer,
	Chat,
	IndicatorContainer,
	DownPusher,
} from "./chat-container.styles";
import { StyledStaticIndicatorIcon } from "../../styles/styles.icons";

import { firestore } from "../../firebase/firebase.utils";
import {
	acceptChatRequest,
	addUserToChats,
	deleteChatRequest,
	getChatInfo,
	sendChatRequest,
} from "../../firebase/firebase.chats.utils";

import MessageField from "../../components/message-field/message-field";
import Messages from "../../components/messages/messages";
import ChatHeader from "../../components/chat-header/chat-header";
import ChatStatus from "../../components/chat-status/chat-status";

const ChatContainerPage = ({ currentUser, chatUser }) => {
	const [messagesDocID, setMessagesDocID] = useState("");
	const [chatExists, setChatExists] = useState(false);
	const [requested, setRequested] = useState(false);
	const [beenRequested, setBeenRequested] = useState(false);
	const [requesting, setRequesting] = useState(false);
	const [loadingChatInfo, setLoadingChatInfo] = useState(false);
	const [accepting, setAccepting] = useState(false);
	const [rejecting, setRejecting] = useState(false);

	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		firestore
			.collection("chat-messages")
			.doc(`${id}${currentUser.id}`)
			.collection("messages")
			.get()
			.then((collectionRef) => {
				if (collectionRef.empty) {
					setMessagesDocID(`${currentUser.id}${id}`);
				} else {
					setMessagesDocID(`${id}${currentUser.id}`);
				}
			});
	}, []);

	useEffect(() => {
		fetchChatInfo();
	}, []);

	const fetchChatInfo = async () => {
		setLoadingChatInfo(true);

		const chatInfo = await getChatInfo(id, currentUser);

		setLoadingChatInfo(false);

		if (chatInfo === "exists") {
			return setChatExists(true);
		}

		if (chatInfo === "requested") {
			return setRequested(true);
		}

		if (chatInfo === "been requested") {
			return setBeenRequested(true);
		}
	};

	const handleRequestClick = async () => {
		setRequesting(true);

		const [requestResult, chatResult] = await Promise.all([
			sendChatRequest(id, currentUser),
			addUserToChats(chatUser, currentUser),
		]);

		setRequesting(false);

		if (requestResult.message) {
			setRequested(true);
		}
	};

	const handleAcceptClick = async () => {
		setAccepting(true);

		const result = await acceptChatRequest(
			chatUser,
			currentUser,
			chatUser.userID
		);

		setAccepting(false);

		if (result.message) {
			setChatExists(true);
		}
	};

	const handleRejectClick = async () => {
		setRejecting(true);

		const result = await deleteChatRequest(chatUser.userID, currentUser);

		setRejecting(false);

		if (result.message) {
			history.push("/chats");
		}
	};

	return (
		<StyledChatContainer>
			<Chat>
				<ChatHeader />
				<DownPusher />
				<Messages
					messagesDocID={messagesDocID}
					loadingChatInfo={loadingChatInfo}
					chatExists={chatExists}
				/>
				{loadingChatInfo ? (
					<IndicatorContainer>
						<StyledStaticIndicatorIcon />
					</IndicatorContainer>
				) : chatExists ? (
					<MessageField messagesDocID={messagesDocID} />
				) : (
					<ChatStatus
						requested={requested}
						beenRequested={beenRequested}
						requesting={requesting}
						requestClickHandler={handleRequestClick}
						acceptHandler={handleAcceptClick}
						rejectHandler={handleRejectClick}
						accepting={accepting}
						rejecting={rejecting}
					/>
				)}
			</Chat>
		</StyledChatContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		chatUser: state.chatUser.chatUser,
	};
};

export default connect(mapStateToProps)(ChatContainerPage);
