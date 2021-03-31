import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { CardStyles } from "../../styles/styles.generic";

export const StyledPersonCard = styled.div`
	${CardStyles};

	.card-image-container {
		height: 15rem;

		img {
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}

		cursor: auto;
		border: 1px solid ${({ theme }) => theme.bgFocused};
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.content-info {
		font-size: 1.6rem;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top: none;
		padding: 0.4rem 0.7rem;
	}

	.content-description {
		color: ${cssColors.greyText};
		font-size: 1.6rem;
	}
`;
