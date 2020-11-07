import React from "react";

import { Link } from "react-router-dom";

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
	StyledSunIcon,
	StyledHeartIcon,
	StyledHamburgerIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
} from "./header.styles";

import SearchBar from "../search-bar/search-bar";

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			headerLinks: [
				{
					value: "movies",
					icon: <StyledMovieIcon />,
					to: "/",
				},

				{
					value: "tv shows",
					icon: <StyledTvIcon />,
					to: "/tvshows",
				},

				{
					value: "sign in",
					icon: <StyledLoginIcon />,
					to: "/signin",
				},
			],
			showSidebar: false,
			showSearchbarOnSmallScreens: false,
		};
	}

	toggleSideBar = () => {
		this.setState((prevState) => {
			return {
				showSidebar: !prevState.showSidebar,
			};
		});
	};

	toggleSearchBar = () => {
		this.setState((prevState) => {
			return {
				showSearchbarOnSmallScreens: !prevState.showSearchbarOnSmallScreens,
			};
		});
	};

	render() {
		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo to="/" />
					</Link>

					<SearchBar
						showOnSmallScreens={
							this.state.showSearchbarOnSmallScreens
						}
						toggleSearchBar={this.toggleSearchBar}
					/>

					<HeaderUtils>
						<StyledHeartIcon smaller="true" />

						<StyledSunIcon smaller="true" />

						<StyledSearchIcon onClick={this.toggleSearchBar} />

						{this.state.showSidebar ? (
							<StyledDeleteIcon
								onClick={this.toggleSideBar}
							></StyledDeleteIcon>
						) : (
							<StyledHamburgerIcon onClick={this.toggleSideBar} />
						)}
					</HeaderUtils>

					<HeaderLinks show={this.state.showSidebar}>
						{this.state.headerLinks.map((headerLink) => {
							return (
								<StyledLink
									to={headerLink.to}
									key={headerLink.value}
								>
									{" "}
									{this.state.showSidebar
										? headerLink.icon
										: null}
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

export default Header;
