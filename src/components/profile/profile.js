import React from "react";

import {
	StyledProfile,
	ProfileLetter,
	Username,
	ProfileHeader,
} from "./profile.styles";
import { StyledLogoutIcon } from "../../styles/styles.icons";

import { toggleDropdown } from "../utils/utils.components";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

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
				<Dropdown forComponent="profile" show={this.state.showDropdown}>
					<ProfileHeader>
						<ProfileLetter>{username && username[0]}</ProfileLetter>
						{username}
					</ProfileHeader>
					<DropdownItem
						value="sign out"
						icon={<StyledLogoutIcon $headerLinkIcon />}
						func="sign out"
						toggleDropdown={this.toggleDropdown}
					/>
				</Dropdown>
			</StyledProfile>
		);
	}
}

export default Profile;
