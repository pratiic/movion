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
						<StyledLink to="/">
							{" "}
							{this.state.showSidebar ? (
								<StyledMovieIcon />
							) : null}
							movies
						</StyledLink>
						<StyledLink to="/tvshows">
							{" "}
							{this.state.showSidebar ? <StyledTvIcon /> : null}
							tv shows
						</StyledLink>
						<StyledLink to="/signin">
							{" "}
							{this.state.showSidebar ? (
								<StyledLoginIcon />
							) : null}
							sign in
						</StyledLink>
					</HeaderLinks>
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

export default Header;
