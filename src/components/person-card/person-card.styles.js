import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const StyledPersonCard = styled.div`
	font-family: ${cssFonts.fontStackTertiary};

	.image-container {
		img {
			height: 100%;
			width: 100%;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			display: block;
		}
	}

	.person-info {
		font-size: 1.6rem;
		font-weight: 300;
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
