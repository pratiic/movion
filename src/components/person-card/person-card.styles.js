import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { CardStyles } from "../../styles/styles.generic";

export const StyledPersonCard = styled.div`
	${CardStyles};

	.card-image-container {
		img {
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}

		cursor: auto;
	}

	.person-info {
		font-size: 1.6rem;
		border: 1px solid ${cssColors.greyLight};
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top: none;
		padding: 0.4rem 0.7rem;

		.person-name {
			margin-bottom: 0.7rem;
		}

		.person-description {
			color: ${cssColors.greyLighter};
			font-size: 1.5rem;
		}
	}
`;
