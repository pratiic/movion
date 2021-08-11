import styled from "styled-components";

import { StyledTitle } from "../../styles/styles.title";
import { WrapperStyles } from "../../styles/styles.wrapper";

export const StyledReviewsContainer = styled.div`
	/* ${WrapperStyles} */
	padding: 0;
	max-width: 50rem;
	margin: 0 auto 3rem auto;

	${StyledTitle} {
		text-transform: lowercase;

		&::first-letter {
			text-transform: capitalize;
		}
	}

	/* @media screen and (max-width: 1000px) {
		width: 70rem;
	}

	@media screen and (max-width: 850px) {
		width: 65rem;
	}

	@media screen and (max-width: 700px) {
		width: 100%;
	} */
`;

export const ReviewsTitle = styled.p`
	font-size: 2.5rem;
	color: ${({ theme }) => theme.textIconBlur};
	font-weight: 300;
	text-align: center;
`;
