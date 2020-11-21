import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledDropdown = styled.div`
	position: absolute;
	z-index: 7;
	background-color: ${cssColors.greyLight};
	border-radius: 5px;
	text-transform: lowercase;
	white-space: nowrap;

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
				top: 3.5rem;
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
