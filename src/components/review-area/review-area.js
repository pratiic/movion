import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { TextAreaContainer } from "./review-area.styles";

import {
	showErrorNotification,
	toggleNotification,
} from "../../redux/notification/notification.actions";
import { setEditing } from "../../redux/reviews/reviews.actions";

import { firestore } from "../../firebase/firebase.utils";

import CustomTextarea from "../custom-textarea/custom-textarea";

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
	const [textAreaRef, setTextAreaRef] = useState(useRef());

	const divToScrollToRef = useRef();

	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
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

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (!review) {
			return;
		}

		setCreatingReview(true);

		const reviewsCollectionRef = firestore
			.collection("content-reviews")
			.doc(id)
			.collection("reviews");

		if (!editing) {
			const reviewID = `${currentUser.id}${new Date().getTime()}`;

			try {
				await reviewsCollectionRef.doc(reviewID).set({
					text: review,
					username: currentUser.username,
					userID: currentUser.id,
					userEmail: currentUser.email,
					createdAt: new Date().getTime(),
					id: reviewID,
					userPhotoURL: currentUser.photoURL,
				});
			} catch (error) {
				dispatch(showErrorNotification());
			}
		} else {
			try {
				await reviewsCollectionRef
					.doc(editedReviewID)
					.update({ text: review, edited: true });
				toggleNotification("edited successfully", "success");
			} catch (error) {
				dispatch(showErrorNotification());
			}
		}

		setEditing(false);
		setReview("");
		setCreatingReview(false);
	};

	return (
		<TextAreaContainer>
			<div ref={divToScrollToRef}></div>
			<CustomTextarea
				placeholder="Write something..."
				value={review}
				reference={textAreaRef}
				changeHandler={handleTextAreaChange}
				submitHandler={handleFormSubmit}
				showSubmitButton={review.length > 0}
				submitButtonValue={creatingReview ? "adding review..." : "add"}
			/>
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
