import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
	StyledReviewsContainer,
	ReviewsTitle,
} from "./reviews-container.styles";
import { StyledTitle } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import ReviewArea from "../review-area/review-area";
import Reviews from "../reviews/reviews";

const ReviewsContainer = () => {
	return (
		<StyledReviewsContainer>
			<StyledTitle size="smaller" marginbt="1.5rem">
				Reviews and discussions
			</StyledTitle>
			<ReviewArea />
			<Reviews />
		</StyledReviewsContainer>
	);
};

export default ReviewsContainer;
