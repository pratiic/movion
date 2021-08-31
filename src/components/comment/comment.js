import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledComment,
	CommentHeader,
	CreatedTime,
	EditStatus,
	CommentText,
	CommentFooter,
	InfoText,
	IconContainer,
} from "./comment.styles";

import { setChatUser } from "../../redux/chat-user/chat-user.actions";

import { getHowLongAgo } from "../../utils/utils.date-time";

import {
	StyledThumbsUpIcon,
	StyledThumbsDownIcon,
	StyledTrashCanIcon,
	StyledEditIcon,
	StyledHorizontalDotMenuIcon,
	StyledReplyIcon,
} from "../../styles/styles.icons";

import { StyledChatIcon } from "../../styles/styles.icons";

import ProfilePreview from "../profile-preview/profile-preview";
import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

const Comment = ({
	user,
	text,
	createdAt,
	edited,
	likes,
	dislikes,
	liked,
	disliked,
	type,
	likeHandler,
	dislikeHandler,
	editHandler,
	deleteHandler,
	replyHandler,
	currentUser,
	editing,
}) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const dispatch = useDispatch();

	const history = useHistory();

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const renderMenuIcon = () => {
		return (
			currentUser && (
				<React.Fragment>
					<Dropdown
						show={showDropdown}
						forComponent="review"
						indicator="right"
					>
						{currentUser.id !== user.userID && (
							<DropdownItem
								toggleDropdown={toggleDropdown}
								clickHandler={() => {
									const chatUser = {
										id: user.userID,
										username: user.username,
										photoURL: user.userPhotoURL,
									};
									dispatch(setChatUser(chatUser));
									history.push(`/chat/${user.userID}`);
								}}
							>
								<StyledChatIcon $smaller /> start chat
							</DropdownItem>
						)}

						{currentUser && currentUser.id === user.userID && (
							<React.Fragment>
								<DropdownItem
									toggleDropdown={toggleDropdown}
									clickHandler={deleteHandler}
								>
									<StyledTrashCanIcon />
									delete {type}
								</DropdownItem>

								{!editing && replyHandler && (
									<DropdownItem
										toggleDropdown={toggleDropdown}
										clickHandler={editHandler}
									>
										<StyledEditIcon />
										edit {type}
									</DropdownItem>
								)}
							</React.Fragment>
						)}
					</Dropdown>

					<StyledHorizontalDotMenuIcon
						$smaller
						$menuToggleIcon
						$showBackground
						onClick={toggleDropdown}
					/>
				</React.Fragment>
			)
		);
	};

	return (
		<StyledComment>
			<CommentHeader>
				<ProfilePreview
					username={user.username}
					photoURL={user.photoURL}
				/>

				<CreatedTime>{getHowLongAgo(createdAt)} ago</CreatedTime>

				{edited && <EditStatus>(edited)</EditStatus>}

				{renderMenuIcon()}
			</CommentHeader>

			<CommentText>{text}</CommentText>

			<CommentFooter>
				<IconContainer liked={liked}>
					<StyledThumbsUpIcon $showBackground onClick={likeHandler} />
					<InfoText>{likes}</InfoText>
				</IconContainer>

				<IconContainer disliked={disliked}>
					<StyledThumbsDownIcon
						$showBackground
						onClick={dislikeHandler}
					/>
					<InfoText>{dislikes}</InfoText>
				</IconContainer>

				{currentUser && replyHandler && (
					<IconContainer>
						<StyledReplyIcon
							$showBackground
							onClick={replyHandler}
						/>
					</IconContainer>
				)}
			</CommentFooter>
		</StyledComment>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		editing: state.reviews.editing,
	};
};

export default connect(mapStateToProps)(Comment);
