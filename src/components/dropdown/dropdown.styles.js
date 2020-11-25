import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledDropdown = styled.div`
	position: absolute;
	z-index: 7;
	background-color: ${cssColors.greyDark};
	border-radius: 5px;
	text-transform: lowercase;
	white-space: nowrap;
	box-shadow: 0 0 1.3rem 0 rgba(0, 0, 0, 0.5);

	${({ forComponent }) => {
		if (forComponent === "profile") {
			return css`
				right: 0;
				top: 4rem;
			`;
		} else if (forComponent === "searchbar") {
			return css`
				left: 0.2rem;
				bottom: -8rem;
			`;
		} else if (forComponent === "card") {
			return css`
				bottom: 3.75rem;
				right: 0.7rem;
			`;
		}
	}}

	${({ show }) => {
		if (show) {
			return css`
				display: block;
			`;
		} else {
			return css`
				display: none;
			`;
		}
	}}
`;
