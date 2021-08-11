import React from "react";
import { Link } from "react-router-dom";

import { StyledLogo } from "./logo.styles";

const Logo = ({ size }) => {
	return (
		<Link to="/">
			<StyledLogo size={size} />
		</Link>
	);
};

export default Logo;
