import styled from "styled-components";

import { SearchbarTextStyles } from "../search-bar/search-bar.styles";

import { cssColors } from "../../styles/styles.variables";

export const StyledDropdownItem = styled.div`
	${SearchbarTextStyles};
	padding: 0.7rem 1.55rem;
	text-align: center;
	cursor: pointer;
	border-radius: inherit;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${cssColors.greyDark};
	}

	svg {
		display: block;
		margin-right: 0.8rem;
	}
`;
