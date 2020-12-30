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

const Profile = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const { username } = props;

	return (
		<StyledProfile>
			<ProfileLetter onClick={toggleDropdown}>
				{username && username[0]}
			</ProfileLetter>
			<Username>{username}</Username>
			<Dropdown forComponent="profile" show={showDropdown}>
				<ProfileHeader>
					<ProfileLetter>{username && username[0]}</ProfileLetter>
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
