import React, { useState } from "react";
import { connect } from "react-redux";

import {
	StyledProfile,
	ProfileLetter,
	Username,
	ProfileHeader,
} from "./profile.styles";
import { StyledLogoutIcon } from "../../styles/styles.icons";

import { currentUserSignout } from "../../redux/current-user/current-user.actions";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";
import ProfilePicture from "../profile-picture/profile-picture";

const Profile = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const { username, photoURL, currentUserSignout } = props;

	return (
		<StyledProfile>
			<ProfilePicture
				username={username}
				photoURL={photoURL}
				profilePictureClickHandler={toggleDropdown}
			/>
			<Username>{username}</Username>
			<Dropdown
				forComponent="profile"
				show={showDropdown}
				indicator="right"
			>
				<ProfileHeader>
					{" "}
					<ProfilePicture username={username} photoURL={photoURL} />
					{username}
				</ProfileHeader>
				<DropdownItem
					value="sign out"
					func="sign out"
					toggleDropdown={toggleDropdown}
					clickHandler={() => {
						currentUserSignout();
					}}
				>
					<StyledLogoutIcon $headerLinkIcon /> sign out
				</DropdownItem>
			</Dropdown>
		</StyledProfile>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		currentUserSignout: () => {
			dispatch(currentUserSignout());
		},
	};
};

export default connect(null, mapDispatchToProps)(Profile);
