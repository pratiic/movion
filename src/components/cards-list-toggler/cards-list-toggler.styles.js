import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledCardsListToggler = styled.div`
	color: ${cssColors.greyLighter};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	border-bottom: 1px solid ${cssColors.greyLighter};
	border-radius: 5px;
	margin: 0 auto 2rem auto;
	font-weight: 300;
	cursor: pointer;

	&:hover {
		color: white;

		svg {
			path {
				fill: white;
			}
		}
	}

	&:active {
		color: ${cssColors.greyLighter};

		svg {
			path {
				fill: ${cssColors.greyLighter};
			}
		}
	}

	@media screen and (max-width: 1000px) {
		width: 80%;
	}

	@media screen and (max-width: 500px) {
		width: 85%;
	}
`;

export const Title = styled.p`
	font-size: 2.5rem;
	text-transform: capitalize;
`;
