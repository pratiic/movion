import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledHeaderUtils } from "./header-utils.styles";
import {
	StyledHeartIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
	StyledHamburgerIcon,
	StyledNotificationIcon,
} from "../../styles/styles.icons";

import {
	closeSidebar,
	toggleSidebar,
} from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import ThemeToggler from "../theme-toggler/theme-toggler";
import HeaderUtil from "../header-util/header-util";

const HeaderUtils = ({
	showSearchbarOnSmallScreens,
	showSidebar,
	toggleSearchbar,
	toggleSidebar,
	closeSidebar,
	focusSearchInput,
	currentUser,
	toggleNotification,
	userNotifications,
}) => {
	const [unseenNotifications, setUnseenNotifications] = useState(0);

	const history = useHistory();

	useEffect(() => {
		setUnseenNotifications(
			userNotifications.filter(
				(userNotification) => !userNotification.seen
			).length
		);
	}, [userNotifications]);

	return (
		<StyledHeaderUtils>
			<HeaderUtil>
				<StyledHeartIcon
					$headerElement
					$smaller
					onClick={() => {
						history.push("/favorites");
					}}
				/>
			</HeaderUtil>

			<HeaderUtil>
				<ThemeToggler />
			</HeaderUtil>

			<HeaderUtil text={unseenNotifications}>
				<StyledNotificationIcon
					$headerElement
					onClick={() => {
						history.push("/notifications");
					}}
				/>
			</HeaderUtil>

			<HeaderUtil>
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
			</HeaderUtil>

			<HeaderUtil>
				{showSidebar ? (
					<StyledDeleteIcon
						$headerElement
						$sidebarToggler
						$smaller
						onClick={toggleSidebar}
					/>
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
			</HeaderUtil>
		</StyledHeaderUtils>
	);
};

const mapStateToProps = (state) => {
	return {
		showSearchbarOnSmallScreens:
			state.searchbar.showSearchbarOnSmallScreens,
		showSidebar: state.sidebar.showSidebar,
		currentUser: state.currentUser.currentUser,
		userNotifications: state.userNotifications.userNotifications,
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
