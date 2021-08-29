import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { StyledHorizontalDotMenuIcon } from "../../styles/styles.icons";
import { StyledProfilePicture } from "../profile-picture/profile-picture.styles";

export const Text = styled.div`
	background-color: ${({ theme }) => theme.textMuted};
	padding: 0.3rem 0.7rem;
	border-radius: 5px;
	width: fit-content;
	max-width: 70%;
	line-height: 1.2;

	${({ self }) =>
		self &&
		css`
			background-color: ${cssColors.bluePrimary};
			order: 3;
		`}

	${({ deleted }) =>
		deleted &&
		css`
			background-color: transparent;
			border: 1px solid ${cssColors.googleRed};
			color: ${cssColors.googleRed};
		`}
`;

export const Info = styled.p`
	color: ${cssColors.blueSecondary};
	font-size: 1.3rem;
	width: fit-content;
`;

export const MessageInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;

	svg {
		margin-left: 1.5rem;

		path {
			fill: ${cssColors.blueSecondary};
		}

		&:hover,
		&:active {
			path {
				fill: ${cssColors.blueSecondary};
			}
		}
	}
`;

export const MessageControls = styled.div`
	position: relative;
`;

export const StyledMessage = styled.div`
	color: ${({ theme }) => theme.textIconBlur};
	margin-bottom: 0.85rem;
	margin-top: auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	& > *:not(:last-child) {
		margin: 0 0.7rem 0 0;
	}

	${({ self }) =>
		self &&
		css`
			justify-content: flex-end;
			margin-left: auto;

			& > *:not(:last-child) {
				margin: 0 0 0 0.7rem;
			}

			${StyledProfilePicture} {
				order: 4;
			}

			${MessageControls} {
				order: 1;
			}

			/* ${Info} {
				order: 2;
			} */
		`}

	${StyledHorizontalDotMenuIcon} {
		path {
			fill: ${({ theme }) => theme.textMuted};
		}
	}
`;
