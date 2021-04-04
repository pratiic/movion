import React from "react";

import { StyledDropdown, Indicator } from "./dropdown.styles";

const Dropdown = ({ forComponent, show, children, indicator }) => {
	return (
		<StyledDropdown forComponent={forComponent} show={show}>
			<Indicator indicator={indicator}></Indicator>
			{children}
		</StyledDropdown>
	);
};

export default Dropdown;
