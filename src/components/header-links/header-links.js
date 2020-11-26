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

		//whenever a header link is clicked, we close the sidebar
		toggleSidebar();
	};

	toggleActiveLink = () => {
		const { location } = this.props;
		const pathname = location.pathname.toLowerCase();

		this.state.headerLinks.forEach((headerLink) => {
			//for each header link, all its pathnames are being checked to see
			//if they appear in the current url
			//whichever link matches here, becomes the active link
			if (
				pathname.includes(headerLink.pathnames.pathnameOne) ||
				pathname.includes(headerLink.pathnames.pathnameTwo)
			) {
				this.setActiveLink(headerLink.pathnames.pathnameOne);
			} else if (pathname.includes("favorites")) {
				//since the link to favorites is not present inside the this component
				//but is inside headerutils component
				//whenever the user navigates to favorites
				//all header links are set to be not active
				this.setAllLinksInActive();
			}
		});
	};

	//this is the method that sets the active link
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

	//this is the method that makes all header links inactive
	setAllLinksInActive = () => {
		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				return { ...headerLink, active: false };
			}),
		});
	};

	componentDidMount() {
		//when this component first loads, the active header link gets set
		this.toggleActiveLink();
	}

	componentDidUpdate(prevProps) {
		//whenever the url changes, the active header link is also changed
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
