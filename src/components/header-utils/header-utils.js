import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledHeaderUtils } from "./header-utils.styles";
import {
	StyledHeartIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
	StyledHamburgerIcon,
} from "../../styles/styles.icons";

import {
	closeSidebar,
	toggleSidebar,
} from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import ThemeToggler from "../theme-toggler/theme-toggler";

const HeaderUtils = ({
	showSearchbarOnSmallScreens,
	showSidebar,
	toggleSearchbar,
	toggleSidebar,
	closeSidebar,
	focusSearchInput,
	currentUser,
	toggleNotification,
}) => {
	const history = useHistory();

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
					$smaller
					onClick={toggleSearchbar}
				/>
			) : (
				<StyledSearchIcon
					$headerElement
					$searchbarToggler
					$smaller
					onClick={() => {
						toggleSearchbar();
						focusSearchInput();

						if (showSidebar) {
							closeSidebar();
						}
					}}
				/>
			)}

			{showSidebar ? (
				<StyledDeleteIcon
					$headerElement
					$sidebarToggler
					$smaller
					onClick={toggleSidebar}
				></StyledDeleteIcon>
			) : (
				<StyledHamburgerIcon
					$headerElement
					$bigger
					$sidebarToggler
					onClick={() => {
						toggleSidebar();

						if (showSearchbarOnSmallScreens) {
							toggleSearchbar();
						}
					}}
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
		closeSidebar: () => {
			dispatch(closeSidebar());
		},
		toggleSearchbar: () => {
			dispatch(toggleSearchbar());
		},
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUtils);
