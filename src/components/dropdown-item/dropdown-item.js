import React from "react";
import { connect } from "react-redux";

import { StyledDropdownItem } from "./dropdown-item.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import { auth } from "../../firebase/firebase.utils";

class DropdownItem extends React.Component {
	handleDropdownItemClick = () => {
		const {
			toggleDropdown,
			toggleSearchMode,
			forComponent,
			value,
			toggleNotification,
		} = this.props;

		toggleDropdown();

		if (forComponent === "searchbar") {
			toggleSearchMode(value);
		} else if (forComponent === "profile") {
			auth.signOut();

			toggleNotification("signed out successfully");
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
	};
};

export default connect(null, mapDispatchToProps)(DropdownItem);
