import React from "react";

import { StyledDropdown } from "./dropdown.styles";

const Dropdown = (props) => {
	const { forComponent, show, children } = props;

	return (
		<StyledDropdown forComponent={forComponent} show={show}>
			{children}
		</StyledDropdown>
	);
};

export default Dropdown;
