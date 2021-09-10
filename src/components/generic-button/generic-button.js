import React from "react";

import { StyledGenericButton, LoadMoreButton } from "./generic-button.styles";

const GenericButton = ({
	displayType,
	children,
	handleButtonClick,
	...otherProps
}) => {
	if (displayType === "load-more") {
		return (
			<LoadMoreButton onClick={handleButtonClick}>
				{children}
			</LoadMoreButton>
		);
	}

	return (
		<StyledGenericButton {...otherProps} onClick={handleButtonClick}>
			{children}
		</StyledGenericButton>
	);
};

export default GenericButton;
