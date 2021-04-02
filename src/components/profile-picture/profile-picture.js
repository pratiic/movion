import React from "react";

import { StyledProfilePicture } from "./profile-picture.styles";

const ProfilePicture = ({
	username,
	photoURL,
	size,
	profilePictureClickHandler,
}) => {
	const handleProfilePictureClick = () => {
		if (profilePictureClickHandler) {
			profilePictureClickHandler();
		}
	};

	return (
		<StyledProfilePicture size={size} onClick={handleProfilePictureClick}>
			{photoURL ? <img src={photoURL} /> : username[0]}
		</StyledProfilePicture>
	);
};

export default ProfilePicture;
