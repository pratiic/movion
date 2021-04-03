import React, { useState, useEffect, useRef } from "react";

import { firestore } from "../../firebase/firebase.utils";

import { StyledMessages, DivAtBottom, LoadMore } from "./messages.styles";
import { StyledMessage } from "../../styles/styles.generic";

import Message from "../message/message";

const Messages = ({ messagesDocID }) => {
	const [messages, setMessages] = useState([]);
	const [totalMessages, setTotalMessages] = useState(0);
	const [top, setTop] = useState(0);
	const [fetchingMoreMessages, setFetchingMoreMessages] = useState(false);
	const [messagesMessage, setMessagesMessage] = useState(
		"loading the messages..."
	);

	const bottomDivRef = useRef();
	const messagesToFetch = 25;

	useEffect(() => {
		if (messagesDocID) {
			fetchMessages(messagesToFetch);
		}
	}, [messagesDocID]);

	useEffect(() => {
		console.log(top);

		if (top <= 0 && bottomDivRef.current) {
			bottomDivRef.current.scrollIntoView();
		}
	}, [messages]);

	const fetchMessages = (totalMessagesToFetch) => {
		const messagesCollectionRef = firestore
			.collection("chats")
			.doc(messagesDocID)
			.collection("messages");

		messagesCollectionRef
			.orderBy("createdAt", "desc")
			.limit(totalMessagesToFetch)
			.onSnapshot((snapshot) => {
				setFetchingMoreMessages(true);
				setMessages(reverseArray(snapshot.docs));

				if (snapshot.docs.length === 0) {
					setMessagesMessage("no messages");
				}

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

	console.log(fetchingMoreMessages);

	return (
		<StyledMessages>
			{messages.length > 0 ? (
				<React.Fragment>
					{messages.length < totalMessages ? (
						<LoadMore onClick={handleLoadMoreButtonClick}>
							{fetchingMoreMessages ? "loading..." : "load more"}
						</LoadMore>
					) : null}
					{messages.map((message) => {
						const data = message.data();
						return <Message {...data} />;
					})}
					<DivAtBottom ref={bottomDivRef}></DivAtBottom>
				</React.Fragment>
			) : (
				<StyledMessage>{messagesMessage}</StyledMessage>
			)}
		</StyledMessages>
	);
};

export default Messages;
