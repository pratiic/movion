import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import { StyledVerticalDotIcon } from "../../styles/styles.icons";
import { StyledProfilePicture } from "../profile-picture/profile-picture.styles";

export const Text = styled.p`
	background-color: ${({ theme }) => theme.textMuted};
	padding: 0.3rem 0.7rem;
	border-radius: 5px;
	width: fit-content;
	max-width: 70%;
`;

export const Info = styled.p`
	color: ${({ theme }) => theme.textMuted};
	font-size: 1.4rem;
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

			${Text} {
				background-color: ${cssColors.bluePrimary};
				order: 3;
			}

			& > *:not(:last-child) {
				margin: 0 0 0 0.7rem;
			}

			${StyledProfilePicture} {
				order: 4;
			}

			${StyledVerticalDotIcon} {
				order: 1;
			}

			${Info} {
				order: 2;
			}
		`}

	${StyledVerticalDotIcon} {
		box-sizing: content-box;
		padding: 0.3rem;
		border-radius: 50%;

		path {
			fill: ${({ theme }) => theme.textMuted};
		}

		&:hover {
			background-color: ${({ theme }) => theme.bgFocused};

			path {
				fill: ${cssColors.bluePrimary};
			}
		}

		&:active {
			path {
				fill: ${({ theme }) => theme.textMuted};
			}
		}
	}
`;
