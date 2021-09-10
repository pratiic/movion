import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

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

import { getNewMessageChats } from "../../utils/utils.chats";

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
	const [utilLinks, setUtilLinks] = useState([
		{ activeLinks: ["favorites"], active: false },
		{ activeLinks: ["notifications"], active: false },
		{
			activeLinks: ["chats", "chat-requests", "find-friends"],
			active: false,
		},
	]);
	const [unseenNotifications, setUnseenNotifications] = useState(0);
	const [messagesPlusRequests, setMessagesPlusRequests] = useState(0);

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		setUnseenNotifications(
			userNotifications.filter(
				(userNotification) => !userNotification.seen
			).length
		);
	}, [userNotifications]);

	useEffect(() => {
		setMessagesPlusRequests(
			getNewMessageChats(userChats) + chatRequests.length
		);
	}, [userChats, chatRequests]);

	useEffect(() => {
		setUtilLinks(
			utilLinks.map((utilLink) => {
				if (
					utilLink.activeLinks.find((activeLink) =>
						location.pathname.includes(activeLink)
					)
				) {
					return { ...utilLink, active: true };
				}

				return { ...utilLink, active: false };
			})
		);
		//eslint-disable-next-line
	}, [location]);

	return (
		<StyledHeaderUtils>
			<HeaderUtil
				active={utilLinks[0].active}
				clickHandler={() => {
					history.push("/favorites");
				}}
			>
				<StyledHeartIcon $headerElement $smaller />
			</HeaderUtil>

			<ThemeToggler />

			<HeaderUtil
				text={unseenNotifications}
				active={utilLinks[1].active}
				clickHandler={() => {
					history.push("/notifications");
				}}
			>
				<StyledNotificationIcon $headerElement />
			</HeaderUtil>

			<HeaderUtil
				text={messagesPlusRequests}
				active={utilLinks[2].active}
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
					smallerScreen
					clickHandler={() => {
						toggleSearchbar();
						focusSearchInput();

						if (showSidebar) {
							closeSidebar();
						}
					}}
				>
					<StyledSearchIcon $headerElement $smaller />
				</HeaderUtil>
			)}

			{showSidebar ? (
				<HeaderUtil clickHandler={toggleSidebar}>
					<StyledDeleteIcon $headerElement $smaller />
				</HeaderUtil>
			) : (
				<HeaderUtil
					smallScreen
					clickHandler={() => {
						toggleSidebar();

						if (showSearchbarOnSmallScreens) {
							toggleSearchbar();
						}
					}}
				>
					<StyledHamburgerIcon $headerElement $bigger />
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
