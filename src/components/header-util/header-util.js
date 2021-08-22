import React from "react";

import { StyledHeaderUtil, StyledText } from "./header-util.styles";

const HeaderUtil = ({ text, clickHandler, children }) => {
	const getTextToDisplay = () => {
		if (!text) {
			return;
		}

		if (text > 99) {
			return 99;
		}

		return text;
	};

	return (
		<StyledHeaderUtil onClick={clickHandler}>
			{children}
			{text > 0 && <StyledText>{getTextToDisplay()}</StyledText>}
		</StyledHeaderUtil>
	);
};

export default HeaderUtil;
