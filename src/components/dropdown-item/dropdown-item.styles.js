import styled from "styled-components";

import { SearchbarTextStyles } from "../search-bar/search-bar.styles";

import { cssColors } from "../../styles/styles.variables";

export const StyledDropdownItem = styled.div`
	${SearchbarTextStyles};
	padding: 0.7rem 1.55rem;
	color: ${cssColors.greyLighter};
	text-align: center;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	&:last-child {
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}

	&:hover {
		background-color: ${cssColors.greyLight};
		color: white;
	}

	svg {
		display: block;
		margin-right: 0.8rem;
	}
`;
