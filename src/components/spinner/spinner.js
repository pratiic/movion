import React from "react";

import { SpinnerOverlay, StyledSpinner } from "./spinner.styles";

const Spinner = ({ height }) => {
	return (
		<SpinnerOverlay height={height}>
			<StyledSpinner></StyledSpinner>
		</SpinnerOverlay>
	);
};

export default Spinner;
