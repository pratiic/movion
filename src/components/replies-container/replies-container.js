import React from "react";

import { StyledRepliesContainer } from "./replies-container.styles";

import ReplyInput from "../reply-input/reply-input";
import CommentsList from "../comments-list/comments-list";

const RepliesContainer = ({ reviewRef, passNotificationInfo }) => {
	return (
		<StyledRepliesContainer>
			<ReplyInput
				reviewRef={reviewRef}
				passNotificationInfo={passNotificationInfo}
			/>
			<CommentsList
				displayType="reply"
				reviewRef={reviewRef}
				messageSize="smaller"
			/>
		</StyledRepliesContainer>
	);
};

export default RepliesContainer;
