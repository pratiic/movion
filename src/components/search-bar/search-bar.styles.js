import styled, { css } from "styled-components";

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "../../assets/icons/chevron-up.svg";

import { cssColors } from "../../styles/styles.variables";

const SearchBarControlStyles = css`
	width: 1.7rem;
	height: 1.7rem;

	path {
		stroke: ${cssColors.greyLighter};
	}

	margin-left: 1.3rem;
	cursor: pointer;

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

	@media screen and (max-width: 500px) {
		width: 1.6rem;
		height: 1.6rem;
		margin-left: 0.9rem;
	}
`;

const SearchBarLayoutStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SearchBarTextStyles = css`
	font-size: 1.6rem;
	color: ${cssColors.greyLighter};

	@media screen and (max-width: 500px) {
		font-size: 1.55rem;
	}
`;

export const SearchInputForm = styled.form`
	@media screen and (max-width: 700px) {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		transition: top 250ms ease-in, opacity 300ms ease-in;
		top: ${({ showOnSmallScreens }) =>
			showOnSmallScreens ? `6.7rem` : `0rem`};
		z-index: ${({ showOnSmallScreens }) =>
			showOnSmallScreens ? `0` : `-1`};
		opacity: ${({ showOnSmallScreens }) =>
			showOnSmallScreens ? `1` : `0`};
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
	padding: 0.85rem 0.85rem;
	border-radius: 3px;
	position: relative;
	border: ${({ focused }) => {
		return focused ? `1px solid ${cssColors.bluePrimary}` : "none";
	}};
	width: 100%;

	/* & > * {
		flex: 1 1 auto;
	} */

	@media screen and (max-width: 700px) {
		padding: 1rem 0.85rem;
	}
`;

export const SearchInput = styled.input`
	background-color: transparent;
	outline: none;
	/* flex: 1 1 auto; */
	//width: 50%;
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
	//text-transform: capitalize;
	${SearchBarLayoutStyles};
	height: 100%;
	border-right: 1px solid ${cssColors.greyLighter};
	white-space: nowrap;

	&:hover {
		color: white;

		& > * {
			path {
				fill: white;
				stroke: white;
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
	//text-transform: capitalize;

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

export const StyledChevronUpIcon = styled(ChevronUpIcon)`
	display: none;

	${SearchBarControlStyles};

	g {
		fill: ${cssColors.greyLighter};
	}

	&:hover {
		g {
			fill: white;
		}
	}

	&:active {
		g {
			fill: ${cssColors.greyLighter};
		}
	}

	@media screen and (max-width: 700px) {
		display: block;
	}
`;

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
	width: 1rem;
	height: 1rem;
	margin: 0 0.75rem;

	path {
		fill: ${cssColors.greyLighter};
		stroke: ${cssColors.greyLighter};
		stroke-width: 7px;
	}
`;
