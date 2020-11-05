import styled, { css } from "styled-components";

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg";

import { cssColors } from "../../styles/styles.variables";

const SearchBarControlStyles = css`
	width: 1.55rem;
	height: 1.55rem;

	path {
		stroke: ${cssColors.greyLighter};
	}

	margin-left: 1rem;
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
`;

const SearchBarLayoutStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SearchBarTextStyles = css`
	font-size: 1.55rem;
	color: ${cssColors.greyLighter};
`;

export const SearchInputGroup = styled.div`
	${SearchBarLayoutStyles};
	min-width: 35rem;
	background-color: ${cssColors.greyLight};
	padding: 0.55rem 0.85rem;
	border-radius: 3px;
	position: relative;
	border: ${({ focused }) => {
		return focused ? `1px solid ${cssColors.bluePrimary}` : "none";
	}};
`;

export const SearchInput = styled.input`
	background-color: transparent;
	outline: none;
	flex: 1 0 auto;
	border: none;
	font-family: inherit;
	${SearchBarTextStyles};

	::-webkit-input-placeholder {
		letter-spacing: 1px;
		${SearchBarTextStyles};
	}
`;

export const SearchOptionDisplay = styled.p`
	${SearchBarTextStyles};
	margin-right: 1rem;
	cursor: pointer;
	text-transform: capitalize;
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
	text-transform: capitalize;

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

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
	width: 1.2rem;
	height: 1rem;
	margin: 0 0.25rem;

	path {
		fill: ${cssColors.greyLighter};
	}
`;
