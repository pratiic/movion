import React from "react";

import { StyledReviewsContainer } from "./reviews-container.styles";
import { StyledTitle } from "../../styles/styles.title";

import ReviewArea from "../review-area/review-area";
import CommentsList from "../comments-list/comments-list";

const ReviewsContainer = () => {
	return (
		<StyledReviewsContainer>
			<StyledTitle size="smaller" marginbt="1.5rem">
				Reviews and discussions
			</StyledTitle>
			<ReviewArea />
			<CommentsList displayType="review" />
		</StyledReviewsContainer>
	);
};

export default ReviewsContainer;
