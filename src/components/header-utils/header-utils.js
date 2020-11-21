import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
	StyledHeaderUtils,
	StyledHeartIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
	StyledHamburgerIcon,
} from "./header-utils.styles";

import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import ThemeToggler from "../theme-toggler/theme-toggler";

const HeaderUtils = ({
	showSearchbarOnSmallScreens,
	showSidebar,
	toggleSearchbar,
	toggleSidebar,
	focusSearchInput,
	history,
	currentUser,
	toggleNotification,
}) => {
	return (
		<StyledHeaderUtils>
			<StyledHeartIcon
				onClick={() => {
					history.push("/favorites");

					if (!currentUser) {
						toggleNotification(
							"you need to sign in first",
							"failure"
						);
					}
				}}
			/>

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
		currentUser: state.currentUser.currentUser,
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
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HeaderUtils)
);
