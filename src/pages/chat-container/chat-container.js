import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
	StyledChatContainer,
	Chat,
	IndicatorContainer,
} from "./chat-container.styles";
import { StyledStaticIndicatorIcon } from "../../styles/styles.icons";

import { firestore } from "../../firebase/firebase.utils";
import {
	addUserToChats,
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
	const [requesting, setRequesting] = useState(false);
	const [loadingChatInfo, setLoadingChatInfo] = useState(false);

	const { id } = useParams();

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

	return (
		<StyledChatContainer>
			<Chat>
				<ChatHeader />
				<Messages messagesDocID={messagesDocID} />
				{loadingChatInfo ? (
					<IndicatorContainer>
						<StyledStaticIndicatorIcon />
					</IndicatorContainer>
				) : chatExists ? (
					<MessageField messagesDocID={messagesDocID} />
				) : (
					<ChatStatus
						requested={requested}
						requesting={requesting}
						requestClickHandler={handleRequestClick}
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
