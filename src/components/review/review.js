import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
	StyledReview,
	ReviewHeader,
	ReviewMain,
	Username,
	CreatedAt,
	ReviewFooter,
	IconContainer,
	Info,
} from "./review.styles";

import { getDateAndTime } from "../utils/utils.components";
import { firestore } from "../../firebase/firebase.utils";

import {
	StyledThumbsUpIcon,
	StyledThumbsDownIcon,
	StyledReplyIcon,
} from "../../styles/styles.icons";

import ProfilePicture from "../profile-picture/profile-picture";
import { cssColors } from "../../styles/styles.variables";

const Review = ({
	text,
	username,
	userID,
	userEmail,
	createdAt,
	userPhotoURL,
	id,
	contentID,
	currentUser,
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

	console.log(reviewRef);

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
	});

	const handleThumbsUpIconClick = () => {
		reviewRef.collection("disliked-by").doc(currentUser.id).delete();
		reviewRef.collection("liked-by").doc(currentUser.id).set({});
	};

	const handleThumbsDownIconClick = () => {
		reviewRef.collection("liked-by").doc(currentUser.id).delete();
		reviewRef.collection("disliked-by").doc(currentUser.id).set({});
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
				<CreatedAt>({getDateAndTime(createdAt)})</CreatedAt>
			</ReviewHeader>
			<ReviewMain>{text}</ReviewMain>
			<ReviewFooter liked={liked} disliked={disliked}>
				<IconContainer>
					<StyledThumbsUpIcon
						$smaller
						liked={liked ? "true" : "false"}
						onClick={handleThumbsUpIconClick}
					/>
					<Info>{likes}</Info>
				</IconContainer>
				<IconContainer>
					<StyledThumbsDownIcon
						$smaller
						disliked={disliked ? "true" : "false"}
						onClick={handleThumbsDownIconClick}
					/>
					<Info>{dislikes}</Info>
				</IconContainer>
				{/* <IconContainer>
					<StyledReplyIcon $smallest />
					<Info></Info>
				</IconContainer> */}
			</ReviewFooter>
		</StyledReview>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(Review);
