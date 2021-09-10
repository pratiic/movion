import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledReview } from "./review.styles";

import {
	showErrorNotification,
	toggleNotification,
} from "../../redux/notification/notification.actions";
import {
	setEditing,
	setEditedReviewID,
	setEditedReviewText,
} from "../../redux/reviews/reviews.actions";
import { setChatUser } from "../../redux/chat-user/chat-user.actions";
import {
	resetModal,
	setHasOptions,
	setModal,
} from "../../redux/modal/modal.actions";

import { firestore } from "../../firebase/firebase.utils";
import { setUserNotification } from "../../firebase/firebase.user-notifications.utils";

import RepliesContainer from "../replies-container/replies-container";
import Comment from "../comment/comment";

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
	const [showReplies, setShowReplies] = useState(false);

	const history = useHistory();

	const dispatch = useDispatch();

	useEffect(() => {
		setLikedDisliked();
		//eslint-disable-next-line
	}, [currentUser]);

	const setLikedDisliked = () => {
		reviewRef.collection("liked-by").onSnapshot((snapshot) => {
			setLikes(snapshot.docs.length);

			if (!currentUser) {
				return;
			}

			if (snapshot.docs.find((doc) => doc.id === currentUser.id)) {
				setLiked(true);
				setDisliked(false);
			}
		});

		reviewRef.collection("disliked-by").onSnapshot((snapshot) => {
			setDislikes(snapshot.docs.length);

			if (!currentUser) {
				return;
			}

			if (snapshot.docs.find((doc) => doc.id === currentUser.id)) {
				setDisliked(true);
				setLiked(false);
			}
		});
	};

	const handleThumbsUpIconClick = () => {
		if (!currentUser) {
			return signInFirst();
		}

		if (!liked) {
			try {
				reviewRef
					.collection("disliked-by")
					.doc(currentUser.id)
					.delete();
				reviewRef.collection("liked-by").doc(currentUser.id).set({});

				passNotificationInfo("like");
			} catch (error) {
				dispatch(showErrorNotification());
			}
		}
	};

	const handleThumbsDownIconClick = () => {
		if (!currentUser) {
			return signInFirst();
		}

		if (!disliked) {
			try {
				reviewRef.collection("liked-by").doc(currentUser.id).delete();
				reviewRef.collection("disliked-by").doc(currentUser.id).set({});

				passNotificationInfo("dislike");
			} catch (error) {
				dispatch(showErrorNotification());
			}
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

	const handleTrashCanIconClick = () => {
		dispatch(
			setModal(
				"are you sure you want to delete your reply ?",
				handleReviewDeletion
			)
		);
	};

	const handleReviewDeletion = async () => {
		dispatch(setHasOptions(false));

		try {
			await reviewRef.delete();

			toggleNotification("review removed successfully");
		} catch (error) {
			dispatch(showErrorNotification());
		} finally {
			dispatch(resetModal());
		}
	};

	const handleEditIconClick = () => {
		setEditing(true);
		setEditedReviewID(id);
		setEditedReviewText(text);
	};

	const signInFirst = () => {
		toggleNotification("you need to sign in first", false);
		history.push("/signin");
	};

	const toggleReplies = () => {
		setShowReplies(!showReplies);
	};

	return (
		<StyledReview showReplies={showReplies}>
			<Comment
				user={{
					username: username,
					photoURL: userPhotoURL,
					userID: userID,
				}}
				text={text}
				createdAt={createdAt}
				edited={edited}
				likes={likes}
				dislikes={dislikes}
				liked={liked}
				disliked={disliked}
				type="review"
				likeHandler={handleThumbsUpIconClick}
				dislikeHandler={handleThumbsDownIconClick}
				editHandler={handleEditIconClick}
				deleteHandler={handleTrashCanIconClick}
				replyHandler={toggleReplies}
			/>

			{showReplies && (
				<RepliesContainer
					reviewRef={reviewRef}
					reviewUserID={userID}
					passNotificationInfo={passNotificationInfo}
				/>
			)}
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
