import styled from "styled-components";

import { SearchbarTextStyles } from "../search-bar/search-bar.styles";
import { dropdownHeaderStyles } from "../dropdown/dropdown.styles";

export const StyledDropdownItem = styled.div`
	${SearchbarTextStyles};
	padding: 0.7rem 1.55rem;
	text-align: center;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 4;

	${dropdownHeaderStyles};

	&:nth-child(2) {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	&:last-child {
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};
		color: ${({ theme }) => theme.textFocused};
	}

	svg {
		display: block;
		margin-right: 0.8rem;
	}
`;
