import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import {
	StyledMessage,
	Text,
	Info,
	MessageInfo,
	MessageControls,
} from "./message.styles";
import {
	StyledHorizontalDotMenuIcon,
	StyledTickIcon,
	StyledDoubleTickIcon,
	StyledTrashCanIcon,
	StyledEditIcon,
} from "../../styles/styles.icons";

import { setMessageEditInfo } from "../../redux/chats/chats.actions";

import { getCreatedTime } from "../../utils/utils.components";
import { deleteMessage } from "../../firebase/firebase.messages.utils";

import ProfilePicture from "../profile-picture/profile-picture";
import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

const Message = ({
	text,
	user,
	createdAt,
	currentUser,
	messageID,
	seen,
	messagesDocID,
	edited,
}) => {
	const [showDropdown, setShowdropdown] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const dispatch = useDispatch();

	const self = currentUser.id === user.userID ? true : false;

	const toggleDropdown = () => {
		setShowdropdown(!showDropdown);
	};

	const handleDeleteClick = async () => {
		setDeleting(true);

		const result = await deleteMessage(messageID, messagesDocID);

		setDeleting(false);

		if (result.message) {
			dispatch(setMessageEditInfo(false));
		}
	};

	const handleEditClick = async () => {
		dispatch(setMessageEditInfo(true, messageID, messagesDocID, text));
	};

	return (
		<StyledMessage self={self}>
			<ProfilePicture
				username={user.username}
				photoURL={user.photoURL}
				size="smaller"
			/>

			<Text deleted={!text} self={self}>
				{text && (
					<React.Fragment>
						{deleting ? "deleting..." : text}

						<MessageInfo>
							<Info>
								{getCreatedTime(createdAt)} {edited && "edited"}
							</Info>
							{self ? (
								seen ? (
									<StyledDoubleTickIcon $smaller />
								) : (
									<StyledTickIcon $smaller />
								)
							) : null}
						</MessageInfo>
					</React.Fragment>
				)}

				{!text && "this message was deleted"}
			</Text>

			{self && text && (
				<MessageControls>
					<StyledHorizontalDotMenuIcon
						$smaller
						$showBackground
						onClick={toggleDropdown}
					/>

					<Dropdown
						show={showDropdown}
						indicator="right"
						forComponent="message"
					>
						<DropdownItem
							toggleDropdown={toggleDropdown}
							clickHandler={handleDeleteClick}
						>
							<StyledTrashCanIcon />
							delete message
						</DropdownItem>
						<DropdownItem
							toggleDropdown={toggleDropdown}
							clickHandler={handleEditClick}
						>
							<StyledEditIcon />
							edit message
						</DropdownItem>
					</Dropdown>
				</MessageControls>
			)}
		</StyledMessage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(Message);
