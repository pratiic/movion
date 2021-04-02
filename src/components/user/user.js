import React from "react";

import { StyledUser, UserInfo, Username, UserEmail } from "./user.styles";

import ProfilePicture from "../profile-picture/profile-picture";

const User = ({ id, username, email, photoURL, createdAt }) => {
	return (
		<StyledUser>
			<ProfilePicture
				username={username}
				photoURL={photoURL}
				size="bigger"
			/>
			<UserInfo>
				<Username>{username}</Username>
				<UserEmail>{email}</UserEmail>
			</UserInfo>
		</StyledUser>
	);
};

export default User;
