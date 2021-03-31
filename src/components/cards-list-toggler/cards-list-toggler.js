import React from "react";

import { StyledCardsListToggler, Title } from "./cards-list-toggler.styles";
import { StyledChevronDownIcon } from "../../styles/styles.icons";
import { cssColors } from "../../styles/styles.variables";

const CardsListToggler = ({
	title,
	optionalValue,
	trigger,
	rotateIconUp,
	handleTogglerClick,
}) => {
	const mutedStyles = {
		color: cssColors.greyLighter,
	};

	return (
		<StyledCardsListToggler
			onClick={() => {
				handleTogglerClick(trigger);
			}}
		>
			<Title>
				{title}{" "}
				<span style={mutedStyles}>
					{optionalValue && { optionalValue }}
				</span>{" "}
			</Title>
			<StyledChevronDownIcon $noColor $rotateIconUp={rotateIconUp} />
		</StyledCardsListToggler>
	);
};

export default CardsListToggler;
