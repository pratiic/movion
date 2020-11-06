import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";

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
`;

export const headerIconStyles = css`
	width: 2rem;
	height: 2rem;
`;

const HamSearchIconStyles = css`
	width: 2.2rem;
	height: 2.2rem;
`;

export const StyledHeader = styled.header`
	background-color: ${cssColors.blueSecondary};
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
	transition: padding 100ms ease-in;
	font-family: ${cssFonts.fontStackTertiary};
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
		padding: 1rem 8rem;
		text-align: center;
		border-bottom: 1px solid ${cssColors.greyLight};

		&:hover {
			background-color: ${cssColors.greyLight};
		}
	}
`;

export const StyledIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${headerElementStyles};

	&:first-child {
		margin-left: 0;
	}

	&:hover {
		svg {
			path {
				fill: ${cssColors.bluePrimary};
			}
		}
	}

	&:active {
		svg {
			path {
				fill: ${cssColors.greyLighter};
			}
		}
	}
`;

export const StyledSunIcon = styled(SunIcon)`
	${headerIconStyles};

	path {
		fill: ${cssColors.greyLighter};
	}
`;

export const StyledHeartIcon = styled(HeartIcon)`
	path {
		fill: ${cssColors.orangePrimary};
		stroke-width: 0px;
	}

	${headerIconStyles};
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	display: none;

	${HamSearchIconStyles};
	${headerElementStyles};

	path {
		stroke: ${cssColors.greyLighter};
		stroke-width: 4px;
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

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

export const StyledSearchIcon = styled(SearchIcon)`
	display: none;

	${HamSearchIconStyles};
	${headerElementStyles};

	path {
		stroke: ${cssColors.greyLighter};
		stroke-width: 5px;
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

	@media screen and (max-width: 850px) {
		display: block;
	}
`;
