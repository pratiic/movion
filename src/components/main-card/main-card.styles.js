import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";
import { CardStyles } from "../../styles/styles.generic";

export const StyledMainCard = styled.div`
	font-family: ${cssFonts.fontStackTertiary};
	font-weight: 300;

	${CardStyles};

	.card-image-container {
		height: 30rem;
		box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.35);
	}

	.content-info {
		position: relative;
		border-top: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 0.55rem 0.8rem;
		box-shadow: 0 0.3rem 0.45rem 0 rgba(0, 0, 0, 0.35);
		margin-bottom: 0.7rem;
	}

	.content-release-date {
		color: ${cssColors.greyText};
		font-size: 1.6rem;
	}
`;
