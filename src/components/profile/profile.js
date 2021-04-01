import React, { useState } from "react";

import {
	StyledProfile,
	ProfileLetter,
	Username,
	ProfileHeader,
} from "./profile.styles";
import { StyledLogoutIcon } from "../../styles/styles.icons";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";
import ProfilePicture from "../profile-picture/profile-picture";

const Profile = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const { username, photoURL } = props;

	return (
		<StyledProfile>
			<ProfilePicture username={username} photoURL={photoURL} />
			<Username>{username}</Username>
			<Dropdown forComponent="profile" show={showDropdown}>
				<ProfileHeader>
					{" "}
					<ProfilePicture username={username} photoURL={photoURL} />
					{username}
				</ProfileHeader>
				<DropdownItem
					value="sign out"
					icon={<StyledLogoutIcon $headerLinkIcon />}
					func="sign out"
					toggleDropdown={toggleDropdown}
				/>
			</Dropdown>
		</StyledProfile>
	);
};

export default Profile;
