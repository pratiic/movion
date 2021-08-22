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
	StyledChatIcon,
} from "../../styles/styles.icons";

import {
	closeSidebar,
	toggleSidebar,
} from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import {
	getNewMessageChats,
	getNewMessages,
	getUnacknowledgedChats,
} from "../../utils/utils.chats";

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
	userChats,
	chatRequests,
}) => {
	const [unseenNotifications, setUnseenNotifications] = useState(0);
	const [unacknowledgedChats, setUnacknowledgedChats] = useState(0);
	const [messagesPlusRequests, setMessagesPlusRequests] = useState(0);

	const history = useHistory();

	useEffect(() => {
		setUnseenNotifications(
			userNotifications.filter(
				(userNotification) => !userNotification.seen
			).length
		);
	}, [userNotifications]);

	useEffect(() => {
		setUnacknowledgedChats(getUnacknowledgedChats(userChats));
	}, [userChats]);

	useEffect(() => {
		setMessagesPlusRequests(
			getNewMessageChats(userChats) + chatRequests.length
		);
	}, [userChats, chatRequests]);

	return (
		<StyledHeaderUtils>
			<HeaderUtil
				clickHandler={() => {
					history.push("/favorites");
				}}
			>
				<StyledHeartIcon $headerElement $smaller />
			</HeaderUtil>

			<HeaderUtil>
				<ThemeToggler />
			</HeaderUtil>

			<HeaderUtil
				text={unseenNotifications}
				clickHandler={() => {
					history.push("/notifications");
				}}
			>
				<StyledNotificationIcon $headerElement />
			</HeaderUtil>

			<HeaderUtil
				text={messagesPlusRequests}
				clickHandler={() => {
					history.push("/chats");
				}}
			>
				<StyledChatIcon $headerElement $smaller />
			</HeaderUtil>

			{showSearchbarOnSmallScreens ? (
				<HeaderUtil clickHandler={toggleSearchbar}>
					<StyledDeleteIcon
						$headerElement
						$searchbarToggler
						$smaller
					/>
				</HeaderUtil>
			) : (
				<HeaderUtil
					clickHandler={() => {
						toggleSearchbar();
						focusSearchInput();

						if (showSidebar) {
							closeSidebar();
						}
					}}
				>
					<StyledSearchIcon
						$headerElement
						$searchbarToggler
						$smaller
					/>
				</HeaderUtil>
			)}

			{showSidebar ? (
				<HeaderUtil clickHandler={toggleSidebar}>
					<StyledDeleteIcon $headerElement $sidebarToggler $smaller />
				</HeaderUtil>
			) : (
				<HeaderUtil
					clickHandler={() => {
						toggleSidebar();

						if (showSearchbarOnSmallScreens) {
							toggleSearchbar();
						}
					}}
				>
					<StyledHamburgerIcon
						$headerElement
						$bigger
						$sidebarToggler
					/>
				</HeaderUtil>
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
		userNotifications: state.userNotifications.userNotifications,
		userChats: state.chats.chats,
		chatRequests: state.chats.chatRequests,
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
