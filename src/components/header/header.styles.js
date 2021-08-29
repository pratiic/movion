import styled, { css } from "styled-components";

import { WrapperStyles } from "../../styles/styles.wrapper";

export const HeaderContainer = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: ${({ theme }) =>
		theme.bodyBg === "#e5e4e2" ? `1px solid ${theme.bgFocused}` : "none"};
`;

export const StyledHeader = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.headerBg};
	z-index: 5;
	transition: opacity 250ms ease-in;
	height: 5rem;
	display: flex;
	align-items: center;
`;

export const HeaderElementStyles = css`
	margin-left: 3rem;
	cursor: pointer;

	&:first-child {
		margin-left: 0;
	}

	@media screen and (max-width: 850px) {
		margin-left: 3.4rem;
	}

	@media screen and (max-width: 700px) {
		margin-left: 2.5rem;
	}

	@media screen and (max-width: 500px) {
		margin-left: 2rem;
	}

	@media screen and (max-width: 450px) {
		margin-left: 1.5rem;
	}
`;
