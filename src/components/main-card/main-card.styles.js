import styled from "styled-components";

import { CardStyles } from "../../styles/styles.cards";
import { cssColors, cssFonts } from "../../styles/styles.variables";
import { StyledGenericButton } from "../generic-button/generic-button.styles";

export const StyledMainCard = styled.div`
	${CardStyles};

	font-family: ${cssFonts.fontStackTertiary};
	font-weight: 300;
	height: fit-content;
	position: relative;

	.card-image-container {
		height: 30rem;
	}

	.content-info {
		position: relative;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 0.55rem 0.8rem;
	}

	.content-release-date {
		color: ${cssColors.greyText};
		font-size: 1.6rem;
	}

	${StyledGenericButton} {
		position: absolute;
		bottom: -4rem;
	}
`;
