import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { StyledHeaderUtils } from "./header-utils.styles";

import {
	StyledHeartIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
	StyledHamburgerIcon,
} from "../../styles/styles.icons";

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
				$headerElement
				$smaller
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
				<StyledDeleteIcon
					$headerElement
					$searchbarToggler
					onClick={toggleSearchbar}
				/>
			) : (
				<StyledSearchIcon
					$headerElement
					$searchbarToggler
					onClick={() => {
						toggleSearchbar();
						focusSearchInput();
					}}
				/>
			)}

			{showSidebar ? (
				<StyledDeleteIcon
					$headerElement
					onClick={toggleSidebar}
					$sidebarToggler
				></StyledDeleteIcon>
			) : (
				<StyledHamburgerIcon
					$headerElement
					$bigger
					$sidebarToggler
					onClick={toggleSidebar}
				/>
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
