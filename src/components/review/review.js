import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledReview,
	ReviewHeader,
	ReviewMain,
	Username,
	CreatedAt,
	ReviewFooter,
	IconContainer,
	Info,
	EditedOrNot,
} from "./review.styles";
import { StyledChatIcon } from "../../styles/styles.icons";

import { toggleNotification } from "../../redux/notification/notification.actions";
import {
	setEditing,
	setEditedReviewID,
	setEditedReviewText,
} from "../../redux/reviews/reviews.actions";
import { setChatUser } from "../../redux/chat-user/chat-user.actions";

import { firestore } from "../../firebase/firebase.utils";
import { getHowLongAgo } from "../../utils/utils.date-time";
import { setUserNotification } from "../../firebase/firebase.user-notifications.utils";

import {
	StyledThumbsUpIcon,
	StyledThumbsDownIcon,
	StyledTrashCanIcon,
	StyledEditIcon,
	StyledHorizontalDotMenuIcon,
	StyledReplyIcon,
} from "../../styles/styles.icons";

import ProfilePicture from "../profile-picture/profile-picture";
import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

const Review = ({
	text,
	username,
	userID,
	userEmail,
	createdAt,
	userPhotoURL,
	id,
	contentID,
	contentType,
	currentUser,
	toggleNotification,
	setEditing,
	setEditedReviewID,
	setEditedReviewText,
	editing,
	edited,
	setChatUser,
}) => {
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [reviewRef, setReviewRef] = useState(
		firestore
			.collection("content-reviews")
			.doc(contentID)
			.collection("reviews")
			.doc(id)
	);
	const [showDropdown, setShowDropdown] = useState(false);

	const history = useHistory();

	useEffect(() => {
		const likedByCollectionRef = reviewRef.collection("liked-by");
		const dislikedByCollectionRef = reviewRef.collection("disliked-by");

		likedByCollectionRef.onSnapshot(async (snapshot) => {
			setLikes(snapshot.docs.length || 0);

			if (currentUser) {
				const docRef = await likedByCollectionRef
					.doc(currentUser.id)
					.get();
				if (docRef.exists) {
					setLiked(true);
				} else {
					setLiked(false);
				}
			}
		});

		dislikedByCollectionRef.onSnapshot(async (snapshot) => {
			setDislikes(snapshot.docs.length || 0);

			if (currentUser) {
				const docRef = await dislikedByCollectionRef
					.doc(currentUser.id)
					.get();
				if (docRef.exists) {
					setDisliked(true);
				} else {
					setDisliked(false);
				}
			}
		});
	}, []);

	const handleThumbsUpIconClick = () => {
		if (!currentUser) {
			return showSignInFirstNotification();
		}

		if (!liked) {
			reviewRef.collection("disliked-by").doc(currentUser.id).delete();
			reviewRef.collection("liked-by").doc(currentUser.id).set({});

			passNotificationInfo("like");
		}
	};

	const handleThumbsDownIconClick = () => {
		if (!currentUser) {
			return showSignInFirstNotification();
		}

		if (!disliked) {
			reviewRef.collection("liked-by").doc(currentUser.id).delete();
			reviewRef.collection("disliked-by").doc(currentUser.id).set({});

			passNotificationInfo("dislike");
		}
	};

	const passNotificationInfo = (action) => {
		if (currentUser.id === userID) {
			return;
		}

		setUserNotification({
			destUserID: userID,
			sourceUser: {
				userID: currentUser.id,
				username: currentUser.username,
				photoURL: currentUser.photoURL,
			},
			type: "review",
			action,
			reviewID: id,
			contentID,
			contentType,
		});
	};

	const handleTrashCanIconClick = async () => {
		await reviewRef.delete();
		toggleNotification("review removed successfully");
	};

	const handleEditIconClick = () => {
		setEditing(true);
		setEditedReviewID(id);
		setEditedReviewText(text);
	};

	const showSignInFirstNotification = () => {
		toggleNotification("you need to sign in first", false);
		history.push("/signin");
	};

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<StyledReview>
			<ReviewHeader>
				<ProfilePicture
					username={username}
					photoURL={userPhotoURL}
					size="smaller"
				/>
				<Username>{username}</Username>
				<CreatedAt>{getHowLongAgo(createdAt)} ago</CreatedAt>
				{edited ? <EditedOrNot>(edited)</EditedOrNot> : null}
				{currentUser ? (
					currentUser.id !== userID ? (
						<React.Fragment>
							<Dropdown
								show={showDropdown}
								forComponent="review"
								indicator="right"
							>
								<DropdownItem
									toggleDropdown={toggleDropdown}
									clickHandler={() => {
										const user = {
											id: userID,
											username: username,
											email: userEmail,
											photoURL: userPhotoURL,
											createdAt: createdAt,
										};
										setChatUser(user);
										history.push(`/chat/${userID}`);
										// addUserToChats(currentUser, user);
									}}
								>
									<StyledChatIcon $smaller /> start chat
								</DropdownItem>
							</Dropdown>
							<StyledHorizontalDotMenuIcon
								$smaller
								$menuToggleIcon
								onClick={toggleDropdown}
							/>
						</React.Fragment>
					) : null
				) : null}
			</ReviewHeader>

			<ReviewMain>{text}</ReviewMain>

			<ReviewFooter>
				<IconContainer liked={liked}>
					<StyledThumbsUpIcon onClick={handleThumbsUpIconClick} />
					<Info>{likes}</Info>
				</IconContainer>

				<IconContainer disliked={disliked}>
					<StyledThumbsDownIcon onClick={handleThumbsDownIconClick} />
					<Info>{dislikes}</Info>
				</IconContainer>

				{currentUser && currentUser.id !== userID && (
					<StyledReplyIcon />
				)}

				{currentUser ? (
					currentUser.id === userID ? (
						<React.Fragment>
							<IconContainer>
								<StyledTrashCanIcon
									onClick={handleTrashCanIconClick}
								/>
							</IconContainer>
							{!editing ? (
								<IconContainer>
									<StyledEditIcon
										$smaller
										onClick={handleEditIconClick}
									/>
								</IconContainer>
							) : null}
						</React.Fragment>
					) : null
				) : null}
			</ReviewFooter>
		</StyledReview>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		editing: state.reviews.editing,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNotification: (message, status) => {
			dispatch(toggleNotification(message, status));
		},
		setEditing: (editing) => {
			dispatch(setEditing(editing));
		},
		setEditedReviewID: (editedReviewID) => {
			dispatch(setEditedReviewID(editedReviewID));
		},
		setEditedReviewText: (editedReviewText) => {
			dispatch(setEditedReviewText(editedReviewText));
		},
		setChatUser: (chatUser) => {
			dispatch(setChatUser(chatUser));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
