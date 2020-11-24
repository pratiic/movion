import React from "react";

import { StyledGenericButton } from "./generic-button.styles";

const GenericButton = (props) => {
	const {
		value,
		btnType,
		width,
		size,
		marginbt,
		justify,
		bg,
		color,
		darkBg,
		type,
		hoverColor,
		icon,
		handleButtonClick,
	} = props;

	return (
		<StyledGenericButton
			size={size}
			btnType={btnType}
			width={width}
			marginbt={marginbt}
			justify={justify}
			bg={bg}
			color={color}
			darkBg={darkBg}
			type={type}
			hoverColor={hoverColor}
			onClick={handleButtonClick}
		>
			{icon && icon} {value}
		</StyledGenericButton>
	);
};

export default GenericButton;
