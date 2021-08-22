import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { cssColors, cssFonts } from "../../styles/styles.variables";
import { StyledProfilePicture } from "../profile-picture/profile-picture.styles";

import { HeaderElementStyles } from "../header/header.styles";

const ActiveLinkStyles = css`
	${({ theme }) =>
		theme &&
		css`
			color: ${theme.textFocused};

			@media screen and (max-width: 1150px) {
				background-color: ${theme.bgFocused};

				svg {
					path {
						fill: ${theme.iconFocused};
					}
				}
			}
		`}
`;

export const HeaderLinksOverlay = styled.div`
	display: ${({ show }) => (show ? "block" : "none")};

	position: absolute;
	left: 0;
	top: 5rem;
	width: 100%;
	height: calc(100vh - 5rem);
	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledHeaderLinks = styled.ul`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.headerBg};
	font-size: 1.55rem;

	@media screen and (max-width: 1150px) {
		position: fixed;
		z-index: 10;
		right: 0;
		top: 5rem;
		flex-direction: column;
		align-items: flex-start;
		height: calc(100vh - 5rem);
		transition: transform 200ms ease-in;
		transform: ${({ show }) => {
			return show ? `translateX(0)` : `translateX(100%)`;
		}};
	}
`;

export const StyledLink = styled(Link)`
	text-transform: capitalize;
	letter-spacing: 1px;
	position: relative;
	font-family: ${cssFonts.fontStackTertiary};
	color: ${({ theme }) => theme.textIconBlur};
	display: flex;
	align-items: center;
	${HeaderElementStyles};
	${({ $isActive }) => $isActive && ActiveLinkStyles};

	${({ forSmallerScreens }) =>
		forSmallerScreens &&
		css`
			display: none;

			@media screen and (max-width: 1150px) {
				display: flex;
			}
		`}

	${({ $currentUser, $hideOnCurrentUser }) => {
		if ($hideOnCurrentUser && $currentUser) {
			return css`
				display: none;
			`;
		}
	}}

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
		color: ${({ theme }) => theme.textFocused};

		&::after {
			transform: scaleX(1);
		}
	}

	&:active {
		color: ${({ theme }) => theme.textIconBlur};

		&::after {
			background-color: ${({ theme }) => theme.textIconBlur};
		}
	}

	@media screen and (max-width: 1150px) {
		margin-left: 0;
		width: 100%;
		padding: 1rem 5.5rem;
		text-align: center;
		border-bottom: 1px solid ${({ theme }) => theme.bgFocused};

		&:hover {
			${ActiveLinkStyles};
		}
	}
`;
