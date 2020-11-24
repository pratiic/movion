import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
	StyledLogoutIcon,
} from "../../styles/styles.icons";

import { StyledHeaderLinks, StyledLink } from "./header-links.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { currentUserSignout } from "../../redux/current-user/current-user.actions";

import Profile from "../profile/profile";

class HeaderLinks extends React.Component {
	constructor() {
		super();

		this.state = {
			headerLinks: [
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
			],
		};
	}

	handleLinkClick = (event) => {
		const { toggleSidebar } = this.props;

		toggleSidebar();
	};

	toggleActiveLink = () => {
		const { location } = this.props;
		const pathname = location.pathname.toLowerCase();

		this.state.headerLinks.forEach((headerLink) => {
			if (
				pathname.includes(headerLink.pathnames.pathnameOne) ||
				pathname.includes(headerLink.pathnames.pathnameTwo)
			) {
				this.setActiveLink(headerLink.pathnames.pathnameOne);
			} else if (pathname.includes("favorites")) {
				this.setAllLinksInActive();
			}
		});
	};

	setActiveLink = (value) => {
		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				if (headerLink.pathnames.pathnameOne === value) {
					return { ...headerLink, active: true };
				}
				return { ...headerLink, active: false };
			}),
		});
	};

	setAllLinksInActive = () => {
		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				return { ...headerLink, active: false };
			}),
		});
	};

	componentDidMount() {
		this.toggleActiveLink();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location !== this.props.location) {
			this.toggleActiveLink();
		}
	}

	render() {
		const { showSidebar, currentUser, currentUserSignout } = this.props;

		return (
			<StyledHeaderLinks show={showSidebar}>
				{this.state.headerLinks.map((headerLink) => {
					return (
						<StyledLink
							to={headerLink.to}
							key={headerLink.value}
							onClick={(event) => {
								this.handleLinkClick(event, headerLink.value);
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
						<Profile username={currentUser.username} />

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
	}
}

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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HeaderLinks)
);
