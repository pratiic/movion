import React from "react";

import { StyledGenericButton } from "./generic-button.styles";

const GenericButton = ({ value, outlined }) => {
	return (
		<StyledGenericButton outlined={outlined}>{value}</StyledGenericButton>
	);
};

export default GenericButton;
