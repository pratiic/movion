import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";

import { WrapperStyles } from "../../styles/styles.generic";

export const HeaderElementStyles = css`
	margin-left: 3rem;
	cursor: pointer;

	@media screen and (max-width: 850px) {
		margin-left: 3.4rem;
	}

	@media screen and (max-width: 400px) {
		margin-left: 2.4rem;
	}

	@media screen and (max-width: 350px) {
		margin-left: 1.75rem;
	}

	&:first-child {
		margin-left: 0;
	}
`;

export const StyledHeader = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.headerBg};
	z-index: 5;
	transition: opacity 250ms ease-in;
	height: 6.5rem;
	display: flex;
	align-items: center;
`;

export const HeaderContainer = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const StyledLogo = styled(Logo)`
	width: 15rem;
	height: 5rem;
	cursor: pointer;

	@media screen and (max-width: 850px) {
		width: 13rem;
	}
`;
