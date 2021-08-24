import styled from "styled-components";

export const StyledChatStatus = styled.div`
	padding: 2rem 0;

	&,
	& > * {
		display: flex;
		justify-content: center;
	}
`;

export const SendRequest = styled.div`
	flex-direction: column;
	align-items: center;

	& > *:first-child {
		margin-bottom: 0.75rem;
	}
`;
