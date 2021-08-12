import React, { useState } from "react";

import { StyledRepliesContainer } from "./replies-container.styles";

import ReplyInput from "../reply-input/reply-input";
import RepliesList from "../replies-list/replies-list";

const RepliesContainer = ({ reviewRef, passNotificationInfo }) => {
	return (
		<StyledRepliesContainer>
			<ReplyInput
				reviewRef={reviewRef}
				passNotificationInfo={passNotificationInfo}
			/>
			<RepliesList reviewRef={reviewRef} />
		</StyledRepliesContainer>
	);
};

export default RepliesContainer;
