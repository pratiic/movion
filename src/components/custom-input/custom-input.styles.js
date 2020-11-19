import styled, { css } from "styled-components";

import { cssFonts, cssColors } from "../../styles/styles.variables";

export const LabelStyles = css`
	top: -2rem;
	font-size: 1.5rem;
	color: ${cssColors.greyText};
`;

export const InputGroup = styled.div`
	position: relative;
	width: 100%;
	font-size: 1.75rem;
	font-family: ${cssFonts.fontStackPrimary};
	margin-bottom: 4rem;
`;

export const Input = styled.input`
	outline: none;
	background-color: transparent;
	border: none;
	border-bottom: ${({ errorMsg, inputValue }) =>
		errorMsg
			? `2px solid ${cssColors.googleRed}`
			: inputValue.length > 0
			? `2px solid ${cssColors.bluePrimary}`
			: `2px solid ${cssColors.greyText}`};
	width: 100%;
	padding: 0.3rem 0.5rem;
	color: ${cssColors.greyLighter};
	font-size: inherit;
	font-family: inherit;
	position: relative;

	&:focus {
		border-bottom: ${({ errorMsg }) =>
			errorMsg
				? `2px solid ${cssColors.googleRed}`
				: `2px solid ${cssColors.bluePrimary}`};

		& ~ label {
			${LabelStyles};
		}
	}
`;

export const Label = styled.label`
	position: absolute;
	font-size: 1.7rem;
	color: ${cssColors.greyLighter};
	text-transform: capitalize;
	left: 0.5rem;
	display: block;
	top: 10%;
	transition: top 200ms ease-in, font-size 200ms ease-in;
	${({ value }) => value && value.length > 0 && LabelStyles};
`;

export const FormError = styled.p`
	position: absolute;
	font-size: 1.3rem;
	left: 0.5rem;
	color: ${cssColors.googleRed};
`;
