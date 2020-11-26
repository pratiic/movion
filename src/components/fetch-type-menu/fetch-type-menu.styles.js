import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { WrapperStyles } from "../../styles/styles.generic";

export const FetchTypeMenuWrapper = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 3;
	top: 8rem;
	right: 0;
`;

export const StyledFetchTypeMenu = styled.div`
	position: relative;
`;

export const FetchTypeOptionDisplay = styled.div`
	display: flex;
	align-items: center;
	color: ${cssColors.greyLighter};
	cursor: pointer;
	border: 1px solid ${cssColors.greyText};
	width: fit-content;
	padding: 0.2rem 0.85rem;
	border-radius: 5px;
	font-size: 1.65rem;

	svg {
		margin: 0 0 0 0.75rem;
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
