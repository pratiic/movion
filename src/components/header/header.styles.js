import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as MovieIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as TvIcon } from "../../assets/icons/tv.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";

import { Link } from "react-router-dom";

import { cssColors, cssFonts } from "../../styles/styles.variables";

const headerElementStyles = css`
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

export const headerIconStyles = css`
	width: 2.2rem;
	height: 2.2rem;

	path {
		stroke: ${cssColors.greyLighter};
	}

	&:hover {
		path {
			stroke: white;
		}
	}

	&:active {
		path {
			stroke: ${cssColors.greyLighter};
		}
	}

	${({ smaller }) =>
		smaller &&
		css`
			width: 2rem;
			height: 2rem;
		`}
`;

const SideBarToggleIconStyles = css`
	display: none;

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

export const StyledHeader = styled.header`
	background-color: ${cssColors.blueSecondary};
`;

const HeaderLinkIconStyles = css`
	height: 1.85rem;
	width: 1.85rem;
	margin-right: 1.7rem;

	${SideBarToggleIconStyles};

	path {
		fill: white;
	}
`;

export const HeaderContainer = styled.div`
	max-width: 1400px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 5rem;
	font-size: 1.55rem;

	@media screen and (max-width: 550px) {
		padding: 0.5rem 2.5rem;
	}

	@media screen and (max-width: 450px) {
		padding: 0.5rem 1.75rem;
	}
`;

export const StyledLogo = styled(Logo)`
	width: 15rem;
	height: 5rem;
	cursor: pointer;

	@media screen and (max-width: 850px) {
		width: 13rem;
	}
`;

export const HeaderUtils = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderLinks = styled.ul`
	display: flex;
	align-items: center;
	background-color: ${cssColors.blueSecondary};

	@media screen and (max-width: 1150px) {
		position: fixed;
		right: 0;
		top: 6rem;
		flex-direction: column;
		align-items: flex-start;
		height: 100vh;
		transition: transform 200ms ease-in;
		transform: ${({ show }) => {
			return show ? `translateX(0)` : `translateX(100%)`;
		}};
		padding: 0.75rem 0;

		a {
			&:last-child {
				order: -1;
			}
		}
	}
`;

export const StyledLink = styled(Link)`
	text-transform: capitalize;
	letter-spacing: 1px;
	position: relative;
	font-family: ${cssFonts.fontStackTertiary};
	display: flex;
	align-items: center;
	${headerElementStyles};

	&:first-child {
		margin-left: 0;
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -0.4rem;
		width: 100%;
		height: 2px;
		background-color: ${cssColors.bluePrimary};
		transition: transform 150ms ease-in;
		transform: scaleX(0);
		transform-origin: left;

		@media screen and (max-width: 1150px) {
			background-color: transparent;
		}
	}

	&:hover {
		&::after {
			transform: scaleX(1);
		}
	}

	&:active {
		color: ${cssColors.greyLighter};

		&::after {
			background-color: ${cssColors.greyLighter};

			@media screen and (max-width: 1150px) {
				background-color: transparent;
			}
		}
	}

	@media screen and (max-width: 1150px) {
		margin-left: 0;
		width: 100%;
		padding: 1rem 5.5rem;
		text-align: center;
		border-bottom: 1px solid ${cssColors.greyLight};

		&:hover {
			background-color: ${cssColors.greyLight};
		}
	}

	@media screen and (max-width: 450px) {
		padding: 1rem 4.5rem;
	}

	@media screen and (max-width: 350px) {
		padding: 1rem 4rem;
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

export const StyledSunIcon = styled(SunIcon)`
	${headerElementStyles};
	${headerIconStyles};

	path {
		fill: ${cssColors.greyLighter};
	}

	&:hover {
		path {
			fill: white;
		}
	}

	&:active {
		path {
			fill: ${cssColors.greyLighter};
		}
	}
`;

export const StyledHeartIcon = styled(HeartIcon)`
	${headerElementStyles};
	${headerIconStyles};

	path {
		fill: ${cssColors.orangePrimary};
		stroke-width: 0px;
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

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	${headerElementStyles};
	${headerIconStyles};
	${SideBarToggleIconStyles}

	path {
		stroke-width: 4px;
	}
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${headerElementStyles};
	${headerIconStyles};
	${SideBarToggleIconStyles};

	path {
		stroke-width: 2px;
	}
`;

export const StyledSearchIcon = styled(SearchIcon)`
	display: none;

	${headerElementStyles};
	${headerIconStyles};

	height: 2rem;

	path {
		stroke-width: 5px;
	}

	@media screen and (max-width: 850px) {
		display: block;
	}
`;