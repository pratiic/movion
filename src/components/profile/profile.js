import React from "react";

import { StyledProfile, ProfileLetter, Username } from "./profile.styles";
import { StyledLogoutIcon } from "../header/header.styles";

import Dropdown from "../dropdown/dropdown";

class Profile extends React.Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,
		};
	}

	handleProfileClick = () => {
		this.toggleDropdown();
	};

	toggleDropdown = () => {
		this.setState((prevState) => {
			return {
				showDropdown: !prevState.showDropdown,
			};
		});
	};

	render() {
		const { username } = this.props;

		return (
			<StyledProfile>
				<ProfileLetter onClick={this.handleProfileClick}>
					{username[0]}
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
