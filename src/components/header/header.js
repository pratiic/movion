import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { StyledHeader, HeaderContainer, StyledLogo } from "./header.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";

import Searchbar from "../search-bar/search-bar";
import HeaderUtils from "../header-utils/header-utils";
import HeaderLinks from "../header-links/header-links";
import Logo from "../logo/logo";

const Header = ({ currentUser }) => {
	const [searchInputRef, setSearchInputRef] = useState(null);

	const location = useLocation();

	const getSearchInputRef = (inputRef) => {
		setSearchInputRef(inputRef);
	};

	const focusSearchInput = () => {
		searchInputRef.current.focus();
	};

	if (location.pathname.includes("/chat/")) {
		return null;
	}

	return (
		<StyledHeader>
			<HeaderContainer>
				<Logo />

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
