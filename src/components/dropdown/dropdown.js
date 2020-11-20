import React from "react";

import { StyledDropdown } from "./dropdown.styles";
import { ProfileHeader, ProfileLetter } from "../profile/profile.styles";

import DropdownItem from "../dropdown-item/dropdown-item";

class Dropdown extends React.Component {
	render() {
		const {
			dropdownItems,
			forComponent,
			show,
			toggleDropdown,
			username,
		} = this.props;

		return (
			<StyledDropdown forComponent={forComponent} show={show}>
				{forComponent === "profile" ? (
					<ProfileHeader>
						<ProfileLetter>{username[0]}</ProfileLetter>
						{username}
					</ProfileHeader>
				) : null}

				{dropdownItems.map((dropdownItem) => {
					return (
						<DropdownItem
							value={dropdownItem}
							toggleDropdown={toggleDropdown}
							forComponent={forComponent}
							key={dropdownItem}
						/>
					);
				})}
			</StyledDropdown>
		);
	}
}

export default Dropdown;
