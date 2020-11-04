import styled, { css } from "styled-components";

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

import { cssColors } from "../../styles/styles.variables";

const SearchBarControlStyles = css`
	width: 1.75rem;
	height: 1.75rem;

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

export const SearchInputGroup = styled.div`
	${SearchBarLayoutStyles};
	width: 30rem;
	background-color: ${cssColors.greyLight};
	padding: 0.55rem 1.2rem;
	border-radius: 3px;
`;

export const SearchInput = styled.input`
	background-color: transparent;
	outline: none;
	color: ${cssColors.greyLighter};
	flex: 1 0 auto;
	font-size: 1.55rem;
	border: none;
	font-family: inherit;

	::-webkit-input-placeholder {
		color: ${cssColors.greyLighter};
		letter-spacing: 1px;
		font-size: inherit;
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
