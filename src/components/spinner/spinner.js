import React from "react";

import { SpinnerOverlay, StyledSpinner } from "./spinner.styles";
import { StyledMessage } from "../../styles/styles.generic";

const Spinner = ({ height, smaller, message }) => {
	return (
		<SpinnerOverlay height={height}>
			<StyledSpinner smaller={smaller}></StyledSpinner>
			{message && <StyledMessage>{message}</StyledMessage>}
		</SpinnerOverlay>
	);
};

export default Spinner;
