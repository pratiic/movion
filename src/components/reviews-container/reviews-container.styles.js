import styled from "styled-components";

import {
	WrapperStyles,
	TextStyles,
	StyledTitle,
} from "../../styles/styles.generic";

export const StyledReviewsContainer = styled.div`
	${WrapperStyles}
	width: 80rem;
	padding: 0;
	margin-bottom: 3rem;

	${StyledTitle} {
		text-transform: lowercase;

		&::first-letter {
			text-transform: capitalize;
		}
	}

	@media screen and (max-width: 1000px) {
		width: 70rem;
	}

	@media screen and (max-width: 850px) {
		width: 65rem;
	}

	@media screen and (max-width: 700px) {
		width: 100%;
	}
`;

export const ReviewsTitle = styled.p`
	font-size: 2.5rem;
	color: ${({ theme }) => theme.textIconBlur};
	font-weight: 300;
	text-align: center;
`;
