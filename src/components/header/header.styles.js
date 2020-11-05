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

	@media screen and (max-width: 1100px) {
		margin-left: 2.5rem;
	}

	@media screen and (max-width: 1000px) {
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

export const headerIconStyles = css`
	width: 2rem;
	height: 2rem;
`;

const HamSearchIconStyles = css`
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
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

	@media screen and (max-width: 700px) {
		width: 13rem;
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

		@media screen and (max-width: 1000px) {
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

			@media screen and (max-width: 1000px) {
				background-color: transparent;
			}
		}
	}
`;

export const HeaderLinks = styled.ul`
	display: flex;
	align-items: center;
	background-color: ${cssColors.blueSecondary};

	@media screen and (max-width: 1000px) {
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

export const StyledIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${headerElementStyles};

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
`;

export const StyledHeartIcon = styled(HeartIcon)`
	path {
		fill: ${cssColors.orangePrimary};
		stroke-width: 0px;
	}

	${headerIconStyles};
`;

export const SearchHamContainer = styled.div`
	display: none;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1000px) {
		display: flex;
	}

	@media screen and (max-width: 700px) {
		background-color: ${cssColors.greyLight};
		padding: 0.4rem 0.75rem;
		border-radius: 5px;
	}
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	${HamSearchIconStyles};
	margin-left: 3.5rem;

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
`;

export const StyledSearchIcon = styled(SearchIcon)`
	display: none;

	${HamSearchIconStyles};

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

	@media screen and (max-width: 700px) {
		display: block;
	}
`;
