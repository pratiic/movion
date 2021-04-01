import React from "react";

import { StyledProfilePicture } from "./profile-picture.styles";

const ProfilePicture = ({ username, photoURL, size }) => {
	return (
		<StyledProfilePicture size={size}>
			{photoURL ? <img src={photoURL} /> : username[0]}
		</StyledProfilePicture>
	);
};

export default ProfilePicture;
