import React from "react";
import Picker from "emoji-picker-react";

import "./emoji-picker.styles";

import { StyledEmojiPicker } from "./emoji-picker.styles";

const EmojiPicker = ({ show, insertEmoji }) => {
	const handleEmojiClick = (event, emoji) => {
		insertEmoji(emoji.emoji);
	};

	return (
		<StyledEmojiPicker show={show}>
			<Picker className="emoji-picker" onEmojiClick={handleEmojiClick} />
		</StyledEmojiPicker>
	);
};

export default EmojiPicker;
