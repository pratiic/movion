import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { StyledTextArea, TextAreaContainer } from "./review-area.styles";

import { toggleNotification } from "../../redux/notification/notification.actions";
import { setEditing } from "../../redux/reviews/reviews.actions";

import { firestore } from "../../firebase/firebase.utils";

import { StyledSendIcon } from "../../styles/styles.icons";

import GenericButton from "../generic-button/generic-button";
import Spinner from "../spinner/spinner";

const ReviewArea = ({
	currentUser,
	toggleNotification,
	editing,
	editedReviewID,
	editedReviewText,
	setEditing,
}) => {
	const [review, setReview] = useState("");
	const [creatingReview, setCreatingReview] = useState(false);

	const { id } = useParams();
	const history = useHistory();
	const divToScrollToRef = useRef();
	const textAreaRef = useRef();

	useEffect(() => {
		console.log(editedReviewText);
		setReview(editing ? editedReviewText : "");

		if (editing) {
			divToScrollToRef.current.scrollIntoView();
			window.scrollBy(0, -80);
			textAreaRef.current.focus();
		}
	}, [editing]);

	const handleTextAreaChange = (event) => {
		setReview(event.target.value);
	};

	const handleSendButtonClick = async () => {
		if (review.length !== 0) {
			setCreatingReview(true);

			const reviewsCollectionRef = firestore
				.collection("content-reviews")
				.doc(id)
				.collection("reviews");

			if (!editing) {
				const reviewID = `${currentUser.id}${new Date().getTime()}`;

				await reviewsCollectionRef.doc(reviewID).set({
					text: review,
					username: currentUser.username,
					userID: currentUser.id,
					userEmail: currentUser.email,
					createdAt: new Date().getTime(),
					id: reviewID,
					userPhotoURL: currentUser.photoURL,
				});
			} else {
				await reviewsCollectionRef
					.doc(editedReviewID)
					.update({ text: review, edited: true });
				toggleNotification("edited successfully", "success");
			}

			setEditing(false);
			setReview("");
			setCreatingReview(false);
		}
	};

	const handleTextAreaFocus = () => {
		if (!currentUser) {
			history.push("/signin");
			toggleNotification("you need to sign in first", "failure");
		}
	};

	return (
		<TextAreaContainer>
			<div ref={divToScrollToRef}></div>
			<StyledTextArea
				placeholder="write something..."
				value={review}
				ref={textAreaRef}
				onChange={handleTextAreaChange}
				onFocus={handleTextAreaFocus}
			></StyledTextArea>
			{!creatingReview ? (
				<GenericButton handleButtonClick={handleSendButtonClick}>
					<StyledSendIcon $smallest />
				</GenericButton>
			) : (
				<GenericButton>adding review</GenericButton>
			)}
		</TextAreaContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		editing: state.reviews.editing,
		editedReviewID: state.reviews.editedReviewID,
		editedReviewText: state.reviews.editedReviewText,
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewArea);
