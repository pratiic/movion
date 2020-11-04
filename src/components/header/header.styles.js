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
	background-color: ${cssColors.greyBgSecondary};
`;

export const StyledHeaderContainer = styled.div`
	max-width: 1400px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 5rem;
`;

export const StyledLogo = styled(Logo)`
	width: 17rem;
	height: 5rem;
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	color: white;
	font-size: 1.85rem;
	text-transform: capitalize;
	letter-spacing: 1px;
	position: relative;
	font-family: ${cssFonts.fontStackTertiary};
	transition: padding 100ms ease-in;
	${headerElementStyles}
	font-weight: 400;

	&:active {
		color: ${cssColors.greyTextPrimary};
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -0.55rem;
		width: 100%;
		height: 3px;
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
`;

export const StyledHeaderLinks = styled.ul`
	display: flex;
`;

export const headerIconStyles = css`
	width: 2.25rem;
	height: 2.25rem;

	&:hover {
		path {
			fill: ${cssColors.bluePrimary};
		}
	}

	&:active {
		path {
			fill: ${cssColors.greyTextPrimary};
		}
	}
`;

export const StyledSunIcon = styled(SunIcon)`
	${headerIconStyles}
	${headerElementStyles}
`;

export const StyledHeartIcon = styled(HeartIcon)`
	${headerIconStyles}
	${headerElementStyles}
`;
