import React from "react";

import { StyledGenericButton } from "./generic-button.styles";

const GenericButton = ({ value, icon, handleButtonClick, ...otherProps }) => {
	return (
		<StyledGenericButton {...otherProps} onClick={handleButtonClick}>
			{icon && icon} {value}
		</StyledGenericButton>
	);
};

export default GenericButton;
