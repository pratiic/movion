import React from "react";
import { connect } from "react-redux";

import { StyledHeaderLinks, StyledLink } from "./header-links.styles";
import { StyledLoginIcon, StyledLogoutIcon } from "../../styles/styles.icons";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { currentUserSignout } from "../../redux/current-user/current-user.actions";

import Profile from "../profile/profile";

const HeaderLinks = ({
	headerLinks,
	showSidebar,
	toggleSearchMode,
	toggleSidebar,
	toggleActive,
	currentUser,
	currentUserSignout,
}) => {
	const handleLinkClick = (event, linkValue) => {
		toggleActive(linkValue);

		if (linkValue === "movies" || linkValue === "tv shows") {
			toggleSearchMode(linkValue);
		}

		toggleSidebar();
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
					>
						{" "}
						{showSidebar ? headerLink.icon : null}
						{headerLink.value}
					</StyledLink>
				);
			})}

			{currentUser ? (
				<React.Fragment>
					<Profile username={currentUser.username} />

					<StyledLink
						as="p"
						onClick={() => {
							currentUserSignout();
						}}
						special
					>
						<StyledLogoutIcon $headerLinkIcon $medium /> sign out
					</StyledLink>
				</React.Fragment>
			) : (
				<StyledLink
					to="/signin"
					onClick={(event) => {
						handleLinkClick(event, "sign in");
					}}
				>
					{" "}
					{showSidebar ? (
						<StyledLoginIcon $headerLinkIcon $medium />
					) : null}
					sign in
				</StyledLink>
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
