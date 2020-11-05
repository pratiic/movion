import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

import { Link } from "react-router-dom";

import { cssColors, cssFonts } from "../../styles/styles.variables";

const headerElementStyles = css`
	margin-left: 4rem;
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
`;

export const StyledLogo = styled(Logo)`
	width: 15rem;
	height: 5rem;
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	color: white;
	font-size: 1.55rem;
	text-transform: capitalize;
	letter-spacing: 1px;
	position: relative;
	font-family: ${cssFonts.fontStackTertiary};
	transition: padding 100ms ease-in;
	${headerElementStyles}
	font-weight: 400;

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
		}
	}
`;

export const HeaderLinks = styled.ul`
	display: flex;
	align-items: center;
`;

export const headerIconStyles = css`
	width: 2rem;
	height: 2rem;

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

export const StyledSunIcon = styled(SunIcon)`
	${headerIconStyles};
	${headerElementStyles};
`;

export const StyledHeartIcon = styled(HeartIcon)`
	path {
		fill: ${cssColors.orangePrimary};
		stroke-width: 0px;
	}

	${headerIconStyles};
	${headerElementStyles};
`;
