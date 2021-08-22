import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { StyledChatContainer, Chat } from "./chat-container.styles";

import { firestore } from "../../firebase/firebase.utils";

import MessageField from "../../components/message-field/message-field";
import Messages from "../../components/messages/messages";
import ChatHeader from "../../components/chat-header/chat-header";

const ChatContainerPage = ({ currentUser }) => {
	const [messagesDocID, setMessagesDocID] = useState("");

	const { id } = useParams();

	// const messagesCollectionID;

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

	return (
		<StyledChatContainer>
			<Chat>
				<ChatHeader />
				<Messages messagesDocID={messagesDocID} />
				<MessageField messagesDocID={messagesDocID} />
			</Chat>
		</StyledChatContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ChatContainerPage);
