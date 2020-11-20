import styled from "styled-components";

import { SearchbarTextStyles } from "../search-bar/search-bar.styles";

import { cssColors } from "../../styles/styles.variables";

export const StyledDropdownItem = styled.p`
	${SearchbarTextStyles};
	padding: 0.7rem 1.55rem;
	text-align: center;
	cursor: pointer;
	border-radius: inherit;

	&:hover {
		background-color: ${cssColors.greyDark};
	}
`;
