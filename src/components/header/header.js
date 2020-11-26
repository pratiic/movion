import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { StyledHeader, HeaderContainer, StyledLogo } from "./header.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";

import Searchbar from "../search-bar/search-bar";
import HeaderUtils from "../header-utils/header-utils";
import HeaderLinks from "../header-links/header-links";

class Header extends React.Component {
	getSearchInputRef = (inputRef) => {
		this.searchInputRef = inputRef;
	};

	focusSearchInput = () => {
		this.searchInputRef.current.focus();
	};

	render() {
		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo />
					</Link>

					<Searchbar getSearchInputRef={this.getSearchInputRef} />

					<HeaderUtils focusSearchInput={this.focusSearchInput} />

					<HeaderLinks currentUser={this.props.currentUser} />
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
		showSearchbarOnSmallScreens:
			state.searchbar.showSearchbarOnSmallScreens,
		currentUser: state.currentUser.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
