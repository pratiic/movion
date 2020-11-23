import styled, { css } from "styled-components";

import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as MovieIcon } from "../assets/icons/movie.svg";
import { ReactComponent as TvIcon } from "../assets/icons/tv.svg";
import { ReactComponent as LoginIcon } from "../assets/icons/login.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/icons/arrow-up.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/icons/chevron-down.svg";
import { ReactComponent as TickIcon } from "../assets/icons/tick.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as GoogleSignInIcon } from "../assets/icons/google-sign-in.svg";

import { cssColors } from "./styles.variables";

import { HeaderElementStyles } from "../components/header/header.styles";

export const SmallerIconStyles = css`
	height: 1.75rem;
	width: 1.75rem;
`;

export const SmallestIconStyles = css`
	height: 1.5rem;
	width: 1.5rem;
`;

export const MediumIconStyles = css`
	height: 1.85rem;
	width: 1.85rem;
`;

export const BiggerIconStyles = css`
	height: 2.5rem;
	width: 2.5rem;
`;

export const IconStyles = css`
	height: 2rem;
	width: 2rem;
	cursor: pointer;
	transition: transform 150ms ease-in;

	path {
		fill: ${cssColors.greyLighter};
	}

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

	${({ $noColor }) =>
		$noColor &&
		css`
			&:hover {
				path {
					fill: white;
				}
			}
		`}

	${({ $smaller }) => $smaller && SmallerIconStyles}

	${({ $medium }) => $medium && MediumIconStyles}
        
	${({ $smallest }) => $smallest && SmallestIconStyles}

    ${({ $bigger }) => $bigger && BiggerIconStyles}

    ${({ $sidebarToggler }) =>
		$sidebarToggler &&
		css`
			display: none;

			@media screen and (max-width: 1150px) {
				display: block;
			}
		`}

    ${({ $searchbarToggler }) =>
		$searchbarToggler &&
		css`
			display: none;

			@media screen and (max-width: 850px) {
				display: block;
			}
		`}
    
    ${({ $searchbarControl }) =>
		$searchbarControl &&
		css`
			margin-left: 1.3rem;

			${SmallestIconStyles};
		`}

    ${({ $headerElement }) => $headerElement && HeaderElementStyles}

    ${({ $headerLinkIcon }) =>
		$headerLinkIcon &&
		css`
			margin-right: 1.7rem;
			display: none;

			path {
				fill: ${cssColors.greyLighter};
			}

			${MediumIconStyles};

			@media screen and (max-width: 1150px) {
				display: block;
			}
		`}

    ${({ $notificationIcon }) =>
		$notificationIcon &&
		css`
			path {
				fill: white;
			}
			margin-right: 1rem;
		`}

    ${({ $rotateIconUp }) =>
		$rotateIconUp &&
		css`
			transform: rotate(180deg);
		`}
`;

export const StyledMovieIcon = styled(MovieIcon)`
	${IconStyles};
`;

export const StyledTvIcon = styled(TvIcon)`
	${IconStyles};
`;

export const StyledLoginIcon = styled(LoginIcon)`
	${IconStyles};
`;

export const StyledLogoutIcon = styled(LogoutIcon)`
	${IconStyles};
`;

export const StyledHamburgerIcon = styled(HamburgerIcon)`
	${IconStyles};
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${IconStyles};
`;

export const StyledSearchIcon = styled(SearchIcon)`
	${IconStyles};
`;

export const StyledArrowUpIcon = styled(ArrowUpIcon)`
	${IconStyles};
`;

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
	${IconStyles};

	margin: 0 0.75rem;
`;

export const StyledTickIcon = styled(TickIcon)`
	${IconStyles};
`;

export const StyledSunIcon = styled(SunIcon)`
	${IconStyles};
`;

export const StyledMoonIcon = styled(MoonIcon)`
	${IconStyles};
`;

export const StyledGoogleSignInIcon = styled(GoogleSignInIcon)`
	${IconStyles};
`;

export const StyledHeartIcon = styled(HeartIcon)`
	${IconStyles};

	path {
		fill: ${cssColors.orangePrimary};
	}

	${({ $noHoverActiveStyles }) =>
		$noHoverActiveStyles &&
		css`
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
		`}
`;
