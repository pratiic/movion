import React from "react";

import { StyledHeaderUtil, StyledText } from "./header-util.styles";

const HeaderUtil = ({
	text,
	active,
	smallerScreen,
	smallScreen,
	children,
	clickHandler,
}) => {
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
		<StyledHeaderUtil
			active={active}
			smallerScreen={smallerScreen}
			smallScreen={smallScreen}
			onClick={clickHandler}
		>
			{children}
			{text > 0 && <StyledText>{getTextToDisplay()}</StyledText>}
		</StyledHeaderUtil>
	);
};

export default HeaderUtil;
