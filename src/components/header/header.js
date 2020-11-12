import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
	StyledHeader,
	HeaderContainer,
	StyledLogo,
	HeaderUtils,
	HeaderLinks,
	StyledLink,
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
	StyledHeartIcon,
	StyledHamburgerIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
} from "./header.styles";

import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import {
	toggleSearchbar,
	toggleSearchMode,
} from "../../redux/searchbar/searchbar.actions";

import Searchbar from "../search-bar/search-bar";
import ThemeToggler from "../theme-toggler/theme-toggler";

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			headerLinks: [
				{
					value: "movies",
					icon: <StyledMovieIcon />,
					pathname: "movies",
					to: "/movies",
					active: true,
				},

				{
					value: "tv shows",
					icon: <StyledTvIcon />,
					pathname: "tvshows",
					to: "/tvshows",
					active: false,
				},

				{
					value: "sign in",
					icon: <StyledLoginIcon />,
					pathname: "signin",
					to: "/signin",
					active: false,
				},
			],
		};
	}

	handleLinkClick = (event, linkValue) => {
		const { toggleSearchMode, toggleSidebar } = this.props;

		this.toggleActive(linkValue);

		if (linkValue === "movies" || linkValue === "tv shows") {
			toggleSearchMode(linkValue);
		}

		toggleSidebar();
	};

	toggleActive = (value) => {
		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				if (headerLink.value === value) {
					return { ...headerLink, active: true };
				}
				return { ...headerLink, active: false };
			}),
		});
	};

	componentDidMount() {
		const { location } = this.props;

		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				if (location.pathname.includes(headerLink.pathname)) {
					return { ...headerLink, active: true };
				}

				return { ...headerLink, active: false };
			}),
		});
	}

	render() {
		const { toggleSidebar, showSidebar, toggleSearchbar } = this.props;

		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo to="/" />
					</Link>

					<Searchbar />

					<HeaderUtils>
						<StyledHeartIcon />

						<ThemeToggler />

						<StyledSearchIcon onClick={toggleSearchbar} />

						{showSidebar ? (
							<StyledDeleteIcon
								onClick={toggleSidebar}
							></StyledDeleteIcon>
						) : (
							<StyledHamburgerIcon onClick={toggleSidebar} />
						)}
					</HeaderUtils>

					<HeaderLinks show={showSidebar}>
						{this.state.headerLinks.map((headerLink) => {
							return (
								<StyledLink
									to={headerLink.to}
									key={headerLink.value}
									onClick={(event) => {
										this.handleLinkClick(
											event,
											headerLink.value
										);
									}}
									$isActive={headerLink.active}
								>
									{" "}
									{showSidebar ? headerLink.icon : null}
									{headerLink.value}
								</StyledLink>
							);
						})}
					</HeaderLinks>
				</HeaderContainer>
			</StyledHeader>
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
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		},
		toggleSearchbar: () => {
			dispatch(toggleSearchbar());
		},
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
