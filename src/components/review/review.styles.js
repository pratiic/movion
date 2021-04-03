import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";
import {
	StyledThumbsUpIcon,
	StyledThumbsDownIcon,
	StyledDotMenuIcon,
} from "../../styles/styles.icons";

export const StyledReview = styled.div`
	color: ${({ theme }) => theme.textIconBlur};
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	margin-bottom: 2rem;
	box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
`;

export const ReviewHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.3rem 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	position: relative;

	${StyledDotMenuIcon} {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translate(0, -50%);
	}

	& > *:first-child {
		margin-right: 0.75rem;
	}

	& > * {
		color: ${({ theme }) => theme.textMuted};
	}

	& > *:not(:first-child):not(:last-child) {
		margin-right: 2rem;
	}
`;

export const Username = styled.p``;

export const CreatedAt = styled.p`
	font-size: 1.55rem;
	font-family: ${cssFonts.fontStackSecondary};

	&::first-letter {
		text-transform: capitalize;
	}

	@media screen and (max-width: 500px) {
		display: none;
	}
`;

export const EditedOrNot = styled.p`
	font-size: 1.55rem;
`;

export const ReviewMain = styled.div`
	padding: 0.5rem 1rem;
	white-space: pre-wrap;
`;

export const ReviewFooter = styled.div`
	display: flex;
	justify-content: flex-start;
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

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3rem;

	${StyledThumbsUpIcon} {
		path {
			fill: ${({ liked, theme }) =>
				liked ? cssColors.bluePrimary : theme.textMuted};
		}
	}

	${StyledThumbsDownIcon} {
		path {
			fill: ${({ disliked, theme }) =>
				disliked ? cssColors.bluePrimary : theme.textMuted};
		}
	}
`;

export const Info = styled.div`
	font-size: 1.5rem;
`;
