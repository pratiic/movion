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
import { ReactComponent as HorizontalDotMenuIcon } from "../assets/icons/horizontal-dot-menu.svg";
import { ReactComponent as ThumbsUpIcon } from "../assets/icons/thumbs-up.svg";
import { ReactComponent as ThumbsDownIcon } from "../assets/icons/thumbs-down.svg";
import { ReactComponent as SendIcon } from "../assets/icons/send.svg";
import { ReactComponent as ReplyIcon } from "../assets/icons/reply.svg";
import { ReactComponent as TrashCanIcon } from "../assets/icons/trash-can.svg";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as SmileyIcon } from "../assets/icons/smiley.svg";
import { ReactComponent as DoubleTickIcon } from "../assets/icons/double-tick.svg";
import { ReactComponent as ArrowLeftIcon } from "../assets/icons/arrow-left.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { ReactComponent as StaticIndicatorIcon } from "../assets/icons/reload.svg";

import { cssColors } from "./styles.variables";

import { HeaderElementStyles } from "../components/header/header.styles";

export const SmallerIconStyles = css`
	height: 1.6rem;
	width: 1.6rem;
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
	height: 2.2rem;
	width: 2.2rem;
`;

export const BackgroundIconStyles = css`
	box-sizing: content-box;
	padding: 0.5rem;
	border-radius: 50%;

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};

		path {
			fill: ${cssColors.bluePrimary};
		}
	}

	&:active {
		background-color: ${({ theme }) => theme.bgFocusedDark};

		path {
			fill: ${({ theme }) => theme.textMuted};
		}
	}
`;

export const IconStyles = css`
	height: 2rem;
	width: 2rem;
	cursor: pointer;
	transition: transform 150ms ease-in;

	${({ theme }) =>
		theme &&
		css`
			path {
				fill: ${theme.textIconBlur};
			}

			&:hover {
				path {
					fill: ${cssColors.bluePrimary};
				}
			}

			&:active {
				path {
					fill: ${theme.textIconBlur};
				}
			}
		`}

	${({ $noColor }) =>
		$noColor &&
		css`
			&:hover {
				path {
					fill: ${({ theme }) => theme.textFocused};
				}
			}
		`}

	${({ $smaller }) => $smaller && SmallerIconStyles}

	${({ $medium }) => $medium && MediumIconStyles}
        
	${({ $smallest }) => $smallest && SmallestIconStyles}

    ${({ $bigger }) => $bigger && BiggerIconStyles}

	${({ $headerElement }) =>
		$headerElement &&
		css`
			${HeaderElementStyles};
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

    ${({ $headerLinkIcon }) =>
		$headerLinkIcon &&
		css`
			margin-right: 1.7rem;
			display: none;

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

		${({ $showBackground }) => $showBackground && BackgroundIconStyles}
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

export const StyledHorizontalDotMenuIcon = styled(HorizontalDotMenuIcon)`
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

export const StyledThumbsUpIcon = styled(ThumbsUpIcon)`
	${IconStyles};
`;

export const StyledThumbsDownIcon = styled(ThumbsDownIcon)`
	${IconStyles};
`;

export const StyledSendIcon = styled(SendIcon)`
	${IconStyles};
`;

export const StyledReplyIcon = styled(ReplyIcon)`
	${IconStyles};
`;

export const StyledTrashCanIcon = styled(TrashCanIcon)`
	${IconStyles};
`;

export const StyledEditIcon = styled(EditIcon)`
	${IconStyles};
`;

export const StyledChatIcon = styled(ChatIcon)`
	${IconStyles};
`;

export const StyledSmileyIcon = styled(SmileyIcon)`
	${IconStyles};
`;

export const StyledDoubleTickIcon = styled(DoubleTickIcon)`
	${IconStyles};
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
	${IconStyles};
`;

export const StyledNotificationIcon = styled(NotificationIcon)`
	${IconStyles};
`;

export const StyledStaticIndicatorIcon = styled(StaticIndicatorIcon)`
	${IconStyles}
`;
