import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { StyledTextArea, TextAreaContainer } from "./review-area.styles";

import { toggleNotification } from "../../redux/notification/notification.actions";
import { firestore } from "../../firebase/firebase.utils";

import { StyledSendIcon } from "../../styles/styles.icons";

import GenericButton from "../generic-button/generic-button";
import Spinner from "../spinner/spinner";

const ReviewArea = ({ currentUser, toggleNotification }) => {
	const [review, setReview] = useState("");
	const [creatingReview, setCreatingReview] = useState(false);

	const { id } = useParams();
	const history = useHistory();

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
			<StyledTextArea
				placeholder="write something..."
				value={review}
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNotification: (message, status) => {
			dispatch(toggleNotification(message, status));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewArea);
