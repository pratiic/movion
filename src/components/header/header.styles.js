import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as MovieIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as TvIcon } from "../../assets/icons/tv.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";

import { Link } from "react-router-dom";

import { cssColors, cssFonts } from "../../styles/styles.variables";

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

const SidebarToggleIconStyles = css`
	display: none;

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

const ActiveLinkStyles = css`
	color: white;

	@media screen and (max-width: 1150px) {
		background-color: ${cssColors.greyLight};

		svg {
			path {
				fill: white;
			}
		}
	}
`;

export const StyledHeader = styled.header`
	background-color: ${cssColors.blueSecondary};
`;

const HeaderLinkIconStyles = css`
	height: 1.85rem;
	width: 1.85rem;
	margin-right: 1.7rem;

	${SidebarToggleIconStyles};

	path {
		fill: ${cssColors.greyLighter};
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
	color: ${cssColors.greyLighter};
	display: flex;
	align-items: center;
	${HeaderElementStyles};
	${({ $isActive }) => $isActive && ActiveLinkStyles};

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
		transform: ${({ $isActive }) =>
			$isActive ? "scaleX(1)" : "scaleX(0)"};
		transform-origin: left;

		@media screen and (max-width: 1150px) {
			display: none;
		}
	}

	&:hover {
		color: white;

		&::after {
			transform: scaleX(1);
		}
	}

	&:active {
		color: ${cssColors.greyLighter};

		&::after {
			background-color: ${cssColors.greyLighter};
		}
	}

	@media screen and (max-width: 1150px) {
		margin-left: 0;
		width: 100%;
		padding: 1rem 5.5rem;
		text-align: center;
		border-bottom: 1px solid ${cssColors.greyLight};

		&:hover {
			${ActiveLinkStyles};
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

export const StyledHeartIcon = styled(HeartIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};

	path {
		fill: ${cssColors.orangePrimary};
	}
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
	${SidebarToggleIconStyles}

	height: 2.5rem;
	width: 2.5rem;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
	${SidebarToggleIconStyles};
`;

export const StyledSearchIcon = styled(SearchIcon)`
	display: none;

	${HeaderElementStyles};
	${HeaderIconStyles};

	@media screen and (max-width: 850px) {
		display: block;
	}
`;
