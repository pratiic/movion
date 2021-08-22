import React, { useState, useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { Form, Input, Icons, SendButton } from "./message-field.styles";
import { StyledDeleteIcon, StyledSendIcon } from "../../styles/styles.icons";
import { StyledSmileyIcon } from "../../styles/styles.icons";

import { setChatToTop } from "../../redux/chats/chats.actions";

import { sendChatMessage } from "../../firebase/firebase.chats.utils";

import EmojiPicker from "../emoji-picker/emoji-picker";

const MessageField = ({ messagesDocID, currentUser, chatUser, userChats }) => {
	const [message, setMessage] = useState("");
	const [showEmojiBox, setShowEmojiBox] = useState(false);
	const [currentUserTypingDocRef, setCurrentUserTypingDocRef] = useState("");
	const [chatAtTop, setChatAtTop] = useState(false);

	const inputRef = useRef();

	const dispatch = useDispatch();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

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

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!message) {
			return;
		}

		inputRef.current.focus();

		sendChatMessage(message, messagesDocID, currentUser, chatUser);

		setMessage("");

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
				{/* <EmojiIcon
					className="icon emoji-icon"
					onClick={handleEmojiButtonClick}
				/> */}
				<StyledDeleteIcon $smaller onClick={handleClearButtonClick} />
				<StyledSmileyIcon onClick={handleEmojiButtonClick} />
				<SendButton type="submit">
					<StyledSendIcon className="icon" $smaller />
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
	};
};

export default connect(mapStateToProps)(MessageField);
