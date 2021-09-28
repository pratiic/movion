import React from "react";

import { Username, StyledProfilePreview } from "./profile-preview.styles";

import ProfilePicture from "../profile-picture/profile-picture";

const ProfilePreview = ({ username, email, photoURL, size }) => {
	return (
		<StyledProfilePreview>
			<ProfilePicture
				username={username}
				email={email}
				photoURL={photoURL}
			/>
			<Username size={size}>{username || email}</Username>
		</StyledProfilePreview>
	);
};

export default ProfilePreview;
