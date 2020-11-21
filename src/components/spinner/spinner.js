import React from "react";

import { SpinnerOverlay, StyledSpinner } from "./spinner.styles";

const Spinner = ({ height, smaller }) => {
	return (
		<SpinnerOverlay height={height}>
			<StyledSpinner smaller={smaller}></StyledSpinner>
		</SpinnerOverlay>
	);
};

export default Spinner;
