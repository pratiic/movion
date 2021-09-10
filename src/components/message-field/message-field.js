import React, { useState, useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { Form, Input, Icons, SendButton } from "./message-field.styles";
import { StyledDeleteIcon, StyledSendIcon } from "../../styles/styles.icons";
import { StyledSmileyIcon } from "../../styles/styles.icons";

import {
	setChatToTop,
	setMessageEditInfo,
} from "../../redux/chats/chats.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import { sendChatMessage } from "../../firebase/firebase.chats.utils";
import { editMessage } from "../../firebase/firebase.messages.utils";

import EmojiPicker from "../emoji-picker/emoji-picker";

const MessageField = ({
	messagesDocID,
	currentUser,
	chatUser,
	userChats,
	messageEditInfo,
}) => {
	const [message, setMessage] = useState("");
	const [showEmojiBox, setShowEmojiBox] = useState(false);
	const [currentUserTypingDocRef, setCurrentUserTypingDocRef] = useState("");
	const [chatAtTop, setChatAtTop] = useState(false);

	const inputRef = useRef();

	const dispatch = useDispatch();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	useEffect(() => {
		setMessage(messageEditInfo.messageText);

		if (messageEditInfo.messageEditMode) {
			inputRef.current.focus();
		}
	}, [messageEditInfo]);

	// useEffect(() => {
	// 	if (messagesDocID) {
	// 		setCurrentUserTypingDocRef(
	// 			firestore
	// 				.collection("chats")
	// 				.doc(messagesDocID)
	// 				.collection("typing")
	// 				.doc(currentUser.id)
	// 		);
	// 	}
	// }, [messagesDocID]);

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		setShowEmojiBox(false);

		const { messageEditMode, messageID } = messageEditInfo;

		if (!message) {
			return;
		}

		if (messageEditMode) {
			await editMessage(messageID, messagesDocID, message);

			dispatch(setMessageEditInfo(false));
		} else {
			sendChatMessage(message, messagesDocID, currentUser, chatUser);
		}

		setMessage("");
		inputRef.current.focus();

		// if (!chatAtTop) {
		// 	dispatch(setChatToTop(chatUser.userID, userChats));
		// 	setChatAtTop(true);
		// }

		// removeFromTyping();
	};

	const handleClearButtonClick = () => {
		setMessage("");
		inputRef.current.focus();
	};

	// const addToTyping = () => {
	// 	console.log(messagesDocID);
	// 	firestore
	// 		.collection("chats")
	// 		.doc(messagesDocID)
	// 		.collection("typing")
	// 		.doc(currentUser.id)
	// 		.set({ user: currentUser.id })
	// 		.then((documentRef) => {
	// 			console.log(documentRef);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// const removeFromTyping = () => {
	// 	currentUserTypingDocRef.delete({}).then((documentRef) => {
	// 		console.log(documentRef);
	// 	});
	// };

	const handleInputChange = (event) => {
		setMessage(event.target.value);
		// if (event.target.value.length === 1) {
		// 	addToTyping();
		// }
		// if (event.target.value.length === 0) {
		// 	removeFromTyping();
		// }
	};

	const insertEmoji = (emoji) => {
		setMessage(`${message}${emoji}`);
		inputRef.current.focus();
	};

	const handleEmojiButtonClick = () => {
		setShowEmojiBox(!showEmojiBox);
		inputRef.current.focus();
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<EmojiPicker show={showEmojiBox} insertEmoji={insertEmoji} />

			<Input
				type="text"
				placeholder="type your message..."
				ref={inputRef}
				value={message}
				onChange={handleInputChange}
			/>
			<Icons>
				{message && (
					<StyledDeleteIcon
						$noColor
						onClick={handleClearButtonClick}
					/>
				)}
				<StyledSmileyIcon $noColor onClick={handleEmojiButtonClick} />
				<SendButton type="submit">
					<StyledSendIcon $noColor />
				</SendButton>
			</Icons>
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		chatUser: state.chatUser.chatUser,
		userChats: state.chats.chats,
		messageEditInfo: state.chats.messageEditInfo,
	};
};

export default connect(mapStateToProps)(MessageField);
