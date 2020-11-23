import styled from "styled-components";

import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg";

import { cssColors } from "../../styles/styles.variables";

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
	path {
		fill: ${cssColors.greyLighter};
	}

	height: 2.5rem;
	width: 2.5rem;

	transition: transform 150ms ease-in;
	transform: ${({ rotateIconUp }) =>
		rotateIconUp ? `rotate(180deg)` : `rotate(0deg)`};
`;

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
