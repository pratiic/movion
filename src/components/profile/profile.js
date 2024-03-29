import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledProfile,
	Username,
	Email,
	ProfileHeader,
} from "./profile.styles";
import { StyledLogoutIcon } from "../../styles/styles.icons";

import { currentUserSignout } from "../../redux/current-user/current-user.actions";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";
import ProfilePicture from "../profile-picture/profile-picture";

const Profile = ({ username, email, photoURL, currentUserSignout }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const history = useHistory();

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<StyledProfile>
			<ProfilePicture
				username={username}
				email={email}
				photoURL={photoURL}
				profilePictureClickHandler={toggleDropdown}
			/>
			{username ? (
				<Username>{username}</Username>
			) : (
				<Email>{email}</Email>
			)}
			<Dropdown
				forComponent="profile"
				show={showDropdown}
				indicator="right"
			>
				<ProfileHeader>
					<ProfilePicture
						username={username}
						email={email}
						photoURL={photoURL}
					/>
					{username || email}
				</ProfileHeader>
				<DropdownItem
					value="sign out"
					func="sign out"
					toggleDropdown={toggleDropdown}
					clickHandler={() => {
						history.push("/movies");
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
