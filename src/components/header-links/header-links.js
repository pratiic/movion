import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
	StyledLogoutIcon,
	StyledChatIcon,
} from "../../styles/styles.icons";
import { StyledHeaderLinks, StyledLink } from "./header-links.styles";

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
	const [headerLinks, setHeaderLinks] = useState([
		{
			value: "movies",
			icon: <StyledMovieIcon $headerLinkIcon />,
			pathnames: {
				pathnameOne: "movies",
				pathnameTwo: "movie",
			},
			to: "/movies",
			active: false,
			hideOnCurrentUser: false,
		},

		{
			value: "tv shows",
			icon: <StyledTvIcon $headerLinkIcon />,
			pathnames: {
				pathnameOne: "tvshows",
				pathnameTwo: "tv",
			},
			to: "/tvshows",
			active: false,
			hideOnCurrentUser: false,
		},

		{
			value: "chat",
			icon: <StyledChatIcon $headerLinkIcon />,
			pathnames: {
				pathnameOne: "chat",
			},
			to: "/chat",
			active: false,
			hideOnCurrentUser: false,
		},

		{
			value: "sign in",
			icon: <StyledLoginIcon $headerLinkIcon />,
			pathnames: {
				pathnameOne: "signin",
				pathnameTwo: "signup",
			},
			to: "/signin",
			active: false,
			hideOnCurrentUser: true,
		},
	]);

	const location = useLocation();

	const handleLinkClick = (event) => {
		//whenever a header link is clicked, we close the sidebar
		toggleSidebar();
	};

	const toggleActiveLink = () => {
		const pathname = location.pathname.toLowerCase();

		headerLinks.forEach((headerLink) => {
			//for each header link, all its pathnames are being checked to see
			//if they appear in the current url
			//whichever link matches here, becomes the active link
			if (
				pathname.includes(headerLink.pathnames.pathnameOne) ||
				pathname.includes(headerLink.pathnames.pathnameTwo)
			) {
				setActiveLink(headerLink.pathnames.pathnameOne);
			} else if (pathname.includes("favorites")) {
				//since the link to favorites is not present inside the this component
				//but is inside headerutils component
				//whenever the user navigates to favorites
				//all header links are set to be not active
				setAllLinksInActive();
			}
		});
	};

	//this is the method that sets the active link
	const setActiveLink = (value) => {
		setHeaderLinks(
			headerLinks.map((headerLink) => {
				if (headerLink.pathnames.pathnameOne === value) {
					return { ...headerLink, active: true };
				}
				return { ...headerLink, active: false };
			})
		);
	};

	//this is the method that makes all header links inactive
	const setAllLinksInActive = () => {
		setHeaderLinks(
			headerLinks.map((headerLink) => {
				return { ...headerLink, active: false };
			})
		);
	};

	useEffect(() => {
		toggleActiveLink();
		// eslint-disable-next-line
	}, [location]);

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
						{" "}
						{showSidebar ? headerLink.icon : null}
						{headerLink.value}
					</StyledLink>
				);
			})}

			{currentUser ? (
				<React.Fragment>
					<Profile
						username={currentUser.username}
						photoURL={currentUser.photoURL}
					/>

					<StyledLink
						as="p"
						onClick={() => {
							currentUserSignout();
						}}
						forSmallerScreens
					>
						<StyledLogoutIcon $headerLinkIcon /> sign out
					</StyledLink>
				</React.Fragment>
			) : null}
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
