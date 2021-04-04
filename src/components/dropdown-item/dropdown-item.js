import React from "react";
import { connect } from "react-redux";

import { StyledDropdownItem } from "./dropdown-item.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { currentUserSignout } from "../../redux/current-user/current-user.actions";

const DropdownItem = ({ children, toggleDropdown, clickHandler }) => {
	const handleDropdownItemClick = () => {
		toggleDropdown();

		clickHandler();
	};

	return (
		<StyledDropdownItem onClick={handleDropdownItemClick}>
			{children}
		</StyledDropdownItem>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
		toggleNotification: (notificationMessage) => {
			dispatch(toggleNotification(notificationMessage));
		},
		currentUserSignout: () => {
			dispatch(currentUserSignout());
		},
	};
};

export default connect(null, mapDispatchToProps)(DropdownItem);
