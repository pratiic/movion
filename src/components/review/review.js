import React from "react";

import {
	StyledReview,
	ReviewHeader,
	ReviewMain,
	Username,
	CreatedAt,
} from "./review.styles";

import { getDateAndTime } from "../utils/utils.components";

import ProfilePicture from "../profile-picture/profile-picture";

const Review = ({
	text,
	username,
	userID,
	userEmail,
	createdAt,
	userPhotoURL,
}) => {
	console.log(text, username, userID);
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
		</StyledReview>
	);
};

export default Review;
