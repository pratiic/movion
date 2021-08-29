import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { WrapperStyles } from "../../styles/styles.wrapper";

export const FetchTypeMenuWrapper = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 3;
	top: 8rem;
	right: 0;

	@media screen and (max-width: 500px) {
		top: 7rem;
	}
`;

export const StyledFetchTypeMenu = styled.div`
	position: relative;
`;

export const FetchTypeOptionDisplay = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	border: 1px solid ${cssColors.greyText};
	width: fit-content;
	padding: 0.2rem 0.85rem;
	border-radius: 5px;
	font-size: 1.65rem;
	color: ${cssColors.greyLighter};

	svg {
		margin: 0 0 0 0.75rem;

		path {
			fill: ${cssColors.greyLighter};
		}
	}

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
`;
