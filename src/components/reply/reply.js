import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
	showErrorNotification,
	toggleNotification,
} from "../../redux/notification/notification.actions";
import {
	resetModal,
	setHasOptions,
	setModal,
} from "../../redux/modal/modal.actions";

import {
	likeReply,
	dislikeReply,
	deleteReply,
} from "../../firebase/firebase.reviews.utils";
import { setUserNotification } from "../../firebase/firebase.user-notifications.utils";

import Comment from "../comment/comment";

const Reply = ({ reviewRef, currentUser, ...otherProps }) => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [replyRef, setReplyRef] = useState(
		reviewRef.collection("replies").doc(otherProps.replyID)
	);

	const { user, replyID } = otherProps;

	const dispatch = useDispatch();

	const { id, type } = useParams();

	useEffect(() => {
		if (!replyRef) {
			return;
		}

		setLikedDisliked();
		//eslint-disable-next-line
	}, [replyRef]);

	const setLikedDisliked = () => {
		replyRef.collection("liked-by").onSnapshot((snapshot) => {
			setLikes(snapshot.docs.length);

			if (!currentUser) {
				return;
			}

			if (snapshot.docs.find((doc) => doc.id === currentUser.id)) {
				setLiked(true);
				setDisliked(false);
			}
		});

		replyRef.collection("disliked-by").onSnapshot((snapshot) => {
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

	const handleLikeClick = async () => {
		if (!currentUser || liked) {
			return;
		}

		const result = await likeReply(replyRef, currentUser.id);

		if (result.message) {
			return passNotificationInfo("like");
		}

		dispatch(showErrorNotification());
	};

	const handleDislikeClick = async () => {
		if (!currentUser || disliked) {
			return;
		}

		const result = await dislikeReply(replyRef, currentUser.id);

		if (result.message) {
			return passNotificationInfo("dislike");
		}

		dispatch(showErrorNotification());
	};

	const handleDeleteClick = () => {
		dispatch(
			setModal(
				"are you sure you want to delete your reply ?",
				handleReplyDeletion
			)
		);
	};

	const handleReplyDeletion = async () => {
		dispatch(setHasOptions(false));

		const result = await deleteReply(replyRef);

		dispatch(resetModal());

		if (result.error) {
			return dispatch(showErrorNotification());
		}

		dispatch(toggleNotification("reply deleted"));
	};

	const passNotificationInfo = (action) => {
		if (currentUser.id === user.userID) {
			return;
		}

		setUserNotification({
			destUserID: user.userID,
			sourceUser: {
				userID: currentUser.id,
				username: currentUser.username,
				photoURL: currentUser.photoURL,
			},
			type: "reply",
			action,
			replyID,
			contentID: id,
			contentType: type,
		});
	};

	return (
		<Comment
			{...otherProps}
			likes={likes}
			dislikes={dislikes}
			liked={liked}
			disliked={disliked}
			type="reply"
			likeHandler={handleLikeClick}
			dislikeHandler={handleDislikeClick}
			deleteHandler={handleDeleteClick}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(Reply);
