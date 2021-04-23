import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { firestore } from "../../firebase/firebase.utils";

import { Form, Input, Icons, SendButton } from "./message-field.styles";
import { StyledDeleteIcon, StyledSendIcon } from "../../styles/styles.icons";
import { StyledSmileyIcon } from "../../styles/styles.icons";

import EmojiPicker from "../emoji-picker/emoji-picker";

const MessageField = ({ messagesDocID, currentUser }) => {
	const [message, setMessage] = useState("");
	const [showEmojiBox, setShowEmojiBox] = useState(false);

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (message.length !== 0) {
			inputRef.current.focus();

			const createdAt = new Date().getTime();

			firestore
				.collection("chats")
				.doc(messagesDocID)
				.collection("messages")
				.doc(`${currentUser.id}${createdAt}`)
				.set({
					text: message,
					createdBy: currentUser,
					createdAt: createdAt,
					mid: `${currentUser.id}${createdAt}`,
					messagesDocID: messagesDocID,
					removedForEveryone: false,
				});
		}

		clearMessage();
	};

	const handleClearButtonClick = () => {
		clearMessage();
		inputRef.current.focus();
	};

	const handleInputChange = (event) => {
		setMessage(event.target.value);
	};

	const clearMessage = () => {
		setMessage("");
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
	};
};

export default connect(mapStateToProps)(MessageField);
