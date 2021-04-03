import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.bgFocused};
	border-radius: 7px;
	padding: 0 1.5rem;
	position: relative;
	margin: 0 1.7rem 0.75rem 1.7rem;
`;

export const Input = styled.input`
	width: 100%;
	height: 3.5rem;
	font-size: 1.7rem;
	font-family: ${cssFonts.fontStackPrimary};
	outline: none;
	background-color: inherit;
	border: none;
	color: ${({ theme }) => theme.textIconBlur};
`;

export const Icons = styled.div`
	margin-left: 1.75rem;
	display: flex;
	justify-content: center;
	align-items: center;

	& > :not(:first-child) {
		margin-left: 1.75rem;
	}
`;

export const SendButton = styled.button`
	outline: none;
	border: none;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;
