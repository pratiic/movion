import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { firestore } from "../../firebase/firebase.utils";
import { clearNewMessages } from "../../firebase/firebase.chats.utils";

import { StyledMessages, DivAtBottom, Typing } from "./messages.styles";
import { StyledMessage } from "../../styles/styles.generic";

import Message from "../message/message";
import ProfilePicture from "../profile-picture/profile-picture";
import GenericButton from "../generic-button/generic-button";

const Messages = ({
	messagesDocID,
	currentUser,
	chatUser,
	loadingChatInfo,
	chatExists,
	setPushMessagesDown,
	pushMessagesDown,
}) => {
	const [messages, setMessages] = useState([]);
	const [totalMessages, setTotalMessages] = useState(0);
	const [top, setTop] = useState(0);
	const [fetchingMoreMessages, setFetchingMoreMessages] = useState(false);
	const [messagesMessage, setMessagesMessage] = useState(
		"loading chat messages..."
	);
	const [typing, setTyping] = useState(false);

	const bottomDivRef = useRef();
	const messagesToFetch = 25;

	useEffect(() => {
		if (messagesDocID) {
			fetchMessages(messagesToFetch);
		}
		//eslint-disable-next-line
	}, [messagesDocID]);

	useEffect(() => {
		if (top <= 0 && bottomDivRef.current) {
			bottomDivRef.current.scrollIntoView();
		}

		if (messages.length > 0) {
			clearNewMessages(currentUser, chatUser);
		}
		//eslint-disable-next-line
	}, [messages]);

	useEffect(() => {
		if (messagesDocID) {
			const typingCollectionRef = firestore
				.collection("chats")
				.doc(messagesDocID)
				.collection("typing");
			typingCollectionRef.onSnapshot((snapshot) => {
				const chatUserTyping = snapshot.docs.filter(
					(doc) => doc.id !== currentUser.id
				);
				// if (chatUserTyping.length > 0) {
				// 	setTyping(true);
				// } else {
				// 	setTyping(false);
				// }
			});
		}
		//eslint-disable-next-line
	}, [messagesDocID]);

	const fetchMessages = (totalMessagesToFetch) => {
		const messagesCollectionRef = firestore
			.collection("chat-messages")
			.doc(messagesDocID)
			.collection("messages");

		setFetchingMoreMessages(true);

		messagesCollectionRef
			.orderBy("createdAt", "desc")
			.limit(totalMessagesToFetch)
			.onSnapshot((snapshot) => {
				setMessages(reverseArray(snapshot.docs));

				if (snapshot.docs.length === 0) {
					return setMessagesMessage("no messages");
				}

				setPushMessagesDown(true);

				messagesCollectionRef.get().then((collectionRef) => {
					setTotalMessages(collectionRef.docs.length);
				});
				setFetchingMoreMessages(false);
			});
	};

	const reverseArray = (array) => {
		let reversedArray = [];

		for (let i = array.length - 1; i >= 0; i--) {
			reversedArray = [...reversedArray, array[i]];
		}

		return reversedArray;
	};

	const handleLoadMoreButtonClick = () => {
		fetchMessages(messages.length + messagesToFetch);
		setTop(top + 1);
	};

	const renderMessages = () => {
		return messages.map((message) => {
			const data = message.data();
			return <Message {...data} key={data.messageID} />;
		});
	};

	if (loadingChatInfo || !chatExists) {
		return <div></div>;
	}

	return (
		<StyledMessages pushMessagesDown={pushMessagesDown}>
			{messages.length > 0 ? (
				<React.Fragment>
					{messages.length < totalMessages && (
						<GenericButton
							displayType="load-more"
							handleButtonClick={handleLoadMoreButtonClick}
						>
							{fetchingMoreMessages ? "loading..." : "load more"}
						</GenericButton>
					)}
					{renderMessages()}
					{typing && (
						<Typing>
							<ProfilePicture
								username={chatUser.username}
								photoURL={chatUser.photoURL}
								size="smaller"
							/>
							<p>typing...</p>
						</Typing>
					)}
					<DivAtBottom ref={bottomDivRef}></DivAtBottom>
				</React.Fragment>
			) : (
				<StyledMessage>{messagesMessage}</StyledMessage>
			)}
		</StyledMessages>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		chatUser: state.chatUser.chatUser,
	};
};

export default connect(mapStateToProps)(Messages);
