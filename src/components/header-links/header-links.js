import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import {
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
	StyledLogoutIcon,
	StyledChatIcon,
} from "../../styles/styles.icons";
import {
	HeaderLinksOverlay,
	StyledHeaderLinks,
	StyledLink,
} from "./header-links.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { currentUserSignout } from "../../redux/current-user/current-user.actions";

import Profile from "../profile/profile";

const HeaderLinks = ({
	toggleSidebar,
	showSidebar,
	currentUser,
	currentUserSignout,
}) => {
	const history = useHistory();

	const [headerLinks, setHeaderLinks] = useState([
		{
			value: "movies",
			icon: <StyledMovieIcon $headerLinkIcon />,
			pathnames: ["movie"],
			to: "/movies",
			active: false,
			hideOnCurrentUser: false,
		},

		{
			value: "tv shows",
			icon: <StyledTvIcon $headerLinkIcon />,
			pathnames: ["tv"],
			to: "/tvshows",
			active: false,
			hideOnCurrentUser: false,
		},

		// {
		// 	value: "chat",
		// 	icon: <StyledChatIcon $headerLinkIcon />,
		// 	pathnames: ["chat", "find-friends"],
		// 	to: "/chats",
		// 	active: false,
		// 	hideOnCurrentUser: false,
		// },

		{
			value: "sign in",
			icon: <StyledLoginIcon $headerLinkIcon />,
			pathnames: ["signin"],
			to: "/signin",
			active: false,
			hideOnCurrentUser: true,
		},
	]);

	const location = useLocation();

	useEffect(() => {
		setActiveLink();
		// eslint-disable-next-line
	}, [location]);

	const handleLinkClick = (event) => {
		//whenever a header link is clicked, we close the sidebar
		if (showSidebar) {
			toggleSidebar();
		}
	};

	const setActiveLink = () => {
		setHeaderLinks(
			headerLinks.map((headerLink) => {
				if (
					location.pathname.includes(headerLink.pathnames[0]) ||
					location.pathname.includes(headerLink.pathnames[1])
				) {
					return { ...headerLink, active: true };
				}

				return { ...headerLink, active: false };
			})
		);
	};

	return (
		<StyledHeaderLinks show={showSidebar}>
			{headerLinks.map((headerLink) => {
				return (
					<StyledLink
						to={headerLink.to}
						key={headerLink.value}
						onClick={(event) => {
							handleLinkClick(event, headerLink.value);
						}}
						$isActive={headerLink.active}
						$currentUser={currentUser}
						$hideOnCurrentUser={headerLink.hideOnCurrentUser}
					>
						{showSidebar && headerLink.icon}
						{headerLink.value}
					</StyledLink>
				);
			})}

			{currentUser && (
				<React.Fragment>
					<Profile
						username={currentUser.username}
						photoURL={currentUser.photoURL}
					/>

					<StyledLink
						as="p"
						onClick={() => {
							currentUserSignout();
							history.push("./movies");
						}}
						forSmallerScreens
					>
						<StyledLogoutIcon $headerLinkIcon /> sign out
					</StyledLink>
				</React.Fragment>
			)}
		</StyledHeaderLinks>
	);
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		},
		toggleNotification: (notificationMessage) => {
			dispatch(toggleNotification(notificationMessage));
		},
		currentUserSignout: () => {
			dispatch(currentUserSignout());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
