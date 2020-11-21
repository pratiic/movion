import styled, { css } from "styled-components";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";

import { HeaderElementStyles, HeaderIconStyles } from "../header/header.styles";

import { cssColors } from "../../styles/styles.variables";

export const SidebarToggleIconStyles = css`
	display: none;

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

export const SearchbarTogglerStyles = css`
	display: none;

	@media screen and (max-width: 850px) {
		display: block;
	}
`;

export const HeaderUtilStyles = css`
	${HeaderElementStyles};
	${HeaderIconStyles};

	height: 1.75rem;
	width: 1.7rem;
`;

export const StyledLessHeartIconStyles = css`
	&:hover {
		path {
			fill: ${cssColors.orangePrimary};
		}
	}

	&:active {
		path {
			fill: ${cssColors.orangePrimary};
		}
	}
`;

export const StyledHeaderUtils = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledHeartIcon = styled(HeartIcon)`
	${HeaderUtilStyles};

	path {
		fill: ${cssColors.orangePrimary};
	}
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};

	${({ $sidebarToggler, $searchbarToggler }) => {
		if ($sidebarToggler) {
			return SidebarToggleIconStyles;
		} else if ($searchbarToggler) {
			return SearchbarTogglerStyles;
		}
	}}
`;

export const StyledSearchIcon = styled(SearchIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
	${SearchbarTogglerStyles}
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
	${SidebarToggleIconStyles}

	height: 2.5rem;
	width: 2.5rem;
`;
