import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";
import {
	StyledHorizontalDotMenuIcon,
	StyledThumbsUpIcon,
} from "../../styles/styles.icons";
import { StyledThumbsDownIcon } from "../../styles/styles.icons";

export const StyledComment = styled.div`
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	margin-bottom: 2rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const CreatedTime = styled.p`
	&::first-letter {
		text-transform: capitalize;
	}
`;

export const EditStatus = styled.p``;

export const CommentHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 0.75rem 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	position: relative;

	& > *:first-child {
		margin-right: 0.75rem;
	}

	& > * {
		color: ${({ theme }) => theme.textMuted};
	}

	& > *:not(:first-child):not(:last-child) {
		margin-right: 1rem;
	}

	${CreatedTime}, ${EditStatus} {
		font-size: 1.55rem;
	}

	${StyledHorizontalDotMenuIcon} {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translate(0, -50%);
	}
`;

export const CommentText = styled.p`
	color: ${({ theme }) => theme.textIconBlur};
	padding: 1rem;
	white-space: pre-wrap;
`;

export const CommentFooter = styled.div`
	display: flex;
	align-items: center;
	padding: 0.3rem 1rem;
	border-top: 1px solid ${({ theme }) => theme.bgFocused};

	svg {
		margin-right: 0.45rem;

		path {
			fill: ${({ theme }) => theme.textMuted};
		}
	}
`;

export const InfoText = styled.p`
	color: ${({ theme }) => theme.textIconBlur};
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3rem;

	${({ liked }) =>
		liked &&
		css`
			${StyledThumbsUpIcon} {
				path {
					fill: ${cssColors.bluePrimary};
				}
			}
		`}

	${({ disliked }) =>
		disliked &&
		css`
			${StyledThumbsDownIcon} {
				path {
					fill: ${cssColors.bluePrimary};
				}
			}
		`}
`;
