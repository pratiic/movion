import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { StyledArrowUpIcon } from "../../styles/styles.icons";
import { dropdownHeaderStyles } from "../dropdown/dropdown.styles";

const SearchbarLayoutStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SearchbarTextStyles = css`
	font-size: 1.55rem;
	color: ${({ theme }) => theme.textIconBlur};
`;

export const SearchInputForm = styled.form`
	${StyledArrowUpIcon} {
		height: 2rem;
		width: 2rem;
	}

	@media screen and (max-width: 850px) {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		z-index: 5;
		opacity: 0;
		pointer-events: none;
		transition: top 250ms ease-in, opacity 300ms ease-in;
		${({ showSearchbarOnSmallScreens }) =>
			showSearchbarOnSmallScreens &&
			css`
				top: 6.7rem;
				z-index: 7;
				opacity: 1;
				pointer-events: all;
			`}
	}

	@media screen and (max-width: 500px) {
		width: 85%;
		margin: auto;
	}

	@media screen and (max-width: 400px) {
		width: 95%;
		margin: auto;
	}
`;

export const SearchInputGroup = styled.div`
	${SearchbarLayoutStyles};
	background-color: ${({ theme }) => theme.bgFocused};
	padding: 0.5rem 0.85rem;
	border-radius: 3px;
	position: relative;
	border: ${({ focused }) => {
		return focused ? `1px solid ${cssColors.bluePrimary}` : "none";
	}};
	width: 100%;

	@media screen and (max-width: 850px) {
		padding: 1rem 0.85rem;
	}
`;

export const SearchInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	font-family: inherit;
	flex: 1 1 auto;
	${SearchbarTextStyles};

	::-webkit-input-placeholder {
		letter-spacing: 1px;
		${SearchbarTextStyles};
	}

	@media screen and (max-width: 500px) {
		width: 50%;
	}
`;

export const SearchOptionDisplay = styled.p`
	font-size: 1.55rem;
	margin-right: 1rem;
	cursor: pointer;
	${SearchbarLayoutStyles};
	border-right: 1px solid ${({ theme }) => theme.textIconBlur};
	white-space: nowrap;

	${dropdownHeaderStyles};
`;

export const SearchOptions = styled.div`
	position: absolute;
	z-index: 7;
	background-color: ${cssColors.greyLight};
	bottom: -8rem;
	left: 0.2rem;
	border-radius: 5px;
`;

export const SearchOption = styled.p`
	${SearchbarTextStyles};
	padding: 0.7rem 1.55rem;
	text-align: center;
	cursor: pointer;
	border-radius: inherit;

	&:hover {
		background-color: ${cssColors.greyDark};
	}
`;

export const SearchInputControls = styled.div`
	${SearchbarLayoutStyles};
`;
