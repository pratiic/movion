import styled from "styled-components";

import { StyledSearchIcon } from "../../styles/styles.icons";
import { cssFonts } from "../../styles/styles.variables";

export const StyledForm = styled.form`
	position: relative;
	margin-bottom: 0.75rem;

	${StyledSearchIcon} {
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		margin-left: 1rem;

		/* path {
			fill: ${({ theme }) => theme.textIconBlur};
		} */
	}
`;

export const Input = styled.input`
	display: block;
	background-color: ${({ theme }) => theme.bgFocused};
	border: none;
	outline: none;
	padding: 0.5rem 3.5rem;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.textIconBlur};
	border-radius: 5px;
	width: 100%;
	font-family: ${cssFonts.fontStackTertiary};
`;
