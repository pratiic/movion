import styled from "styled-components";

import { cssFonts } from "../../styles/styles.variables";

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

	& > *:first-child {
		margin-right: 0.75rem;
	}
`;

export const Username = styled.p`
	margin-right: 2rem;
	font-size: 1.8rem;
	color: ${({ theme }) => theme.textMuted};
`;

export const CreatedAt = styled.p`
	font-size: 1.55rem;
	color: ${({ theme }) => theme.textMuted};
	font-family: ${cssFonts.fontStackSecondary};

	&::first-letter {
		text-transform: capitalize;
	}

	@media screen and (max-width: 500px) {
		display: none;
	}
`;

export const ReviewMain = styled.div`
	padding: 0.5rem 1rem;
	white-space: pre-wrap;
`;
