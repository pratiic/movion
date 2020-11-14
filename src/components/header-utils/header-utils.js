import React from "react";
import { connect } from "react-redux";

import {
	StyledHeaderUtils,
	StyledHeartIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
	StyledHamburgerIcon,
} from "./header-utils.styles";

import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";

import ThemeToggler from "../theme-toggler/theme-toggler";

const HeaderUtils = ({
	showSearchbarOnSmallScreens,
	showSidebar,
	toggleSearchbar,
	toggleSidebar,
	focusSearchInput,
}) => {
	return (
		<StyledHeaderUtils>
			<StyledHeartIcon />

			<ThemeToggler />

			{showSearchbarOnSmallScreens ? (
				<StyledDeleteIcon onClick={toggleSearchbar} $searchbarToggler />
			) : (
				<StyledSearchIcon
					onClick={() => {
						toggleSearchbar();
						focusSearchInput();
					}}
				/>
			)}

			{showSidebar ? (
				<StyledDeleteIcon
					onClick={toggleSidebar}
					$sidebarToggler
				></StyledDeleteIcon>
			) : (
				<StyledHamburgerIcon onClick={toggleSidebar} />
			)}
		</StyledHeaderUtils>
	);
};

const mapStateToProps = (state) => {
	return {
		showSearchbarOnSmallScreens:
			state.searchbar.showSearchbarOnSmallScreens,
		showSidebar: state.sidebar.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		},
		toggleSearchbar: () => {
			dispatch(toggleSearchbar());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUtils);
