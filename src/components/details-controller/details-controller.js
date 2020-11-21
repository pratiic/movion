import React from "react";

import { StyledDetailsController } from "./details-controller.styles";

const DetailsController = ({ icon, value }) => {
	return (
		<StyledDetailsController>
			{icon} {value}
		</StyledDetailsController>
	);
};

export default DetailsController;
