import React, { useState, useEffect } from "react";

import { StyledProfilePicture } from "./profile-picture.styles";

const ProfilePicture = ({
	username,
	email,
	photoURL,
	size,
	profilePictureClickHandler,
}) => {
	const [displayLetter, setDisplayLetter] = useState(null);

	useEffect(() => {
		if (email) {
			setDisplayLetter(username ? username[0] : email[0]);
		}
	}, [username, email]);

	// const displayLetter = username ? username[0] : email[0];

	const handleProfilePictureClick = () => {
		if (profilePictureClickHandler) {
			profilePictureClickHandler();
		}
	};

	return (
		<StyledProfilePicture size={size} onClick={handleProfilePictureClick}>
			{photoURL ? (
				<img src={photoURL} alt="profile pict" />
			) : (
				displayLetter
			)}
		</StyledProfilePicture>
	);
};

export default ProfilePicture;
