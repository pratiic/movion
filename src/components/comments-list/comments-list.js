import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { StyledCommentsList } from "./comments-list.styles";
import { StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import Review from "../review/review";
import Reply from "../reply/reply";
import GenericButton from "../generic-button/generic-button";

const CommentsList = ({ reviewRef, displayType, messageSize }) => {
	const [comments, setComments] = useState([]);
	const [commentsMessage, setCommentsMessage] = useState("");
	const [commentsFetchNumber, setCommentsFetchNumber] = useState(5);
	const [totalComments, setTotalComments] = useState(0);
	const [fetchingMoreComments, setFetchingMoreComments] = useState(false);

	const { id, type } = useParams();

	const [collectionRef, setCollectionRef] = useState(
		displayType === "review"
			? firestore
					.collection("content-reviews")
					.doc(id)
					.collection("reviews")
			: reviewRef.collection("replies")
	);

	const divToScrollToRef = useRef();

	useEffect(() => {
		fetchComments();
		//eslint-disable-next-line
	}, [commentsFetchNumber]);

	useEffect(() => {
		setComments([]);
		fetchComments();
		//eslint-disable-next-line
	}, [id]);

	const fetchComments = () => {
		setFetchingMoreComments(true);
		setCommentsMessage(`loading ${getDisplayTerm()}...`);

		collectionRef
			.orderBy("createdAt", "desc")
			.limit(commentsFetchNumber)
			.onSnapshot(async (snapshot) => {
				if (snapshot.docs.length > 0) {
					setComments(snapshot.docs);
				} else {
					setCommentsMessage(`no ${getDisplayTerm()} yet`);
					setComments([]);
				}

				setFetchingMoreComments(false);

				const data = await collectionRef.get();
				setTotalComments(data.docs.length);
			});
	};

	const fetchMoreComments = () => {
		setCommentsFetchNumber(commentsFetchNumber + 5);
	};

	const getDisplayTerm = () => {
		return type === "review" ? "reviews" : "replies";
	};

	return (
		<StyledCommentsList>
			{comments.length > 0 ? (
				<React.Fragment>
					{comments.map((comment) => {
						const data = comment.data();
						return displayType === "review" ? (
							<Review
								{...data}
								contentID={id}
								contentType={type}
								key={data.id}
							/>
						) : (
							<Reply
								{...data}
								replyID={comment.id}
								reviewRef={reviewRef}
								key={comment.id}
							/>
						);
					})}

					<div ref={divToScrollToRef}></div>

					{comments.length < totalComments && (
						<GenericButton
							displayType="load-more"
							handleButtonClick={fetchMoreComments}
						>
							{fetchingMoreComments ? "loading..." : "load more"}
						</GenericButton>
					)}
				</React.Fragment>
			) : (
				<StyledMessage size={messageSize}>
					{commentsMessage}
				</StyledMessage>
			)}
		</StyledCommentsList>
	);
};

export default CommentsList;
