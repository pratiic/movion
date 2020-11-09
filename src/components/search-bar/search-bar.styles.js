import styled, { css } from "styled-components";

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";

import { cssColors } from "../../styles/styles.variables";

import { headerIconStyles } from "../header/header.styles";

const SearchBarControlStyles = css`
	${headerIconStyles};

	width: 1.7rem;
	height: 1.7rem;
	margin-left: 1.3rem;
`;

const SearchBarLayoutStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SearchBarTextStyles = css`
	font-size: 1.65rem;
	color: ${cssColors.greyLighter};
`;

export const SearchInputForm = styled.form`
	@media screen and (max-width: 850px) {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		z-index: -1;
		opacity: 0;
		transition: top 250ms ease-in, opacity 300ms ease-in;
		${({ showOnSmallScreens }) =>
			showOnSmallScreens &&
			css`
				top: 6.7rem;
				z-index: 0;
				opacity: 1;
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
	${SearchBarLayoutStyles};
	background-color: ${cssColors.greyLight};
	padding: 0.7rem 0.85rem;
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
	${SearchBarTextStyles};

	::-webkit-input-placeholder {
		letter-spacing: 1px;
		${SearchBarTextStyles};
	}

	@media screen and (max-width: 500px) {
		width: 50%;
	}
`;

export const SearchOptionDisplay = styled.p`
	${SearchBarTextStyles};
	margin-right: 1rem;
	cursor: pointer;
	${SearchBarLayoutStyles};
	height: 100%;
	border-right: 1px solid ${cssColors.greyLighter};
	white-space: nowrap;

	&:hover {
		color: white;

		svg {
			path {
				fill: white;
			}
		}
	}
`;

export const SearchOptions = styled.div`
	position: absolute;
	background-color: ${cssColors.greyLight};
	bottom: -7rem;
	left: 0.2rem;
	border-radius: 5px;
`;

export const SearchOption = styled.p`
	${SearchBarTextStyles};
	padding: 0.7rem 1.55rem;
	text-align: center;
	cursor: pointer;
	border-radius: inherit;

	&:hover {
		background-color: ${cssColors.greyDark};
	}
`;

export const SearchInputControls = styled.div`
	${SearchBarLayoutStyles};
`;

export const StyledSearchIcon = styled(Search)`
	${SearchBarControlStyles};
`;

export const StyledDeleteIcon = styled(Delete)`
	${SearchBarControlStyles};
`;

export const StyledArrowUpIcon = styled(ArrowUpIcon)`
	display: none;

	${SearchBarControlStyles};

	width: 1.95rem;
	height: 1.95rem;

	@media screen and (max-width: 850px) {
		display: block;
	}
`;

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
	margin: 0 0.75rem;

	width: 1.7rem;
	height: 1.7rem;

	path {
		fill: ${cssColors.greyLighter};
	}
`;
