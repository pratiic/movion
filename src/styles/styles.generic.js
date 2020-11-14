import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
	font-size: 3.2rem;
	font-weight: 300;
	text-align: center;
	margin-bottom: 3.5rem;
	text-transform: capitalize;
	letter-spacing: 1px;
`;

export const WrapperStyles = css`
	max-width: 1400px;
	margin: auto;
	padding: 0 7rem;

	@media screen and (max-width: 850px) {
		padding: 0 5rem;
	}

	@media screen and (max-width: 750px) {
		padding: 0 3.5rem;
	}

	@media screen and (max-width: 550px) {
		padding: 0rem 2.5rem;
	}

	@media screen and (max-width: 450px) {
		padding: 0rem 1.75rem;
	}
`;
