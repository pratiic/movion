import React from "react";

import { Link } from "react-router-dom";

import {
	StyledHeader,
	StyledHeaderContainer,
	StyledLogo,
	StyledHeaderLinks,
	StyledLink,
	StyledSunIcon,
	StyledHeartIcon,
} from "./header.styles";

class Header extends React.Component {
	render() {
		return (
			<StyledHeader>
				<StyledHeaderContainer>
					<Link to="/">
						<StyledLogo to="/" />
					</Link>
					<StyledHeaderLinks>
						<StyledLink to="/">movies</StyledLink>
						<StyledLink to="/tvshows">tv shows</StyledLink>
						<StyledHeartIcon />
						<StyledSunIcon />
						<StyledLink to="/signin">sign in</StyledLink>
					</StyledHeaderLinks>
				</StyledHeaderContainer>
			</StyledHeader>
		);
	}
}

export default Header;
