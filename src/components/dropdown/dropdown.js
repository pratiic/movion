import React from "react";

import { StyledDropdown } from "./dropdown.styles";

const Dropdown = ({ forComponent, show, children }) => {
	return (
		<StyledDropdown forComponent={forComponent} show={show}>
			{children}
		</StyledDropdown>
	);
};

export default Dropdown;
