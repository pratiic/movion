import React from "react";
import { connect } from "react-redux";

import { StyledDropdownItem } from "./dropdown-item.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { currentUserSignout } from "../../redux/current-user/current-user.actions";

class DropdownItem extends React.Component {
	handleDropdownItemClick = () => {
		const {
			toggleDropdown,
			toggleSearchMode,
			value,
			currentUserSignout,
			func,
		} = this.props;

		toggleDropdown();

		if (func === "sign out") {
			currentUserSignout();
		} else if (func === "toggle search mode") {
			toggleSearchMode(value);
		}
	};

	render() {
		const { value, icon } = this.props;

		return (
			<StyledDropdownItem onClick={this.handleDropdownItemClick}>
				{icon ? icon : null} {value}
			</StyledDropdownItem>
		);
	}
}

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
