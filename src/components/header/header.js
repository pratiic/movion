import React from "react";

import { Link } from "react-router-dom";

import {
	StyledHeader,
	HeaderContainer,
	StyledLogo,
	HeaderLinks,
	StyledLink,
	StyledSunIcon,
	StyledHeartIcon,
} from "./header.styles";

import SearchBar from "../search-bar/search-bar";

class Header extends React.Component {
	render() {
		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo to="/" />
					</Link>

					<SearchBar />

					<HeaderLinks>
						<StyledLink to="/">movies</StyledLink>
						<StyledLink to="/tvshows">tv shows</StyledLink>
						<StyledHeartIcon />
						<StyledSunIcon />
						<StyledLink to="/signin">sign in</StyledLink>
					</HeaderLinks>
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

export default Header;
