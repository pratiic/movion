import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import { ReactComponent as MovieIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as TvIcon } from "../../assets/icons/tv.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";

import { cssColors } from "../../styles/styles.variables";
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

export const HeaderIconStyles = css`
	width: 2rem;
	height: 2rem;
	cursor: pointer;

	path {
		fill: ${cssColors.greyLighter};
	}

	&:hover {
		path {
			fill: ${cssColors.bluePrimary};
		}
	}

	&:active {
		path {
			fill: ${cssColors.greyLighter};
		}
	}
`;

export const StyledHeader = styled.header`
	background-color: ${cssColors.blueSecondary};
	padding: 0.5rem 0;
	z-index: 5;
`;

const HeaderLinkIconStyles = css`
	display: none;
	height: 1.85rem;
	width: 1.85rem;
	margin-right: 1.7rem;

	path {
		fill: ${cssColors.greyLighter};
	}

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

export const HeaderContainer = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledLogo = styled(Logo)`
	width: 15rem;
	height: 5rem;
	cursor: pointer;

	@media screen and (max-width: 850px) {
		width: 13rem;
	}
`;

export const StyledMovieIcon = styled(MovieIcon)`
	${HeaderLinkIconStyles};
`;
export const StyledTvIcon = styled(TvIcon)`
	${HeaderLinkIconStyles};
`;
export const StyledLoginIcon = styled(LoginIcon)`
	${HeaderLinkIconStyles};
`;
