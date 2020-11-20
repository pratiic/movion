import React from "react";
import { connect } from "react-redux";

import { StyledDropdownItem } from "./dropdown-item.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";

import { auth } from "../../firebase/firebase.utils";

class DropdownItem extends React.Component {
	handleDropdownItemClick = () => {
		const {
			toggleDropdown,
			toggleSearchMode,
			forComponent,
			value,
		} = this.props;

		toggleDropdown();

		if (forComponent === "searchbar") {
			toggleSearchMode(value);
		} else if (forComponent === "profile") {
			auth.signOut();
		}
	};

	render() {
		const { value } = this.props;

		return (
			<StyledDropdownItem onClick={this.handleDropdownItemClick}>
				{value}
			</StyledDropdownItem>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
	};
};

export default connect(null, mapDispatchToProps)(DropdownItem);
