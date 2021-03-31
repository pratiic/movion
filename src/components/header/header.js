import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { StyledHeader, HeaderContainer, StyledLogo } from "./header.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";

import Searchbar from "../search-bar/search-bar";
import HeaderUtils from "../header-utils/header-utils";
import HeaderLinks from "../header-links/header-links";

const Header = ({ currentUser }) => {
	let searchInputRef;

	const getSearchInputRef = (inputRef) => {
		searchInputRef = inputRef;
	};

	const focusSearchInput = () => {
		searchInputRef.current.focus();
	};

	return (
		<StyledHeader>
			<HeaderContainer>
				<Link to="/">
					<StyledLogo />
				</Link>

				<Searchbar getSearchInputRef={getSearchInputRef} />

				<HeaderUtils focusSearchInput={focusSearchInput} />

				<HeaderLinks currentUser={currentUser} />
			</HeaderContainer>
		</StyledHeader>
	);
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
