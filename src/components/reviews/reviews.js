import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { StyledReviews } from "./reviews.styles";
import { StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import Review from "../review/review";
import GenericButton from "../generic-button/generic-button";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [reviewsMessage, setReviewsMessage] = useState("loading reviews...");
	const [reviewsFetchNumber, setReviewsFetchNumber] = useState(5);
	const [totalReviews, setTotalReviews] = useState(0);
	const [fetchingMoreReviews, setFetchingMoreReviews] = useState(false);

	const { id, type } = useParams();

	const divToScrollToRef = useRef();

	useEffect(() => {
		fetchReviews();
	}, [reviewsFetchNumber, id]);

	const fetchReviews = async () => {
		setFetchingMoreReviews(true);

		const reviewsCollectionRef = firestore
			.collection("content-reviews")
			.doc(id)
			.collection("reviews");

		reviewsCollectionRef
			.orderBy("createdAt", "desc")
			.limit(reviewsFetchNumber)
			.onSnapshot(async (snapshot) => {
				if (snapshot.docs.length > 0) {
					setReviews(snapshot.docs);
				} else {
					setReviewsMessage("no reviews yet");
					setReviews([]);
				}

				setFetchingMoreReviews(false);
				// divToScrollToRef.current.scrollIntoView();

				const data = await reviewsCollectionRef.get();
				setTotalReviews(data.docs.length);
			});
	};

	const fetchMoreReviews = () => {
		setReviewsFetchNumber(reviewsFetchNumber + 5);
	};

	return (
		<StyledReviews>
			{reviews.length > 0 ? (
				<React.Fragment>
					{reviews.map((review) => {
						const data = review.data();
						return (
							<Review
								{...data}
								contentID={id}
								contentType={type}
								key={data.id}
							/>
						);
					})}
					<div ref={divToScrollToRef}></div>
					{reviewsFetchNumber < totalReviews ? (
						<GenericButton
							size="smaller"
							btnType="outlined"
							justify="center"
							handleButtonClick={fetchMoreReviews}
						>
							{fetchingMoreReviews ? "loading..." : "load more"}
						</GenericButton>
					) : null}
				</React.Fragment>
			) : (
				<StyledMessage>{reviewsMessage}</StyledMessage>
			)}
		</StyledReviews>
	);
};

export default Reviews;
