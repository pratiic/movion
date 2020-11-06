import React from "react";

import { Link } from "react-router-dom";

import {
	StyledHeader,
	HeaderContainer,
	StyledLogo,
	HeaderUtils,
	HeaderLinks,
	StyledLink,
	StyledSunIcon,
	StyledHeartIcon,
	StyledHamburgerIcon,
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

						<StyledHamburgerIcon onClick={this.toggleSideBar} />
					</HeaderUtils>

					<HeaderLinks show={this.state.showSidebar}>
						<StyledLink to="/">movies</StyledLink>
						<StyledLink to="/tvshows">tv shows</StyledLink>
						<StyledLink to="/signin">sign in</StyledLink>
					</HeaderLinks>
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

export default Header;
