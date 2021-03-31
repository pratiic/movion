import React from "react";

import { StyledGenericButton } from "./generic-button.styles";

const GenericButton = ({ children, handleButtonClick, ...otherProps }) => {
	return (
		<StyledGenericButton {...otherProps} onClick={handleButtonClick}>
			{children}
		</StyledGenericButton>
	);
};

export default GenericButton;
