import React from "react";

import { StyledProfile, ProfileLetter, Username } from "./profile.styles";
import { StyledLogoutIcon } from "../header/header.styles";

import { toggleDropdown } from "../utils/utils.components";

import Dropdown from "../dropdown/dropdown";

class Profile extends React.Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,
		};

		this.toggleDropdown = toggleDropdown.bind(this);
	}

	handleProfileClick = () => {
		this.toggleDropdown();
	};

	render() {
		const { username } = this.props;

		return (
			<StyledProfile>
				<ProfileLetter onClick={this.handleProfileClick}>
					{username && username[0]}
				</ProfileLetter>
				<Username>{username}</Username>
				<Dropdown
					dropdownItems={[
						{ value: "sign out", icon: <StyledLogoutIcon /> },
					]}
					forComponent="profile"
					show={this.state.showDropdown}
					toggleDropdown={this.toggleDropdown}
					username={username}
				/>
			</StyledProfile>
		);
	}
}

export default Profile;
