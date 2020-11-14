import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { cssColors, cssFonts } from "../../styles/styles.variables";

import { HeaderElementStyles } from "../header/header.styles";

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

export const StyledHeaderLinks = styled.ul`
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