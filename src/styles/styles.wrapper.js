import styled, { css } from "styled-components";

const WrapperCommonStyles = css`
	margin: auto;

	@media screen and (max-width: 750px) {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}

	@media screen and (max-width: 550px) {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}

	@media screen and (max-width: 450px) {
		padding-left: 1.3rem;
		padding-right: 1.3rem;
	}
`;

export const WrapperStyles = css`
	max-width: 1400px;
	padding: 0 7rem;

	@media screen and (max-width: 850px) {
		padding-left: 5rem;
		padding-right: 5rem;
	}

	${WrapperCommonStyles};
`;

export const Wrapper = styled.div`
	${WrapperStyles};
`;

export const WrapperSmallStyles = css`
	${WrapperCommonStyles};

	max-width: 60rem;
`;

export const WrapperSmall = styled.div`
	${WrapperSmallStyles}
`;
