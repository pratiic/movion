import styled from "styled-components";

export const StyledReviews = styled.div`
	button {
		font-size: 1.5rem;
		text-transform: lowercase;
	}
`;

export const ReviewsMessage = styled.p`
	font-size: 2.1rem;
	color: ${({ theme }) => theme.textMuted};
	text-align: center;
`;
