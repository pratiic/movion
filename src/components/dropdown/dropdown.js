import React from "react";

import { StyledDropdown } from "./dropdown.styles";

class Dropdown extends React.Component {
	render() {
		const { forComponent, show, children } = this.props;

		return (
			<StyledDropdown forComponent={forComponent} show={show}>
				{children}
			</StyledDropdown>
		);
	}
}

export default Dropdown;
