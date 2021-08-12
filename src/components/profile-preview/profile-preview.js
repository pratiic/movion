import React from "react";

import { Username, StyledProfilePreview } from "./profile-preview.styles";

import ProfilePicture from "../profile-picture/profile-picture";

const ProfilePreview = ({ username, photoURL, size }) => {
	return (
		<StyledProfilePreview>
			<ProfilePicture username={username} photoURL={photoURL} />
			<Username size={size}>{username}</Username>
		</StyledProfilePreview>
	);
};

export default ProfilePreview;
